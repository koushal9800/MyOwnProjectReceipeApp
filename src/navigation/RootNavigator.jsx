import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import { MyTabs } from './BottomTabNavigator';


const Stack = createStackNavigator()

const RootNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            <Stack.Screen name="Home"
          component={MyTabs}
          options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default RootNavigator