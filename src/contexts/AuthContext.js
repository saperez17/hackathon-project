import React, { useReducer } from "react";

const initialContextState = {
  user: {
    username: "Alejo",
    name: "Luis Alejandro",
  },
  services: {
    favourites: [
      {
        id: 1,
        name: "Chelsey Brindgthon",
        serviceZone: "Medellin",
        url: "https://i.pinimg.com/originals/6e/70/97/6e7097e29b6bc038069e5b375069c1c7.jpg",
      },
      {
        id: 2,
        name: "Mariachi Viva Mexico",
        serviceZone: "Medellin",
        url: "https://www.cuanto-gana.com/wp-content/uploads/2015/11/cuanto-cobra-un-mariachi-600x379.jpg",
      },
      {
        id: 4,
        name: "Mariachi Viva Mexico",
        serviceZone: "Medellin",
        url: "https://www.cuanto-gana.com/wp-content/uploads/2015/11/cuanto-cobra-un-mariachi-600x379.jpg",
      },
      {
        id: 5,
        name: "Pintor Contemporaneo",
        serviceZone: "Popayán",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n0AG42oTxZKLIcgc_gxkhph3RSqHcIQc0A&usqp=CAU",
      },
      {
        id: 6,
        name: "Pintor Contemporaneo",
        serviceZone: "Popayán",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n0AG42oTxZKLIcgc_gxkhph3RSqHcIQc0A&usqp=CAU",
      },
    ],
  },
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
