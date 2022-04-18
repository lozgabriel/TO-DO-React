import React from 'react'
import Tarefa from './Tarefa'

const Tarefas = ({ tarefas, handleTarefaClick, handleDelTarefa }) => {
    return (
        <>
            {tarefas.map(tarefa => (
                <Tarefa handleTarefaClick={handleTarefaClick} handleDelTarefa={handleDelTarefa} key={tarefa.id} tarefa={tarefa} />
            ))}
        </>
    )
}

export default Tarefas