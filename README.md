# Anotações gerais sobre o Next.js

Next.js é um framework Fullstack que permite criar aplicações React modernas e otimizadas para mecanismos de busca.

Next.js faz a renderização do HTML no servidor, ou seja, é `SSR - Server Side Rendering`.

Para criar e navegar por páginas na aplicação Next.js, basta criar componentes/páginas no diretório `pages` que automaticamente elas estarão disponíveis para navegação através de rotas.

## Sobre os arquivo \_app.js e \_document.js

Arquivos de configuração global para personalizar o comportamento da aplicação Next.js.

### \_app.js

- Adicionar componentes globais ao app
- Pode ser usado para layout e estilos globais
- Tem uma finalidade semelhante ao App.js ou index.js do React
- Renderizado no Client e no Server

### \_document.js

- Usado para personalizar o HTML de todas as páginas em relação ao <head>
- Pode ser usado para meta tags, scripts, estilos globais
- É carregado no servidor na renderização inicial
