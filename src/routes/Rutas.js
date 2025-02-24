import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeProductos } from '../components/productos';
import { Home } from '../page';
import { Layout } from '../layouts';
import { Productos } from '../components/Formularios';

export function Rutas() {
  const Layouts = ({ Layout, Page, Formularios }) => {
    return (
      <Layout>
        <Page />
        {Formularios && <Formularios />}
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layouts Layout={Layout} Page={Home} />} />
      <Route path="/producto" element={<Layouts Layout={Layout} Page={HomeProductos} />} />
      <Route path="/formproductos" element={<Layouts Layout={Layout} Page={Home} Formularios={Productos} />} />
    </Routes>
  );
}

export default Rutas;
