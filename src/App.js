import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendsList from "./components/friends/FriendsList";
import friends from "./friends.json";
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
      <FriendsList friends={friends} />
    </main>
  );
}
