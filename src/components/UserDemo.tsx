type UserDetails = {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
};

const UserDemo = ({ users }: UserDetails) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDemo;
