import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { toast } from 'react-toastify';

const getLoginErrorType = (errorCode) => {
  switch (errorCode) {
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-email':
      return 'Credenciais inválidas';
    case 'auth/user-disabled':
      return 'Usuário inativo. Por favor, fale com o administrador para checar a sua situação.';
    case 'auth/operation-not-allowed':
      return 'Erro no servidor. Por favor, tente novamente mais tarde.'
    case 'auth/missing-email':
      return 'Por favor, informe o e-mail'
      default:
      return 'Falha ao realizar o login. Por favor, tente novamente.';
  }
}

const logInWithEmailAndPassword = async (email, password) => {
  try {
    email && password
      ? await signInWithEmailAndPassword(auth, email, password)
      : toast.error('Preencha todos os campos abaixo');
  } catch (err) {
    toast.error(getLoginErrorType(err.code))
  }
};

const logout = () => {
  try {
    signOut(auth);
  } catch (err) {
    toast.error(err.message)
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    toast.error(err.message)
  }
};

const sendPasswordReset = async (email) => {
  try {
    sendPasswordResetEmail(auth, email)
      .then(() => toast.success("Enviamos um e-mail para você!"))
      .catch(err => toast.error(getLoginErrorType(err.code)));
  } catch (err) {
    toast.error(getLoginErrorType(err.code));
  }
};


export {
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword,
  sendPasswordReset
}