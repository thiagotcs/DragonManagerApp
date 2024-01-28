![](https://github.com/thiagotcs/southSystemFront/blob/master/src/assets/image/logo-southsystem.svg)

<p align = "center">
    <img src = "https://img.shields.io/badge/Made%20by-Thiago%20Carvalho-orange" alt = "Thiago Carvalho">
    <img src = "https://img.shields.io/badge/License-MIT-blue.svg" alt = "Licença MIT">
    <img src = "https://img.shields.io/badge/Project%20Lang-Portugueses%20BR-green" alt = "Project Lang">
</p>

# 🐉 Dragon Manager App

## 📝 Descrição

O Dragon Manager App é uma aplicação web desenvolvida para gerenciar uma lista de dragões de forma interativa e intuitiva. A aplicação permite aos usuários criar, visualizar, editar e excluir informações sobre dragões, interagindo com a API fornecida. Esta API é utilizada para todas as operações de dados, incluindo a listagem de dragões em ordem alfabética, a visualização de detalhes específicos, a criação de novos dragões, e a atualização ou remoção de dragões existentes.

A aplicação também oferece recursos como pesquisa por nome e tipo de dragão, paginação para facilitar a visualização da lista de dragões e componentes de carregamento (skeleton screens) para melhorar a experiência do usuário durante o carregamento dos dados. Além disso, o projeto segue o padrão de design atômico, que ajuda a manter a consistência e a reutilização dos componentes da interface.

Além disso, implementa rotas privadas, garantindo que apenas usuários autenticados tenham acesso às funcionalidades principais. Inicialmente, os usuários podem acessar a aplicação usando um usuário padrão, com a opção de criar uma nova conta para acesso personalizado. A aplicação também é responsiva, assegurando uma ótima experiência em dispositivos móveis. Ela foi construída utilizando React, TypeScript e uma variedade de bibliotecas úteis para otimizar o desenvolvimento e a experiência do usuário.

## 💻 Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário
- TypeScript: Superset de JavaScript que adiciona tipagem estática
- Vite: Ferramenta de construção front-end extremamente rápida.
- Axios: Cliente HTTP baseado em promessas para fazer requisições
- React Query: Biblioteca para gerenciar estados de servidor no React
- Zustand: Biblioteca para gerenciamento de estado simples e sem boilerplate
- Styled Components: Biblioteca para estilização de componentes
- React Hook Form: Biblioteca para gerenciamento de formulários
- React Router DOM: Biblioteca para roteamento em aplicações React
- React Helmet Async: Gerenciamento de cabeçalho de documentos para React
- Lucide React: Biblioteca de ícones
- Zod: Biblioteca para validação de dados.
- @hookform/resolvers: Resolvedores para React Hook Form.
- date-fns: Biblioteca para manipulação de datas.
- localforage: Biblioteca de armazenamento offline.
- lodash: Biblioteca de utilitários JavaScript.
- polished: Conjunto de ferramentas para estilização.
- react-loading-skeleton: Componentes de esqueleto de carregamento.
- sort-by: Função para ordenar arrays.
E outras bibliotecas auxiliares, etc.

## 📁 Estrutura de Pastas

- src/assets: Imagens e fontes.
- src/components: Componentes reutilizáveis.
- src/pages: Páginas da aplicação.
- src/services: Serviços para comunicação com APIs.
- src/store: Gerenciamento de estados globais.
- src/styles: Estilos globais da aplicação.
- src/utils: Funções utilitárias.

## 🚀 Instalação e Execução

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:

```js
git clone https://github.com/thiagotcs/DragonManagerApp.git
```

2. Entre no diretório do projeto:

```js
cd DragonManagerApp
```

3. Instale as dependências:

```js
yarn install
```

4.Execute a aplicação em modo de desenvolvimento:

```js
yarn dev
```

5. Acesse http://localhost:5173 no seu navegador.

6. login da aplicação com usuário padrão:

```js
login: south@southsystem.com
senha: southsystem
```

## ⚙️ Funcionalidades

- [x] Autenticação de usuários (Unica pagina disponivel se não estiver logado)
- [x] Listagem de dragões com nomes em ordem alfabética
- [x] Pesquisa de dragões por nome e tipo
- [x] Paginação para facilitar a visualização da lista de dragões
- [x] Criação de novos dragões
- [x] Visualização detalhada de cada dragão
- [x] Edição de dragões existentes
- [x] Exclusão de dragões
- [x] Datas formato pt-BR
- [x] Layout responsivo
- [x] Componentes de carregamento (loading skeletons) para melhorar a experiência durante o carregamento dos dados

## 🏗️ Estrutura do Projeto

O projeto segue uma estrutura modular, com separação clara entre componentes, páginas, serviços e estado global. A organização dos arquivos e diretórios foi feita pensando na escalabilidade e na manutenção do código.

## 💾 Commits

Os commits neste projeto seguem o fluxo semântico, proporcionando clareza e consistência no histórico de desenvolvimento:

- Chore: Atualizações de tarefas e manutenções que não modificam a aplicação.
- Feat: Adiciona novas funcionalidades ou modificações significativas.
- Refactor: Refatorações no código que podem melhorar a estrutura interna sem necessariamente alterar o comportamento externo da aplicação.
- Style: Alterações relacionadas apenas com estilização.
- Docs: Atualizações na documentação.
- Test: Adição ou modificação de testes.

## 👥 Contribuição

Contribuições são sempre bem-vindas. Para contribuir, faça um fork do repositório, crie uma branch para sua feature ou correção de bug, faça as alterações e abra um pull request.

## 📞 Contato

- **Email**: thiagotcs.dev@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/thiagocarvalhofrontend/
- **GitHub**: https://github.com/thiagotcs

## 📺 Preview
<img width="1680" alt="image-1" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/2d4eff53-10a9-4459-8d2d-5ec22fb47e0e">
<img width="1679" alt="image-2" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/05ba9429-ad3f-4617-9450-487dcb37fef5">
<img width="1680" alt="image-3" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/af476a59-4b98-4233-b4c3-099f8d6f863b">
<img width="1680" alt="image-4" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/356687e2-578b-4f0e-b758-da67b88d8a03">
<img width="1680" alt="image-5" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/caffb595-6f96-43f3-9f7c-f68cb082e0b5">
<img width="1680" alt="image-6" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/dc68b90d-a2cf-486b-a7a6-3a69c1ccf103">
<img width="1680" alt="image-7" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/c0a97276-6153-4364-a791-19887bcc3654">
<img width="1680" alt="image-8" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/0981ee14-2b86-4918-8ae7-37dd6e37fbef">
<img width="1680" alt="image-12" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/06dbca6a-3817-429d-a177-c3b9f007b57e">
<img width="1680" alt="image-13" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/6681cc7a-4427-49a4-a33c-cb44ef2e97f4">
<img width="1680" alt="image-14" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/35050d7d-3cac-4487-857e-7b2397c4a5fa">
<img width="1680" alt="image-15" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/96ae6ac4-ea33-4f47-b1dd-850297598a9d">
<img width="1680" alt="image-16" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/80b1a783-4c9b-4e2f-b752-cf889e2a93c9">
<img width="1680" alt="image-17" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/bc0392af-b725-45d9-8b47-1ad53ff7cb62">
<img width="1680" alt="image-18" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/e8dbe1fd-5f9f-4544-b497-4ba503f16493">
<img width="1680" alt="image-19" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/6cc16ee1-0d29-42cd-83ea-b555b39c796b">
<p align="center">
<img width="355" alt="image-36" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/6efb5ef5-06cf-4886-b2f0-c6cf7190b0dc">
<img width="355" alt="image-37" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/6f806121-8b28-44e0-a436-a5d883ff1a20">
</p>
<p align="center">
<img width="355" alt="image-20" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/eb32b085-20e3-4d04-bc49-9559546b11af">
<img width="355" alt="image-21" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/4b32bdf3-9573-43a4-9bb6-de665fe080cc">
</p>
<p align="center">
<img width="355" alt="image-22" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/e3c96572-b019-490d-a5f8-031936364f16">
<img width="355" alt="image-23" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/690d34ef-f084-47df-a2ce-3f2ed2d34f16">
</p>
<p align="center">
<img width="355" alt="image-24" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/4dd59afa-6446-4c68-9a89-634467553cbf">
<img width="355" alt="image-35" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/f4e1a08a-af2e-4bae-9b41-5ab81fef48b9">
</p>
<p align="center">
<img width="355" alt="image-25" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/466e9b02-19a6-4a46-81ed-317e7b5f69a6">
<img width="355" alt="image-26" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/13cb2669-fdb4-4c07-aff1-2aab54cef0f5">
</p>
<p align="center">
<img width="355" alt="image-27" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/d5679953-47c5-4fda-b059-a00e125f8b8e">
<img width="355" alt="image-28" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/41c26ec7-308a-473e-93d7-97fb5bfb3200">
</p>
<p align="center">
<img width="355" alt="image-29" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/9bde57cf-7e72-44c1-9e3d-557cee646039">
<img width="355" alt="image-30" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/71b243ba-6e63-4f4f-afd9-bd4f44c38a34">
</p>
<p align="center">
<img width="355" alt="image-31" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/db4feeda-9417-4ebc-a898-67f6a91321cd">
<img width="355" alt="image-33" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/098c0498-8a8f-4252-a05b-5eea2575f7df">
</p>
<p align="center">
<img width="355" alt="image-34" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/5c87a9c3-c155-4d31-a3fc-1e0baae082cb">
<img width="355" alt="image-38" src="https://github.com/thiagotcs/DragonManagerApp/assets/53226663/08baad01-ba8a-4e17-bdb3-ad67c558ad10">
</p>
















