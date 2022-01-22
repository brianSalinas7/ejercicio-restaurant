import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
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

  const eliminarTodo = () =>{
    setSeleccionados([])
    setPrecioTotal(350)
  }

  const compraExitosa = () =>{
      Swal.fire({
        icon: 'success',
        title: '<h3 class="text-white">Compra Exitosa!</h3>',
        text: 'Gracias por elegirnos',
        confirmButtonColor: '#d33',
        confirmButtonText:'Cerrar',
        background: '#334756',
        color:"#fff",
        footer: '<bold>🍟Bulldog🍔</bold>',
        
      })
    
    setSeleccionados([])
    setPrecioTotal(350)
  }

   useEffect(()=>{
     getIngredientes()
   },[])
   
  return (
    <div className='bg-ingredientes pt-3'>
      <h2 className='text-center mt-4 tituloCards'>Crea tu pedido</h2>
    <div className='all-ingredientes'>
      <div className='mt-5'>
      {ingredientes.map(x => (
        <button key={x.id} className='btn mt-1 button'onClick={()=> agregarSeleccionados(x,x.precio)} disabled={seleccionados.find(selec => selec.id === x.id)? true : false}>
          <div className='foto-nombre'> 
            <img src={require(`../../assets/img/ingredientes/${x.imagen}.png`)} />
            {x.nombre} 
          </div>
          <div>
            <p className='price-ingredientes'>${x.precio}</p>
          </div>
        </button>
      ))}
      </div>

      <div>
        {seleccionados.length === 0 ?
          <>
          <h2 className='elegi-promo'>Elegi tu promo🍔🍟</h2>
          <div className='pedido-vacio'>
            <h3>🍴Tu pedido</h3>
            <h3 className=' totalbtn '>Total: $0</h3>
          </div>
          </> 
        :
        <>
        <div className='ingredientes-agregados'>
          <h3>🍴Tu pedido</h3>  
              <button  className='btn button ingrediente-pedido '>
                  <div className='foto-nombre'> 
                    <img src={require(`../../assets/img/ingredientes/Carne.png`)} />
                    <p>Paty</p> 
                  </div>
                  <div>
                    <p className='price-ingredientes'>$350</p>
                  </div>
              </button>
            
            {seleccionados.map(x =>(
              <button key={x.id} className='btn button ingrediente-pedido mt-1 ' >
                  <div className='foto-nombre'> 
                    <img src={require(`../../assets/img/ingredientes/${x.imagen}.png`)} />
                    <p>{x.nombre}</p>
                  </div>
                  <div>
                      <i class="bi bi-trash-fill price-ingredientes" onClick={()=> eliminarSeleccionados(x.id, x.precio)}></i>
                  </div>
              </button>
          ))}
          
        </div>
        <h3 className=' totalbtn '>Total: ${precioTotal}</h3>
        <div className='botones-operacion'>
          <button className='btn btn-success' onClick={()=> compraExitosa()}>Comprar</button>
          <button className='btn btn-danger' onClick={() => eliminarTodo()}>Eliminar todo</button>
        </div>
        
        </>
        
      }
      
      </div>
    </div>
    </div>
  );
}

export default Pedido;
