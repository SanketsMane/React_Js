import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid is a utility function that generates unique IDs
//createSlice is a function that creates a slice of the Redux state

const initialState = {
    todos: [{id:1,text:"hello world"}]
}

export const todoSlice = createSlice ({
    name: 'todo',
    initialState,  // initial state of the slice
    reducers: {
        addTodo: (state,action) =>{
            const todo ={
                id:nanoid(), // generates a unique ID
                text: action.payload.text // payload is the data sent with the action
                
            }
            state.todos.push(todo); // push the new todo to the todos array in the state
        },


        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        updateTodo: () =>{
            // This function will be implemented later
            // It will update a todo in the todos array 
             state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id){
                    return{
                        ...todo, // spread operator to copy the existing todo properties
                        text:action.payload.text // update the text property with the new text

                    }
                }
             })
            
        }

        //every function inside reducers has a state and action parameter
        //state - the current state of the slice
        //action - the action that was dispatched
    }

})

export const {addTodo,removeTodo, updateTodo} = todoSlice.actions; // export the actions so that they can be used in the components
export default todoSlice.reducer; // export the reducer so that it can be used in the store 

