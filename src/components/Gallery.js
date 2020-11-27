import React from 'react';
import ListItem from './ListItem';
import NotFoundItem from './NotFoundItem';

const Gallery = (props) => {
  let imageList;
  if (props.images.length > 0) {
    imageList = props.images.map((item) => {
      return <ListItem source={item.src} key={item.id} />;
    });
  } else {
    imageList = <NotFoundItem />;
  }
  return (
    <div className='photo-container'>
      <h2>Results</h2>
      <ul>{imageList}</ul>
    </div>
  );
};

export default Gallery;
