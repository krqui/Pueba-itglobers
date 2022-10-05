import React from 'react';
import { useForm, ValidationError} from '@formspree/react';
import stails from './newsletter.module.scss';
const NewsLetter = () => {
    
        const [state, handleSubmit] = useForm("xbjbyqpe");
        if (state.succeeded) {
            return <p>Thanks for joining!</p>
        }
    
    return (
        <div className={stails.newsletter_container}>
            <h4>NEWSLETTER</h4>
            <p className={stails.suscribite}>SUBSCRIBITE</p>
            <p className={stails.subtitulo}>Y entérate de todas las novedades</p>
            {/*<form>
                <input placeholder='Ingresa tu email ... '></input>
                <button type='submit'>SEND</button>
    </form>*/}
            
            <form className={stails.formSubContainer} onSubmit={handleSubmit}>
                {/*<label htmlFor="email">Email Address</label>*/}
            <input className={stails.input__box}
                placeholder='Inserte su correo electrónico ...'
                id="email"
                type="email" 
            name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            {/*<textarea
                id="message"
                name="message"
/>*/}
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button className={stails.input__submit} type="submit" disabled={state.submitting}>
                Go
            </button>
        </form>
        </div>
    )
}

export default NewsLetter;