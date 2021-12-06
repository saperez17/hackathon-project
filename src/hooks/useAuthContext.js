import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext hook must be used within a AuthContext Provider"
    );
  }
  return context;
};
export default useAuthContext;
