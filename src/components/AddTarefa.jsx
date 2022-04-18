import React, { useState } from 'react'
import './AddTarefa.css'

import Botao from './Botao'

const AddTarefa = ({handleAddTarefa}) => {
    const [inputData, setInputData] = useState("")

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTarefaClick = () => {
        handleAddTarefa(inputData)
        setInputData('')
    }

    return (
        <div className="add-tarefa-container">
            <input 
                onChange={handleInputChange} 
                value={inputData}
                className="add-tarefa-input"
                type="text" 
            />
            <div className="add-tarefa-botao">
                <Botao onClick={handleAddTarefaClick}>Adicionar</Botao>
            </div>
        </div>
    )
}

export default AddTarefa

