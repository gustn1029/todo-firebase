'use client';
import React, {useState, ChangeEventHandler} from "react";
import LabelInput from "../form/label-input/LabelInput";
import TodosList, {TodoListProps} from "../todo/TodosList";
import Title from "../title/Title";
import Button from "../form/button/Button";
import { TodosData } from "@/type";
const Todos = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState<TodosData[]>([]);

    const addTodoHandler = () => {
        const todoData: TodosData = {
            todo: inputValue,
            id: `todos${todos.length}`
        }

        setTodos([...todos, todoData]);
        setInputValue('');
    }

    const todoDeleteHandler = (id: string) => {
        const updateTodos = todos.filter(item => item.id !== id);
        updateTodos.forEach((item, idx)=> {
            item.id = `todos${idx}`
        })
        setTodos([...updateTodos]);
    }
  return (
    <>
      <div className="mt-[80px] max-w-[1260px] px-[30px] mx-auto">
        <section>
          <form className="flex mb-[50px]">
            <article className="flex-1 mr-[20px]">
              <LabelInput
                name="todo_input"
                placeholder="할 일을 입력하세요."
                inputValue={inputValue}
                isHidden={true}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </article>
            <article>
              <Button text="등록" className="w-[100px]" onClick={addTodoHandler} />
            </article>
          </form>
        </section>
        <section>
          <Title>Todo List</Title>
          <TodosList todos={todos} onDelete={todoDeleteHandler} />
        </section>
      </div>
    </>
  );
};

export default Todos;
