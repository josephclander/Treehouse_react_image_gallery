import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Gallery from './components/Gallery';
import apiKey from './config';

class App extends Component {
  state = {
    imageData: [],
  };

  componentDidMount() {
    this.searchFlickr('sky');
  }

  searchFlickr = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=16&page=1&format=json&nojsoncallback=1`
      )
      .then((data) =>
        this.setState({
          imageData: data.data.photos.photo,
        })
      )
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  };

  render() {
    return (
      <div className='container'>
        <Header />
        <Gallery images={this.state.imageData} />
      </div>
    );
  }
}

export default App;

// standard response from Flickr for one photo
// from data.data.photos.photo

// farm: 66
// id: "50653265716"
// isfamily: 0
// isfriend: 0
// ispublic: 1
// owner: "191175612@N05"
// secret: "aa5bb85818"
// server: "65535"
// title: "The Sky"

// form needed to look up an image
// https://farm{farm}.staticflickr.com/{server}/{id}_{secret}.jpg
// this example
// https://farm66.staticflickr.com/65535/50653265716_aa5bb85818.jpg

// placeholder state images
// images: [
//   {
//     src: 'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
//     id: 1,
//   },
//   {
//     src: 'https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg',
//     id: 2,
//   },
//   {
//     src: 'https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg',
//     id: 3,
//   },
//   {
//     src: 'https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg',
//     id: 4,
//   },
// ],
