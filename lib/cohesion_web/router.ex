defmodule CohesionWeb.Router do
  use CohesionWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :api

    forward "/api", Absinthe.Plug, schema: CohesionWeb.Schema

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: CohesionWeb.Schema,
      socket: CohesionWeb.UserSocket
  end

  # Other scopes may use custom stacks.
  # scope "/api", CohesionWeb do
  #   pipe_through :api
  # end
end
