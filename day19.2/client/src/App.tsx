import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

const GET_USERS_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      age
      name
      isMarried
    }
  }
`;

interface User {
  id: string;
  name: string;
  age: number;
  isMarried: boolean;
}

function App() {
  const {
    data: getUsersData,
    error: getUsersError,
    loading: getUsersLoading,
  } = useQuery(GET_USERS);
  const { data: getUserByIdData, error: getUserByIdError, loading: getUserByIdLoading } = useQuery(GET_USERS_BY_ID);

  if (getUsersLoading) return <p>Data loading...</p>;

  if (getUsersData) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <div>
        {getUsersData.getUsers.map((user: User) => (
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Married: {user.isMarried}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
