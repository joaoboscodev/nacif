defmodule BlogBackendWeb.PostController do
  use BlogBackendWeb, :controller
  alias UUID

  def allposts(conn, _params) do
    #get logic for real database
    post = %{
      id: UUID.uuid4(),
      title: "Post de Teste",
      body: "Este é um post de teste criado para demonstração."
    }
    json(conn, [post])
  end

  def create(conn, %{"title" => title, "body" => body}) do
    #create logic for real database
    new_post = %{
      id: UUID.uuid4(),
      title: title,
      body: body
    }
    json(conn, new_post)
  end

  def delete(conn, %{"id" => _id}) do
    #delete logic for real database
    send_resp(conn, :no_content, "")
  end

  def update(conn, %{"id" => id, "title" => title, "body" => body}) do
    #update logic for real database
    updated_post = %{
      id: id,
      title: title,
      body: body
    }
    json(conn, updated_post)
  end
end
