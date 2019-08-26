import React from "react";
import styled from "styled-components";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SharingsScreen from "../screens/SharingsScreen";
import { Ionicons } from "@expo/vector-icons";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import BorrowingScreen from "../screens/BorrowingScreen";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    ListingDetails: ListingDetailScreen
  },
  {
    mode: "modal"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName == "ListingDetails") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: "Dashboard",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    )
  };
};

const SharingStack = createStackNavigator({
  Sharings: SharingsScreen
});

SharingStack.navigationOptions = {
  tabBarLabel: "Sharing",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-arrow-up"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const BorrowingStack = createStackNavigator({
  Borrowings: BorrowingScreen
});

BorrowingStack.navigationOptions = {
  tabBarLabel: "Borrowing",
  tabBarIcon: ({ focused }) => (
    <Ionicons
      name="ios-arrow-down"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  )
};

const MainMenu = createBottomTabNavigator({
  HomeStack,
  SharingStack,
  BorrowingStack
});

export default MainMenu;
