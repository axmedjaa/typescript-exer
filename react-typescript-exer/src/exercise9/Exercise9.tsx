import { useState } from "react"

interface emailProps{
    onSubmit(email:string):void
}
interface ageProps{
    onSubmit(email:number):void
}
interface contactProps{
    onSubmit(data:{name:string,email:string}):void
}
function EmailForm({onSubmit}:emailProps){
    const[email,setEmail]= useState<string>("")
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onSubmit(email)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} />
                    <button type="submit">submit email</button>
            </form>
        </div>
    )
}
function AgeForm({onSubmit}:ageProps){
    const[age,setAge]=useState<number>(0)
    const handleAgeForm=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(age<18){
            console.log("you must be atleast 18 above")
            return
        }
        onSubmit(age)
    }
    return(
        <div>
            <form onSubmit={handleAgeForm}>
                <input type="text" value={age} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setAge(Number(e.target.value))} />
                    <button type="submit"> submit age</button>
            </form>
        </div>
    )
}
function ContactForm({onSubmit}:contactProps){
    const[formData,setFormData]=useState<{ name: string; email: string }>({
        name:"",
        email:""
    })
    const handleContactChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target
        setFormData((prev)=>({...prev,[name]:value}))
    }
    const handleContactForm=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        onSubmit(formData)
    }
    return(
         <div>
            <form onSubmit={handleContactForm}>
                <input type="text" name="name" value={formData?.name} onChange={handleContactChange} />
                <input type="email" name="email" value={formData?.email} onChange={handleContactChange} />
                    <button type="submit"> submit contact</button>
            </form>
        </div>
    )
}
const Exercise9 = () => {
    function emailSubmit(email:string){
        console.log("email data",email)
    }
    function ageSumbit(age:number){
        console.log("age data",age)
    }
    function contactSubmit(data:{ name: string; email: string }){
        console.log("contact data",data)
    }
  return (
    <div>
        <EmailForm onSubmit={emailSubmit}/>
        <AgeForm onSubmit={ageSumbit}/>
        <ContactForm onSubmit={contactSubmit}/>
    </div>
  )
}

export default Exercise9