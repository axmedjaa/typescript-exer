import { useState } from "react"
interface todo{
    id:number,
    task:string,
    done:boolean
}
const Exercise8 = () => {
    // 1
    const[count,setCount]=useState<number>(0)
    // 2
    const[user,setUser]=useState<{username:string,email:string}|null>(null)
    const[todo,setTodo]=useState<todo[]>([])
  return (
    <div>
        {/* 1 */}
        <button disabled={count==0} onClick={()=>setCount(count-1)}>decreament</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count+1)}>increament</button>
        {/* 2 */}
        <div>
        <button onClick={()=>setUser({username:"alias",email:"axmed23jagmail.com"})}>user</button>
        <p>{user?.username}</p>
        </div>
        {/* 3 */}
        <div>
            <button onClick={()=>setTodo([...todo,{id:1,task:"book",done:false}])}>add todo</button>
            {
                todo.map((list)=>(
                    <div key={list.id}>
                      <p>{list.task}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Exercise8