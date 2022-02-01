import PropTypes from "prop-types";
import s from "./Friend.module.css";
export default function Friend({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? "maroon" : "green" }}
      ></span>
      <img className={s.img} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
