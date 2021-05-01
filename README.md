# Tupper Yuki - CRUD (em construção)

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.



## Por que esse projeto?

A ideia surgiu durante a aplicação de um desafio em um Bootcamp da DIO.
Resolvi aplicar os aprendizados criando algo que pudesse resolver um problema próximo, no trabalho da minha esposa. 

Durante o processo houveram muitos desafios.

Apesar de já ter reealizado outros tantos projetos com o uso do **Javascript e React**, por exemplo, muitos desafios novos surgiram quando da aplicação do Angular.

Foi muito bom conhecer boa parte de todo o **poder** que o **Angular** tem a oferecer, na criação de aplicações robustas e bem estruturadas.

Para montar o **backend**, utilizei o **Json-server**. Uma ferramenta muito útil para agilizar a construção do ambiente de desenvolvimento front end.

As requisições para a API foram realizadas via Módulo Http do próprio Angular. Bem fácil de trabalhar.

Essa aplicação continuará em desenvolvimento, porém para finalizar e entregar o projeto, tomei a decisão de parar momentaneamente e organizá-lo para a entrega e disponibilização do código.

Foram criadas funções de Adicionar novos produtos e visualizar os produtos existentes.

Procurei organizar a arquitetura em Componentes e Views.

Também utilizei Services para concentrar a lógica de alguns componentes de produtos e poder fixar esse aprendizado, deixando o código inclusive mais limpo e menos acoplado.

O design da aplicação foi feito utilizando o Angular Material.



![Tela de início](https://drive.google.com/file/d/1gbeSgF3Z9DIMUxdXJ0E7CBURn6CCmpYr/view?usp=sharing)



![Tela de produtos](https://drive.google.com/file/d/1AReanpKvp8vocIJLg45ECYNVjU-PPUzu/view?usp=sharing)



Para fazer o clone desse projeto, siga os passos abaixo:

1. Escolha a pasta onde irá ficar o clone do projeto;

2. Faça o clone utilizando o seguinte comando: 

   ```
   git clone git@github.com:ilanribeiro/tupperyuki-crud.git
   ```

3. Após finalizado o clone, entre na pasta do projeto, `spabtc` ;

4. Rode o comando `npm start` para instalar todas as dependências necessárias;

5. Comece configurando o Backend, conforme descrito a seguir. 



## Backend

Para desenvolver esse projeto foi utilizado um backend simples gerado a partir de um arquivo json, com a utilização do Json-server.

Para rodar o backend, primeiro localize a pasta com o nome de `Backend`;

Copie essa pasta para fora da da pasta do projeto;

Entre na pasta `Backend`;

Rode o comando `npm install`;

Após finalizado, rode o comando `npm start`, dentro da pasta `Backend`;

Você vai ver alguma mensagem parecida com essa abaixo:

![tela terminal json-server](https://drive.google.com/file/d/1ZqPuYHrqyz_G38fTV4HZ-fm-ZNUM89Y4/view?usp=sharing)



Obs: Verifique com atenção se o backend subiu na porta 3001, conforme imagem. Caso tenha subido em outra porta, será necessário modificar a `baseURL` dentro do Service do frontend.



Pronto, o Backend está ok.

Agora, segue para iniciar o front end.





## Front End

Volte para a pasta `spabtc` (que significa Single Page Aplication - Bootcamp);

Estando dentro da pasta indicada acima, rode o comando `npm install`

Após finalizado, rode o comando `npm start`;

Após finalizada a compilação com sucesso, basta acessar a página no endereço:

```
http://localhost:4200
```


