import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';


export default class MinhaConta extends Component {

  static navigationOptions = {
    title:'Minha Conta'
  }
  render() {
    return (
      <View style = {styles.ViewPrincipal}>

          <View >
            <View style ={styles.view3}>
                <Text style={styles.txtnome}>Dinheiro em conta</Text>
                <Text style ={styles.txtvalor}>R$ 1000</Text>
            </View>
            
            <View style ={styles.view4}>
            <Text style={styles.txtnome}>Dinheiro Disponível</Text>
            <Text style ={styles.txtvalor}>R$ 1000</Text>
            </View>
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
  }
})

