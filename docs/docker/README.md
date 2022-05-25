## Networks

### Bridge

Conectar de maneira simples máquinas docker. Este é o padrão para networks. Sempre que criado um container será setada a network bridge.

### Exemplo

Criar duas máquinas docker:

`docker run -d -it --name ubuntu1 bash`

`docker run -d -it --name ubuntu2 bash`

Testar comunicação dentro das máquinas:

`docker attach ubuntu1`

`ping 172.17.0.3` (ou o ip do ubunto2)
Caso dê sucesso é provado que está na mesma rede. Não é possível fazer resolução de nomes com a rede padrão bridge

#### Resoulção de nomes

Atrelando uma máquina docker a uma rede para ter resolução de nomes:

`docker network create --driver bridge minharede`

`docker run -d -it --name ubuntu1 --network minharede bash`

`docker run -d -it --name ubuntu2 --network minharede bash`

Testar comunicação dentro das máquinas com resolução de nomes:

`docker exec -it ubuntu1 bash`

`ping ubuntu2`

#### Acessar máquina local dentro do container

`docker exec -it ubuntu1 bash` acessar o ubuntu

`apk add --update curl` instalar curl

`curl http://host.docker.internal:8000` Chamar alguma URL interna do computador local (Não pode usar localhost pois é próprio container)

### Comandos

`docker network ls` (listar)

`docker network prune` (remover networks sem uso)

`docker network inspect NOME_REDE` (inspecionar a networks, pode ser utilizado para descobrir ip de máquinas que estão na network bridge)

`docker network create --driver bridge NOME_REDE` (comando utilizado para criar uma rede bridge com o nome NOME_REDE, desta forma é possível fazer resolução de nomes dos containers, como por exemplo pingar um container pelo nome e não por ip)

`docker network connect NOME_REDE NOME_CONTAINER` (Conectar um container a uma network)

## Dockerfile

### Comandos

`docker build -t pgpedrogabriel/laravel:latest .` (Ir para a pasta que contem o Docker file e buildar a imagem)

`docker run --rm -d --name laravel -p 8000:8000 pgpedrogabriel/laravel` (rodar imagem gerada pelo build (o --rm quando vc sair do container ele morre))

`docker logs laravel` (verificar o servidor se está em 0.0.0.0)

`docker run --rm -d --name laravel -p 8000:8000 pgpedrogabriel/laravel --host=0.0.0.0 --port=8001` (Se quiser substituir o CMD do docker file você pode enviar via variaveis)

`docker push pgpedrogabriel/laravel` (Enviar pro dockerhub)

`COPY . .` (Copiar arquivos para o workdir do docker (exemplo com node). Quando não usar o COPY? quando se usa 2 Dockerfiles como um Dockerfile.prod)

`EXPOSE` (para exportar a porta para outros containers acessar)

`docker build -t pgpedrogabriel/laravel:latest . -f Dockerfile.prod` (Executar um dockerfile diferente)

## Volumes

`docker run --rm -it -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash` (Isso irá criar um volume para a minha pasta atual do commando (pwd) e haverá compartilhamento de arquivos entre o container e a maquina local)
