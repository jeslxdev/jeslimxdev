# Portfólio Pessoal - jeslimx

Este é o repositório do meu portfólio pessoal, desenvolvido com tecnologias modernas para apresentar minhas habilidades, projetos e experiência profissional.

##  Arquitetura e Tecnologias

O projeto foi estruturado com foco em componentização, performance e manutenibilidade.

-   **Framework Principal**: React 18+ com Vite
-   **Linguagem**: TypeScript
-   **Estilização**: Styled Components (CSS-in-JS)
-   **Internacionalização**: `i18next` e `react-i18next` para suporte a múltiplos idiomas (PT/EN).
-   **Animações**:
    -   Fundo dinâmico criado com HTML5 Canvas.
    -   Transições de componentes baseadas em CSS com `cubic-bezier` para uma experiência de usuário fluida.
-   **Arquitetura de Componentes**:
    -   O estado principal da navegação é controlado no `App.tsx`.
    -   As seções (`Presentation`, `Projects`, `Company`, `Contact`) são modais que aparecem com animações direcionais.
    -   Componentes de UI reutilizáveis (`Title`, `Wrapper`, etc.) são centralizados para consistência.

## Deploy

A aplicação está configurada para ser executada em um contêiner Docker com Nginx, otimizado para performance e segurança, e pronta para ser distribuída via Cloudflare.

Para instruções detalhadas de deploy, veja o **[Guia de Deploy](./docs/DEPLOYMENT.md)**.

## Como Executar Localmente

1.  **Clone o repositório:**
    ```sh
    git clone https://github.com/jeslxdev/jeslimxdev.git
    ```
2.  **Instale as dependências:**
    ```sh
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```sh
    npm run dev
    ```
A aplicação estará disponível em `http://localhost:5173`.

