# Architecture

Um site de portfólio moderno e responsivo construído com React, apresentando projetos arquitetônicos com suporte multi-idioma e recursos interativos.

## Funcionalidades

- **Suporte Multi-idioma**: Alternância entre português e inglês com preferência do usuário persistente
- **Vitrine de Projetos**: Listagem dinâmica de projetos com imagens, títulos e descrições
- **Sistema de Favoritos**: Salvar e gerenciar projetos favoritos com armazenamento baseado em sessão
- **Design Responsivo**: Interface amigável para dispositivos móveis com menu de navegação adaptativo
- **Conteúdo Dinâmico**: Conteúdo obtido de API externa para fácil gerenciamento
- **Interface Moderna**: Design limpo e profissional com experiência de usuário fluida

## Stack Tecnológico

- **React** - Biblioteca de interface
- **React Router DOM** - Roteamento no lado do cliente
- **Vite** - Ferramenta de build e servidor de desenvolvimento
- **Context API** - Gerenciamento de estado para estado global da aplicação
- **ESLint** - Qualidade de código e linting

## Como Começar

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/yourusername/dnc-arch.git
cd dnc-arch
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa ESLint para verificar a qualidade do código

## Estrutura do Projeto

```
dnc-arch/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Imagens e ícones
│   ├── components/      # Componentes React reutilizáveis
│   │   ├── AboutText/
│   │   ├── Banner/
│   │   ├── Button/
│   │   ├── ContactForm/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── LoadingSpinner/
│   │   └── ProjectsList/
│   ├── contexts/        # Provedores de Context do React
│   ├── pages/           # Componentes de página
│   ├── services/        # Serviços de API
│   ├── utils/           # Funções utilitárias
│   ├── App.jsx          # Componente principal da aplicação
│   └── main.jsx         # Ponto de entrada da aplicação
├── package.json
└── vite.config.js
```

## Integração com API

A aplicação obtém conteúdo de uma API externa:
- **URL Base**: `https://dnc-react-api.vercel.app/files/`
- **Endpoints**:
  - `/projects` - Recupera dados dos projetos
  - `/webtext` - Recupera conteúdo de texto multi-idioma

## Funcionalidades em Detalhe

### Alternância de Idioma
Os usuários podem alternar entre português e inglês. O idioma selecionado é salvo no localStorage e persiste entre sessões.

### Favoritos de Projetos
Os usuários podem marcar projetos como favoritos. As seleções de favoritos são armazenadas no sessionStorage e persistem durante a sessão do navegador.

### Navegação Responsiva
O cabeçalho inclui um menu de navegação responsivo para dispositivos móveis que se adapta a diferentes tamanhos de tela.

## Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

A saída da build estará no diretório `dist/`, pronta para implantação.

## Licença

Este projeto é privado e destinado a fins de portfólio.
