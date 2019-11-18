import React from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import styled from 'styled-components'

const MainView = styled.View`
    background-color: papayawhip;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainText = styled.Text`
    font-size: 34px;
    font-weight: bold;
`

const Search: React.FC = () => {
    const { navigate } = useNavigation();
    return(
        <MainView>
            <MainText onPress={() => navigate('Recent')}>Wyszukaj!</MainText>
        </MainView>
    )
}

export default Search