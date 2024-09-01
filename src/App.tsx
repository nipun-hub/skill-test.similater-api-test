import { useContext } from 'react'
import './App.css'
import Body from './component/body/Body'
import Login from './component/login/Login'
import { AuthContext } from './context/AuthContext'

function App() {

  // const [userToken,setUserToken]

  const { token } = useContext(AuthContext);
  console.log(token)

  return (

    <>
      <div className='flex h-screen w-full items-center justify-center bg-[#f5f5f5]'>
        {!token ? <Login /> : <Body />}

      </div>
    </>
  )
}

export default App
