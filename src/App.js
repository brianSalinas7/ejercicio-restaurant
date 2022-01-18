import Pedido from "./components/Pedido"
import Header from "./components/Header/Header"
import './App.css'
import Buscadas from "./components/Buscadas"
import Footer from "./components/Footer"
import Premium from "./components/Premium/Premium"

const App = () =>{
    return(
        <div>
            <Header/>
            <Buscadas />
            <Premium />
            <Pedido/>
            <Footer/>
        </div>
    )
}

export default App