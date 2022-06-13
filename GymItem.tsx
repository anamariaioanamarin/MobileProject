import React from "react";
import styled from "styled-components/native";
import { IGym } from "../context/GymContext";
import { Text } from "react-native";

const Container = styled.View`
    width: 150px;
    height: 100px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 12px;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.Text`
    font-weight: bold;
`;

const Gym: React.FC<{ gym: IGym }> = ({ gym }) => {
    const { city, name } = gym;

    return(
        <Container>
            <Title>{name}</Title>
            <Text>{city}</Text>
        </Container>
    )
};

export default Gym;