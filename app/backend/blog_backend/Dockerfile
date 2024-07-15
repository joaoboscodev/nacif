FROM elixir:1.14-alpine

WORKDIR /app

RUN apk add --no-cache build-base npm git inotify-tools

RUN mix local.hex --force && \
    mix local.rebar --force

COPY . .

RUN mix do deps.get, deps.compile

EXPOSE 4000
