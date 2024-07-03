defmodule BlogBackendWeb.PostController do
  use BlogBackendWeb, :controller

  def index(conn, _params) do
    post = %{
      id: 1,
      title: "Post de Teste",
      body: "Este é um post de teste"
    }
    json(conn, [post])
  end

  def create(conn, %{"title" => title, "body" => body}) do
    new_post = %{
      id: 2,
      title: title,
      body: body
    }
    json(conn, new_post)
  end
end
