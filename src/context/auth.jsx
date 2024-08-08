// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { createContext, useEffect, useState } from 'react';

// export const AuthContext = createContext({
//   user: null,
//   isLoading: false,
// });

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(null);

//   useEffect(() => {
//     const auth = getAuth();

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setIsLoading(false)
//     })

//     return unsubscribe
//   }, [])

//   const value = { user, isLoading };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
