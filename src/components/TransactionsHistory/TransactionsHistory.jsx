// ======2 Variant=========================
// import {
//   Table,
//   Thead,
//   Tr,
//   Th,
//   Tb,
//   Td,
//   Type,
//   ExtendedTr,
// } from './TransactionHistory.styled';

// import React from 'react';
// import PropTypes from 'prop-types';
// import css from './TransactionsHistory.module.css';
// export const TransactionsHistory = (props) => {
//     const { items } = props;

// console.log(props);
// return (
// <Table>
//   <Thead>
//     <Tr>
//       <Th>Type</Th>
//       <Th>Amount</Th>
//       <Th>Currency</Th>
//     </Tr>
//   </Thead>

//     <Tbody>
//       {items.map((item) => (
      
//     <Tr  key={item.id}>
//       <Td >{item.type}</Td>
//       <Td >{item.amount}</Td>
//       <Td >{item.currency}</Td>
//       </Tr>
//       ))}
//     {/* <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr> */}
//   </Tbody>
// </Table>
// )
// };

// TransactionsHistory.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ).isRequired
// } 





// ======================1 Variant=================
import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';
export const TransactionsHistory = (props) => {
    const { items } = props;

console.log(props);
return (
<table className= {css.history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
      {items.map((item) => (
      
    <tr  key={item.id}>
      <td className={css.type}>{item.type}</td>
      <td className={css.amount}>{item.amount}</td>
      <td className={css.currency}>{item.currency}</td>
      </tr>
      ))}
    {/* <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr> */}
  </tbody>
</table>
)
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired
} 


