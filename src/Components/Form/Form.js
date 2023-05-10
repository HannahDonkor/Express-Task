import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./Form.css";
import { IoMdPerson, IoMdMail, IoMdCall } from "react-icons/io"
import { IoMaleFemale } from "react-icons/io5"

const Form = () => {
  // const [users, setUsers] = useState()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [selected, setSelected] = useState(false);


 

  const randomUser = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        // console.log (data)

        // setUsers(data.results[0])
        setName(data.results[0].name.first + " " + data.results[0].name.last);
        setEmail(data.results[0].email);
        setPhone(data.results[0].phone);
        // setGender(data.results[0].gender);
        setGender(CapitalisedFirstLetter(data.results[0].gender));
      
      });

      const CapitalisedFirstLetter = (text) => {
        let newWord = ''
        for (let i=0; i<text.length; i++) {
          if(i===0){
            newWord += text[i].toUpperCase()
            continue
          }
          newWord += text[i]
        }
        return newWord
    
      }
  };

  useEffect(() => {
    randomUser();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleGenderChange = (word) => {
    setGender(word);
    toggleCollapse();
  };


  const toggleCollapse = () => {
    // if (selected === name){
    //   return setSelected(null)
    // }
    setSelected(!selected);
  };

  return (
    <div className="main-container">
      <h3>Customer details</h3>
      <div className="container">
        <form>
          <div className="form-text">
            <label htmlFor="user-name" className="form-label"><IoMdPerson/></label>
            <input
              type="text"
              className="form-control"
              id="user-name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-text">
            <label htmlFor="user-email" className="form-label">< IoMdMail/></label>
            <input
              type="email"
              className="form-control"
              id="user-email"
              name="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-text">
            <label htmlFor="user-phone" className="form-label">< IoMdCall/></label>
            <input
              type="tel"
              className="form-control"
              id="user-phone"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form-text">
            <label htmlFor="user-gender" className="form-label">< IoMaleFemale/></label>
            <Dropdown
              name={gender}
              toggleGender={handleGenderChange}
              selected={selected}
              toggleCollapse={toggleCollapse}
            />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        
        </form>
      </div>
    </div>
  );
};

export default Form;
