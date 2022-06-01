## PARTE 1 

### Primeiro - rodar o comando para iniciar o servidor:

```
npm run server

```
O comando irá ligar o servidor e o mesmo funcionará através da porta 8080.

### Segundo - para fazer o script realizar a varredura na API, basta solicitar a rota abaixo:

o país deve ser passado por parametro

```
http://localhost:3000/universities/req/brazil

```
Isso irá armazenar todas as universidades do país informado em uma collection no mongoDB.


## PARTE 2


### GET/universities:

```
http://localhost:3000/universities/all

```
a rota irá listar todas as universidades armazenadas no banco de dados, Retornar os campos id, nome, país e estado.


### Método para buscar a universidade por id:

o id deve ser passado por parametro

```
http://localhost:3000/universities/id

```
essa rota irá retorna a universidade referente ao ID.


### Método para cadastro de Universidades:

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

Essa rota irá criar uma nova universidade e salvar no banco de dados local. 

### Método para atualizar uma Universidade:

o id deve ser passado por parametro

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

o id deve ser passado por parametro

```
http://localhost:8080/universities/delete/id

```

Essa rota irá deletar do banco de dados a universidade referente ao ID em questão.
