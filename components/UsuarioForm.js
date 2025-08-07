import React, { useState } from "react";

export default function UsuarioForm({ onAdd }) {
  const [usuario, setUsuario] = useState({ nombre: "", correo: "" });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(usuario);
    setUsuario({ nombre: "", correo: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" value={usuario.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="correo" value={usuario.correo} onChange={handleChange} placeholder="Correo" required />
      <button type="submit">Agregar</button>
    </form>
  );
}
