import { useRef, useState } from 'react'
import { v4 } from 'uuid';
import { AddButton , Container, Task, TrashButton} from './styles';


function Home() {

  const [tasks, setTasks] = useState([])
  const inputRef = useRef()


  function clickButton() {
    setTasks([
      {
        id: v4(),
        name: inputRef.current.value
      }, ...tasks])
      inputRef.current.value = ""
  }

  function deleteTask(id){
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <Container>
      <h1>Tarefas da semana</h1>
      <input placeholder="      Tarefa" ref={inputRef} />
      <AddButton onClick={clickButton}>Adicionar</AddButton>

      {
        tasks.map((task) => (
          <Task  key={task.id}> 
            <p>{task.name}</p>
            <TrashButton onClick={() => deleteTask(task.id)}>❌</TrashButton>
          </Task>
        )
        )
      }
    </Container>
  )
}

export default Home
