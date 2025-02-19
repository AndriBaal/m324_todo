# Stage 1: Build
FROM rust:1.84 AS builder
WORKDIR /usr/src/todo_app
COPY . .
RUN cargo install --path .

# Stage 2: Run
FROM debian:bookworm-slim
RUN rm -rf /var/lib/apt/lists/*
COPY --from=builder /usr/local/cargo/bin/todo_app /usr/local/bin/todo_app
COPY --from=builder /usr/src/todo_app/static /static
EXPOSE 80
CMD todo_app
