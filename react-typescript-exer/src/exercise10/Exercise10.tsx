import { useEffect, useState } from "react"
// useNumberStorage
function useNumberStorage(key:string,initialValue:number):[number,(value:number)=>void]{
    const [value,setValue]=useState<number>(()=>{
        const StoreNumber=localStorage.getItem(key)
        return StoreNumber?Number(StoreNumber): initialValue
    })
    useEffect(()=>{
        localStorage.setItem(key,String(value))
    },[key,value])
    return[value,setValue]
}
//  useSettingsStorage
function useSettingsStorage(key:string,initialValue:{language: string; notifications: boolean}):[{language: string; notifications: boolean},(value:{language: string; notifications: boolean})=>void]{
    const[value,setValue]=useState(()=>{
        const sitting=localStorage.getItem(key)
        return sitting? JSON.parse(sitting):initialValue
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return[value,setValue]
}
// useLocalStorage<T>.
function useLocalStorage<T>(key:string,initialValue:T):[T,(value:T)=>void]{
    const[value,setValue]=useState<T>(()=>{
        const storeUser=localStorage.getItem(key)
        return storeUser?JSON.parse(storeUser):initialValue
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value])
    return[value,setValue]
}
const Exercise10 = () => {
    const[number,setNumber]=useNumberStorage('num',0)
    const[sitting,setSitting]=useSettingsStorage("sitting",{language:"english",notifications:false})
    const[user,setUser]=useLocalStorage<string>("user","cali")
  return (
    <div>
        {/* number store */}
        <p>{number}</p>
        <button onClick={()=>setNumber(3)}>chanage number</button>
        {/* object sitting */}
        <p>{sitting.language}</p>
        <button onClick={()=>setSitting({language:"arabic",notifications:true})}>chnage sitting</button>
        {/* Generic */}
         <p>{user}</p>
        <button onClick={()=>setUser("ahmed")}>chnage user</button>
    </div>
  )
}

export default Exercise10