import React, {useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

function Logout() {

    const {state,dispatch} = useContext(UserContext);



    const nav = useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                headers: {
                   Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                credentials: "include",
            }
        }).then((res)=>{
            dispatch({type:"USER",payload:false});

            nav('/login',{replace : true});
            if(res.status!== 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err)
        })
    })
  return (
    <>
        <h1>logout page</h1>
    </>
  )
}

export default Logout
