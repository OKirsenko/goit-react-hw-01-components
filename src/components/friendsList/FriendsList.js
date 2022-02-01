import Friend from "../friend/Friend";
import PropTypes from "prop-types";
export default function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
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
