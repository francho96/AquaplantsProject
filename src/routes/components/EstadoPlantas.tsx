import React, { useState } from 'react';
import { Button, ButtonGroup, } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const SelectionButtons: React.FC = () => {
      const [selected, setSelected] = useState<string | null>(null);

      const handleSelection = (value: string) => {
            setSelected(value);
      };

      return (
            <div>
                  <ButtonGroup>
                        <Button
                              variant={selected === 'Bueno' ? 'contained' : 'outlined'}
                              onClick={() => handleSelection('Bueno')}
                              startIcon={<ThumbUpIcon />}
                              style={{
                                    opacity: selected === 'Bueno' ? 1 : 0.5,
                                    backgroundColor: selected === 'Bueno' ? '#2a653b' : 'transparent',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '35px',
                                    height: '41px',
                                    paddingLeft: 26,
                              }}>

                        </Button>
                        <Button
                              variant={selected === 'Malo' ? 'contained' : 'outlined'}
                              onClick={() => handleSelection('Malo')}
                              startIcon={<ThumbDownIcon />}
                              style={{
                                    opacity: selected === 'Malo' ? 1 : 0.5,
                                    backgroundColor: selected === 'Malo' ? '#F44336' : 'transparent',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '35px',
                                    height: '41px',
                                    paddingLeft: 26,
                              }}>
                        </Button>
                  </ButtonGroup>

            </div>
      );
};

export default SelectionButtons;
