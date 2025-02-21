import { StyleSheet, Text, View } from "react-native";
import {
    NavigationContainer,
    NavigationIndependentTree,
    useNavigation,
    createStaticNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import App from "./App";

export default function Page() {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <App />
            </NavigationContainer>
        </NavigationIndependentTree>
    );
}
