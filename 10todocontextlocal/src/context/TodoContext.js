import React from 'react';
import {createContext,useContext } from 'react';
export default TodoContext = createContext({
todos:[{
    id:1,todo:"Todo 1",completed:false, 
}],addTodo:(todo)=>{},updatetodo:(id,todo)=>{},deletetodo:(id)=>{},toggleTodo:(id)=>{}
});
export const useTodo = () => {
    return useContext(TodoContext)
};

export const todoProvider=TodoContext.todoProvider;