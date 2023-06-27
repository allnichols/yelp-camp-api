import { createStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();


// export const AppStack = () => {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Details" component={DetailsScreen} />
//         </Stack.Navigator>
//     )
// }

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}