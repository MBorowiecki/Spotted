import React, { useState } from 'react'
import { View, Text, ToastAndroid, ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import styled from 'styled-components';
import { any } from 'prop-types';

const MainView = styled.ScrollView`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PostView = styled.View`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 16px;
    width: 90%;
    margin: 16px;
    elevation: 5;
`

const PostTopBarContainer = styled.View`
    display: flex;
    flex-direction: row;
`

const PostTobBarSecondContainer = styled.View`
    flex-grow: 1;
`

const PostTopBarName = styled.Text`
    flex-grow: 1;
    color: #000000;
    font-size: 18;
`

const PostTopBarDate = styled.Text`
    color: #535353;
    font-size: 12;
`

const PostContent = styled.Text`
    color: #000000;
    font-size: 14px;
    padding-top: 8px;
`

const posts = [
    {
        author: "Blaka Blakowski",
        date: new Date().toJSON(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac est lectus. Fusce at posuere quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat enim vel sapien semper, eu pharetra enim suscipit. Quisque congue et turpis ac consectetur. Curabitur rhoncus iaculis erat, ut auctor sapien hendrerit et. Donec tellus nisl, dictum at lorem sit amet, pretium fringilla nibh. Integer aliquet lorem id lorem tempus, ac porta mi facilisis. Nunc mollis mauris ac dignissim dictum. Nam ullamcorper rhoncus diam, ut maximus augue iaculis nec. Aliquam erat volutpat."
    },
    {
        author: "Artur Arciszewski",
        date: new Date().toJSON(),
        content: "Quisque sed magna non massa egestas feugiat sit amet in nibh. Fusce bibendum lectus a pulvinar vulputate. Ut a mattis lorem. Praesent tincidunt fringilla elit, vel accumsan nibh. Nulla lorem est, blandit vel risus id, rutrum gravida sem. Duis at pulvinar erat, at aliquam felis. Praesent mauris urna, condimentum non ullamcorper et, porttitor ac sem. Nam enim metus, venenatis quis diam non, euismod finibus quam. Nam ac facilisis sapien. Etiam consequat mauris sit amet arcu varius bibendum. Quisque urna ligula, tincidunt et placerat id, viverra at nisi. Phasellus rhoncus et nisi vitae semper. Nulla bibendum feugiat suscipit."
    },
    {
        author: "Artur Arciszewski",
        date: new Date().toJSON(),
        content: "Quisque sed magna non massa egestas feugiat sit amet in nibh. Fusce bibendum lectus a pulvinar vulputate. Ut a mattis lorem. Praesent tincidunt fringilla elit, vel accumsan nibh. Nulla lorem est, blandit vel risus id, rutrum gravida sem. Duis at pulvinar erat, at aliquam felis. Praesent mauris urna, condimentum non ullamcorper et, porttitor ac sem. Nam enim metus, venenatis quis diam non, euismod finibus quam. Nam ac facilisis sapien. Etiam consequat mauris sit amet arcu varius bibendum. Quisque urna ligula, tincidunt et placerat id, viverra at nisi. Phasellus rhoncus et nisi vitae semper. Nulla bibendum feugiat suscipit."
    }
]

interface Post {
    author?: string;
    content?: string;
    date?: JSON
}

const Recent: React.FC = () => {
    const { navigate } = useNavigation();
    return(
        <ScrollView contentContainerStyle={{backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: 80}}>
            {posts.map((post: Post) => {
                const [month, setMonth] = useState("Styczeń")
                let dayDate = new Date(post.date);

                setTimeout(() => {
                    switch (dayDate.getMonth()){
                        case 1:
                            setMonth("Styczeń")
                            break;
                        case 2:
                            setMonth("Luty")
                            break;
                        case 3:
                            setMonth("Marzec")
                            break;
                        case 4:
                            setMonth("Kwiecień")
                            break;
                        case 5:
                            setMonth("Maj")
                            break;
                        case 6:
                            setMonth("Czerwiec")
                            break;
                        case 7:
                            setMonth("Lipiec")
                            break;
                        case 8:
                            setMonth("Sierpień")
                            break;
                        case 9:
                            setMonth("Wrzesień")
                            break;
                        case 10:
                            setMonth("Październik")
                            break;
                        case 11:
                            setMonth("Listopad")
                            break;
                        case 12:
                            setMonth("Grudzień")
                            break;
                    }
                }, 10)

                return(
                    <PostView>
                        <PostTopBarContainer>
                            <PostTobBarSecondContainer>
                                <PostTopBarName>{post.author}</PostTopBarName>
                                <PostTopBarDate>{dayDate.getDate()} {month} {dayDate.getFullYear()}</PostTopBarDate>
                            </PostTobBarSecondContainer>
                        </PostTopBarContainer>
                        <PostContent>
                            {post.content}
                        </PostContent>
                    </PostView>
                )
            })}
        </ScrollView>
    )
}

export default Recent;