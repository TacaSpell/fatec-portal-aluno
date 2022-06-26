import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config";
import { logout } from "./authAction";

const usersCollectionRef = collection(db, "users");
const errorMessage = { message: 'Usuário não encontrado', code: 404 };

const getUserById = async (id) => {
  try {
    const docRef = doc(usersCollectionRef, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw errorMessage;
    }

    // The code getUser below returns a Collection[] and find user by email. Need changes
    // const data = await getDocs(usersCollectionRef);

    // const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    // const user = result.find(user => user.email === email);
  }
  catch (err) {
    logout()
    toast.error(err?.message || 'Ocorreu um erro. Tente novamente mais tarde.');
  }
}

export {
  getUserById
}