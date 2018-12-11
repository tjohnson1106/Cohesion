alias Cohesion.Repo
alias Cohesion.Accounts.{User, Link, Vote}

Repo.delete_all(User)

expert =
  %User{}
  |> User.changeset(%{
    name: "Expert",
    email: "expert@user.io",
    password: "expert"
  })
  |> Repo.insert!()

newb =
  %User{}
  |> User.changeset(%{
    name: "Newb",
    email: "newb@user.io",
    password: "newb"
  })
  |> Repo.insert!()

relay =
  %Link{
    url: "https://facebook.github.io/relay/",
    description: "Highly performant GraphQL client from Facebook",
    user_id: expert.id
  }
  |> Repo.insert!()

absinthe =
  %Link{
    url: "https://hexdocs.pm/absinthe/overview.html",
    description: "Elixir's implementation of GraphQL",
    user_id: expert.id
  }
  |> Repo.insert!()
