defmodule BlogBackendWeb.Endpoint do
  use Phoenix.Endpoint, otp_app: :blog_backend

  plug CORSPlug

  plug Plug.RequestId
  plug Plug.Telemetry, event_prefix: [:phoenix, :endpoint]

  plug Plug.Parsers,
    parsers: [:urlencoded, :multipart, :json],
    pass: ["*/*"],
    json_decoder: Phoenix.json_library()

  plug Plug.MethodOverride
  plug Plug.Head
  plug Plug.Session, store: :cookie, key: "_blog_backend_key", signing_salt: "random_salt"

  plug BlogBackendWeb.Router
end
