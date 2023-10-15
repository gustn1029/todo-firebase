import React from 'react'
import Button from '../form/button/Button'
import { TodosData } from '@/type'

interface TodoListItemProps extends TodosData {
  onDelete: (id: string) => void;
  liClassName?: string;
  divClassName?: string;
  pClassNAme?: string;
  buttonClassName?: string;
}
const TodoListItem = ({todo, id, liClassName = '', divClassName='', pClassNAme='',buttonClassName='', onDelete}:TodoListItemProps) => {
  return (
    <li key={id} id={id} className={`${liClassName} `}>
      <div className={`${divClassName} `}>
        <p className={`${pClassNAme} `}>{todo}</p>
        <Button className={buttonClassName} onClick={onDelete} text='삭제' />
      </div>
    </li>
  )
}

export default TodoListItem