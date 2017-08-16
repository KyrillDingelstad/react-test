import React from 'react';
import Search from './Search';
import Album from './Album';
import AlbumDetails from './AlbumDetails';

const App = () =>
  <div className='container'>
    <div className='row'>
      <Search />
      <Album />
      <AlbumDetails />
    </div>
  </div>

export default App;