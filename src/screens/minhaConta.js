import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';

import menu from '../images/Icon/menu.png'
import arrowLeft from '../images/Icon/arrowLeft.png'
export default class MinhaConta extends Component {
    static navigationOptions = {
        drawerLabel:'Minha Conta',
        drawerIcon:() => (
          <Image source={require('../images/Icon/user.png')} style={styles.icon} />
        )
      }
  render() {
    return (
      <View style = {styles.ViewPrincipal}>
          <View style = {{backgroundColor:'#87CEFA',height:70}}>
          <View style = {{marginTop:30}}>
            <TouchableHighlight onPress={() => this.props.navigation.toggleDrawer()}  >
                <View style = {styles.viewBotao}>
                    <Image style={styles.ImgMenu} source={arrowLeft}/>
                    <Text style = {styles.txtConta}>Minha Conta</Text>
                </View>
            </TouchableHighlight>
          </View>
          </View>
          <View >
            <View style ={styles.view3}>
                <Text style={styles.txtnome}>Dinheiro em conta</Text>
                <Text style ={styles.txtvalor}>R$ 100</Text>
            </View>

            <View style ={styles.view4}>
                <Text style={styles.txtnome}>Dinheiro Disponível</Text>
                <Text style ={styles.txtvalor}>R$ 100</Text>
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
  txtnome:{
    marginLeft:5
  },
  txtvalor:{
    fontSize:25,
    margin:10,
    marginLeft:5
  },
  view3:{
    backgroundColor:'#DCDCDC',
    margin:10
  },
  view4:{
    margin:10 
  },
  icon:{
    width:26,
    height:26
  },
  ImgMenu:{
    width:30,
    height:30
  },
  txtConta:{
      marginLeft:10,
      marginTop:10,
      color:'#FFFFFF',
      fontSize:20
  },
  viewBotao:{
    marginLeft:10,
    marginTop:5,
    flexDirection:'row'
  }
})

