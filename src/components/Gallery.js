import React from 'react';
import ListItem from './ListItem';

const Gallery = (props) => {
  const imageList = props.images.map((item) => {
    return <ListItem source={item.src} key={item.id} />;
  });
  return (
    <div className='photo-container'>
      <h2>Results</h2>
      <ul>
        {imageList}

        {/* Not Found */}
        {/* <li class='not-found'>
          <h3>No Results Found</h3>
          <p>You search did not return any results. Please try again.</p>
        </li> */}
      </ul>
    </div>
  );
};

export default Gallery;
