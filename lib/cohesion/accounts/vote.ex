defmodule Cohesion.Accounts.Vote do
  use Ecto.Schema
  import Ecto.Changeset


  schema "votes" do
    belongs_to :user, Cohesion.Accounts.User
    belongs_to :link, Cohesion.Accounts.Link

    timestamps()
  end

  @doc false
  def changeset(vote, attrs) do
    vote
    |> cast(attrs, [])
    |> validate_required([])
    |> foreign_key_constraint(:user)
    |> foreign_key_constraint(:link)
  end
end
