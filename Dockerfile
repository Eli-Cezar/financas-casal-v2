# Usa imagem oficial do Node
FROM node:18-alpine

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que a aplicação usa
EXPOSE 3000

# Comando padrão para iniciar
CMD ["npm", "start"]
