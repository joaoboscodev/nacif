defmodule BlogBackendWeb.Router do
  use BlogBackendWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BlogBackendWeb do
    pipe_through :api

    post "/login", AuthController, :login
    get "/posts", PostController, :allposts
    post "/posts", PostController, :create
    delete "/posts/:id", PostController, :delete
  end
end
