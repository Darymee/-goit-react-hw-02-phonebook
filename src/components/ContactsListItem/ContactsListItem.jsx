import { ImUser } from 'react-icons/im';
import {
  ContactItem,
  Name,
  Number,
  ButtonDelete,
} from './ContactsListItem.styled.js';

export const ContactsListItem = ({ name, number, id, onDelete }) => {
  return (
    <ContactItem>
      <Name>
        <ImUser />
        {name}:
      </Name>
      <Number>{number}</Number>
      <ButtonDelete type="button" onClick={() => onDelete(id)}>
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};
