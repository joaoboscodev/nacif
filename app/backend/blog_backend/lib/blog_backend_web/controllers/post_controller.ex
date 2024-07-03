defmodule BlogBackendWeb.PostController do
  use BlogBackendWeb, :controller

  def index(conn, _params) do
    # Post de teste
    post = %{
      id: 1,
      title: "Post de Teste",
      body: "Este é um post de teste criado para demonstração."
    }
    json(conn, [post])
  end
end
