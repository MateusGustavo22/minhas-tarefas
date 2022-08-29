import { useState } from "react"
import "./Tarefa.css"
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

function Tarefa({ tarefa, id, data, removerTarefa }) {
 
 const tarefaSombra1 = {
   boxShadow: "0px 0px 5px 0.5px #ccc"
 }
 
 const tarefaSombra2 = {
   boxShadow: "0px 0px 5px 0.5px green"
 }
 
 const [check, setChek] = useState(false)
 const [sombraCor, setSombra] = useState(tarefaSombra1)

 function tarefa_state() {
   setChek(!check)
    if (check == true) {
      console.log("checked")
      setSombra(tarefaSombra1)
    }else {
      console.log("no checked")
      setSombra(tarefaSombra2)
    }
  }
  return (
    <div className="tarefa_div" style={sombraCor}>
      <div className="tarefa_area">
        <div className="tarefa_content">
          <p>{tarefa}</p>
        </div>
        <div className="state">
          <span>Criado em: {data}</span>
        </div>
      </div>
      <div className="tarefa_edit">
        <div className="edit">
          <input type="checkbox" defaultChecked={check} onChange={tarefa_state}/>
        </div>
        <button className="remove" onClick={() => removerTarefa(id)} >
          <FaTrash />
        </button>
      </div>
    </div>
  )
}

export default Tarefa