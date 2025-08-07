import React from "react";

export default function UsuarioList({ usuarios }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((u, index) => (
          <tr key={index}>
            <td>{u.nombre}</td>
            <td>{u.correo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
