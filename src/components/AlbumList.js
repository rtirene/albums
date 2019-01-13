//ci serve sia react per interpretare jsx che la component class
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
//import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] }; //default state not for modification

  componentWillMount() { //quando il comp è chiamato
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data })); //update state after response
  }

  renderAlbums() {
    //map dell'oggetto in un set di comp
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    //we pass album as a prop to //child
  }


  render() {
    console.log(this.state);
    return (
      <ScrollView>{this.renderAlbums()}</ScrollView>
    );
  }
}


export default AlbumList;
