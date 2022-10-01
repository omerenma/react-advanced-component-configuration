import React, {createContext} from "react";

export  const userData = [
    {name:'John Doe', age:12},
    {name:'Mary Jane', age:13},
    {background:'blue'}
]

export const UserContext = createContext();
export const userProvider = <UserContext.Provider value={userData} />
