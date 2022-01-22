import { useEffect, useState } from "react"
import axios from 'axios'
import './Premium.css'


const Premium = () => {
    const [premium, setPremium] = useState([])

    const getPremium = async () => {
        const response = await axios.get('https://apipdtc.herokuapp.com/bulldog/premium')
        const data= response.data
        setPremium(data)
    }

    useEffect(() => {
         getPremium()
    },[])
    return(
        
        <div className="">
            <h2 className="tituloCards my-5">Premium</h2>
           { premium.length > 0 ?
            <div className="all-cards" >
            {premium.map(x => (
                <div className="card bg-dark text-white one-card" key={x.id}>
                <img src={require(`../../assets/img/premium/${x.imagen}.png`)} className="card-img" alt={x.nombre}/>
                <div className="card-img-overlay">
                  <h5 className="card-title">{x.nombre}</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            ))}
            </div>
                :

            ''
        }
            

        </div>
    )
}

export default Premium