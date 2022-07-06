import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import  {MainScreen}  from "../screens/MainScreen";
import { PhotoScreen } from "../screens/PhotoScreen";

const Stack = createStackNavigator ()

export const Navigate = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                  name="Main"
                 component={MainScreen}
                />
                <Stack.Screen name="Photo" component={PhotoScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}