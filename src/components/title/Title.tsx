import { ChildrenProps } from '@/type'
import React from 'react'

const Title = ({children}:ChildrenProps) => {
  return (
    <h2 className='text-[20px] font-bold mb-[30px]'>{children}</h2>
  )
}

export default Title