import { StackNavigator } from 'react-navigation';

import Login from 'pages/login';
import Home from 'pages/home';

const Routes = StackNavigator(
  {
    Login: { screen: Login },
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Login',
  },
);

export default Routes;
