import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Botao from './Botao'

import './TarefaDetalhes.css'

const TarefaDetalhes = () => {
    const params = useParams();
    const history = useHistory();

    const hanfleBtnVoltarClick = () => {
        history.goBack();
    }
    return (
        <>
            <div className="tarefa-detalhes">
                <h2>{params.tarefaTitulo}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>

            <div className="btn-voltar">
                <Botao onClick={hanfleBtnVoltarClick}>Voltar</Botao>
            </div>
        </>
    )
}

export default TarefaDetalhes