import React, { Component } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';

class App extends Component {
  state = {
    images: [
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
    ],
  };

  render() {
    return (
      <div className='container'>
        <Header />
        <Gallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
