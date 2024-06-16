import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeLogin = () =>({
    type:actionTypes.CHANGE_LOGIN,
    value: true  
})

const changelogout = () =>({
  type:actionTypes.CHANGE_LOGOUT,
  value: false  
})

export const login = (accunt,password) => {
   return (dispatch) =>{
      axios.get('/api/login.json?accunt=' + accunt + '&password=' + password).then((res)=>{
        const reult = res.data.data;
          if(reult){
            dispatch(changeLogin());
          }else{
              alert('登录失败');
          }
      }) 
   }
  
};

export const logout = () => {
  return (dispatch) =>{
    dispatch(changelogout());
  }
 
};

