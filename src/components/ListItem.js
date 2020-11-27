import React from 'react';

const ListItem = (props) => {
  const photo = props.data;
  // https://farm{farm}.staticflickr.com/{server}/{id}_{secret}.jpg
  const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  return (
    <li>
      <img src={url} alt={photo.title} />
    </li>
  );
};

export default ListItem;

// farm: 66
// id: "50653265716"
// isfamily: 0
// isfriend: 0
// ispublic: 1
// owner: "191175612@N05"
// secret: "aa5bb85818"
// server: "65535"
// title: "The Sky"
