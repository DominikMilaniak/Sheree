import React from 'react';
import styled from 'styled-components';


const Card = props => (
    <Container>
        <Cover>
            <Image source={require('../assets/drill.jpg')} ></Image>
        </Cover>
        <Content>
            <Avatar source={require('../assets/avatar2.jpg')} ></Avatar>
            <Wrapper>
                <Title>Electric Drill</Title>
                <Subtitle>John Doe</Subtitle>
            </Wrapper>
        </Content>
    </Container>
);

export default Card;

const Container = styled.View`
    width: 315px;
    height: 280px;
    background-color: white;
    border-radius: 14px;
    margin-top: 20px;
    margin-left: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
`;

const Cover = styled.View`
    width: 100%;
    height: 200px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const Content = styled.View`
    height: 80px;
    padding-left: 20px;
    flex-direction: row;
    align-items: center;
`;

const Avatar = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
`;

const Wrapper = styled.View`
    margin-left: 10px;
`;

const Title = styled.Text`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
`;

const Subtitle = styled.Text`
    color: #b8bece;
    margin-top: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
`;