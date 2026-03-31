import React, { useState } from "react";

const Todo = ({ todo, removeTodo, completeTodo, editTodo }) => {
  // controla se está ou não no modo edição
  const [isEditing, setIsEditing] = useState(false);
  // Guarda o novo texto digitado pelo usuario
  const [newText, setNewText] = useState(todo.text);
  // Guarda a nova categoria selecionada
  const [newCategory, setNewCategory] = useState(todo.category);

  // função chamada ao clicar em salvar
  const handleEdit = () => {
    // Evita salvar campos vazios
    if (!newText || !newCategory) return;
    // Chama função do App.jsx passando os novos valores
    editTodo(todo.id, newText, newCategory);
    // sai do modo edição
    setIsEditing(false);
  };

  /*className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}*/

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        {isEditing ? (
          <>
            {/* input para editar o texto */}
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            {/* select para editar categoria */}
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            >
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Estudos">Estudos</option>
            </select>
          </>
        ) : (
          <>
            {/* exibição normal quando não está editando */}
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </>
        )}
      </div>
      {/*botôes*/}
      <div>
        {/* Marca como completa */}
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        {/* Remove a tarefa */}
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
        {isEditing ? (
          // botão para salvar as alterações
          <button onClick={handleEdit}>Salvar</button>
        ) : (
          // Ativa o modo de edição
          <button onClick={() => setIsEditing(true)} Editar>
            Editar
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
