type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export default async function UsersServer() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user: User) => (
        <li
          className="p-4 shadow-md bg-white text-gray-700 rounded-lg"
          key={user.id}
        >
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
