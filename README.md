# Projeto de API 

Realiza uma busca em uma API externa, salva no banco de dados mongoDB e realiza o CRUD. 

## Executar o projeto

Projeto Clonar git clone `https://github.com/BrunoFelixB/challeng-int.git`

Configure e ative seu ambiente virtual

Requisitos de instalação `npm install`

Dependências: `axios, cors, dontenv-safe, express, mongoose, node-fetch, nodemon, schema`


## PARTE 1 

### Primeiro - rodar o comando para iniciar o servidor:

```
npm run server

```
O comando irá ligar o servidor e o mesmo funcionará através da porta 3000.

### Segundo - para fazer o script realizar a varredura na API, basta solicitar a rota abaixo:

### Método GET

```
http://localhost:3000/universities/req

```
Isso irá armazenar todas as universidades do paises em uma collection no mongoDB.


## PARTE 2


### GET/universities:

### Método GET

```
http://localhost:3000/universities/all/

```
está rota irá retornar todas as universidades armazenadas no banco de dados.


### Método para buscar a universidade por id:

### Método GET

o id deve ser passado por parâmetro

```
http://localhost:3000/universities/id

```
essa rota irá retorna a universidade referente ao ID.


### Método para cadastro de Universidades:

### Método POST

```
http://localhost:3000/universities/create


devem ser passados pelo body os seguintes comandos: 

{

    "alpha_two_code": "string",
    "domains": "string",
    "country": "string",
    "web_pages": "string",
    "name": "string"

}

```

Essa rota irá criar uma nova universidade e salvar no banco de dados local, caso já exista retorná um erro. 

### Método para atualizar uma Universidade:

### Método PATCH

o id deve ser passado por parâmetro

```
http://localhost:3000/universities/update/id


devem ser passados pelo body os seguintes comandos: 

{
    "domains": "string",
    "web_pages": "string",
    "name": "string"
}

```

Essa rota irá atualizar os dados da universidade referente ao ID em questão e salvar no banco de dados local. 

### Método para deletar uma Universidade:

### Método DELETE

o id deve ser passado por parâmetro

```
http://localhost:3000/universities/delete/id

```

Essa rota irá deletar do banco de dados a universidade referente ao ID em questão.
