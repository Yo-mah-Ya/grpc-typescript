# gRPC example written in TypeScript

Using this below library, which is pure TypeScript supporting
https://github.com/thesayyn/protoc-gen-ts/tree/main

1. Generate TypeScript codes from `.proto` files

```sh
./codegen.sh
```

2. transpile TypeScript to JavaScript

```sh
yarn build
```

3. execute

terminal 1

```sh
node build/src/server.js
```

another terminal

```sh
node build/src/client.js
```
