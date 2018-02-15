FROM library/node:9-slim

# Update aptitude with new repo
RUN apt-get update

# Install git 
RUN apt-get install -y git && \
    apt-get clean

# # Install prerequisites for PanDoc
# RUN apt-get install -y wget texlive-latex-base texlive-fonts-recommended && \
#     apt-get install -y texlive-fonts-extra texlive-latex-extra && \
#     apt-get clean

# Install PanDoc
# RUN wget https://github.com/jgm/pandoc/releases/download/1.17.0.2/pandoc-1.17.0.2-1-amd64.deb && \
#     dpkg -i pandoc* && \
#     rm pandoc* && \
#     apt-get clean

WORKDIR /app

COPY . /app

RUN npm install && ./node_modules/bower/bin/bower --allow-root install && npm run build

CMD ["npm", "start", "--production"]
