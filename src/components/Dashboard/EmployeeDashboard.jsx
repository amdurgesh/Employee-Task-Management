import React from 'react';
import Header from '../others/Header';
import TaskList from '../others/TaskListsNumbers';
import TaskNote from '../TaskList/TaskNote';

const EmployeeDashboard = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data}/>
      <TaskNote data={props.data}/>
    </div>
  );
}

export default EmployeeDashboard;
