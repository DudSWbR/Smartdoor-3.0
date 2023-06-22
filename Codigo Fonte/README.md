# Smartdoor 3.0 - Readme.md

Este repositório contém um projeto web baseado em Docker, com um frontend em React e um backend em Rails. O projeto utiliza um proxy reverso Nginx para gerenciar as solicitações HTTP e HTTPS e um contêiner do PostgreSQL para o banco de dados. O projeto também inclui o Adminer para gerenciamento do banco de dados.

## Pré-requisitos

Antes de começar, certifique-se de ter o Docker instalado em sua máquina. Você pode baixar e instalar o Docker a partir do site oficial: [https://www.docker.com/get-started](https://www.docker.com/get-started)

## Instalação e Execução Local

1. Clone o repositório para o seu ambiente local:

```shell
git clone <URL_DO_REPOSITÓRIO>
```

2. Navegue até o diretório raiz do projeto:

```shell
cd <DIRETÓRIO_DO_PROJETO>
```

### Configuração do Backend

3. Navegue até o diretório `backend`:

```shell
cd backend
```

4. Copie o arquivo de exemplo `database.env.example` para `database.env`:

```shell
cp database.env.example database.env
```

5. Abra o arquivo `database.env` em um editor de texto e configure as variáveis de ambiente para o banco de dados PostgreSQL de acordo com suas preferências.

6. Volte para o diretório raiz do projeto:

```shell
cd ..
```

### Configuração do Frontend

7. Navegue até o diretório `frontend`:

```shell
cd frontend
```

8. Abra o arquivo `.env` em um editor de texto e configure as variáveis de ambiente para o frontend de acordo com suas preferências.

9. Volte para o diretório raiz do projeto:

```shell
cd ..
```

### Inicialização dos Contêineres Docker

10. Inicie os contêineres Docker usando o comando `docker-compose up -d`. Isso irá construir as imagens e iniciar os contêineres em segundo plano.

```shell
docker-compose up -d
```

Isso pode levar algum tempo na primeira execução, pois as imagens do Docker precisam ser baixadas e construídas.

11. Após a conclusão, você pode acessar o projeto em seu navegador:

- Frontend: [http://smartdoor.tadsufpr.net.br](http://smartdoor.tadsufpr.net.br)
- Backend: [http://smartdoor-server.tadsufpr.net.br](http://smartdoor-server.tadsufpr.net.br)
- Adminer (gerenciamento do banco de dados): [http://localhost:8080](http://localhost:8080)

## Encerrando o Projeto

Para encerrar e remover os contêineres Docker, execute o seguinte comando no diretório raiz do projeto:

```shell
docker-compose down
```

Isso irá parar e remover todos os contêineres, redes e volumes associados ao projeto.

## Contribuição

Se você deseja contribuir para este projeto, fique à vontade para fazer um fork e enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
