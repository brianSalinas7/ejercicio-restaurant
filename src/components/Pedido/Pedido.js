import axios from 'axios'
import { useEffect, useState } from 'react'
import './Pedido.css'



function Pedido() {

  const [ingredientes, setIngredientes] = useState([])
  const [seleccionados, setSeleccionados] = useState([])
  const [precioTotal, setPrecioTotal] = useState(350)

  const getIngredientes = async () => {
      const response = await axios.get('https://apipdtc.herokuapp.com/bulldog/ingredientes')
      const data= response.data
      setIngredientes(data)
  }

  const agregarSeleccionados = (ingrediente, precio) =>{
      setSeleccionados([ingrediente, ...seleccionados])
      setPrecioTotal(precioTotal+precio)
  }

  const eliminarSeleccionados = (id,precio) =>{
   setSeleccionados(seleccionados.filter(selec => selec.id != id))
   setPrecioTotal(precioTotal-precio)
  }

   useEffect(()=>{
     getIngredientes()
   },[])
   
  return (
    <div>
      <h2 className='text-center mt-4 tituloCards'>Crea tu pedido</h2>
    <div className='d-flex justify-content-between align-item-center container  mt-5 pt-3 position-relative' style={{height: "550px"}}>
      <div className='mt-5 ms-5'>
      {ingredientes.map(x => (
        <button key={x.id} className='btn d-flex justify-content-between align-items-center btn-outline-danger mt-1'onClick={()=> agregarSeleccionados(x,x.precio)} style={{width: '400px'}} disabled={seleccionados.find(selec => selec.id === x.id)? true : false}>
          <div className='d-flex align-items-center'> 
            <img style={{width: "30px", margin: "auto 10px"}} src={require(`../../assets/img/ingredientes/${x.imagen}.png`)} />
            {x.nombre} 
          </div>
          <div>
            <p className='align-items-center'>${x.precio}</p>
          </div>
        </button>
      ))}
      </div>

      <div style={{width: "400px", margin: "auto"}}>
        {seleccionados.length === 0 ?

          <h2>Elegi tu promo🍔🍟</h2>
        :
        <>
        <div className='ingredientes-agregados '>  
              <button  className='btn d-flex justify-content-between align-items-center btn-danger ' style={{width: '400px'}}>
                  <div className='d-flex align-items-center'> 
                    <img style={{width: "20px", margin: "auto 10px"}} src={require(`../../assets/img/ingredientes/Carne.png`)} />
                    <p>Paty</p> 
                  </div>
                  <div>
                    <p className='align-items-center'>$350</p>
                  </div>
              </button>
            
            {seleccionados.map(x =>(
              <button key={x.id} className='btn d-flex justify-content-between align-items-center btn-danger mt-1' style={{width: '400px'}} >
                  <div className='d-flex align-items-center'> 
                    <img style={{width: "20px", margin: "auto 10px"}} src={require(`../../assets/img/ingredientes/${x.imagen}.png`)} />
                    <p>{x.nombre}</p>
                  </div>
                  <div>
                      <i class="bi bi-trash-fill" onClick={()=> eliminarSeleccionados(x.id, x.precio)}></i>
                  </div>
              </button>
          ))}
          
        </div>
        <h3 className='position-absolute  bottom-0 end-50 btn btn-warning totalbtn '>Total: ${precioTotal}</h3>
        
        </>
        
      }
      
      </div>
    </div>
    </div>
  );
}

export default Pedido;
