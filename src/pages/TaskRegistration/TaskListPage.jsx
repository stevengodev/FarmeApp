import TaskRegister  from "../../pages/TaskRegistration/TaskRegister";

import TaskList from "../../components/TaskRegistrationForm/TaskList";
import BusinessBar  from '../../components/BuisnessBar/Buisnessbar';

const TaskListPage = () => {
    return (
      <div>
                <BusinessBar/>

       < TaskRegister/>
        <h1>Listado de tareas</h1>

        <TaskList/>

      </div>
    )
  
}

export default TaskListPage;