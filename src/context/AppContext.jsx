import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { initialCurrentService, initialServices } from "./initialState";
import { reducer } from "./reducer";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    services: initialServices,
    currentService: initialCurrentService,
    mode: "add",
  });
  const { services, currentService, mode } = state;
  const deleteService = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const addService = (service) => {
    dispatch({
      type: "ADD",
      payload: { ...service, id: uuidv4() },
    });
  };

  const editService = (service) => {
    dispatch({
      type: "EDIT",
      payload: {
        ...service,
      },
    });
  };
  const updateService = (service) => {
    dispatch({
      type: "UPDATE",
      payload: {
        ...service,
      },
    });
  };
  return (
    <AppContext.Provider
      value={{
        services,
        currentService,
        mode,
        addService,
        editService,
        deleteService,
        updateService,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
