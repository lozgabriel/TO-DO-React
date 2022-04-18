import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Tarefas from './components/Tarefas'
import AddTarefa from './components/AddTarefa'
import Header from './components/Header'
import TarefaDetalhes from './components/TarefaDetalhes'

const App = () => {

  const [tarefas, setTarefas] = useState ([
    {
      id: 1,
      titulo: 'Job Sprint 1',
      completo: false
    },
    {
      id: 2,
      titulo: 'Job Sprint 2',
      completo: true
    }

  ]) 

/*Alterar para tarefa completa */
  const handleTarefaClick = (tarefaId) => {
    const newTarefas = tarefas.map(tarefa => {
      if (tarefa.id === tarefaId)
        return {...tarefa, completo: !tarefa.completo}
      else
        return tarefa;
    }); 

    setTarefas(newTarefas)
  }

/*Add nova tarefa */
  const handleAddTarefa = (tarefaTitulo) => {
    const newTarefas = [...tarefas, {
      id: Math.random(10),
      titulo: tarefaTitulo,
      completo: false
    }]  

    setTarefas(newTarefas)
  }

  const handleDelTarefa = (tarefaId) => {
    const newTarefas = tarefas.filter(tarefa => tarefa.id !== tarefaId)

    setTarefas(newTarefas)
  }

  return (
    <Router>
      <div className="container">
        <Header/>
        <Route path="/" exact render={() => (
            <>
              <AddTarefa handleAddTarefa={handleAddTarefa}/>
              <Tarefas tarefas={tarefas} 
                      handleTarefaClick={handleTarefaClick}
                      handleDelTarefa={handleDelTarefa}/>
            </>
        )}/>
        <Route path="/:tarefaTitulo" exact  component={TarefaDetalhes}/>
      </div>
    </Router>  
  )
}

export default App; 