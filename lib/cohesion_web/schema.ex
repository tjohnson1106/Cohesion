defmodule CohesionWeb.Schema do
  use Absinthe.Schema
  use Absinthe.Relay.Schema, :modern
  import Absinthe.Resolution.Helpers

  alias CohesionWeb.Resolvers
  alias Cohesion.Accounts

  def middleware(middleware, field, object) do
    middleware
    |> apply(:errors, field, object)
    |> apply(:debug, field, object)
  end

  defp apply(middleware, :errors, _field, %{
         identifier: :mutation
       }) do
    middleware ++ [CohesionWeb.Middleware.ChangesetErrors]
  end

  defp apply(middleware, :debug, _field, _object) do
    if System.get_env("DEBUG") do
      [{CohesionWeb.Middleware.Debug, :start}] ++ middleware
    else
      middleware
    end
  end

  defp apply(middleware, _, _, _), do: middleware

  def plugins,
    do: [
      Absinthe.Middleware.Dataloader
      | Absinthe.Plugin.defaults()
    ]

  def context(ctx), do: Map.put(ctx, :loader, dataloader())

  def dataloader(),
    do:
      Dataloader.new()
      |> Dataloader.add_source(Accounts, Accounts.data())

  # =======
  # query do
  #   
  # end

  object :user do
    field :id, non_null(:id)
    field :name, :string
    field :email, non_null(:string)
    field :password, non_null(:string)
  end

  object :link do
    field :id, non_null(:id)
    field :url, non_null(:string)
    field :description, :string
    field :posted_by, :user, resolve: dataloader(Accounts)
  end

  object :vote do
    field :id, non_null(:id)
    field :user, non_null(:user)
    field :link, non_null(:link)
  end

  # ==========
  # mutation do
  #   
  # end

  # ==============
  # subscription do
  #  
  # end
end
