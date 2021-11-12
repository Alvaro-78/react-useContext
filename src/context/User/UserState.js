import React, { useReducer } from 'react';
import axios from 'axios';
import UserReducer from './UserReducer';
import UserContext from './UserContext';

// Cualquier componente dentro del UserCpontext podrán compartir el state
const UserState = (props) => {
	const initialState = {
		users: [],
		selectedUser: null,
	};

	const [state, dispatch] = useReducer(UserReducer, initialState);

	const getUsers = async () => {
		const res = await axios.get(
			'https://random-data-api.com/api/users/random_user?size=10'
		);
		dispatch({
			type: 'GET_USERS',
			payload: res.data,
		});
	};

	const getProfile = async () => {
		const res = await axios.get(
			'https://random-data-api.com/api/users/random_user?id'
		);
		console.log(res.data);
		dispatch({
			type: 'GET_PROFILE',
			payload: res.data,
		});
	};

	return (
		<UserContext.Provider
			value={{
				users: state.users,
				selectedUser: state.selectedUser,
				getUsers,
				getProfile,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;
