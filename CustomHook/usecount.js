import { useEffect } from "react";


import React from 'react'

const usecount = (count) => {
    useEffect(()=>{
        console.log('I am the first one')
        if(count>=1){
            document.title=`chats (${count})`
        }
        else {
            document.title=`chats`
        }
    },[count]);
  return (
      <>
      </>
   
  )
}

export default usecount