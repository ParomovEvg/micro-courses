import React from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { getUsersQuery } from "./queries/getUsers.query";
import { GetUsersQuery } from "./queries/types/GetUsersQuery";

function App() {
  const { loading, data } = useQuery<GetUsersQuery>(getUsersQuery);

  return (
    <div className="App">
      {data?.users.map((i) => {
        return (
          <p>
            {i.email} {i.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
