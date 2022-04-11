import { useAuth } from '../../contexts/AuthContext.js';
import {Text} from '@chakra-ui/react';
function Profile(){
	const { user } = useAuth();
	return (
	<div><Text fontSize="22">Profile</Text></div>
	);
}

export default Profile;