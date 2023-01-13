# back-end

# api - Documentação

## Sumário

- [back-end](#back-end)
- [api - Documentação](#api---documentação)
  - [Sumário](#sumário)
  - [1. Sobre](#1-sobre)
    - [2. Instalando Dependencias](#2-instalando-dependencias)
    - [3. Variáveis de ambiente](#3-variáveis-de-ambiente)
    - [4. Aplicando migrações](#4-aplicando-migrações)
    - [5. Acessando a aplicação](#5-acessando-a-aplicação)
    - [6. Rodando no Front](#6-rodando-no-front)

---

## 1. Sobre

Motors shop é um projeto fullstack de conclusão de cursp, uma aplicação focada em armazenar carros e anunciantes onde cada entidade possui seu CRUD.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Yup](https://www.npmjs.com/package/yup)
- [React](https://pt-br.reactjs.org/)
- [Chakra-UI](https://chakra-ui.com/)

### 2. Instalando Dependencias

Antes de prosseguirmos com a instalação, certifique-se que você possua o PostgreSQL instalado em sua máquina, clone o repositório em sua máquina e dentro da pasta da aplicação rode o comando:

```shell
cd back-end
```

Para instalar as dependências do back-end utilize o comando abaixo:

```
yarn install
```

**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

```
yarn --version
```

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

```
yarn install --global yarn
```

### 3. Variáveis de ambiente

Crie um arquivo **.env**, Assim que inicializar o projeto com as dependencias necessarias configure as variavies de ambiente, reescreva o arquivo .**.env.example**

Defina suas variáveis de ambiente de acordo com suas credenciais do PostgreSQL, após criar um database para o projeto.

OBS: Esse projeto esta vinculado e configurado ao banco de dados Postgress, caso queira alterar entre no arquivo data-source.ts dentro da pasta de services e preencha os dados necessarios para a utilizacao do banco de dados de sua preferencia.

### 4. Aplicando migrações

Antes de Aplicar as migrações, certifique-se de deletar quaisquer migrações já existentes na pasta **migrations**. Após verificar rode o comando:

```shell
yarn typeorm migration:generate src/migrations/initialMigration -d src/data-source.ts
```

E para rodar as migrações:

```shell
yarn typeorm migration:run -d src/data-source.ts
```

### 5. Acessando a aplicação

Após seguir todos os passos anteriores, basta iniciar o servidor com:

```shell
yarn dev
```

E e acessar o projeto em:

**http://127.0.0.1:5173/registration**

### 6. Rodando no Front

Bem parecido com o processo do back-end, também rode o comando:

```shell
cd front-end
```

Para instalar as dependências do front-end, rode o comando:

```
yarn install
```
