import estilos from './collage.module.scss'
const collage = ()=>{
    return (
        <div className={estilos.contenedorCollage}>
            <div className={estilos.fila}>
                <div className={estilos.filaPicture} id={estilos.a1}></div>
                <div className={estilos.filaInfo}>
                    <div className={estilos.cajitaContainer}>
                        <img alt='ho' src='https://www.pngall.com/wp-content/uploads/5/Box-PNG.png'></img>
                        <h3>Cajita - Item</h3>
                        <h3>-----------------------</h3>
                        <p>El siguiente item es unico en toda la region.
                            No existe ninguna mejor alternativa a este producto.
                            #EnTendencia #HotSale
                        </p>
                        <br></br>
                        <button className={estilos.botton} >Mas informacion</button>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className={estilos.fila}>
                <div className={estilos.filaInfo}>
                    <div className={estilos.cajitaContainer}>
                        <img src='https://www.pngall.com/wp-content/uploads/5/Box-PNG.png'></img>
                        <h3>Cajita - Item</h3>
                        <h3>-----------------------</h3>
                        <p>El siguiente item es unico en toda la region.
                            No existe ninguna mejor alternativa a este producto.
                            #EnTendencia #HotSale
                        </p>
                        <br></br>
                        <button className={estilos.botton} >Mas informacion</button>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className={estilos.filaPicture} id={estilos.b2}></div> 
            </div>
            <div className={estilos.fila}>
                <div className={estilos.filaPicture} id={estilos.c1}></div>
                <div className={estilos.filaInfo}>
                    <div className={estilos.cajitaContainer}>
                        <img src='https://www.pngall.com/wp-content/uploads/5/Box-PNG.png'></img>
                        <h3>Cajita - Item</h3>
                        <h3>-----------------------</h3>
                        <p>El siguiente item es unico en toda la region.
                            No existe ninguna mejor alternativa a este producto.
                            #EnTendencia #HotSale
                        </p>
                        <br></br>
                        <button className={estilos.botton} >Mas informacion</button>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className={estilos.fila}>
                <div className={estilos.filaInfo}>
                    <div className={estilos.cajitaContainer}>
                        <img src='https://www.pngall.com/wp-content/uploads/5/Box-PNG.png'></img>
                        <h3>Cajita - Item</h3>
                        <h3>-----------------------</h3>
                        <p>El siguiente item es unico en toda la region.
                            No existe ninguna mejor alternativa a este producto.
                            #EnTendencia #HotSale
                        </p>
                        <button className={estilos.botton} >Mas informacion</button>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <div className={estilos.filaPicture} id={estilos.d2}></div>
            </div>
        </div>
    )
}

export default collage;