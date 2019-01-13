// import libs
import React from 'react';
import { Text, View } from 'react-native';


//make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}><Text style={textStyle}>{props.headerText}</Text></View>
  );
}
;
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
    marginTop: 5
  },
  textStyle: {
    fontSize: 20
  }
};

//Make it available to other parts of the app (riutilizzabile!!!)
export default Header;
