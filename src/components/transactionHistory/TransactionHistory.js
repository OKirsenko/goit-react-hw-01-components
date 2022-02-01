import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
import Transaction from "../transaction/Transaction";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.header}>Type</th>
          <th className={s.header}>Amount</th>
          <th className={s.header}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
