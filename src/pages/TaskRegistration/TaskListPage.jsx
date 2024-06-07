import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TaskRegister from '../../pages/TaskRegistration/TaskRegister';
import NavbarGlobal from '../../components/Navbar/NavBarGlobal';
import TaskList from '../../components/TaskRegistrationForm/TaskList';
import BusinessBar from '../../components/BuisnessBar/Buisnessbar';
import { AuthContext } from '../../components/AuthForm/AuthContext'; // Importa el contexto de autenticación

const TaskListPage = () => {
  const { userId: paramUserId } = useParams();
  const { userId: contextUserId } = useContext(AuthContext);

  const userId = paramUserId || contextUserId;

  return (
    <div>
      <NavbarGlobal />
      <BusinessBar userId={userId} />
      <h1>Listado de tareas</h1>
      <TaskList />
    </div>
  );
}

export default TaskListPage;