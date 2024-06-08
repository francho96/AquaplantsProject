import { useState, useEffect } from 'react';


interface EditInfoProps {
      currentField: string;
      currentValue: string;
      onSave: (value: string) => void;
      onClose: () => void;
}

const EditInfo: React.FC<EditInfoProps> = ({ currentField, currentValue, onSave, onClose }) => {
      const [value, setValue] = useState(currentValue);

      useEffect(() => {
            setValue(currentValue);
      }, [currentValue]);

      return (
            <div className="popup" onClick={onClose}>
                  <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <div className="popup-header">
                              <h3 style={{ margin: 0 }}>Editar {currentField}</h3>
                              <span className="close" onClick={onClose}>&times;</span>
                        </div>
                        <input
                              type="text"
                              value={value}
                              onChange={e => setValue(e.target.value)}
                        />
                        <button className="saveButton" onClick={() => onSave(value)}>Guardar</button>
                  </div>
            </div>
      );
};


export default EditInfo;
