# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Princesa Leia (Luke Skywalker)*

--------------

<!-- Este documento tem como objetivo apresentar o projeto desenvolvido, considerando o que foi definido na proposta e o produto final. -->

### Resumo

 O tema abordado foi um aplicativo para controle de saude dos pets, foi feito um aplicativo onde conseguimos cadastrar e monitorar nossos pets e verificar quais profissionais podem atende-los e qual a situação deles. Foram feitas 4 paginas onde e é as informações pessoais de cada um, 2- o nome do pet,raça,idade,entre outros, 3 - Consulta trazendo qual problema foi identificado ou qual necessidade o animal precisa e por ultimo a tela dos veterinarios onde você tem informações sobre quem são os profissionais e como contata-los.
### 1. Funcionalidades implementadas
  
Cadastro de Pets:

Funcionalidade: Permitir que os usuários cadastrem informações detalhadas sobre seus animais de estimação. Adicionar quem são os donos e suas informações.


Monitoramento de Saúde:
Funcionalidade: Permitir que os usuários registrem sintomas, tratamentos e outras informações relevantes sobre a saúde de seus pets.

Verificação de Consultas:
Funcionalidade: Permitir que os usuários vejam quais foram os problemas identificados através do aplicativo.

Localização de Veterinários:
Funcionalidade: Fornecer aos usuários uma lista de veterinários próximos com informações de contato e avaliações.

Comunicação com Veterinários:
Funcionalidade: Permitir que os usuários entrem em contato com veterinários cadastrados para fazer perguntas ou agendar consultas.

### 2. Funcionalidades previstas e não implementadas

Estilização para cada pagina diferente, funcionalidades como agendamento de consultas, retorno sobre atualizações do estado de saude de tempo em tempo, pagina de agradecimento, pagina de contato onde iria retornar minhas informações.

### 3. Outras funcionalidades implementadas
Pagina de Login, por ela ser complicada em questão de autenticação foi um grande desafio que consegui implementar.
### 4. Principais desafios e dificuldades

Os principais desafios e dificuldades enfrentados durante o desenvolvimento do projeto incluíram:

Criação da Página de Login e Autenticação:

A implementação da página de login e autenticação foi desafiadora devido à necessidade de garantir a segurança das informações dos usuários. Foi preciso lidar com conceitos de autenticação, como tokens JWT (JSON Web Tokens), e implementar medidas robustas de segurança, como hashing de senhas.
Utilização de CSS:

Apesar de ser uma linguagem fundamental para o design e layout da aplicação web, a utilização de CSS pode ser desafiadora devido à complexidade de alguns layouts e à necessidade de garantir a compatibilidade com diferentes navegadores. Foi necessário aprender e aplicar técnicas avançadas de CSS para garantir uma aparência consistente e responsiva em toda a aplicação.
Criação das Informações:

Uma dificuldade significativa foi a criação e organização das informações a serem exibidas na aplicação. Isso incluiu decidir quais dados seriam relevantes para os usuários, como organizar essas informações de forma lógica e intuitiva e como apresentá-las de maneira clara e concisa.
Utilização de Linguagens Nunca Utilizadas (Node.js, Express.js, React.js, Vite.js):

O aprendizado e uso de tecnologias novas, como Node.js, Express.js, React.js e Vite.js, representaram um desafio adicional devido à falta de experiência prévia com essas linguagens e frameworks. Foi necessário dedicar tempo para entender os conceitos fundamentais de cada uma dessas tecnologias, bem como aprender as melhores práticas de desenvolvimento.

### 5. Instruções para instalação e execução

1. Instalar o Node.js:
Certifique-se de que o Node.js está instalado em seu sistema. Você pode baixá-lo e instalá-lo a partir do site oficial: Node.js Downloads.

2. Clonar o repositório:
Clone o repositório do projeto para o seu computador usando o Git.

Copy code
git clone <URL_DO_REPOSITORIO>

3. Instalar dependências do servidor (Node.js, Express, Prisma):
Navegue até o diretório raiz do projeto e instale as dependências do servidor utilizando o npm ou yarn:


cd <diretorio_do_projeto>
npm install

4. Configurar o banco de dados com o Prisma:
Configure o banco de dados de acordo com as instruções do Prisma. Certifique-se de ter uma instância do banco de dados em funcionamento e ajuste as configurações de conexão no arquivo schema.prisma.

5. Executar as migrações do banco de dados:
Execute as migrações do banco de dados usando o Prisma CLI:

npx prisma migrate dev

6. Iniciar o servidor Node.js (Express):
Inicie o servidor Node.js que utiliza o Express framework:

npm start

7. Instalar dependências do cliente (React, Vite):
Navegue até o diretório client do projeto e instale as dependências do cliente utilizando o npm ou yarn:

cd client
npm install

8. Iniciar o servidor de desenvolvimento do cliente (Vite):
Inicie o servidor de desenvolvimento do cliente usando Vite:

npm run dev

### 6. Referências
<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->
