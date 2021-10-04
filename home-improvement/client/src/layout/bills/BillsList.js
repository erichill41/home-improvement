import React from "react";
import { useHistory } from "react-router-dom";
import { deleteBill, listBills } from "../../utils/api";

function BillList() {
  const history = useHistory();
  const [bills, setBills] = React.useState([]);

  const handleDelete = (event) => {
    event.preventDefault();
    const confirmed = window.confirm(
      "Delete this bill?\n\nYou can't recover it."
    );
    if (confirmed) {
      console.log(event.target.value);
      deleteBill(event.target.value)
        .then(() => history.push('/bills'))
    }
  }

  function loadBills() {
    const abortController = new AbortController();
    listBills().then(setBills)
    return () => abortController.abort();
  }

  React.useEffect(loadBills, [history]);

  const billsList = bills.map((bill) => {
    return (
      <tr key={bill.bill_id}>
        <th scope="row">{bill.bill_id}</th>
        <td>{bill.bill_name}</td>
        <td>{bill.bill_website}</td>
        <td>{bill.bill_date}</td>
        <td>{bill.bill_frequency}</td>
        <td>{bill.bill_type}</td>
        <td>{bill.bill_amount}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => history.push('/bills/edit')}
            value={bill.bill_id}
          >Edit Bill</button></td>
        <td>
          <button
            className="btn btn-info"
            onClick={handleDelete}
            value={bill.bill_id}  
          >Delete Bill</button>
        </td>
      </tr>
    )
  })

  console.log('BILLS LOADED --->', bills);

  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h3 className="display-4 p-3"> Bills List </h3>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col"> ID </th>
            <th scope="col"> Name </th>
            <th scope="col"> Website </th>
            <th scope="col"> Date Pulled </th>
            <th scope="col"> Frequency </th>
            <th scope="col"> Variable/Fixed </th>
            <th scope="col"> Amount in $ </th>
            <th scope="col"> Edit Bill </th>
            <th scope="col"> Delete Bill </th>
          </tr>
        </thead>
        <tbody>{billsList}</tbody>
      </table>
    </div>
  );
}

export default BillList;