import React from "react";

const UserContext= React.createContext()//usercontext is used to create a context and it is used to pass the data to the child component through global state management

export default UserContext;

// Later it will be wrapped in a following manner:-
//<UserContext>
//<card>
//<Data />
//</card>
//<UserContext>

