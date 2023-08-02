import { useState } from "react";
import "./styles.css";

export default function App() {
  const [userDetails, setUserdetails] = useState({
    fName: "",
    contact: "",
    contactGroup: ""
  });
  const [contactlist, setcontactlist] = useState([]);

  const handleChange = (event, key) => {
    setUserdetails({
      ...userDetails,
      [key]: event.target.value
    });
  };
  const submit = () => {
    setcontactlist((prevalues) => [...prevalues, userDetails]);

    console.log("submit called");
  };

  const cancel = () => {
    userDetails.fname = "";
    userDetails.contact = "";
    userDetails.contactgroup = "";
  };
  console.log(userDetails);

  const display = contactlist.map((value, i) => (
    //   <div className="result">
    //   <span className="row">{`${i + 1}
    //    ${value.fName}
    //    ${value.contact}
    //    ${value.contactGroup}`}
    //  <br/>
    //  <br/>
    //  <button className="edit">edit</button>
    //  <button className="delete" >delete</button>
    //  <hr/>
    //   </span>
    //   </div>
    <div class="data">
      <div className="card">
        {`Ccode`}
        &nbsp;
        {i + 1}
        <br />
        <br />
        <label>name&nbsp;&nbsp;&nbsp;&nbsp;:</label>
        {value.fName}
        <br />
        <br />
        <label>contact :</label>
        {value.contact}
        <br />
        <br />
        <label>cGroup :</label>
        {value.contactGroup}
        <br />
        <br />
        <button className="edit">edit</button>
        <button className="delete">delete</button>
      </div>
    </div>
  ));
  return (
    <div className="App">
      <div classname="clist">
        <div className="contact">
          <h1>Enter your contact details</h1>
        </div>
        <div class="form">
          <input
            classname="input"
            type="text"
            placeholder="full name"
            onChange={(event) => handleChange(event, "fName")}
          />
          <br />
          <br />
          <input
            classname="input"
            type="number"
            placeholder="contact number"
            onChange={(event) => handleChange(event, "contact")}
          />
          <br />
          <br />
          <input
            classname="input"
            type="text"
            placeholder="contact group"
            onChange={(event) => handleChange(event, "contactGroup")}
          />
          <br />
          <br />
          <button className="submit" onClick={submit}>
            submit
          </button>
          <button className="cancel" onClick={cancel}>
            cancel
          </button>
        </div>
      </div>

      <h1>Your contact details appear here</h1>
      {display}
    </div>
  );
}
