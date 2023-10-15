import React from 'react';
import TodoListItem from './TodoListItem';
import { TodosData } from '@/type';

export interface TodoListProps {
  todos: TodosData[];
  onDelete: (id:string) => void;
}
const TodosList = ({todos, onDelete}:TodoListProps) => {
  return (
    <ul className='flex flex-col gap-8 w-full'>
      {
      todos.map(({todo, id}) => (
        <TodoListItem
        liClassName='w-full'
        divClassName='flex flex-col items-end justify-end p-8 bg-white border border-sky-500 rounded-[30px] shadow-lg'
        pClassNAme='w-full mb-[20px]'
        buttonClassName='w-[100px]'
         todo={todo} id={id} onDelete={onDelete.bind(null, id)}
         key={id}
         />
      ))
      }
    </ul>
  )
}

export default TodosList