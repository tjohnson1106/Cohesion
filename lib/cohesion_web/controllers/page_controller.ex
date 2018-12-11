defmodule CohesionWeb.PageController do
  use CohesionWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
