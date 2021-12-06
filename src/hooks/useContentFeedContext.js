import { useContext } from "react";
import { ContentFeedContext } from "contexts/ContentFeedContext";

const useContentFeedContext = () => {
  const context = useContext(ContentFeedContext);
  if (!context) {
    throw new Error(
      "useAuthContext hook must be used within a AuthContext Provider"
    );
  }
  return context;
};
export default useContentFeedContext;
