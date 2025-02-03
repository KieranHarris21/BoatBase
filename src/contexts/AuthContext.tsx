// import { createContext, useContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';
// import { getAuth, onAuthStateChanged, signOut, User } from 'firebase/auth';

// // Define the context type
// interface AuthContextType {
//   authUser: User | null;
//   setAuthUser: Dispatch<SetStateAction<User | null>>;
//   userSignOut: () => void;
// }

// // Create the context with a default value
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const auth = getAuth();

//   const [authUser, setAuthUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user: User) => {
//       setLoading(false);
//       setAuthUser(user);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [auth]);

//   const userSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("user signed out");
//       })
//       .catch((error: Error) => {
//         console.log(error);
//       });
//   };

//   const values: AuthContextType = {
//     authUser,
//     setAuthUser,
//     userSignOut,
//   };

//   console.log("AuthProvider", authUser);

//   return (
//     <AuthContext.Provider value={values}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };