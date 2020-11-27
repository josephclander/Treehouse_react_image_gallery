import React from 'react';
import ListItem from './ListItem';

const images = [
  {
    src: 'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
    id: 1,
  },
  {
    src: 'https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg',
    id: 2,
  },
  {
    src: 'https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg',
    id: 3,
  },
  {
    src: 'https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg',
    id: 4,
  },
];

const Gallery = () => {
  const imageList = images.map((item) => {
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
