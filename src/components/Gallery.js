import React from 'react';
import ListItem from './ListItem';
import NotFoundItem from './NotFoundItem';

const Gallery = (props) => {
  let imageList;
  let titleMessage;
  if (props.images.length > 0) {
    titleMessage = props.title;
    imageList = props.images.map((item) => {
      return <ListItem data={item} key={item.id} />;
    });
  } else {
    titleMessage = 'No Results Found';
    imageList = <NotFoundItem />;
  }
  return (
    <div className='photo-container'>
      <h2>{titleMessage}</h2>
      <ul>{imageList}</ul>
    </div>
  );
};

export default Gallery;
