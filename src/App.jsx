import { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  // Armazenando os dados iniciais das tarefas
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // pega o titulo e a categoria do TodoForm
  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    {
      /* adiciona a tarefa a lista de todos */
    }
    setTodos(newTodos);
  };

  // remover um Todo
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null,
    );
    setTodos(filteredTodos);
  };

  // completar um todo
  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo,
    );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {/*percorre e exibe cada array-tarefa
         de acordo com o componente Todo
         com o text e o category*/}
        {todos
          // Filtra os status por completo ou não completo
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted,
          )
          // filter compara o search com o text do todo e filtra oque corresponde
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()),
          )
          // ordena os itens em asc e desc
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text),
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
      </div>
      {/*criação de tarefa*/}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
