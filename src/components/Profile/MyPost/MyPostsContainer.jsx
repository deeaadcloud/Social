import React from 'react';
import { connect } from 'react-redux'
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../redux/profilePageReducer'
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return{
        profilePage:state.profilePage,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText:(text)=>{
            dispatch(updateNewPostTextActionCreater(text));
            
        },
        addPost:()=>{
            dispatch(addPostActionCreater())
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;