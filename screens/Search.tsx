import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import styled from 'styled-components'
import firebase from 'firebase'

import Header from '../components/Header'
import firebaseConfig from '../config/firebase';
import { ScrollView } from 'react-native-gesture-handler';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

require('firebase/firestore')

let db = firebase.firestore();

const PlaceholderContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    padding: 100px;
`

const PlaceholderTitle = styled.Text`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
`

const PlaceholderDesc = styled.Text`
    text-align: center;
    color: #5A5A5A;
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

interface Post {
    id?: number,
    author?: string;
    content?: string;
    date?: JSON,
    category?: string
}

const Search: React.FC = () => {
    const [searchText, setSearchText] = useState("");
    const [searchCollection, setSearchCollection] = useState("Lorem ipsum");
    const [posts, setPosts] = useState([])
    const [lastSearchCategory, setLastSearchCategory] = useState("")

    if(lastSearchCategory != searchCollection){
        db.collection('posts').where("category", "==", searchCollection).get().then((snap) => {
            let locPosts = [] // Local posts array
            snap.forEach((doc) => {
                let data: Post = doc.data()

                if(data.content.includes(searchText)){
                    locPosts.push(data)
                }
            })
            setPosts(locPosts)
        }).then(() => {
            setLastSearchCategory(searchCollection)
        })
    }

    return(
        <>
            <Header title="Wyszukaj" search={true} textChangeFunction={setSearchText} searchCollectionChange={setSearchCollection}/>
            {searchText.length == 0 ? <PlaceholderContainer>
                                        <PlaceholderTitle>
                                            Wpisz frazę
                                        </PlaceholderTitle>
                                        <PlaceholderDesc>
                                            Jeszcze nie wpisałeś, co chciałbyś wyszukać. Zrób to w polu wyszukiwania na górze ekranu.
                                        </PlaceholderDesc>
                                    </PlaceholderContainer> : <ScrollView>
                                        {posts.map((post) => {
                                                let dayDate = post.date.toDate();

                                                const getDateMonth = () => {
                                                    switch (dayDate.getMonth()){
                                                        case 1:
                                                            return("Styczeń")
                                                            break;
                                                        case 2:
                                                            return("Luty")
                                                            break;
                                                        case 3:
                                                            return("Marzec")
                                                            break;
                                                        case 4:
                                                            return("Kwiecień")
                                                            break;
                                                        case 5:
                                                            return("Maj")
                                                            break;
                                                        case 6:
                                                            return("Czerwiec")
                                                            break;
                                                        case 7:
                                                            return("Lipiec")
                                                            break;
                                                        case 8:
                                                            return("Sierpień")
                                                            break;
                                                        case 9:
                                                            return("Wrzesień")
                                                            break;
                                                        case 10:
                                                            return("Październik")
                                                            break;
                                                        case 11:
                                                            return("Listopad")
                                                            break;
                                                        case 12:
                                                            return("Grudzień")
                                                            break;
                                                    }
                                                }
                                                
                                                if(post.content.includes(searchText)){
                                                    return(
                                                        <PostView key={post.id}>
                                                            <PostTopBarContainer>
                                                                <PostTobBarSecondContainer>
                                                                    <PostTopBarName>{post.author}</PostTopBarName>
                                                                    <PostTopBarDate>{dayDate.getDate()} {getDateMonth()} {dayDate.getFullYear()}</PostTopBarDate>
                                                                </PostTobBarSecondContainer>
                                                            </PostTopBarContainer>
                                                            <PostContent numberOfLines={5}>
                                                                {post.content}
                                                            </PostContent>
                                                        </PostView>
                                                    )
                                                }
                                                })}
                                    </ScrollView>}
        </>
    )
}

export default Search