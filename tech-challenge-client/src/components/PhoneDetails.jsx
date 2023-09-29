import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function PhoneDetails(phoneId) {

    const [thisPhone, setThisPhone] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const params = useParams() 

    console.log("quiero mostrar los detalles", params);

    useEffect(()=>{
        getPhoneDetails()
    },[])

    const getPhoneDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/phones/${params.phoneId}`)
            
                console.log("movil elegido", response.data);

                setThisPhone(response.data)
                setErrorMessage(null)           
           
            console.log(response, "este es mi movil response.data");
        } catch (error) {

            setErrorMessage("Error")
        }
    }
    if(thisPhone === null){
        return
    }
  return (
    <div>
        <h1>PhoneDetails</h1>
        <h3>{thisPhone.name}</h3>
        <img src={`src/assets/images/${thisPhone.imageFileName}`} alt="" />
        <p>Compañia: {thisPhone.manufacturer}</p>
        <p>Descripcion: {thisPhone.description}</p>
        <p>Pantalla: {thisPhone.screen}</p>
        <p>Procesador: {thisPhone.processor}</p>
        <p>Memoria Ram: {thisPhone.ram}</p>
        <p>Color: {thisPhone.color}</p>
        <p>Price: {thisPhone.price}</p>

        
    </div>
  )
}

export default PhoneDetails