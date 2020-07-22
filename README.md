# BRy-Manager

### Código desenvolvido como resposta ao teste da BRy Tecnologia para a vaga de programador full stack PHP/Angular.

[Status do desenvolvimento](#status-do-desenvolvimento)

Para rodar a aplicação, clone o repositório e execute o script ```dockerrun.sh``` localizado na raiz do repositório.

```$ sudo dockerrun.sh```

O sript inicializará o container docker da aplicação back-end e realizará a pré configuração necessária. Na sequência inicializará a aplicação web que poderá ser acessada pelo navegador no endereço <a href="http://localhost:4200">localhost:4200</a>.

O arquivo _bry_api.postman_collection.json_ contém as requisições realizadas no Postman para testar os serviços CRUD da API REST.


> ## Status do desenvolvimento:
> A aplicação está parcialmente desenvolvida.
> #### Back-end:
> Dos requisitos solicitados ainda falta um tratamento mais eladorado de erros. 
> Alé disso, o método de criação e remoção do relacionamento entre funcionário e empresa ainda não está implementado.
> Dessa forma, falta dessa funcionalidade impede a remoção de um funcionário ou empresa que possua um relacionamentos.
> Por outro lado, a função de remoção funciona corretamente para recursos não relacionados.
> Caso a relação já exista (inserção manual no banco), os dados são apresentados corretamente, ou seja, o funcionário apresenta uma lista de empresas às quais está relacionado assim como a empresa apresenta uma lista de funcionários vinculados.
>
> #### Front-end:
> Os serviços CRUD estão parcialmente completos.
> Ao fazer requisições de inserção e atualização (POST e PUT), os dados coletados são passados para o back-end mas em algum momento "se perdem" e não são inseridos no banco.
> Ainda não consegui identificar a fonte do problema.
> Por outro lado, o serviço de leitura e remoção (com a limitação informada no back-end) estão funcionando corretamente.
> Assim como no back-end, ainda falta a implemtação do tratamento de erros.
> O front-end faz apenas a validação dos capos.
> Também ainda falta a adição do campo Authorization ao header das requisições.



## Enunciado:
### Questão 1:
O objetivo é desenvolver uma API REST em PHP para realizar o gerenciamento de funcionários e empresas. A aplicação deve realizar as  operações básicas de um CRUD com os devidor verbos TTP e códigos de retorno. Neste cenário, cada funcionário pode pertencer a uma ou mais empresas, assim como cada empresa pode possuir um ou mais funcionários. 

#### Requisitos:
- [x] A exibição dos dados do funcionário deve mostrar as empresas as quais ele está associado;
- [x] A exibição dos dados da empresa deve mostrar os funcionários vinculados à ela;
- [x] Os campos do funcionário são: login, nome, cpf, e-mail, endereço e senha;
- [x] Os campos da empresa são: nome, cnpj e endereço;
- [x] Utilizar padrões de projeto;
- [ ] Realizar tratamento de erros adequado.

### Questão 2:
O objetivo é conectar o serviço desenvolvido na questão 1 a uma aplicação front-end desenvolvida com o framework Angular 9.

#### Requisitos:
- [x] Criar o CRUD de serviços;
- [ ] Tratar os erros de forma genérica (preparando-os para mais serviços);
- [x] Impedir o cadastro quando o campo login ou nome possuir acentuação (válido para empresa e funcionário);
- [ ] Popular o campo Authorization no header de cada requisição com um valor arbitrário definido na abertura da página;


### Informações Gerais:
- Espera-se que o sistema final seja robusto e estável;
- Comentários em código são bem vindos;
- O sistema operacional utilizado deve ser o Linux;
- A linguagem utilizada deverá ser php 7, usando o framework Laravel 6+;
- O banco de dados deve ser Postgres ou MySql;
- Recomenda-se HTTP 2.2 ou superior para o servidor WEB;
-  você deve 
- Utilizar o Postman para consumir o serviço REST (exportar as requisições em formato .json);

### Entrega:
- Criar uma imagem docker ou uma máquina virtual contendo o projeto completo e suas dependências;
- Publicar no GIT ou fazer deploy em algum servidor e disponibilizar o link para acesso.

#### Endereços Úteis:
- https://laravel.com/
- https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods
- https://angular.io/
- http://www.php.net/
- https://httpd.apache.org/
- https://www.postgresql.org/
- https://www.getpostman.com/
- https://www.docker.com/
- https://laravel.com/docs/7.x/homestead
