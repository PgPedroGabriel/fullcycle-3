### Primero exemplo

- Usando laravel como exemplo

### Steps

- Ir para o docker hub e baixar a imagem do php na distribuição 7.4 baseada no CLI `docker run -it --name php php:7.4-cli bash`
- Criar Dockerfile e apartir dele começar a escrever os comandos para instalar as dependencias dentro do container
- Instalar o composer
- Instalar o libzip-dev
- Usar o docker-php-ext-install (lib da propria imagem docker php) para instalar a lib zip do php
- Instalar o laravel
- Colocar o servidor em desenvolvimento pra rodar (entrypoint), ele vai executar a porta 127.0.0.1 do container pelo artisan porém não vai ta habilitado na nossa máquina local para utilizar localhost, vai ser necessário utilizar CMD (command) para passar os comandos para o entrypoint e definir o host 0.0.0.0
