# Envio de Recibos por Email - README

Este é um aplicativo feito no N8N para enviar recibos por e-mail para membros da igreja que fizeram ofertas ou pagaram o dízimo. Certifique-se de seguir as etapas abaixo para configurar e executar o aplicativo.

## Pré-requisitos

Antes de começar, você precisará ter o Docker instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do [Site oficial do Docker](https://www.docker.com/).

## Configuração

1. Renomeie o arquivo `.env.example` para `.env`.

2. Abra o arquivo `.env` em um editor de texto realize as configurações necessárias. Por exemplo:

```
POSTGRES_USER=changeUser
POSTGRES_PASSWORD=changePassword
POSTGRES_DB=n8n

POSTGRES_NON_ROOT_USER=changeUser
POSTGRES_NON_ROOT_PASSWORD=changePassword
```

## Instalação

1. Clone este repositório para o seu computador ou faça o download como um arquivo ZIP.

2. Navegue até o diretório do projeto no seu terminal.

3. Execute o seguinte comando para instalar as dependências do projeto:

```
docker compose up -d
```




## Executando o Aplicativo

Depois de executar o comando `docker compose up -d` o aplicativo estará rodando nessa URL

```
http://localhost:5678
```

Então você deverá criar sua conta dentro do N8N, após isso, importe o workflow que está no repositório nomeado como "Enviar_Recibos_de_Ofertas.json",
Faça as modificações necessárias para sua planilha, há um exemplo de como fizemos na nossa no arquivo "example.csv"

## Dicas Adicionais

- Certifique-se de que os membros da igreja e os detalhes dos recibos estejam corretamente configurados na planilha

- Mantenha suas credenciais de e-mail seguras e não compartilhe o arquivo `.env` publicamente.

- Para um uso em produção, considere implementar medidas adicionais de segurança e testar o aplicativo em um ambiente controlado.
