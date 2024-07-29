import UserCard from "./components/UserCard";

function App() {
  const user = {
    name: "Test",
    surname: "Testov",
    nickName: "@test",
    userPhoto: "./userPhoto.png",
    followers: 718,
  };

  return <UserCard user={user} />;
}

export default App;
