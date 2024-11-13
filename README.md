# Teste de Avaliação - Projeto Frontend

## Bem-vindo!

Este é o repositório do projeto que precisará ser modificado conforme instruções recebida durante a entrevista.

### Instruções:
1. Clone ou faça um fork deste repositório para sua conta pessoal.
2. Desenvolva o teste conforme as instruções abaixo.
3. Após a finalização, envie o link do seu repositório público via WhatsApp para o recrutador que entrou em contato com você.

---

## Objetivo do Teste:
O objetivo é modificar a aplicação para que ela fique bem simples e leve, contendo apenas duas páginas (Login e Cargos). A página de login irá consumir o endpoint de autenticação, a pagina de cargos irá consumir o endpoint que trás a relação de cargos. 

---

## Passos a seguir:

### Página de Login:
- A aplicação deve começar com uma página de login.  
  **Obs:** Esse projeto já possui uma página de login. Segue o caminho de acordo com o menu da aplicação: `Pages > Authentication > Login`.
- Após a autenticação bem-sucedida, o usuário será redirecionado para a página de **Cargos**.
  **Obs:** Esse projeto possui uma página em branco que pode ser customizada para inserir a gridtTabela. Segue o caminho de acordo com o menu da aplicação: `Pages > Utility > Starter Page`.

### Página de Cargos:
- O conteúdo da página de cargos deve exibir uma grid/tabela paginada com 5 registros por página.
- O endpoint para obter os cargos retornará uma coleção de cargos, que será exibida na grid/tabela (id e name).

---

## Endpoints:

### Autenticação:
Para autenticar o usuário e receber o Bearer Token, utilize o seguinte endpoint:

- **Endpoint:**  
  `POST` https://dev-erp.haup.com.br/api/v1/auth/login

- **Payload:**
    ```json
    {
        "email": "candidato@snsys.com.br",
        "password": "angular"
    }
    ```

### Obter Cargos:
Após autenticar-se, utilize o Bearer Token recebido para acessar o endpoint protegido que retorna a lista de cargos. A grid/tabela de cargos deve ser exibida conforme os dados retornados.

- **Endpoint:**  
  `POST` https://dev-erp.haup.com.br/api/v3/settings/UserPosition/GetAll

- **Cabeçalho:**
    - `Authorization: Bearer {Token}`

- **Payload:**
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
    ```

A resposta desse endpoint conterá os cargos que deverão ser exibidos na grid/tabela.

---

## Requisitos:
- A grid deve exibir 5 cargos por página.
- Certifique-se de que a navegação na grid funcione corretamente com a paginação.
- O layout e design da página podem ser ajustados conforme sua necessidade, mas a funcionalidade descrita deve ser atendida.