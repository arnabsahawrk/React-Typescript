// import { useState } from "react";
import "./App.css";
import NewUser from "./components/NewUser";
// import ButtonStyle from "./components/ButtonStyle";
// import Button from "./components/Button";
// import DataFetch from "./components/DataFetch";
// import User from "./components/User";
// import UserDemo from "./components/UserDemo";

// const User = [
//   {
//     id: 1,
//     name: "Arnab Saha",
//     email: "arnabsaha@gmail.com",
//     age: 25,
//   },
//   {
//     id: 2,
//     name: "Riya Saha",
//     email: "riyasaha@gmail.com",
//     age: 24,
//   },
// ];

export type User = {
  id: number;
  name: string;
};

function App() {
  // const [user, setUser] = useState<null | User>(null);
  // const [user, setUser] = useState<User>({} as User);

  return (
    <div className="App">
      <h1>React Typescript</h1>
      {/* <User
        name="Arnab Saha"
        age={25}
        isRegistered={true}
        lang={["English", "Bangla", "Hindi"]}
      /> */}
      {/* <UserDemo users={User} /> */}
      {/* <DataFetch status="loading" /> */}
      {/* <Button>Click Me</Button> */}
      {/* <ButtonStyle
        btnStyle={{
          color: "red",
          background: "white",
          border: "2px dotted #000",
        }}
        setUser={setUser}
      />
      <p>{user.name}</p> */}
      <NewUser />
    </div>
  );
}

export default App;
