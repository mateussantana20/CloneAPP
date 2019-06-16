import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';

import menu from '../images/Icon/menu.png'

export default class Pagar extends Component {

    static navigationOptions = {
        drawerLabel:'Pagar',
        drawerIcon:() => (
          <Image source={require('../images/Icon/pagar.png')} style={styles.icon} />
        )
      }
  render() {
    return (
      <View style = {styles.ViewPrincipal}>
          <View style = {{backgroundColor:'#87CEFA',height:70}}>
          <View style = {{marginTop:30}}>
            <TouchableHighlight onPress={() => this.props.navigation.toggleDrawer()}  >
                <View style = {styles.viewBotao}>
                    <Image style={styles.ImgMenu} source={menu}/>
                    <Text style = {styles.txtConta}>Pagamentos</Text>
                </View>
            </TouchableHighlight>
          </View>
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewPrincipal:{
    flex:1,
  },
  icon:{
    width:26,
    height:26
  },
  ImgMenu:{
    width:26,
    height:26
  },
  viewBotao:{
    marginLeft:10,
    marginTop:5,
    flexDirection:'row'
  },
  txtConta:{
    marginLeft:15,
    marginTop:5,
    color:'#FFFFFF',
    fontSize:20
},
})

