import React from 'react'

const UserContext = React.createContext()

export default UserContext;
// Later it will be wrapped in a following manner:-
// <UserContext>
// <card>
// <Data />
// </card>
// <UserContext>

