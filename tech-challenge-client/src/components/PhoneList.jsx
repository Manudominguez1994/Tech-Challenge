import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PhoneDetails from "./PhoneDetails";
import { Route, Routes } from "react-router-dom";

export default function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [phoneId, setPhoneId] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getListofPhone();
  }, []);

  const getListofPhone = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      console.log("response.data", response.data);
      setPhones(response.data);
    //   setPhoneId(response.data.id);
      setErrorMessage(null);
    } catch (error) {
      setPhones([]);
      setErrorMessage("Error");
    }
  };
  const getPhoneId = (id) => {
    setPhoneId(id)
    // console.log(phoneId,"esta es la id de mi movil");
  }

  // console.log("Mi lista de telefonos",phones);
//   console.log(phoneId);

  return (
    <>
      <div>
        <h2>Lista de Moviles</h2>
        {phones.map((eachPhone) => {
          return (
            <>
              <Link to={`/${eachPhone.id}`}>
                <button onClick={() => getPhoneId(eachPhone.id)}>
                  <h3 key={eachPhone.id}>{eachPhone.name}</h3>
                </button>
              </Link>
            </>
          );
        })}
      </div>
      {/* <div>
        {phoneId !== null ?   (<PhoneDetails phoneId={phoneId} />) : (<p>Elige un dispositivo</p>)}
        
      </div> */}
     
    </>
  );
}
