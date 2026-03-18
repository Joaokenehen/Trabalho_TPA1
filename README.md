# 🚀 Projeto TPA1 — Sistema de Gerenciamento de Produtos

Este é um projeto full-stack desenvolvido para a disciplina TPA1. A aplicação consiste em uma API construída em **Node.js com TypeScript** e uma interface de usuário desenvolvida em **React com Vite**. O sistema realiza o gerenciamento de produtos e armazena os dados em memória (sem a necessidade de um banco de dados externo).

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **React** (v19) com **Vite**
- **TypeScript**
- **React Router DOM** — Navegação entre páginas
- **Tailwind CSS** — Estilização
- **Cypress** — Testes E2E e de componentes

### Back-end
- **Node.js**
- **Express** — Roteamento e servidor web
- **TypeScript** com `ts-node-dev` para desenvolvimento
- **CORS**

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

> Não é necessário configurar variáveis de ambiente (`.env`) nem rodar serviços de banco de dados — o projeto funciona *out-of-the-box*, gerenciando o estado em memória.

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Joaokenehen/Trabalho_TPA1.git
cd Trabalho_TPA1
```

O projeto é dividido em duas pastas principais: `backend` e `frontend`. Você precisará rodar ambas simultaneamente em terminais separados.

---

### 2. Executando o Back-end

```bash
cd backend
npm install
npm run dev
```

O servidor estará rodando na porta **3333**.  
Acesse em: [http://localhost:3333/produtos](http://localhost:3333/produtos)

---

### 3. Executando o Front-end

Em um **novo terminal**:

```bash
cd frontend
npm install
npm run dev
```

O Vite iniciará o servidor de desenvolvimento. A URL de acesso será exibida no terminal (geralmente [http://localhost:5173](http://localhost:5173)).

---

## 🧪 Como Testar a API no Postman

Certifique-se de que o backend está rodando (`npm run dev` na pasta `backend`) na porta `3333`.

### 1. Criar um Produto — `POST /produtos`

- **Método:** `POST`
- **URL:** `http://localhost:3333/produtos`
- **Body:** `raw` → `JSON`

```json
{
  "nome": "Monitor LED 24",
  "preco": 850.50,
  "categoria": "Telas"
}
```

---

### 2. Listar todos os Produtos — `GET /produtos`

- **Método:** `GET`
- **URL:** `http://localhost:3333/produtos`

---

### 3. Buscar um Produto Específico — `GET /produtos/:id`

- **Método:** `GET`
- **URL:** `http://localhost:3333/produtos/{id}`

---

### 4. Atualizar um Produto — `PUT /produtos/:id`

- **Método:** `PUT`
- **URL:** `http://localhost:3333/produtos/{id}`
- **Body:** `raw` → `JSON`

```json
{
  "nome": "Monitor LED 24 Polegadas",
  "preco": 899.90,
  "categoria": "Telas"
}
```

---

### 5. Deletar um Produto — `DELETE /produtos/:id`

- **Método:** `DELETE`
- **URL:** `http://localhost:3333/produtos/{id}`

---

## 🧪 Testes Automatizados (Front-end)

O projeto front-end possui testes automatizados configurados com o **Cypress**.

Para executá-los:

1. Certifique-se de que o front-end está rodando (`npm run dev` na pasta `frontend`)
2. Na pasta `frontend`, execute:

```bash
npx cypress open
```

A interface do Cypress será aberta para que você selecione e execute os testes.

---

## 👨‍💻 Autor

Desenvolvido por **João Gustavo Quennehen**.
