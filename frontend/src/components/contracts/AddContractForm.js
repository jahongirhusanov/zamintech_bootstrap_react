import React, { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
// import '../../styles/contracts/addForm.css'
import "./addcontractform.scss";
import Axios from "axios";
import AddContractFormHeader from "./AddContractFormHeader";
import AddContractCustomerForm from "./AddContractCustomerForm";
import AddContractCustomer from "./AddContractCustomer";
import AddContractContractNumber from "./AddContractContractNumber";

function AddCustomerForm() {
  const [loading, setLoading] = useState(true);
  // const [customer, setCustomer] = useState({})
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const [data, setData] = useState({
    id: "",
    fName: "",
    lName: "",
    pasportNum: "",
    addressStreet: "",
    addressCity: "",
  });

  useEffect(() => {
    async function fetchMyApi() {
      const url = "http://localhost:3001/customers";
      const res = await fetch(url);
      const states = await res.json();
      console.log(states[2].pasportNum);
      setSearchResults(states);
    }
    fetchMyApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearchInput(event) {
    setSearchText(event.target.value);
  }

  // function inputHandler(e) {
  //   const newData = { ...data }
  //   newData[e.target.id] = e.target.value
  //   setData(newData)
  // }

  function passInfo() {
    const newData = { ...data };
    setData(newData);
  }

  return (
    <form>
      <Col>
        <Row className="contractContainer">
          <AddContractFormHeader />
          {/* <AddContractCustomer /> */}

          {/* ======================== AddContractCustomer ======================== */}
          <Col xs={12} md={6}>
            <Col xs={12} md={6}>
              <div
                className="col-auto"
                style={{ width: "70%", position: "relative", padding: 0 }}
              >
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="searchText"
                    placeholder="Passport рақам киритинг ..."
                    value={searchText}
                    onChange={handleSearchInput}
                  />
                  <div className="input-group-prepend">
                    <div
                      className="input-group-text"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-search"></i>
                    </div>
                  </div>
                </div>
                {searchResults
                  .filter((val) => {
                    if (searchText === "") {
                      return val;
                    } else if (
                      val.pasportNum
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((state, key) => {
                    return (
                      <div key={state.id} {...state}>
                        <Alert.Link
                          className="passportSearchResult"
                          href="#"
                          onClick={() => passInfo}
                        >
                          {state.pasportNum}
                        </Alert.Link>
                        {/* <a href="#" className='passportSearchResult'>
                          {state.pasportNum}
                        </a> */}
                      </div>
                    );
                  })}
              </div>{" "}
              <br />
              <div
                className="form-group"
                style={{ width: "70%", marginBottom: "8px" }}
              >
                <input
                  readOnly
                  type="text"
                  className="form-control-plaintext form-control form-control-sm"
                  name=""
                  id=""
                  placeholder="Исм Фамилия"
                  value={data.fName}
                />
              </div>
              <div
                className="form-group"
                style={{ width: "70%", marginBottom: "8px" }}
              >
                <input
                  readOnly
                  type="text"
                  className="form-control-plaintext form-control form-control-sm"
                  name=""
                  id=""
                  placeholder="Манзил (Уй Рақами # ва Кўча Номи)"
                  value={data.addressStreet}
                />
              </div>
              <div
                className="form-group"
                style={{ width: "70%", marginBottom: "8px" }}
              >
                <input
                  readOnly
                  type="text"
                  className="form-control-plaintext form-control form-control-sm"
                  name=""
                  id=""
                  placeholder="Манзил (Туман, Вилоят)"
                  value={data.addressCity}
                />
              </div>
            </Col>
          </Col>

          {/* ================================= */}

          <AddContractContractNumber />

          <Col md={12} className="text-center">
            <Link to="/contract-customer-form-add">
              <button type="submit" className="btn btn-primary">
                ҚЎШИШ
              </button>
            </Link>
          </Col>
        </Row>
      </Col>
    </form>
  );
}

export default AddCustomerForm;
