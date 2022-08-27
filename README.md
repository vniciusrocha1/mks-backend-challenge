Diretrizes do desafio
===========================
 Ao fim do arquivo deixei algumas informações sobre o desenvolvimento!
 Deploy + doc: https://mks-backend-challenge-vinicius.herokuapp.com/api/v1
 ===========================

Por favor organize, design, teste, faça a documentação e deploy do seu código da forma como se ele fosse para produção, depois nos envie um link do repositório no Github.

Tarefa (funcional)
---------------

1. Desenvolva um sistema de autenticação JWT.
2. Você deve construir uma CRUD de um catálogo de filmes. Todos os endpoints dessa CRUD só devem ser consumidos por um usuário autenticado.

Ferramentas requeridas
---------------

1. TypeScript
2. Nest.js
3. TypeORM
4. Swagger
5. Docker
6. Redis
7. PostgreSQL

Aspectos técnicos
---------------

A arquitetura deve ser composta de uma aplicação provendo uma API RESTful em JSON, utilize do Redis como seu cache.

OBS: Lembre-se de validar a informação tratada em cada endpoint.

Back-end
---------------

Engenharia de qualidade é saber utilizar da ferramenta certa para o trabalho certo, e seguir aprendendo constantemente sobre ela. Sabendo disso, sinta-se livre para mencionar no `README` quanto tempo de experiência você possui com cada uma delas, fazendo isso levaremos em consideração ao avaliar seu desafio.

Faça o deploy!
---------------

Ao finalizar, faça o deploy no lugar que te for mais confortável (exemplo: Amazon EC2, Heroku, Netlify, Google AppEngine, etc)

Observações do Desenvolvimento - Vinicius Rocha
---------------

Olá, neste espaço, vou deixar algumas obsevações, e como pedido acima, o tempo de experiencia com as tecnologias.

OBS 1: Recebi o desafio dia 24/08/22 as 18h com prazo ate 27/08/22 as 17h, considerando as tecnologias do desafio, eu nunca tinha desenvolvido nada e nem estudado Nestjs ate então, foquei em estudar e aprender os fundamentos e o basico do Nestjs noo restante do dia 24 e dia 25, comecei o desafio no dia 26 e hoje dia 27 as 6:00 estou fazendo os ajustes finais , faltando somente a documentação e os testes unitarios.

OBS 2: Passei por problemas de incompatibilidade entre o Typeorm e o @nestjs/typeorm , ele nao estava criando as tabelas na base e demorou um bom tempo para eu descobrir que era incompatibilidade.

OBS 3: Levando em consideração o pouco tempo para estudos e para o desenvolvimento do projeto, possa ser que alguns conceitos estejam codados de forma equivocada como por exemplo o uso dos repositorios dentro dos middlewares, foi a forma que consegui analisar e resolver o problema na hora com o pouco tempo que tinha disponivel, agradeço a todos a oportunidade de desenvolver em Nestjs, realmente achei incrivel a facilidade e o jeito que ele integra tudo, obrigado. ;)

OBS 4: Não implementei os testes unitarios e nem o uso do Redis, por falta de tempo para estudar e aprender cada um deles, mas irei implementalos assim que possivel apos a entrega do desafio!

Tempo de experiencia com as técnologias - Vinicius Rocha
---------------

1. TypeScript - 1 Ano
2. Nest.js - Aprendi com o desafio!
3. TypeORM - 1 Ano
4. Swagger - Aprendi com o desafio!
5. Docker - 1 Ano
6. Redis - Não implementei no desafio!
7. PostgreSQL - 4 Anos
