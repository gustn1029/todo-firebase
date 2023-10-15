import {ReactNode} from 'react';

export interface ChildrenProps {
    children: ReactNode;
}

export interface TodosData {
    todo: string;
    id: string;
}