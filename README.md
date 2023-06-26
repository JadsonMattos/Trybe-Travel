# Boas-vindas ao repositório Travel Form

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

Neste exercício, iremos criar um formulário para concorrer a uma viagem.

Imagine você, uma pessoa desenvolvedora depois de formada, planejando as suas maravilhosas e merecidas férias.

Enquanto pesquisa roteiros você se depara com um anúncio do concurso Trybe Travel, que irá premiar com uma viagem totalmente paga e com várias opções de destino. Isso tudo para pessoa que desenvolver a melhor página com a proposta do concurso. Como você imagina que seria a página para concorrer a essa viagem?

Concorda que seria uma espécie de formulário?
</details>

<details>
  <summary><strong>:memo: Habilidades a serem trabalhadas</strong></summary><br />

Neste exercício, verificamos se você é capaz de:

- Criar e manipular elementos HTML;

- Colocar em prática o uso do `preventDefault`;

- Desenvolver ainda mais o seu raciocínio lógico.

</details>

## 1. Adicione o título ao formulário

<details>
  <summary>No arquivo já criado, <code>form.html</code> , adicione as informações a seguir:</summary><br>

- Adicione o título, que deverá ficar em uma tag `h1` e possuir o id `title`;
- O título deve ter o texto `Formulário Trybe Travel`;
- Crie a tag `form` que deve conter o id `main-form`.
</details>

## 2. Adicione os campos do formulário

<details>
  <summary>Dentro do elemento <code>form</code>, crie os seguintes campos: </summary><br>

- Nome Completo:
  - Limitado entre 10 e 40 caracteres.
  - O input deve ter o id `fullName`.
- E-mail:
  - Limitado entre 10 e 50 caracteres.
  - O input deve ter o id `email`.
- Destino Preferido:
  - Deverá ter 4 opções: Cidade, Campo, Praia, Montanha.
  - Cada opção deverá ser um `input` do tipo `radio` tendo como atributo `name` o valor `'destinations'`.
- Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip?
  - Limite de 500 caracteres
  - O textarea deve ter o id `question`.
- Qual a melhor data para realizar sua viagem?
  - O input da data deve ficar abaixo do input anterior.
  - O input deve ter o id `date`.
- Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
  - Crie input do tipo checkbox ao fim desta pergunta.
  - O input deve ter o id `promo`.
- Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.
  - Crie input do tipo checkbox ao fim desta frase.
  - O input deve ter o id `agreement`.
</details>

## 3. Adicione botões ao formulário

<details>
<summary>O formulário deverá ter 2 botões </summary><br>

- Crie um botão para enviar as informações preenchidas;
  - O botão deve ter o id `submit-btn`.
- Crie um botão para limpar as informações contidas nos campos.
  - O botão deve ter o id `clear-btn`.
</details>

## 4. Manipule as informações via Javascript

<details>
<summary>No arquivo <code>script.js</code> faça as seguintes tarefas</summary>

- Interrompa o comportamento padrão do botão `submit` utilizando o método `preventDefault()`;
- Ao clicar no botão limpar, os campos devem ficar vazios.
</details>

## 5. Validação de imagem

<details>
<summary>Que tal fazer a validação da imagem?</summary>

A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.<br>

- Desabilite o botão `Enviar` caso o checkbox não esteja selecionado.
- Habilite o botão `Enviar` caso o checkbox seja selecionado.
</details>

## 6. Faça validação dos campos do formulário

<details>
<summary>Faça a validação dos campos do formulário </summary><br>

- Faça a validação dos campos com limite de caracteres a seguir;
- O input Nome completo deve ter no mínimo 10 e no máximo 40 caracteres;
- O input E-mail deve ter no mínimo 10 e no máximo 50 caracteres;
- O textarea deve ter no mínimo 1 e no máximo 500 caracteres.
</details>
