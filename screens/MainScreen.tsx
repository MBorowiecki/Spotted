import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components'
import { Icon } from 'react-native-elements'

import RecentScreen from './Recent';

const MainContainer = styled.View`
    height: 100%;
`

const TopMainContainer = styled.View`
    background-color: #ffffff;
    border-bottom-color: #DFDFDF;
    border-bottom-width: 1px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`

const ScreenTitle = styled.Text`
    font-size: 42px;
    color: #000000;
    font-weight: bold;
    flex-grow: 1;
`

const ProfileImage = styled.Image`
    border-radius: 100px;
    height: 100%;
`

const ProfileIcon = styled(Icon)`
    color: #000000;
`

const ProfileIconContainer = styled.View`
    background-color: #C4C4C4;
    border-radius: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    elevation: 15;
`

const BottomMenuContainer = styled.View`
    background-color: #ffffff;
    border-top-color: #DFDFDF;
    border-top-width: 1px;
    padding: 8px;
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

const MenuButtonContainer = styled.View`
    border-radius: 100px;
    padding: 8px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuButtonText = styled.Text`
    color: #000000;
    font-size: 13px;
    font-weight: bold;
`

let content = <RecentScreen />

const MainScreen: React.FC = () => {
    return(
        <MainContainer>
            <TopMainContainer>
                <ScreenTitle>Najnowsze</ScreenTitle>
                <ProfileIconContainer>
                    <ProfileIcon name="person" size={42}/>
                </ProfileIconContainer>
            </TopMainContainer>
            <RecentScreen />
            <BottomMenuContainer>
                <MenuButtonContainer>
                    <Icon name="update" color="#000000" size={32}/>
                    <MenuButtonText>
                        Najnowsze
                    </MenuButtonText>
                </MenuButtonContainer>
                <MenuButtonContainer>
                    <Icon name="search" color="#000000" size={32}/>
                    <MenuButtonText>
                        Wyszukaj
                    </MenuButtonText>
                </MenuButtonContainer>
                <MenuButtonContainer>
                    <Icon name="md-albums" type="ionicon" color="#000000" size={32}/>
                    <MenuButtonText>
                        Kategorie
                    </MenuButtonText>
                </MenuButtonContainer>
            </BottomMenuContainer>
        </MainContainer>
    )
}

export default MainScreen;