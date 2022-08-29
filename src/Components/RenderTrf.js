import Tarefa from "./Tarefa"

function RenderTrf(props) {
  if (props.tarefas.length == 0) {
    return (<h2 id="sem_tarefas">Sem tarefas...</h2>)
  }else {
    return (
      <>
      {props.tarefas.map((trf) => <Tarefa tarefa={trf.tarefa} data={trf.data} id={trf.id} removerTarefa={props.removerTarefa} />)}
       
      </>
    )
  }
}

export default RenderTrf