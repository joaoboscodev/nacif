defmodule BlogBackendWeb.AuthController do
  use BlogBackendWeb, :controller

  def login(%{"username" => username, "password" => password}) do
    IO.inspect(%{"username" => username, "password" => password}")
    if username == "admin" and password == "password" do
      conn
      |> put_status(:ok)
      |> json(%{message: "Login successful"})
    else
      conn
      |> put_status(:unauthorized)
      |> json(%{error: "Invalid credentials"})
    end
  end
end
