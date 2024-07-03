defmodule BlogBackendWeb.Router do
  use BlogBackendWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BlogBackendWeb do
    pipe_through :api

    post "/login", AuthController, :login
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:blog_backend, :dev_routes) do
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: BlogBackendWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
