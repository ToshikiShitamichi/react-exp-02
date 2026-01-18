import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/NEWS'

function App() {
  // useState宣言
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // イベント処理
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  
  useEffect(() => {
    console.log("起動した！")
  },[])
  
  console.log("順番の確認")

  return (
    <>
      {/*  */}
      <News/>
      <div>
        <p>名前が入ります</p>
        <input type="text" placeholder='名前を入力してください' value={name} onChange={handleNameChange} />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input type="text" placeholder='メールアドレスを入力してください' value={email} onChange={handleEmailChange} />
      </div>
      {/*  */}
    </>
  )
}

export default App
