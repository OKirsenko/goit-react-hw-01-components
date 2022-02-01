import PropTypes from "prop-types";
import s from "./FriendsList.module.css";
import Friend from "../friend/Friend";
export default function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
