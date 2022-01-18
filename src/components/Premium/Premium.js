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
        
        <div className="position-relative">
            <h2 className="tituloCards my-5">Premium</h2>
           { premium.length > 0 ?
           <div className="d-flex justify-content-between container mt-5 " style={{width: "100%", height:"350px"}} >
           {premium.map(x => (
               <div className="card bg-dark text-white" style={{width: "24%"}} key={x.id}>
                   <div>
                        <img src={require(`../../assets/img/premium/${x.imagen}.png`)} className="card-img" />
                        <div className="card-img-overlay bg-custom">
                            <div className="info">
                                <h5 className="card-title">{x.nombre}</h5>
                                <ul>
                                {x.ingredientes.map(ingre =>(
                                    <li key={ingre}>{ingre}</li>
                                ))}
                                </ul>
                                <p className="card-text text-center precio-card warning"> ${x.precio} </p>
                            </div>
                        </div>
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