import "./App.css";
// import User from "./components/User";
import UserDemo from "./components/UserDemo";

const User = [
  {
    id: 1,
    name: "Arnab Saha",
    email: "arnabsaha@gmail.com",
    age: 25,
  },
  {
    id: 2,
    name: "Riya Saha",
    email: "riyasaha@gmail.com",
    age: 24,
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Typescript</h1>
      {/* <User
        name="Arnab Saha"
        age={25}
        isRegistered={true}
        lang={["English", "Bangla", "Hindi"]}
      /> */}
      <UserDemo users={User} />
    </div>
  );
}

export default App;
