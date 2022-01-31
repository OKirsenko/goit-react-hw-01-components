import Friend from "./Friend";
import PropTypes from "prop-types";
export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <li className="item" key={friend.id}>
          <Friend
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
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
