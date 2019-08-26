import React from "react";
import styled from "styled-components";
import { Button } from "react-native";

class BorrowingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Text>Borrowing Screen</Text>
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

export default BorrowingScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;
