import react, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async () => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (err) {
            console.log(err);
          }
        },
        register: async () => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (err) {
            console.log(err);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (err) {
            console.log(err);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
