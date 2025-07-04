
import { useEffect, useState } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import { getTasks, saveTasks } from '../utils/localStorage';
import './Comp.css';

export default function TaskList() {
  const [tasks, setTasks] = useState(getTasks());
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = ({ title, description }) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    if (confirm("Are you sure?")) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  const counts = {
    All: tasks.length,
    Completed: tasks.filter(t => t.completed).length,
    Pending: tasks.filter(t => !t.completed).length,
  };

  return (
    <div className="task-dashboard">
      <h2>Task Dashboard</h2>
      <TaskForm onAdd={addTask} />
      <TaskFilter filter={filter} setFilter={setFilter} counts={counts} />
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}
