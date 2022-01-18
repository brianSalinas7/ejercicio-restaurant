import { useEffect, useState } from "react"
import axios from 'axios'
import './Buscadas.css'


const Buscadas = () => {
    const [buscadas, setBuscadas] = useState([])

    const getBuscadas = async () => {
        const response = await axios.get('https://apipdtc.herokuapp.com/bulldog/buscadas')
        const data= response.data
        setBuscadas(data)
    }

    useEffect(() => {
        getBuscadas()
    },[])
    return(
        <div className="position-relative">
            <h2 className="tituloCards my-5">Clasicas</h2>
           { buscadas.length > 0 ?
           <div className="d-flex justify-content-between container mt-5 card-responsive" style={{width: "100%", height:"350px"}} >
           {buscadas.map(x => (
               <div className="card bg-dark text-white" style={{width: "24%"}} key={x.id}>
                   <div>
                        <img src={require(`../../assets/img/buscadas/${x.imagen}.png`)} className="card-img" />
                        <div className="card-img-overlay bg-custom">
                            <div className="info">
                                <h5 className="card-title">{x.nombre}</h5>
                                <ul>
                                {x.ingredientes.map(ingre =>(
                                    <li>{ingre}</li>
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

export default Buscadas