import style from "./header.module.scss";
/*<img src="https://thumbs.dreamstime.com/b/healthy-senior-couple-resting-hiking-to-cliff-top-tropical-island-very-happy-healthy-senior-couple-resting-172931987.jpg"></img>*/
const Header = ()=>{
    return (
        <div className={style.divHeader}>
            <div className={style.divHeaderContainer}>
                <div className={style.title}>Pufi</div>
                <div className={style.navBar}>
                    <div className={style.product}>
                        <img id={style.imag} src="https://cdn-icons-png.flaticon.com/512/2494/2494467.png"></img>
                        <p>Pufi Puff</p>
                    </div>
                    <div className={style.product}>
                        <img id={style.imag} src="https://cdn-icons-png.flaticon.com/512/949/949847.png"></img>
                        <p>Pufi Rain</p>
                    </div>
                    <div className={style.product}>
                        <img id={style.imag} src="https://cdn-icons-png.flaticon.com/512/2651/2651753.png"></img>
                        <p>Pufi Cart</p>
                    </div>
                    <div className={style.product}>
                        <img id={style.imag} src="https://cdn-icons-png.flaticon.com/512/1594/1594559.png"></img>
                        <p>Pufi Nap</p>
                    </div>
                </div>
                <div className={style.features}>Mi cuenta I Mi compra</div>
            </div>
            <div className={style.presentation}>PASARLA CHILL</div>
            <div className={style.presentation}>NUNCA FUE TAN FÁCIL</div>
            <button className={style.button}>SHOP</button>
            <div className={style.elements}>♦♦♦ ♦♦♦ ♦♦♦</div>
        </div>
    )
}

export default Header;