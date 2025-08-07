import React, { useState } from "react";
import UsuarioForm from "../components/UsuarioForm";
import UsuarioList from "../components/UsuarioList";

export default function UsuarioPage() {
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = (nuevo) => {
    setUsuarios([...usuarios, nuevo]);
  };

  return (
    <div>
      <h3>Usuarios</h3>
      <UsuarioForm onAdd={agregarUsuario} />
      <UsuarioList usuarios={usuarios} />
    </div>
  );
}
