import PropTypes from "prop-types";
import s from "./Transaction.module.css";

export default function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
