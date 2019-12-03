import React, {useState} from 'react'
import { View, Text, Image, TextInput, Picker } from 'react-native'
import styled from 'styled-components'
import { Icon } from 'react-native-elements'

import RecentScreen from '../screens/Recent';

const MainContainer = styled.View`
    background-color: #ffffff;
    border-bottom-color: #DFDFDF;
    border-bottom-width: 1px;
    margin-top: 30px;
    padding: 16px;
`

const TopContainer = styled.View`
    display: flex;
    flex-direction: row;
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

const SearchContainer = styled.View`
    margin-top: 16px;
`

const SearchInput = styled.TextInput`
    padding: 16px;
    background-color: #F4F4F4;
    color: #000000;
    width: 100%;

    ::placeholder{
        color: #898989;
    }
`

const SearchPicker = styled.Picker`
    width: 50%;
    padding: 8px;
    border-width: 1px;
    border-color: #000000;
    border-radius: 10px;
`

const SearchLabel = styled.Text`
    color: #000000;
    font-size: 16px;
    margin-top: 8px;
`

let content = <RecentScreen />

interface Props {
    title?: string,
    search?: boolean,
    textChangeFunction?: Function,
    searchCollectionChange?: Function
}

const MainScreen: React.FC<Props> = (props) => {
    const [category, setCategory] = useState("Lorem ipsum")

    return(
        <>
            <MainContainer>
                <TopContainer>
                    <ScreenTitle>{props.title}</ScreenTitle>
                    <ProfileIconContainer>
                        <ProfileIcon name="person" size={42}/>
                    </ProfileIconContainer>
                </TopContainer>
                {props.search && <SearchContainer>
                        <SearchInput 
                    placeholder="Wpisz frazę którą chcesz wyszukać" 
                    onChangeText={(text) => props.textChangeFunction(text)} />
                        <SearchLabel>
                            Kategoria:
                        </SearchLabel>
                        <SearchPicker
                            selectedValue={category}
                            onValueChange={(itemValue, itemIndex) => {setCategory(itemValue); props.searchCollectionChange(itemValue)}}
                        >
                            <Picker.Item label="Lorem Ipsum" value="Lorem ipsum" />
                            <Picker.Item label="Samochody" value="Samochody" />
                        </SearchPicker>
                    </SearchContainer>}
            </MainContainer>
        </>
    )
}

export default MainScreen;