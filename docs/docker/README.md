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
