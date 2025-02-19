# M324 TODO

## Configure Remote Server
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

