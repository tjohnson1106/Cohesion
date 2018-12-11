defmodule Cohesion.Repo do
  use Ecto.Repo,
    otp_app: :cohesion,
    adapter: Ecto.Adapters.Postgres
end
