defmodule BlogBackendWeb.PostController do
  use BlogBackendWeb, :controller

  def index(conn, _params) do
    posts = [
      %{id: 1, title: "First Post", body: "This is the first post"},
      %{id: 2, title: "Second Post", body: "This is the second post"}
    ]
    json(conn, posts)
  end
end
