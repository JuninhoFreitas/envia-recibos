# Envio de Recibos por Email - README

Este é um aplicativo Node.js para enviar recibos por e-mail para membros da igreja que fizeram ofertas ou pagaram o dízimo. Certifique-se de seguir as etapas abaixo para configurar e executar o aplicativo.

## Pré-requisitos

Antes de começar, você precisará ter o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu computador ou faça o download como um arquivo ZIP.

2. Navegue até o diretório do projeto no seu terminal.

3. Execute o seguinte comando para instalar as dependências do projeto:

```
npm install
```


## Configuração

1. Renomeie o arquivo `.env.example` para `.env`.

2. Abra o arquivo `.env` em um editor de texto e insira suas credenciais de e-mail e outras configurações necessárias. Por exemplo:

```
EMAIL_USER=sua_conta_de_email@outlook.com
EMAIL_PASS=sua_senha_de_email
```


Certifique-se de usar uma conta de e-mail que permita o envio via SMTP. Recomendamos o uso de contas Outlook para uma configuração mais fácil. Se você estiver usando outra conta de e-mail, verifique se as configurações SMTP correspondem e modifique o arquivo `mailer.js` conforme necessário.

## Executando o Aplicativo

Depois de configurar suas credenciais e configurar o arquivo `.env`, você pode executar o aplicativo com o seguinte comando:

```
npm run start
```


O aplicativo começará a enviar recibos por e-mail para os membros da igreja com base nos dados fornecidos no seu código.

## Dicas Adicionais

- Certifique-se de que os membros da igreja e os detalhes dos recibos estejam corretamente configurados no código-fonte do aplicativo.

- Mantenha suas credenciais de e-mail seguras e não compartilhe o arquivo `.env` publicamente.

- Para um uso em produção, considere implementar medidas adicionais de segurança e testar o aplicativo em um ambiente controlado.
