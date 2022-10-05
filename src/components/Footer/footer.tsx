import estilos from './footer.module.scss';
const Footer = () => {
    return (<>
        <div className={estilos.futer}>
            <div className={estilos.columna} id={estilos.columna1}>Pufi</div>
            <div className={estilos.columna} id={estilos.columna2}>
                    <a>Pufi Rain</a><br></br>
                    <a>Pufi Puff</a><br></br>
                    <a>Pufi Cart</a><br></br>
                    <a>Pufi Nap</a>
            </div>
            <div className={estilos.columna} id={estilos.columna3}>
                    <a>Contacto</a><br></br>
                    <a>Ayuda</a><br></br>
                    <a>¿Cómo comprar?</a><br></br>
                    <a>Términos y Condiciones</a>
            </div>
            <div className={estilos.columna} id={estilos.columna4}>
                <a>Compra 100% segura</a><br></br><br></br>
            </div>
            <div className={estilos.columna} id={estilos.columna5}>
                <a>Seguinos en:</a>
                <br></br>
                <div className={estilos.cajaicono}>
                <img className={estilos.icono} src='https://cdn-icons-png.flaticon.com/512/174/174855.png'></img>
                <img className={estilos.icono} src='https://cdn-icons-png.flaticon.com/512/733/733547.png'></img>
                <img className={estilos.icono} src='https://cdn-icons-png.flaticon.com/512/3670/3670151.png'></img>
                </div>
            </div>
        </div>
        <div className={estilos.derechos}>
            PUFI Copyright 2022 - Todos los derechos reservados.
        </div>
        </>
    )
}

export default Footer;