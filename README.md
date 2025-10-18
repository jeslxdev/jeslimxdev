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
