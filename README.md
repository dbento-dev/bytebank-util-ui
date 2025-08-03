# Bytebank - Util UI

Este é o micro-frontend de componentes de UI para a aplicação Bytebank, desenvolvido como parte da pós-graduação em Front-End Engineering da FIAP! 🚀

Neste projeto, aplicamos o conceito de Arquitetura de Micro-Frontends utilizando Webpack Module Federation para criar uma biblioteca de componentes de UI reutilizáveis.

---

### ✅ Status do projeto

🚧 **Util UI** 🚀 Em construção... 🚧

---

### ❗ Sobre o Projeto

O **Util UI** é a biblioteca de componentes visuais compartilhados da aplicação Bytebank. Ele é responsável por fornecer um conjunto coeso e reutilizável de componentes de interface, como botões, campos de formulário, cards e modais.

Este projeto foi projetado para ser consumido por outras aplicações (micro-frontends), como o `app-dashboard`, integrando-se de forma transparente para manter a consistência visual e funcional em todo o ecossistema Bytebank.

---

### ✔️ Componentes Disponíveis

Abaixo estão alguns dos componentes já desenvolvidos e prontos para uso:

- [x] `AccountCard`: Card para exibir informações da conta.
- [x] `Button`: Botão customizável com diferentes variantes de cor.
- [x] `ConfirmationModal`: Modal de confirmação para ações críticas.
- [x] `CurrencyInputField`: Campo de entrada formatado para valores monetários.
- [x] `IconButton`: Botão com ícone para ações rápidas (editar, deletar).
- [x] `InputField`: Campo de texto padrão.
- [x] `SelectField`: Campo de seleção (dropdown).
- [x] `TransactionItem`: Componente para listar uma transação individual.
- [x] `UserInfo`: Exibe o avatar e nome do usuário.
- [x] `WelcomeHeader`: Cabeçalho de boas-vindas.
- [x] `ThemeProvider`: Provedor de tema para garantir a consistência visual (MUI).

---

### 🛠️ Tecnologias

As tecnologias principais utilizadas no desenvolvimento deste micro-frontend são:

- **React.js**
- **TypeScript**
- **Material-UI** e **Emotion** para componentização e estilização.
- **TailwindCSS** para classes utilitárias de CSS.
- **Webpack (Module Federation)** para o compartilhamento dos componentes.
- **Babel** para transpilação de código.
- **ESLint** e **Prettier** para linting e formatação de código.

---

### 🚀 Como rodar localmente

#### Pré-requisitos

- **Node.js**
- **npm** ou **Yarn**

#### Passos

1. Clone o repositório (se ainda não o fez) e navegue até a pasta do projeto:

   ```bash
   # git clone <url-do-monorepo-bytebank>
   cd projects/util-ui
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

O **Util UI** estará disponível em: `http://localhost:8310`

> **Atenção:** Este é um micro-frontend que expõe componentes e não possui uma interface visual própria para ser acessada diretamente. Ele é feito para ser consumido por outras aplicações host. A página em `localhost:8310` serve como um ambiente de desenvolvimento e vitrine para os componentes.

---

### 📂 Estrutura do Projeto
