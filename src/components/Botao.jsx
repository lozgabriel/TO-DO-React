import React from 'react'
import './Botao.css'

const Botao = ({children, onClick}) => {
    return(
        <div>
            <button onClick={onClick} className="botao">{children}</button>
        </div>
    )
}

export default Botao