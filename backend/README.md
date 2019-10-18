# Back-end AirCnC

## Sobre o Projeto
Neste projeto em Node.JS foi criado o back-end da aplicação AirCnC.

### Feito Com
Abaixo segue o que foi utilizado na criação deste projeto:

- [Nodemon](https://github.com/remy/nodemon) - É uma ferramensta que auxilia no desenvolvimento de aplicações baseadas em Node.JS reiniciando automaticamente a aplicação quando são detectadas alteraçoes nos arquivos.
- [Cors](https://github.com/expressjs/cors) - É uma ferramenta que permite controlar o acesso de terceiros a recursos do servidor.
- [Express](https://github.com/expressjs/express) - O Express é um framework para aplicativo Node.js que fornece um conjunto robusto de recursos para aplicativos web e mobile.
- [Mongoose](https://github.com/Automattic/mongoose) - É um ORM que permite a modelagem dos dados do aplicativo sem a necessidade de utilizar linguagem de bando de dados.
- [Multer](https://github.com/expressjs/multer) - É um middleware para aplicações Node.JS que permite a manipulações de dados do tipo `multipart/form-data`, usando principalmente para upload de arquivos.
- [Redis](https://github.com/antirez/redis) - O Redis é um armazenamento de estrutura de dados de chave-valor que oferece um conjunto de estruturas versáteis de dados na memória que permite a fácil criação de várias aplicações personalizadas.
- [Socket.io](https://github.com/socketio/socket.io) - Permite transmissão de informações em tempo real, bidirecional e baseada em eventos.
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

## Como executar
Para conseguir utilizar o projeto siga os passos abaixo.

### Pré-requisitos
O projeto será executado em containers, para isso é necessário que você tenha o Node.JS, Docker e o Docker Compose instalados na sua máquina. Para obter o passo a passo de como instalá-los acesse a [documentação oficial do Docker](https://docs.docker.com/install/) e o [site oficial no Node.JS](https://nodejs.org/en/download/).

### Instalação do projeto
1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse a pasta `backend` local do projeto através de um terminal e faça a instalação das dependências usando o comando:
```sh
$ npm install
```

3. Ainda na pasta `backend` local do projeto execute o comando:
```sh
$ docker-compose up
```

Este comando é o responsável por gerar os três constainers que estão especificados no arquivo `docker-compose.yml`. A API fica localizada em `http://localhost:3000`.

Faça uma requisição através do navegador na rota `http://localhost:3000/hw`, caso a resposta da requisição seja um objeto JSON: `{success: "Hello World :)"}` a API foi iniciada corretamente e está pronta para uso.

## Rotas
Esta API contem as seguintes rotas:

- `POST /sessions`: rota responsável por cadastrar e logar o usuário.
- `POST /spots`: rota responsável por cadastrar um novo spot (está rota recebe requisições do tipo `multipart/form-data`).
- `GET /spots`: rota responsável por listar os spots para o usuário mobile.
- `GET /dashboard`: rota responsável por listar os spots para o usuário web.
- `POST /spots/:spot_id/bookings`: rota responsável por realizar reservas de spots.
- `POST /booking/:booking_id/approvals`: rota responsável por aprovar uma reserva.
- `POST /booking/:booking_id/rejections`: rota responsável por rejeitar uma reserva.

## Exemplos

## POST /sessions
Requisição:
```javascript
// POST /sessions
// Content-Type: multipart/form-data
{
	"email": "empresa@email.com"
}

```
Resposta:
```javascript
{
  "_id": "5da52bf262af1700111f4fc1",
  "email": "empresa@email.com",
}
```


## POST /spots
Requisição:
```javascript
// POST /spots
// Content-Type: application/json
// user_id: 5da52bf262af1700111f4fc1
thumbnail: empresaA.jpg
company: Empresa A
price: 80
techs: Node.JS, React.JS, React Native

```
Resposta:
```javascript
{
  "techs": [
    "Node.JS",
    "React.JS",
    "React Native"
  ],
  "_id": "5da5363662af1700111f4fc2",
  "user": "5da52bf262af1700111f4fc1",
  "thumbnail": "empresaA-1571108406747.jpg",
  "company": "Empresa A",
  "price": 80,
  "thumbnail_url": "http://localhost:3000/files/empresaA-1571108406747.jpg",
}
```

## GET /spots?tech=busca
Requisição:
```javascript
GET /spots?tech=Node.JS
```
Resposta:
```javascript
[
  {
    "techs": [
      "Node.JS",
      "React.JS",
      "React Native"
    ],
    "_id": "5da5363662af1700111f4fc2",
    "user": "5da52bf262af1700111f4fc1",
    "thumbnail": "empresaA-1571108406747.jpg",
    "company": "Empresa A",
    "price": 80,
    "thumbnail_url": "http://localhost:3000/files/empresaA-1571108406747.jpg",
  }
]
```

## GET /dashboard
Requisição:
```javascript
GET /dashboard
// user_id: 5da52bf262af1700111f4fc1
```
Resposta:
```javascript
[
  {
    "techs": [
      "Node.JS",
      "React.JS",
      "React Native"
    ],
    "_id": "5da5363662af1700111f4fc2",
    "user": "5da52bf262af1700111f4fc1",
    "thumbnail": "empresaA-1571108406747.jpg",
    "company": "Empresa A",
    "price": 80,
    "thumbnail_url": "http://localhost:3000/files/empresaA-1571108406747.jpg",
  }
]
```

## POST /spots/:spot_id/bookings
Requisição:
```javascript
// POST /spots/5da5363662af1700111f4fc2/bookings
// Content-Type: application/json
// user_id: 5da53ad862af1700111f4fc3
{
	"date": "30 de Outubro"
}
```
Resposta:
```javascript
{
  "_id": "5da5402162af1700111f4fc5",
  "date": "30 de Outubro",
  "user": {
    "_id": "5da53ad862af1700111f4fc3",
    "email": "user@email.com",
  },
  "spot": {
    "techs": [
      "Node.JS",
      "React.JS",
      "React Native"
    ],
    "_id": "5da5363662af1700111f4fc2",
    "user": "5da52bf262af1700111f4fc1",
    "thumbnail": "empresaA-1571108406747.jpg",
    "company": "Empresa A",
    "price": 80,
    "thumbnail_url": "http://localhost:3000/files/empresaA-1571108406747.jpg",
  },
}
```

## POST /booking/:booking_id/approvals
Requisição:
```javascript
POST /booking/5da5402162af1700111f4fc5/approvals
```
Resposta:
```javascript
{
  "_id": "5da5402162af1700111f4fc5",
  "date": "30 de Outubro",
  "user": "5da53ad862af1700111f4fc3",
  "approved": true,
  "spot": {
    "techs": [
      "Node.JS",
      "React.JS",
      "React Native"
    ],
    "_id": "5da5363662af1700111f4fc2",
    "user": "5da52bf262af1700111f4fc1",
    "thumbnail": "empresaA-1571108406747.jpg",
    "company": "Empresa A",
    "price": 80,
    "thumbnail_url": "http://localhost:3000/files/empresaA-1571108406747.jpg",
  }
}
```

## POST /booking/:booking_id/rejections
Requisição:
```javascript
POST /booking/5da5402162af1700111f4fc5/rejections
```
Resposta:
```javascript
{
  "_id": "5da5402162af1700111f4fc5",
  "date": "30 de Outubro",
  "user": "5da53ad862af1700111f4fc3",
  "approved": false,
  "spot": {
    "techs": [
      "Node.JS",
      "React.JS",
      "React Native"
    ],
    "_id": "5da5363662af1700111f4fc2",
    "user": "5da52bf262af1700111f4fc1",
    "thumbnail": "empresaA-1571108406747.jpg",
    "company": "Empresa A",
    "price": 80,
    "thumbnail_url": "http://localhost:3000/files/empresaA-1571108406747.jpg",
  }
}
```

<p align="center">
💙
</p>

