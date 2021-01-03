import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function useLogout() {
    let history = useHistory();

    const logoutUser = async () => {
        try {
           await axios({
                method: 'GET',
                url: `auth/logout`,
            }).then(res => { 
                console.log(res); 
                history.push('/');
            })
        } catch(err) {
            console.log(err);
        } 
    }

    return {
        logoutUser
    }

}