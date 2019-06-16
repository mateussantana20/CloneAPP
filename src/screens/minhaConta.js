import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';


export default class MinhaConta extends Component {

  static navigationOptions = {
    title:'Minha Conta'
  }
  render() {
    return (
      <View style = {styles.ViewPrincipal}>
          <Text>AAAA</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewPrincipal:{
    flex:1,
    marginTop:30
  },
})

