import { useState } from "react"

const useInputState=(defaulValue=null)=>{
    const [value,setValue]=useState(defaulValue);
    // const handleChangle=e =>{
    //     setValue(e.target.value);
    // }
   //return [value,handleChangle];
   const onChangle=e =>{
         setValue(e.target.value);
     }
   return{
    value,
    onChangle
   }
}
export default useInputState;