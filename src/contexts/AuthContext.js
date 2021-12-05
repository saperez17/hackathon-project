import React, { useReducer } from "react";

const initialContextState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { count: state.count + 1 };
    case "logout":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContextState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
