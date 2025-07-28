# # Use uma imagem base oficial do Node.js
# FROM node:22

# # Define o diretório de trabalho dentro do contêiner
# WORKDIR /app

# # Copia os arquivos de manifesto de pacotes
# # Fazemos isso primeiro para aproveitar o cache do Docker.
# # A instalação só será executada novamente se o package.json mudar.
# COPY package*.json ./

# # Instala as dependências
# RUN npm install

# # Copia o restante do código-fonte da aplicação.
# # Em desenvolvimento, o volume irá sobrepor isso, mas é útil para builds de produção.
# COPY . .

# # Expõe a porta que o servidor de desenvolvimento usa (ex: 3001 para o header)
# EXPOSE 8310

# # O comando para iniciar o servidor de desenvolvimento
# CMD ["npm", "start"]

# ----NOVO

# Usa a imagem oficial do Node.js como base
FROM node:22

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia APENAS os arquivos de definição de dependências
# Isso aproveita o cache do Docker. Se o package.json não mudar, o npm install não roda de novo.
COPY ./projects/util-ui/package.json ./projects/util-ui/package-lock.json* ./
# Opcional: Se usar yarn, use 'yarn.lock'

# Instala todas as dependências do projeto
RUN npm install

# Agora copia todo o restante do código-fonte do projeto
COPY ./projects/util-ui/ ./

# Expõe a porta que a aplicação vai usar
EXPOSE 8310

# Comando padrão para iniciar a aplicação
CMD ["npm", "start"]
