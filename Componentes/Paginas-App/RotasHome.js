import {createStackNavigator} from '@react-navigation/stack';

import Home from '../Paginas-App/Home';
import CadDiario from './CadDiario';
import AlterarDiario from './AlterarDiario';



const Stack = createStackNavigator();

export default function RotasHome(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="CadDiario" component={CadDiario} options={{headerShown: false}}/>
            <Stack.Screen name="AlterarDiario" component={AlterarDiario} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}