import { FiPlus, FiX } from "react-icons/fi";

import { Container } from './styles';

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew} {...rest}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew} 
      />

      <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
        { isNew ? <FiPlus/> : <FiX/>}
      </button>
    </Container>
  );
}