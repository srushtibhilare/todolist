import './Comp.css';
export default function TaskFilter({ filter, setFilter, counts }) {
  return (
    <div className="task-filter">
      {['All', 'Completed', 'Pending'].map((type) => (
        <button
          key={type}
          className={filter === type ? 'active' : ''}
          onClick={() => setFilter(type)}
        >
          {type} ({counts[type]})
        </button>
      ))}
    </div>
  );
}
