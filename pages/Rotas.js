import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Login from './Login';



const Stack = createStackNavigator();

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
            
        </Stack.Navigator>
    );
}