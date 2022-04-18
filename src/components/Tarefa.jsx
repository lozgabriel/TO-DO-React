import './Tarefa.css'
import React from 'react'
import { useHistory } from 'react-router-dom'

const Tarefa = ({ tarefa, handleTarefaClick, handleDelTarefa}) => {
    const history = useHistory();

    const handleTarefaDetalhesClick = () => {
        history.push(`/${tarefa.titulo}`)
    }

    return (
        <div className="tarefa-container"
             style={tarefa.completo ? { borderLeft: '6px solid #00ff08' } : {}}
        >    
            <div className="tarefa-titulo" onClick={() => handleTarefaClick(tarefa.id)}>
                {tarefa.titulo}
            </div>

            <div className="ver-tarefa">
                <button className="remover-tarefa-botao" onClick={() => handleTarefaDetalhesClick()}>Visualizar Tarefa</button>
            </div>

            <div className="botao-deletar">
                <button className="remover-tarefa-botao" onClick={() => handleDelTarefa(tarefa.id)}>X</button>
            </div>
        </div>
    )
}

export default Tarefa