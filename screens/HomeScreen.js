import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Menu from "../components/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    action: state.action
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    scale: new Animated.Value(1)
  };

  componentDidMount() {
    this.toggleMenu;
  }

  componentDidUpdate() {
    this.toggleMenu;
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, {
        toValue: 0.5
      }).start();
    }

    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.scale, {
        toValue: 1
      }).start();
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer style={{ transform: [{ scale: this.state.scale }] }}>
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar source={require("../assets/avatar.jpg")} />
                </TouchableOpacity>
                <Title>Welcome back, </Title>
                <Name>Dominic</Name>
                <SearchIcon>
                  <Ionicons name="ios-search" size={32} color="#4775f2" />
                </SearchIcon>
              </TitleBar>
              <SubTitle>Currently in use</SubTitle>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 30 }}
              >
                {itemsInUseOverview.map((itemInUseOverView, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      this.props.navigation.push("ListingDetails", {
                        sharing: itemInUseOverView
                      });
                    }}
                  >
                    <Card
                      itemTitle={itemInUseOverView.itemTitle}
                      itemStatus={itemInUseOverView.itemStatus}
                      borrowedBy={itemInUseOverView.borrowedBy}
                      image={itemInUseOverView.image}
                      borrowerAvatar={itemInUseOverView.borrowerAvatar}
                    />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const itemsInUseOverview = [
  {
    itemTitle: "Powerful Electric Drill",
    itemStatus: "Sharing",
    borrowedBy: "Lucas Rover",
    image: require("../assets/drill.jpg"),
    borrowerAvatar: require("../assets/avatar2.jpg")
  },
  {
    itemTitle: "Macbook Air 2018",
    itemStatus: "Borrowing",
    borrowedBy: "Amy Wong",
    image: require("../assets/macbook.jpg"),
    borrowerAvatar: require("../assets/avatar4.jpg")
  },
  {
    itemTitle: "Tesla Model S",
    itemStatus: "Borrowing",
    borrowedBy: "Ilon Nusk",
    image: require("../assets/tesla.jpg"),
    borrowerAvatar: require("../assets/avatar.jpg")
  },
  {
    itemTitle: "City Scooter",
    itemStatus: "Sharing",
    borrowedBy: "Tony Basmathi",
    image: require("../assets/scooter.jpg"),
    borrowerAvatar: require("../assets/avatar3.jpg")
  }
];

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const SearchIcon = styled.View`
  position: absolute;
  top: 5px;
  right: 20px;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
