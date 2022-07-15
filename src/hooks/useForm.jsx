import React from "react";

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = React.useState(initialState);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  return { formData, handleInputChange, handleReset, setFormData };
};
