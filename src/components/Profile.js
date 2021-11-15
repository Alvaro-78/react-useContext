import React, { useContext } from 'react';
import userContext from '../context/User/UserContext';

const Profile = () => {
	const { selectedUser } = useContext(userContext);
	console.log(selectedUser);
	return (
		<div>
			{selectedUser ? (
				<div className="card card-body text-center">
					<img
						src={selectedUser.avatar}
						alt=""
						className="card-img-top rounded-circle m-auto img-fluid"
						style={{ width: 180 }}
					/>
					<h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
					<p>{selectedUser.email}</p>
				</div>
			) : (
				<h1>No user selected</h1>
			)}
		</div>
	);
};

export default Profile;
