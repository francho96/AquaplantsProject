import { useState, useEffect } from 'react';
import agregar from '../../assets/agregar.png';
import sacar from '../../assets/sacar.png';

interface ContadorProps {
  name: string;
  initialQuantity: number;
  onAdd: (name: string) => void;
  onRemove: (name: string) => void;
}

const Contador: React.FC<ContadorProps> = ({ name, initialQuantity, onAdd, onRemove }) => {
  const [contador, setContador] = useState(initialQuantity);

  useEffect(() => {
    setContador(initialQuantity);
  }, [initialQuantity]);

  const aumentarContador = () => {
    setContador(contador + 1);
    onAdd(name);
  };

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
      onRemove(name);
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
