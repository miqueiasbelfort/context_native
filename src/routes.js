import { createNativeStackNavigator } from "@react-navigation/native-stack"

// pages
import Login from "./pages/Login"
import Home from "./pages/Home"
import Pedidos from "./pages/Pedidos"

const Stack = createNativeStackNavigator()

function Routes(){
    return (
        <Stack.Navigator>

            <Stack.Screen name="Entrar" component={Login}/>
            <Stack.Screen name="Pegina Inicial" component={Home}/>
            <Stack.Screen name="Pedidos" component={Pedidos}/>

        </Stack.Navigator>
    )
}
export default Routes
