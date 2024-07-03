defmodule BlogBackendWeb.PostController do
  use BlogBackendWeb, :controller
  alias UUID

  def allposts(conn, _params) do
    # here: get logic if using real database
    post = %{
      id: UUID.uuid4(),
      title: "Post de Teste",
      body: "Este é um post de teste criado para demonstração."
    }
    json(conn, [post])
  end

  def create(conn, %{"title" => title, "body" => body}) do
    # here: create logic if using real database
    new_post = %{
      id: UUID.uuid4(),
      title: title,
      body: body
    }
    json(conn, new_post)
  end

  def delete(conn, %{"id" => _id}) do
    # here: delete logic if using real database
    send_resp(conn, :no_content, "")
  end
end
