defmodule Cohesion.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  #  has many links and votes // Accounts

  schema "users" do
    field :email, :string
    field :name, :string
    field :password, Comeonin.Ecto.Password
    has_many :links, Cohesion.Accounts.Link
    has_many :votes, Cohesion.Accounts.Vote

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password])
    |> validate_required([:email, :password])
    |> validate_length(:password, min: 8)
    |> validate_format(:email, ~r/^\w+@\w+\.\w{2,}$/)
    |> unique_constraint(:email)
  end
end
