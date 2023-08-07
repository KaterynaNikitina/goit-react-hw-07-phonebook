import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'redux/operations';

import PropTypes from 'prop-types';
import { Item, ItemBtn } from './ListItem.styled';

export const ListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {phone}
      <ItemBtn
        onClick={() => {
          dispatch(deleteContactsThunk(id))
      }}
      >
        Delete
      </ItemBtn>
    </Item>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
