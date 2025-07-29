type user={
    username:string,
    isPremium:boolean
}
const Welcome = ({username,isPremium}:user) => {
  return (
    <div>
        {
            isPremium?<h1>welcome back premium {username}</h1>:
            <h1>Welcome, guest {username}</h1>
        }
    </div>
  )
}

export default Welcome