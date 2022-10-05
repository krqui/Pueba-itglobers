import ss from './instagram.module.scss';

const Instagram = ()=>{
    return (
        <div className={ss.igcontainer}>
            <div className={ss.igcontainer_1}>
                <h4>Instagram</h4>
                <p className={ss.hashtag}>#ESPUFI</p>
                <div className={ss.padreImage}>
                    <div className={ss.conteImage}>
                        <img id={ss.f} src='https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                        <img id={ss.f} src='https://images.pexels.com/photos/1255062/pexels-photo-1255062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className={ss.conteImage}>
                        <img id={ss.f} src='https://images.pexels.com/photos/1974927/pexels-photo-1974927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                        <img id={ss.f} src='https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                    <div className={ss.conteImage}>
                        <img id={ss.f} src='https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                        <img id={ss.f} src='https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instagram;