import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CardGrid from "../components/CardGrid";
import { useCategories, useServices } from "../hooks";
import Layout from "../layout/Layout";

const AppRouter = () => {
  const { carsCategory, healthCategory, homeCategory } = useCategories();
  const { services } = useServices();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CardGrid services={services} />} />
          <Route path="cars" element={<CardGrid services={carsCategory} />} />
          <Route
            path="health"
            element={<CardGrid services={healthCategory} />}
          />
          <Route path="home" element={<CardGrid services={homeCategory} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
