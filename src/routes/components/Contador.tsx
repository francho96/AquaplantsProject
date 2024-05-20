import agregar from "../../assets/agregar.png"
import sacar from "../../assets/sacar.png"
import React, { useState } from 'react';

const Contador: React.FC = () => {
  const [contador, setContador] = useState(1);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "flex-end" }}>
      <div onClick={disminuirContador}>
        <img src={sacar} style={{ width: "40%", alignSelf: "end", cursor: "pointer" }} alt="Sacar" />
      </div>
      <div>{contador}</div>
      <div onClick={aumentarContador}>
        <img src={agregar} style={{ width: "40%", alignSelf: "end", cursor: "pointer" }} alt="Agregar" />
      </div>
    </div>
  );
};

export default Contador;