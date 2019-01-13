import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
    //il child component (props.children) cambia a seconda
    // di cosa la CardSection rende (bottone,immagine,etc)
  );
};


const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', //per disporre in riga gli elementi multipli all'interno!
    borderColor: '#ddd',
    position: 'relative'


  }
};

export default CardSection;
