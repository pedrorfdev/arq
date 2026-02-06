# 🏛️ Modern Arq Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.1.5-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

**Um portfólio moderno e responsivo para projetos arquitetônicos**

[✨ Funcionalidades](#-funcionalidades) • [🚀 Como Começar](#-como-começar) • [📁 Estrutura](#-estrutura-do-projeto) • [🔧 Tecnologias](#-stack-tecnológico)

</div>

---

## 📖 Sobre o Projeto

Modern Arq Portfolio é uma aplicação web moderna desenvolvida com React, projetada para exibir projetos arquitetônicos de forma elegante e profissional. O projeto oferece uma experiência de usuário fluida com suporte multi-idioma, sistema de favoritos e design totalmente responsivo.

## ✨ Funcionalidades

### 🌍 Multi-idioma
- Alternância entre **Português** e **Inglês**
- Preferência do usuário salva no localStorage
- Interface completamente traduzida

### 🎨 Vitrine de Projetos
- Listagem dinâmica de projetos arquitetônicos
- Imagens, títulos e descrições detalhadas
- Visualização organizada e profissional

### ⭐ Sistema de Favoritos
- Salvar e gerenciar projetos favoritos
- Armazenamento baseado em sessão
- Interface intuitiva para marcação

### 📱 Design Responsivo
- Interface adaptada para todos os dispositivos
- Menu de navegação adaptativo
- Experiência otimizada em mobile, tablet e desktop

### 🔄 Conteúdo Dinâmico
- Integração com API externa
- Gerenciamento facilitado de conteúdo
- Atualizações em tempo real

### 🎯 Interface Moderna
- Design limpo e profissional
- Animações suaves
- Experiência de usuário fluida

## 🚀 Como Começar

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

### 🔧 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pedrorfdev/Modern-Arq-Portfolio.git
   cd modern-arq-portfolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação:**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Constrói o projeto para produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa ESLint para verificar a qualidade do código |

## 📁 Estrutura do Projeto

```
modern-arq-portfolio/
├── 📂 public/              # Arquivos estáticos
│   ├── about.jpg
│   ├── contact.jpg
│   ├── hero.jpg
│   └── projects.jpg
│
├── 📂 src/
│   ├── 📂 assets/          # Imagens e ícones
│   ├── 📂 components/      # Componentes React reutilizáveis
│   │   ├── AboutText/
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── LoadingSpinner/
│   │   └── ProjectsList/
│   ├── 📂 contexts/        # Provedores de Context do React
│   ├── 📂 pages/           # Componentes de página
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── 📂 services/        # Serviços de API
│   ├── 📂 utils/           # Funções utilitárias
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Ponto de entrada
│   └── main.css            # Estilos globais
│
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Stack Tecnológico

<div align="center">

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| **React** | 19.0.0 | Biblioteca de interface de usuário |
| **React Router DOM** | 7.1.5 | Roteamento no lado do cliente |
| **Vite** | 6.1.0 | Ferramenta de build e servidor de desenvolvimento |
| **Context API** | - | Gerenciamento de estado global |
| **ESLint** | 9.19.0 | Qualidade de código e linting |

</div>

## 🔌 Integração com API

A aplicação obtém conteúdo de uma API externa para facilitar o gerenciamento:

- **URL Base**: `https://dnc-react-api.vercel.app/files/`
- **Endpoints**:
  - `/projects` - Recupera dados dos projetos arquitetônicos
  - `/webtext` - Recupera conteúdo de texto multi-idioma

## 📚 Funcionalidades em Detalhe

### 🌐 Alternância de Idioma

Os usuários podem alternar entre português e inglês através de botões no header e footer. O idioma selecionado é salvo no `localStorage` e persiste entre sessões do navegador.

### ⭐ Favoritos de Projetos

Os usuários podem marcar projetos como favoritos clicando no ícone de coração. As seleções de favoritos são armazenadas no `sessionStorage` e persistem durante a sessão do navegador.

### 📱 Navegação Responsiva

O cabeçalho inclui um menu de navegação responsivo para dispositivos móveis que se adapta automaticamente a diferentes tamanhos de tela, proporcionando uma experiência otimizada em todos os dispositivos.

## 🏗️ Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

A saída da build estará no diretório `dist/`, pronta para implantação em qualquer serviço de hospedagem estática.

## 📄 Licença

Este projeto é privado e destinado a fins de portfólio pessoal.

---

<div align="center">

**Desenvolvido com ❤️ para exibir projetos arquitetônicos**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
