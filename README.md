# M324 TODO

## Setup Git Hooks
```
git config --local core.hooksPath .githooks/
```

## Run & Debug locally


1. Set MongoDB docker secret
Create a `mongo_pass.txt` file in ./secrets

2. Set Session docker secret
Create a `session_secret.txt` file in ./secrets with a string that atleast has 64 characters

2. Start MongoDB
```
docker-compose up mongodb
```

3. Run Rust Application
```
cargo run -- --mongo-username=todo_app --mongo-password-file=./secrets/mongo_pass.txt --session-secret-file=./secrets/session_secret.txt 
```


## Configure Remote Server for Release
1. Create github action ssh key:
```
ssh-keygen -t rsa -b 4096 -C "github-actions" -f ~/.ssh/github_actions_key
```

This creates two files:
- Private key → ~/.ssh/github_actions_key
- Public key → ~/.ssh/github_actions_key.pub

2. Add Public Key to Remote Server
Run the following command to copy your SSH public key to the server:

```
ssh-copy-id -i ~/.ssh/github_actions_key.pub user@your-server-ip
```

If ssh-copy-id isn’t available, do it manually:
```
cat ~/.ssh/github_actions_key.pub | ssh user@your-server-ip "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

Now, verify you can connect without a password:
```
ssh -i ~/.ssh/github_actions_key user@your-server-ip
```

3. Store SSH Key and Server Info in GitHub Secrets

Go to GitHub → Your Repository → Settings → Secrets and variables → Actions → Secrets, then click "New repository secret" for each of the following:


SSH_PRIVATE_KEY	→ (Contents of ~/.ssh/github_actions_key)	

SSH_HOST → your -server-ip (e.g., 192.168.1.100)	
SSH_USER → ubuntu (or root, depending on your setup)

To get the private key, use:
```
cat ~/.ssh/github_actions_key
```
Copy and paste the output into SSH_PRIVATE_KEY in GitHub Secrets.

