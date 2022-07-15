import { initialCurrentService } from "./initialState";

export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      const filteredServices = state.services.filter(
        (service) => service.id !== action.payload
      );
      return {
        ...state,
        services: [...filteredServices],
      };
    case "ADD":
      return {
        ...state,
        services: [...state.services, { ...action.payload }],
      };
    case "EDIT":
      return {
        ...state,
        currentService: action.payload,
        mode: "edit",
      };
    case "UPDATE":
      const newServices = state.services.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return {
        ...state,
        services: [...newServices],
        mode: "add",
        currentService: initialCurrentService,
      };
    default:
      return state;
  }
};
