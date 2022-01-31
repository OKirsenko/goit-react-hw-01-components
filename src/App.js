import Profile from "./components/profile/Profile";
import user from "./user.json";
export default function App() {
  return (
    <main>
      <Profile
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
        tag={user.tag}
        username={user.username}
      />
    </main>
  );
}
