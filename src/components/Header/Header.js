import './Header.css'
const Header = () => {
    return(
        <header className='header'>
            <div className='contenido-header bg-cheddar'>
                <div className='d-flex align-items-center'>
                    <img src={require('../../assets/img/burger.png')} style={{width: "100px"}} />
                    <p className='ms-3'>Bulldog</p>
                </div>
                <div>
                    <img src={require('../../assets/img/facebook.png')}style={{width: "50px"}}  />
                </div>
            </div>
            <div className='d-flex burger-text'>
                <img src={require('../../assets/img/hamburguesaPortada.png')} width={"60%"} className='burger-responsive' />
                <h4 className='titulo'>El Mejor Precio</h4>
            </div>
        </header>
    )
}

export default Header