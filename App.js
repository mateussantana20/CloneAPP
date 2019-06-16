import React, {Component} from 'react';
import{createDrawerNavigator,createStackNavigator,createAppContainer} from'react-navigation';

import TelaPrincipal from './src/screens/telePrincipal';
import minhaConta from './src/screens/minhaConta';
import pagar from './src/screens/pagar';

const AppNavigator = createDrawerNavigator({
  Tela1:{
    screen:TelaPrincipal
  },
  Tela2:{
    screen:minhaConta
  },
  Tela3:{
    screen:pagar
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
