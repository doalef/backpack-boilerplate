import Persianize from 'persianize';
import _ from 'lodash';


export let validateRegister = (email, password, username) => {
    if (password && email) {
        if (password.length > 6) return true;
        else return false;
    } else {
        return false;
    }
}