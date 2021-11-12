import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {
	const { users, getUsers, getProfile } = useContext(UserContext);

	useEffect(() => {
		getUsers();
	}, []);

	console.log(users);

	return (
		<>
			<div className="list-group h-100">
				{users.map((user) => (
					<div
						className="list-group-item list-group-item-action"
						d-flex
						flex-row
						justify-content-start
						href="#"
						key={user.id}
						onClick={() => getProfile(user.id)}
					>
						<img
							src={user.avatar}
							className="img-fluid mr-4 rounded-circle"
							width="70"
						/>
						<p>{`${user.first_name} ${user.last_name}`}</p>
						<p>{user.username}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default UserList;
