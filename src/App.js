import React, { useState } from 'react';
import './App.css';

function App() {
  let [todos, setTodos] = useState([]);
  let [todo, setTodo] = useState('');
  let [todoStatus, setTodoStatus] = useState('');
  let [selectedTab, setSelectedTab] = useState('All');
  let [classNameAll, setClassNameAll] = useState('selected');
  let [classNameActive, setClassNameActive] = useState('not-elected');
  let [classNameCompleted, setClassNameCompleted] = useState('not-elected');

  const handleTodoAdd = () => {
    if (todo && todoStatus) {
      let todoObj = {
        name: todo,
        status: todoStatus
      };
      let updatedTodos = [...todos, todoObj];
      setTodos(updatedTodos);
      setTodo('');
      setTodoStatus('');
    } else {
      alert('Please add both todo title and status');
    }
  };

  const renderTodos = () => {
    let selectedTabTodos = [];
    if (selectedTab !== 'All') {
      selectedTabTodos = todos.filter(
        (individualTodo) =>
          individualTodo.status.toLowerCase() === selectedTab.toLowerCase()
      );
    } else {
      selectedTabTodos = todos;
    }
    return (
      <table>
        <tr>
          <td>Title</td>
          <td>Status</td>
        </tr>
        {selectedTabTodos.map((categoryTodo) => (
          <tr>
            <td>{categoryTodo.name}</td>
            <td>{categoryTodo.status}</td>
          </tr>
        ))}
      </table>
    );
  };

  return (
    <div className='App'>
      <div>
        <input
          placeholder='Note title'
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <input
          placeholder='Note status'
          onChange={(e) => setTodoStatus(e.target.value)}
        ></input>
        <button onClick={handleTodoAdd}>Add Note</button>
      </div>
      <div>
        <div className='tabs'>
          <span
            onClick={() => {
              setSelectedTab('All');
              setClassNameActive('not-selected');
              setClassNameAll('selected');
              setClassNameCompleted('not-selected');
            }}
            className={classNameAll}
          >
            All
          </span>
          <span
            onClick={() => {
              setSelectedTab('Active');
              setClassNameActive('selected');
              setClassNameAll('not-selected');
              setClassNameCompleted('not-selected');
            }}
            className={classNameActive}
          >
            Active
          </span>
          <span
            onClick={() => {
              setSelectedTab('Completed');
              setClassNameActive('not-selected');
              setClassNameAll('not-selected');
              setClassNameCompleted('selected');
            }}
            className={classNameCompleted}
          >
            Completed
          </span>
        </div>
        <div className='todos'>{renderTodos()}</div>
      </div>
    </div>
  );
}

export default App;
