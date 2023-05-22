import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'



const CreateVehiculo = () => {
    const [data1, setData1] = useState([
        {
            "id":"1",
            "nombre":"rojo",
            "valor":"#f00"
        },
        {
            "id":"2",
            "nombre":"verde",
            "valor":"#0f0"
        },
        {
            "id":"3",
            "nombre":"azul",
            "valor":"#00f"
        }
    
    ]);

    const [data, setData] = useState([]);

   
       
      
        useEffect(() => {
          fetch('https://www.datos.gov.co/resource/xd5-pm3f.json')
            .then(response => response.json())
            .then(datos => setData([{
                "id":"1",
                "nombre":"rojo",
                "valor":"#f00"
            },
            {
                "id":"2",
                "nombre":"verde",
                "valor":"#0f0"
            },
            {
                "id":"3",
                "nombre":"azul",
                "valor":"#00f"
            }]));
            
        }, []);

        console.log(data.nombre);

       
      
        return (
            <>
          <select>
            {data.map((item) => 
              <option key={item.id} value={item.nombre}>
                {item.nombre}
              </option>
            )}
          </select>
          </>
        );
}

export default CreateVehiculo