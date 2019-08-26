import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MenuItem from "./MenuItem";
import { connect } from "react-redux";

const screenHeight = Dimensions.get("window").height;

function mapStateToProps(state) {
  return {
    action: state.action
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU"
      })
  };
}

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight)
  };

  componentDidMount() {
    this.toggleAccountMenu();
  }

  componentDidUpdate() {
    this.toggleAccountMenu();
  }

  toggleAccountMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 0
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight
      }).start();
    }
  };

  render() {
    return (
      <ContainerAnimated style={{ top: this.state.top }}>
        <Cover>
          {/* The Image is placeholder for UI part I will design later */}
          <Image />
          <Title>Dominic Milaniak</Title>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </ContainerAnimated>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
`;

const ContainerAnimated = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #546bfb;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  position: absolute;
  top: 71px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
  padding: 50px;
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "Profile settings, personal information"
  },
  {
    icon: "ios-card",
    title: "Payments",
    text: "Payments overview, payment settings"
  },
  {
    icon: "ios-help-buoy",
    title: "Help Center",
    text: "Resolving issues, reporting incidents"
  },
  {
    icon: "ios-log-out",
    title: "Log out",
    text: "See you soon, Dominic"
  }
];
