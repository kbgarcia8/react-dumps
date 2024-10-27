const todos = [
    { task: "mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "feed the cat", id: crypto.randomUUID() },
  ];

export function Keys () {
    return (
        <ul>
          {todos.map((todo) => (
             <li key={todo.id}>{todo.task}</li>
          ))}
        </ul>
      );
}