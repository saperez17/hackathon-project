import React, { useReducer } from "react";

const initialContextState = {
  services: [
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
    {
      id: 7,
      name: "Top Eventos Gala/Matrimonios ",
      serviceZone: "Popayán",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe9bDzza5hCTtaGaRPgU-4JG6Rfl9rYRQxeoqklF-Kp0V1r4QBi8DGHYBta_NJ7U6S7n0&usqp=CAU",
    },
  ],
  selectedServices: [],
  serviceZone: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_SERVICE_ZONE":
      return {
        ...state,
        serviceZone: action.payload,
      };
    case "REMOVE_SERVICE_ZONE":
      return {
        ...state,
        serviceZone: null,
      };
    case "ADD_SELECTED_SERVICE":
      return {
        ...state,
        selectedServices: [...state.selectedServices, action.payload],
      };
    case "REMOVE_SELECTED_SERVICE":
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}

export const ContentFeedContext = React.createContext();

const ContentFeedContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialContextState);
  return (
    <ContentFeedContext.Provider value={[state, dispatch]}>
      {children}
    </ContentFeedContext.Provider>
  );
};

export default ContentFeedContextProvider;
