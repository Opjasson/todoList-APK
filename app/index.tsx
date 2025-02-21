import {
    NavigationContainer,
    NavigationIndependentTree,
} from "@react-navigation/native";
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
