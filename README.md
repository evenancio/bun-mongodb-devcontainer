# bun-mongodb-devcontainer

This is a devcontainer for VS Code. If you don't what it is, please, check https://code.visualstudio.com/docs/devcontainers/containers

This image contains everything you need to start playing with Bun and MongoDb in a Docker Container, including .vscode launch settings to debug your code.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.tsx
```

Or just click Run & Debug in VS Code!

Hit:
http://localhost:3000 and see "Hello Bun!"

http://localhost:3000/ping and see a counter coming from MongoDb