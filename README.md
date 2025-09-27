# Blog de Medicina de Emergência - React.js

Um blog moderno e responsivo desenvolvido em React.js com Tailwind CSS, focado em conteúdo médico de emergência e medicina intensiva.

## 🚀 Características Principais

Este projeto implementa um blog completo com todas as funcionalidades especificadas na hierarquia fornecida, incluindo navegação intuitiva, busca interativa, e design profissional baseado no mockup.

### Funcionalidades Implementadas

**Página Principal:**
- Header com gradiente e menu de navegação responsivo
- Banner de estatísticas e link para equipe
- Card de destaque com badge de tempo de leitura
- Sistema de busca com filtro em tempo real
- Grid de grandes temas com cores personalizadas
- Seção de procedimentos
- Bloco de contato WhatsApp
- Badge de newsletter com contador de assinantes
- Lista de conteúdos mais clicados
- Bloco promocional com certificações

**Página de Artigo:**
- Header com título e data de atualização
- Navegação por seções do artigo
- Conteúdo estruturado com parágrafos
- Tabela de destaque estilizada
- Sistema de navegação entre seções

### Design e Estilos

O projeto segue fielmente o mockup fornecido, implementando:
- Cores específicas: `#ff7e82` (destaque) e `#d9d9d9` (bordas)
- Cantos arredondados em cards e tabelas
- Gradientes e sombras modernas
- Transições suaves e hover effects
- Layout responsivo para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

- **React.js** - Framework principal
- **Tailwind CSS** - Estilização e design system
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e servidor de desenvolvimento
- **shadcn/ui** - Componentes de interface

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Passos para execução

1. **Instalar dependências:**
   ```bash
   pnpm install
   ```

2. **Iniciar servidor de desenvolvimento:**
   ```bash
   pnpm run dev
   ```

3. **Acessar a aplicação:**
   Abra o navegador em `http://localhost:5173`

### Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Visualiza build de produção
- `pnpm run lint` - Executa linting do código

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Header.jsx       # Cabeçalho principal
│   ├── PageTitle.jsx    # Título das páginas
│   ├── FeaturedPostCard.jsx  # Card de destaque
│   ├── TopicSearch.jsx  # Busca por tópicos
│   ├── TaxonomyGrid.jsx # Grid de grandes temas
│   ├── SectionHeading.jsx    # Cabeçalhos de seção
│   ├── TextBlock.jsx    # Bloco de texto
│   ├── NewsletterBadge.jsx   # Badge de newsletter
│   ├── MostClicked.jsx  # Lista mais clicados
│   ├── PromoBlock.jsx   # Bloco promocional
│   ├── ArticleHeader.jsx     # Cabeçalho de artigos
│   ├── ArticleNav.jsx   # Navegação de artigos
│   ├── ArticleBody.jsx  # Corpo do artigo
│   └── ui/              # Componentes base (shadcn/ui)
├── App.jsx              # Componente principal
├── main.jsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## 🎨 Componentes Principais

### Header
Cabeçalho completo com título, slogan, menu de navegação e banner de estatísticas.

### TopicSearch
Sistema de busca interativo que filtra tópicos em tempo real conforme o usuário digita.

### TaxonomyGrid
Grid de grandes temas com cores personalizadas e efeitos hover.

### ArticleNav
Navegação por seções do artigo com indicador visual da seção ativa.

### MostClicked
Lista numerada dos conteúdos mais acessados com ícones e hover effects.

## 🔧 Personalização

### Cores
As cores principais podem ser ajustadas no arquivo `src/index.css`:
- `#ff7e82` - Cor de destaque (fundo de cards especiais)
- `#d9d9d9` - Cor de bordas
- `#ef4444` - Cor primária (vermelho)

### Conteúdo
Os dados dos componentes estão definidos diretamente nos arquivos. Para um projeto real, recomenda-se:
- Implementar um sistema de CMS
- Conectar com APIs de conteúdo
- Adicionar sistema de autenticação

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se a:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Gerar build de produção:**
   ```bash
   pnpm run build
   ```

2. **Os arquivos estarão na pasta `dist/`**

3. **Fazer upload para seu servidor ou plataforma de hospedagem**

## 📄 Licença

Este projeto foi desenvolvido como demonstração técnica baseada em especificações fornecidas.

## 🤝 Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

---

**Desenvolvido com ❤️ usando React.js e Tailwind CSS**
