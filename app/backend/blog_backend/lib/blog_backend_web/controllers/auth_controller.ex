defmodule BlogBackendWeb.AuthController do
  use BlogBackendWeb, :controller

  def login(conn, %{"username" => username, "password" => password}) do
    if username == "a" and password == "p" do
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
