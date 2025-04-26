//
import { useContext,createContext } from "react";

export const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(is)=>{},
    togglecompleted:()=>{},
});

export const usetodo=()=>{
   return useContext(Todocontext);
}

export const Todoprovider =Todocontext.Provider;

