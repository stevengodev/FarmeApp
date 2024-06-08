import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import TaskRegister from '../../pages/TaskRegistration/TaskRegister';
import NavbarGlobal from '../../components/Navbar/NavBarGlobal';
import TaskList from '../../components/TaskRegistrationForm/TaskList';
import BusinessBar from '../../components/BuisnessBar/Buisnessbar';
import { AuthContext } from '../../components/AuthForm/AuthContext'; // Importa el contexto de autenticación
import AccessibilityButton from '../../components/Accessibility/AccessibilityButton';

const TaskListPage = () => {
  const { userId: paramUserId } = useParams();
  const { userId: contextUserId } = useContext(AuthContext);

  const userId = paramUserId || contextUserId;

  return (
    <div>
      <NavbarGlobal />
      <BusinessBar userId={userId} />
      <TaskList />
      <AccessibilityButton />
    </div>
  );
}

export default TaskListPage;