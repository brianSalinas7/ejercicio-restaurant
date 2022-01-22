import './Footer.css'
const Footer = () => {
    return(
        <div className='footer'>
            <div>
                <p>Bulldog.pdtc@gmail.com</p>
                <p>Tel:+54 12313 4545</p>
            </div>
            <h5 className='nombre-footer'>Bulldog</h5>
            <div>
                <img src={require('../../assets/img/burger.png')} width={"100px"} />
            </div>
        </div>

    )
}

export default Footer