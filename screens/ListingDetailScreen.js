import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, StatusBar } from "react-native";

class ListingDetailScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const sharing = navigation.getParam("sharing");
    return (
      <Container>
        <StatusBar hidden></StatusBar>
        <Cover>
          <Image source={sharing.image}></Image>
        </Cover>
        <Title>{sharing.itemTitle}</Title>
        <Status>{sharing.itemStatus}</Status>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 20, left: 20 }}
        >
          <BackView>
            <Ionicons
              name="ios-arrow-round-back"
              size={36}
              color="#4775f2"
              style={{ marginTop: -2 }}
            />
          </BackView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default ListingDetailScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
  width: 300px;
  position: absolute;
  top: 420px;
  left: 20px;
`;

const Status = styled.Text`
  color: #4775f2;
  position: absolute;
  top: 395px;
  left: 20px;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const BackView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
