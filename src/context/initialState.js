import { v4 as uuidv4 } from "uuid";

export const initialCurrentService = {
  category: "cars",
  name: "",
  description: "",
};

export const initialServices = [
  {
    id: uuidv4(),
    name: "Electricidad",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "home",
  },
  {
    id: uuidv4(),
    name: "Auxilio Mecanico",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "cars",
  },
  {
    id: uuidv4(),
    name: "Ambulacia",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "health",
  },
];
