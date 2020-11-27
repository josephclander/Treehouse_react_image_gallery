import React from 'react';

const ListItem = (props) => {
  return (
    <li>
      <img src={props.source} alt='' key={props.id} />
    </li>
  );
};

export default ListItem;
