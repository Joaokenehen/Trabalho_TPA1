## 🚀 Projeto TPA1 - Sistema de Gerenciamento de Produtos

Este é um projeto full-stack desenvolvido para a disciplina/trabalho TPA1. A aplicação consiste em uma API construída em Node.js com TypeScript e uma interface de usuário desenvolvida em React utilizando Vite. O sistema realiza o gerenciamento de produtos e armazena os dados em memória (sem a necessidade de um banco de dados externo).

## 🛠️ Tecnologias Utilizadas

### Front-end
* **React** (v19) com **Vite**
* **TypeScript**
* **React Router DOM** (Navegação)
* **Tailwind CSS** (Estilização)
* **Cypress** (Testes E2E e de Componentes)

### Back-end
* **Node.js**
* **Express** (Roteamento e Servidor Web)
* **TypeScript** (com `ts-node-dev` para desenvolvimento)
* **CORS**

## ⚙️ Pré-requisitos

Para executar este projeto localmente, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão recomendada: LTS)
* [Git](https://git-scm.com/)

Não é necessário configurar variáveis de ambiente (`.env`) nem rodar serviços de banco de dados, pois o projeto funciona *out-of-the-box* gerenciando o estado em memória.

## 🚀 Como Executar o Projeto

Primeiro, faça o clone do repositório para a sua máquina local:
```bash
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
O projeto é dividido em duas pastas principais: backend e frontend. Você precisará rodar ambas simultaneamente em terminais separados.
```

## 1. Executando o Back-end
Abra um terminal, acesse a pasta do back-end, instale as dependências e inicie o servidor:

```bash
cd backend
npm install
npm run dev
```
O servidor estará rodando e escutando as requisições na porta 3333.
Acessível em: http://localhost:3333/produtos

## 2. Executando o Front-end
Abra um novo terminal, acesse a pasta do front-end, instale as dependências e inicie a aplicação web:

Bash
cd frontend
npm install
npm run dev
O Vite iniciará o servidor de desenvolvimento e exibirá a URL de acesso no terminal (geralmente http://localhost:5173).

## 🧪 Como testar a API no Postman

Certifique-se de que o backend está rodando (`npm run dev` na pasta `backend`) na porta `3333`.

### 1. Criar um Produto (POST)
- **Método:** `POST`
- **URL:** `http://localhost:3333/produtos`
- **Aba Body:** Selecione `raw` e o formato `JSON`.
- **Exemplo de Payload:**
  ```json
  {
    "nome": "Monitor LED 24",
    "preco": 850.50,
    "categoria": "Telas"
  }
  ```

### 2. Listar todos os Produtos (GET)
- **Método:** `GET`
- **URL:** `http://localhost:3333/produtos`
- **Aba Body:** Não é necessário enviar body.

### 3. Buscar um Produto Específico (GET)
- **Método:** `GET`
- **URL:** `http://localhost:3333/produtos/{id}`
- **Aba Body:** Não é necessário enviar body.

### 4. Atualizar um Produto (PUT)
- **Método:** `PUT`
- **URL:** `http://localhost:3333/produtos/{id}`
- **Aba Body:** Selecione raw e o formato JSON.
- **Exemplo de Payload:**
  ```json
  {
    "nome": "Monitor LED 24 Polegadas",
    "preco": 899.90,
    "categoria": "Telas"
  }
  ```
  
### 5. Deletar um Produto (DELETE)
- **Método:** `DELETE`
- **URL:** `http://localhost:3333/produtos/{id}`
- **Aba Body:** Não é necessário enviar body.

## 🧪 Testes Automatizados (Front-end)
O projeto front-end possui testes automatizados configurados com o Cypress. Para executá-los:

Acesse a pasta frontend.
Certifique-se de que o front-end está rodando (npm run dev).
Execute o comando para abrir a interface do Cypress:

```bash
npx cypress open
```

👨‍💻 Autor
Desenvolvido por João Gustavo Quennehen.
