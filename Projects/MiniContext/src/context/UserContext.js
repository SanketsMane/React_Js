import React from "react";
import { createContext } from "react";

const UserContext = React.createContext();
 
export default UserContext;


//here we are using user context as a wrapper component to resolve our issue of prop drilling
//eg - 

//    <UserContext>
//               <App/>
//    </UserContext>