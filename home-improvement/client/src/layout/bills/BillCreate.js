import React from "react";
import { useHistory } from "react-router-dom";
import { createBill } from "../../utils/api";

function BillCreate () {
  const history = useHistory();
  const [currentBill, setCurrentBill] = React.useState({
    "bill_name": "",
    "bill_website": "",
    "bill_date": "",
    "bill_frequency": "",
    "bill_type": "",
    "bill_amount": "",
  })

  const handleChange = ({ target }) => {
    setCurrentBill({
      ...currentBill,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(currentBill);
    createBill({...currentBill});
    history.push('/')
  }

  return (
    <div className="container-fluid">
      <div className="text-center mb-4">
        <h1 className="display-4 p-3"> Create a New Home Bill </h1>
      </div>
    
      <div className="col-auto offset-3">
        <form className="form-group text-center mb-5" onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-4 form-group">
              <label className="form-label" htmlFor="bill_name"> Name of Bill </label>
              <input
                type="text"
                className="form-control"
                id="bill_name"
                name="bill_name"
                required={true}
                onChange={handleChange}
              />
            </div>

            <div className="col-4 form-group">
              <label className="form-label" htmlFor="bill_website"> Bill Website Link </label>
              <input
                type="text"
                className="form-control"
                id="bill_website"
                name="bill_website"
                required={true}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-4 form-group">
              <label className="form-label" htmlFor="bill_date"> Bill Draw Date </label>
              <input
                type="date"
                className="form-control"
                id="bill_date"
                name="bill_date"
                required={true}
                onChange={handleChange}
              />
            </div>

            <div className="col-4 form-group">
              <label className="form-label" htmlFor="bill_frequency"> Bill Draw Frequency </label>
              <input
                type="text"
                className="form-control"
                id="bill_frequency"
                name="bill_frequency"
                required={true}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-4 form-group">
              <label className="form-label" htmlFor="bill_type"> Fixed or Variable </label>
              <select
                className="form-control"
                id="bill_type"
                name="bill_type"
                required={true}
                onChange={handleChange}
                list="datalistOptions"
              >
                <option selected > Select fixed or variable bill amount </option>
                <option value="Fixed"> Fixed </option>
                <option value="Variable"> Variable </option>
              </select>
            </div>
            <div className="col-4 form-group">
              <label className="form-label" htmlFor="bill_amount"> Enter Bill Amount ($) </label>
              <input
                type="text"
                id="bill_amount"
                name="bill_amount"
                className="form-control"
                required={true}
                onChange={handleChange}
                placeholder="If variable, enter typical $ range"
              />
            </div>
          </div>

          <div className="col-4 offset-2">
            <button type="button" className="btn btn-danger mr-2" onClick={() => history.goBack()}> Cancel </button>
            <button type="submit" className="btn btn-success"> Save Bill </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default BillCreate;