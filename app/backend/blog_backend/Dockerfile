#criando imagem base
FROM elixir:1.14-alpine

#diretório
WORKDIR /app

#instalo dependencias 
RUN apk add --no-cache build-base npm git inotify-tools

# COPY mix.exs mix.lock ./

#instalo o gerenciador do elixir e o rebar pra construção do erlang
RUN mix local.hex --force && \
    mix local.rebar --force

#copio conteúdo do diretorio local pra o do conteiner
COPY . .

#baixa e compila as dependencias do elixir
RUN mix do deps.get, deps.compile

EXPOSE 4000
