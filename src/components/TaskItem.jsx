
import './Comp.css';
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      <div>
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <small>{new Date(task.createdAt).toLocaleString()}</small>
      </div>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
