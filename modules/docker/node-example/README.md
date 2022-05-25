### Node

- Usando node como exemplo
- Distribuindo a imagem com o Dockerfile

### Steps

- Criar um container com volume setado pro node `docker run --rm -it -v $(pwd)/:/usr/src/app -p 3005:3005 node:15 bash`
- dentro do bash do container pra verificar que o volume foi criado vai ser usado o `npm init` e checar se a pasta PWD contem o package.json
- continua sempre dentro do bash do node pra executar os comandos abaixo `npm install express`
- `touch index.js`
- Escrever um hello world basico com express na porta 3005
- `node index.js`
- checar no browser localmente se está correto na porta 3005
- Criar um Dockerfile para distribuir a imagem com os arquivos criados (COPY)
- Buildar a imagem `docker build -t pgpedrogabriel/hello-express .`
- Executar a imagem `docker run -p 3005:3005 pgpedrogabriel/hello-express:latest`
