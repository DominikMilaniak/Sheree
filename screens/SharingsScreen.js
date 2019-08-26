import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class SharingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text>Sharings Screen</Text>
        <Button
          title="Close"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        ></Button>
      </Container>
    );
  }
}

export default SharingsScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
