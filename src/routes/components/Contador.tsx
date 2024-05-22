import { useState } from 'react';
import agregar from '../../assets/agregar.png';
import sacar from '../../assets/sacar.png';

interface ContadorProps {
  onAdd: () => void;
}

const Contador: React.FC<ContadorProps> = ({ onAdd }) => {
  const [contador, setContador] = useState(1);

  const aumentarContador = () => {
    setContador(contador + 1);
    onAdd();
  };

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      <div onClick={disminuirContador}>
        <img src={sacar} style={{ width: '18px', cursor: 'pointer' }} alt="Sacar" />
      </div>
      <div style={{ fontSize: '20px' }}>{contador}</div>
      <div onClick={aumentarContador}>
        <img src={agregar} style={{ width: '18px', cursor: 'pointer' }} alt="Agregar" />
      </div>
    </div>
  );
};

export default Contador;
