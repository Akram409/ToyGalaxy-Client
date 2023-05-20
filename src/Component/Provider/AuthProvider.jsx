import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, SetUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const Googleprovider = new GoogleAuthProvider();

  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const handleLogOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const handleGoogleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, Googleprovider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    SetUser,
    loading,
    handleCreateUser,
    handleLogIn,
    updateUser,
    handleLogOut,
    handleGoogleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
