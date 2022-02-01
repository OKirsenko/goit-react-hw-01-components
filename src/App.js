import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";
import FriendsList from "./components/friendsList/FriendsList";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import friends from "./data/friends.json";
import user from "./data/user.json";
import data from "./data/data.json";
import items from "./data/transactions.json";
import Main from "./components/main/Main";

export default function App() {
  return (
    <Main>
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
    </Main>
  );
}
