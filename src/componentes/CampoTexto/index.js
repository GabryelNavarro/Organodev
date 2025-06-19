import { use, useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) =>{
    const placeholderModificada = `${props.placeholder}...`



const Digitado = (evento) => {
    props.aoAlterado(evento.target.value)
    
}
   
    return(
        <div className="inputNome">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={Digitado} required={props.obrigatorio} placeholder={placeholderModificada}>
            </input>
        </div>
    )
}
export default CampoTexto