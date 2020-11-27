import React from 'react';
import ListItem from './ListItem';
import NotFoundItem from './NotFoundItem';

const Gallery = (props) => {
  let imageList;
  if (props.images.length > 0) {
    imageList = props.images.map((item) => {
      return <ListItem data={item} key={item.id} />;
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

// farm: 66
// id: "50653265716"
// isfamily: 0
// isfriend: 0
// ispublic: 1
// owner: "191175612@N05"
// secret: "aa5bb85818"
// server: "65535"
// title: "The Sky"
