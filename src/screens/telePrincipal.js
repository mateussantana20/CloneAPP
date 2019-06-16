import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image,FlatList} from 'react-native';

import arrow from '../images/Icon/arrow.png'
import dinheiro from '../images/Icon/dinheiro-40.png'
import cartoes from '../images/Icon/cartoes.png'

export default class TelaPrincipal extends Component {

  static navigationOptions = {
    title:'Home'
  }
  render() {
    return (
      <View style = {styles.ViewPrincipal}>

        <View style={styles.View1}> 
          <Text style = {styles.Texts}>Olá  Mateus</Text>
          <Text style = {styles.Texts}>R$ 100</Text>
          <View style ={{justifyContent:'center',alignItems:'center',marginTop:90}}> 
          <Image source={arrow} style = {{width:30,height:30}}/>
          </View>
        </View>

        <View style = {styles.View3}>
          <TouchableHighlight>
            <View>
              <Image tyle={styles.Imgs} source={dinheiro}/>
              <Text style = {styles.texImg}>Adicionar Dinherio</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View>
              <Image style={styles.Imgs} source={cartoes}/>
              <Text style = {{marginTop:0}}>Cartões</Text>
            </View>
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewPrincipal:{
    flex:1,
    marginTop:30
  },
  View1:{
    backgroundColor:'#87CEFA',
    flex:1, 
    height: 150,
    borderRadius:3
  },
  Texts:{
    fontSize:20,
    textAlign:'auto',
    padding:5,
    color:'#FFFAFA',
    margin:15
  },
  View3:{
    flex:2,
    justifyContent:'space-around',
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop:10
  },
  Imgs:{
    width:50,
    height:50
  },
  texImg:{
    marginTop:10,
    textAlign:'center'
  }
})

