# FRONT-END AIRCNC

## Sobre o Projeto
Neste projeto em React.JS foi criado o front-end da aplicação AirCnC, uma 'cópia' do AirBnB com o intuito de criar um espaço para que empresas possam alugar spots para profissionais de TI.

### Feito Com
Abaixo segue o que foi utilizado na criação deste projeto:

- [Axios](https://github.com/axios/axios) - É um client HTTP baseado em promise que possibilita a realização de requests a partir do navegador e do Node.JS.
- [React](https://github.com/facebook/react) - Uma biblioteca JavaScript para criar interfaces de usuário.
- [React-dom](https://github.com/facebook/react/tree/master/packages/react-dom) - É responsável por atualizar o DOM para exibir os elementos React.
- [React-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - É responsável pela navegação entre componetes que vão funcionar como se fossem páginas.
- [React-scripts](https://create-react-app.dev/docs/available-scripts/) - É um conjunto de scripts do create-react-app com configurações que ajudam na inicialização do projeto.
- [Socket.io-client](https://github.com/socketio/socket.io-client) - É um framework de comunicação em tempo real para o client.
- [Styled-components](https://github.com/socketio/socket.io-client) - É uma biblioteca que permite escrever CSS em JS.
- [EditorConfig](https://editorconfig.org/) - O EditorConfig é um formatador de arquivos e coleções em forma de Plugin para Editores de código/texto com o objetivo de manter um padrão de código consistente entre diferentes editores, IDE's ou ambientes;

## Como executar
Para conseguir utilizar o projeto siga os passos abaixo.

### Pré-requisitos
O projeto será executado em container, para isso é necessário que você tenha o Node.JS, Docker e o Docker Compose instalados na sua máquina. Para obter o passo a passo de como instalá-los acesse a [documentação oficial do Docker](https://docs.docker.com/install/) e o [site oficial no Node.JS](https://nodejs.org/en/download/).

### Instalação do projeto
1. Copie ou clone os arquivos deste repositório para uma pasta local.

2. Acesse a pasta `frontend` local do projeto através de um terminal e faça a instalação das dependências usando o comando:
```sh
$ npm install
```

3. Ainda na pasta `frontend` local do projeto execute o comando:
```sh
$ docker-compose up
```

Este comando é o responsável por gerar o constainer que está especificado no arquivo `docker-compose.yml`. O front-end fica localizado em `http://localhost:3001`.

#### PARA PODER ACESSAR TODAS AS FUNCIONALIDADES DO FRONT-END É NECESSÁRIO QUE O BACK-END E O APLICATIVO MOBILE ESTEJAM SENDO EXECUTADOS. PARA MAIS INFORMAÇÕES VEJA O README NA PASTA RAIZ OU O README ESPECÍFICO NAS PASTAS `backend` e `mobile`.

## Screenshots
<p align="center">
  <img src="https://user-images.githubusercontent.com/48105879/66956627-16564500-f03b-11e9-9135-8d465b25bd6a.png" width="500" title="Imagem 1">
  <img src="https://user-images.githubusercontent.com/48105879/66956989-caf06680-f03b-11e9-8ef5-0164b518c707.png" width="500" title="Imagem 2">
  <img src="https://user-images.githubusercontent.com/48105879/66957022-d9d71900-f03b-11e9-84cc-88ff89e344fc.png" width="500" title="Imagem 3">
  <img src="https://user-images.githubusercontent.com/48105879/66957051-e491ae00-f03b-11e9-9cb1-f6563cd30573.png" width="500" title="Imagem 4">
  <img src="https://user-images.githubusercontent.com/48105879/66957097-f70be780-f03b-11e9-9e7b-da79fd3f3413.png" width="500" title="Imagem 5">
</p>

<p align="center">
💙
</p>

