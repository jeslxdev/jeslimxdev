# Guia de Deploy (Docker & Cloudflare)

Este guia fornece instruções para construir e executar a aplicação usando Docker, com as melhores práticas para deploy em produção com a Cloudflare.

## Configuração do Docker

O projeto está configurado para ser construído e servido usando um `Dockerfile` multi-stage, o que garante uma imagem de produção leve e segura.

### Arquivos

-   `Dockerfile`: Define os passos para construir e executar a aplicação.
    -   **Estágio de Build**: Usa uma imagem `node:18-alpine` para instalar as dependências e construir a aplicação React (`npm run build`).
    -   **Estágio de Produção**: Usa uma imagem leve `nginx:stable-alpine` e copia apenas os arquivos estáticos construídos do estágio anterior.
-   `nginx.conf`: Arquivo de configuração customizado para o Nginx, otimizado para servir uma Single-Page Application (SPA) em React e para o cache da Cloudflare.
-   `.dockerignore`: Especifica arquivos e diretórios a serem ignorados durante o processo de build do Docker, mantendo a imagem final pequena e segura.

### Como Usar

1.  **Construir a Imagem Docker:**
    A partir da raiz do projeto, execute o seguinte comando. Isso irá taguear a imagem como `jeslimx-portfolio`.

    ```sh
    docker build -t jeslimx-portfolio .
    ```

2.  **Executar o Contêiner Docker:**
    Uma vez que a imagem foi construída, você pode executá-la como um contêiner:

    ```sh
    docker run -d -p 8080:80 --name meu-portfolio jeslimx-portfolio
    ```

    -   `-d`: Executa o contêiner em modo detached (em segundo plano).
    -   `-p 8080:80`: Mapeia a porta 8080 da sua máquina local para a porta 80 dentro do contêiner.
    -   `--name meu-portfolio`: Atribui um nome fácil de lembrar para o contêiner.

3.  **Acessar a Aplicação:**
    Abra seu navegador e navegue para `http://localhost:8080`.

## Configuração para Cloudflare

O arquivo `nginx.conf` já está pré-configurado com definições que funcionam bem com a Cloudflare.

### Otimizações Principais

-   **Cache de Navegador:** Assets estáticos (`.css`, `.js`, `.png`, etc.) são servidos com um header `Cache-Control` de `1 ano`. Os servidores de borda da Cloudflare irão cachear esses assets, resultando em tempos de carregamento mais rápidos para visitantes recorrentes.
-   **Headers de Segurança:** Headers de segurança essenciais estão incluídos para proteger contra vulnerabilidades web comuns:
    -   `X-Frame-Options: "SAMEORIGIN"`: Protege contra clickjacking.
    -   `X-XSS-Protection: "1; mode=block"`: Ativa o filtro de cross-site scripting (XSS) do navegador.
    -   `X-Content-Type-Options: "nosniff"`: Impede que o navegador tente adivinhar o tipo de conteúdo (MIME-sniffing).
-   **Content Security Policy (CSP):** Uma CSP básica está incluída para restringir as fontes de conteúdo, mitigando ataques de injeção. Pode precisar de ajustes se você adicionar scripts ou assets externos.
