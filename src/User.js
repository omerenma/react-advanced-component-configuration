import React, { useState, useEffect } from "react";
import { UserContext, userData } from "./usersContext";

export const User = () => {
	const [user, setUser] = useState([]);
	useEffect(() => {
		setUser(userData);
	}, []);

	return (
		<UserContext.Provider value={user}>
			<UserContext.Consumer>
				{
                (user) => user && user.map(u => (
                    <div key={u.name} style={{background:u.background}}>
                        <ul key={u.name}>
                        <li>{u.name}</li>
                        <li>{u.age}</li>
                        </ul>
                    </div>
                ))
                 }
			</UserContext.Consumer>
		</UserContext.Provider>
	);
};
