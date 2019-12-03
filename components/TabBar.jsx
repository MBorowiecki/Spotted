import React, {useState} from 'react'
import styled from 'styled-components'
import { View, Text, ToastAndroid, TouchableNativeFeedback } from "react-native"
import { Icon } from 'react-native-elements'
import Tab from './Tab'

const BottomMenuContainer = styled.View`
    background-color: #ffffff;
    border-top-color: #DFDFDF;
    border-top-width: 1px;
    padding: 8px;
    display: flex;
    flex-direction: row;
`

const MenuButtonContainer = styled.View`
    border-radius: 100px;
    padding: 8px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const MenuButtonText = styled.Text`
    color: #000000;
    font-size: 13px;
    font-weight: bold;
`

const TabBar = (props) => {
    const { navigationState, navigation, tabBarIcon } = props;
    return (
      <BottomMenuContainer>
      {navigation.state.routes.map((route, index) => {
        const [iconName, setIconName] = useState("")

        setTimeout(() => {
            switch(route.routeName){
                case "Najnowsze":
                    setIconName("update");
                    break;
                case "Wyszukaj":
                    setIconName("search");
                    break;
            }
        }, 1)

        return (
          <MenuButtonContainer>
              <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackgroundBorderless()} onPress={() => navigation.navigate(route.routeName)} style={{width: "100%", height: '100%'}}>
                <View>
                    <Icon name={iconName} color="#000000" size={32}/>
                    <MenuButtonText>
                            {route.routeName}
                    </MenuButtonText>
                </View>
              </TouchableNativeFeedback>
          </MenuButtonContainer>
        )
      })}
      </BottomMenuContainer>
    )
  }

  export default TabBar;