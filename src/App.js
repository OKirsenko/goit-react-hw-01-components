import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendsList from "./components/friendsList/FriendsList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import friends from "./data/friends.json";
import user from "./data/user.json";
import data from "./data/data.json";
import items from "./data/transactions.json";

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
      <TransactionHistory items={items} />
    </main>
  );
}
