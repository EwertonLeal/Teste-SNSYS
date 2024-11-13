# Teste de Avaliação - Projeto Frontend

**Bem-vindo!**

Este é o repositório do seu projeto de avaliação. 

## Instruções:

1. **Clone ou faça um fork** deste repositório para sua conta pessoal no GitLab.
2. **Desenvolva o teste** conforme as instruções abaixo.
3. Após a finalização, **envie o link do seu repositório** via WhatsApp para o recrutador que entrou em contato com você.

## Objetivo do Teste:

O objetivo é modificar a aplicação para que ela inicie com uma página de login. Após a autenticação, o usuário será redirecionado para uma página contendo um menu à esquerda e uma grid de **Cargos**.

## Passos a seguir:

### 1. Página de Login:
- A aplicação deve começar com uma página de login.
- Após a autenticação bem-sucedida, o usuário será redirecionado para o menu, que deve ter uma única opção visível: **Cargos**.

### 2. Página de Cargos:
- O conteúdo da página de cargos deve exibir uma grid paginada com 5 registros por página.
- O endpoint para obter os cargos retornará uma lista, que será exibida na grid.

## Endpoints:

### 1. Autenticação:
Para autenticar o usuário e receber o **Bearer Token**, utilize o seguinte endpoint:

- **Endpoint**:  
  `[POST] https://dev-erp.haup.com.br/api/v1/auth/login`
  
- **Payload**:  
  ```json
  {
      "email": "candidato@snsys.com.br",
      "password": "angular"
  }
 
### 2. Obter Cargos:

Após autenticar-se, utilize o **Bearer Token** recebido para acessar o endpoint protegido que retorna a lista de cargos. A grid de cargos deve ser exibida conforme os dados retornados.

## Endpoint:
[POST] https://dev-erp.haup.com.br/api/v3/settings/UserPosition/GetAll

**Payload:**

**Header:**
Authorization: Bearer {Token}

**Body**:
```json
{
    "page": 1,
    "size": 5,
    "columName": "",
    "columnOrder": "",
    "filters": [
        {
            "type": "",
            "key": "",
            "value": ""
        }
    ]
}

## Requisitos:
- A grid deve exibir **5 cargos por página**.
- Certifique-se de que a navegação na grid funcione corretamente com a paginação.
- O layout e design da página podem ser ajustados conforme sua necessidade, mas a funcionalidade descrita deve ser atendida.