defmodule CohesionWeb.Resolvers.Accounts do
  alias CohesionWeb.Accounts
  # queries
  def list_links(_, _, _), do: {:ok, Accounts.list_links()}
end
