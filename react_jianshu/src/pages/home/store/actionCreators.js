import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'
const changeHomeData = (result) => ({
   type: actionTypes.CHANGE_HOME_DATA,
   topicList:result.topicList,
   articleList:result.articleList,
   recommendList:result.recommendList
});

const addHomeList =(result,nextpage) => ({
   type:actionTypes.ADD_HOME_DATA,
   list: fromJS(result),
   nextpage:nextpage
})

export const getHomeInfo = () => {
    return (dispatch) =>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result,page + 1));
        });
    }
}

export const toggleTopShow =(show) => ({
    type: actionTypes.TOGGLE_SCROLL_TOP,
    show
})