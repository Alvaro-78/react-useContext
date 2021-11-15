import React, { useContext, useEffect } from 'react';
import UserContext from '../context/User/UserContext';

const UsersList = () => {
	const userContext = useContext(UserContext);

	useEffect(() => {
		userContext.getUsers();
	}, []);

	return (
		<div className="list-group h-100">
			{userContext.users.length
				? userContext.users.map((user) => (
						<a
							key={user.id}
							href="#!"
							onClick={() => userContext.getProfile(user.id)}
							className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
						>
							<div className="d-flex">
								<div>
									<img
										src={user.avatar}
										alt=""
										className="img-fluid mr-4 rounded-circle"
										width="70"
									/>
								</div>
								<div className=" ps-4">
									<p>{user.first_name + ' ' + user.last_name}</p>
									<p>{user.email}</p>
								</div>
							</div>
						</a>
				  ))
				: null}
		</div>
	);
};

export default UsersList;
