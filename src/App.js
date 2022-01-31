import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import user from "./user.json";
import data from "./data.json";
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
      <Statistics stats={data} title="Upload stats" />
    </main>
  );
}
