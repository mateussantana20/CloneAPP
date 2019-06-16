import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Image,FlatList,Animated} from 'react-native';

import arrow from '../images/Icon/arrow.png'
import arrow2 from '../images/Icon/arrow2.png'
import dinheiro from '../images/Icon/dinheiro-40.png'
import cartoes from '../images/Icon/cartoes.png'
import menu from '../images/Icon/menu.png'

export default class TelaPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexx: new Animated.Value(1),
    };
    this.fechar = this.fechar.bind(this);
  }
  fechar() {

    Animated.timing(
      this.state.flexx,
      {
        toValue:0,
        duration:1000
      }
    ).start();
  }

  static navigationOptions = {
    drawerLabel:'Página Inicial',
    drawerIcon:() => (
      <Image source={require('../images/Icon/home.png')} style={styles.icon} />
    )
  }
  render() {
    return (
      <View style = {styles.ViewPrincipal}>
        <Animated.View style={{backgroundColor:'#87CEFA',height:140,flex:this.state.flexx,borderRadius:30}}>
        <View style={{marginTop:30}}>

            <TouchableHighlight onPress={() => this.props.navigation.toggleDrawer()}  >
              <View style = {{marginLeft:10,marginTop:5}}>
                <Image style={styles.ImgMenu} source={menu}/>
              </View>
            </TouchableHighlight>

            <Text style = {styles.Texts}>Olá  Mateus</Text>
            <Text style = {styles.Texts}>R$ 100</Text>
            <View style ={{justifyContent:'center',alignItems:'center',marginTop:45}}> 

            </View>

          </View>
        </Animated.View>

        <View style = {styles.View3}>
          <View style = {{justifyContent:'space-around',flexDirection: 'row'}}>
          <TouchableHighlight>
            <View>
              <Image style={styles.Imgs} source={dinheiro}/>
              <Text style = {styles.texImg}>Adicionar Dinheiro</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View>
              <Image style={styles.Imgs} source={cartoes}/>
              <Text style = {{marginTop:0}}>Cartões</Text>
            </View>
          </TouchableHighlight>
          </View>

              <View style ={{alignContent:'center',marginTop:-120,marginLeft:165}}>
              <TouchableHighlight onPress={this.fechar}>
                <Image source={arrow2} style = {{width:30,height:30}}/>
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
  ImgMenu:{
    width:30,
    height:30
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
  },
  icon:{
    width:26,
    height:26
  }
})

