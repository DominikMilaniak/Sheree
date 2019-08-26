import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen.js";
import SharingsScreen from "../screens/SharingsScreen.js";
import MainMenu from "./MainMenu.js";

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Sharings: SharingsScreen
});

export default createAppContainer(MainMenu);
