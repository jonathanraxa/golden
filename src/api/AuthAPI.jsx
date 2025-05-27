import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) => {
    try {
        let response = signInWithEmailAndPassword(auth, email, password)
        return response;
    } catch (e) {
        return e;
    }
}

export const RegisterAPI = (email, password) => {
    try {
        let response = createUserWithEmailAndPassword(auth, email, password)
        return response;
    } catch (e) {
        return e;
    }
}
