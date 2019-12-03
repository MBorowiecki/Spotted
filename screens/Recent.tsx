import React, { useState, useEffect } from 'react'
import { View, Text, ToastAndroid, ScrollView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks'
import styled from 'styled-components';
import firebase from 'firebase'

import Header from '../components/Header'
import firebaseConfig from '../config/firebase';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

require('firebase/firestore')

let db = firebase.firestore();

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

interface Post {
    id?: number,
    author?: string;
    content?: string;
    date?: JSON
}

const Recent: React.FC = (props) => {
    const { navigate } = useNavigation();
    const [posts, setPosts] = useState([])

    if(posts.length < 1){
        db.collection("posts").onSnapshot((snap) => {
            let postsArray = []
            snap.forEach((doc) => {
                let post = doc.data();
                post.id = doc.id;
                postsArray.push(post);
            })
            
            setPosts(postsArray);
        })
    }

    return(
        <>
        <Header title="Najnowsze" search={false} />
        <ScrollView contentContainerStyle={{backgroundColor: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center"}}>
            {typeof(posts) !== "undefined" && posts.sort((a: Post, b: Post) => (a.date < b.date) ? 1 : -1).map((post: Post) => {
                
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
            })}
        </ScrollView>
        </>
    )
}

export default Recent;