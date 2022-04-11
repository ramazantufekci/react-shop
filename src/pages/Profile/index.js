import { useAuth } from '../../contexts/AuthContext.js';
import {Text,Button} from '@chakra-ui/react';
function Profile({history}){
	const { user,logout } = useAuth();
	const handleLogout = () =>{
		logout(()=>{
			history.push('/');
		});
	}
	return (
	<div>
		<Text fontSize="22">Profile</Text>
		<Button colorScheme="pink" variant="solid" onClick={handleLogout}>Logout</Button>
	</div>
	);
}

export default Profile;