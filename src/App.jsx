import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Chart from "./pages/chart";
import Customer from "./pages/customer";
import Orders from "./pages/orders";
import NotFound from "./pages/notfound";

import './App.css'

function App() {
  // useState宣言
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([]);

  // イベント処理
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }


  useEffect(() => {
    console.log("起動した！")

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        console.log(response, "response");
        const data = await response.json()
        console.log(data, "中身");
        setData(data)
      } catch (error) {

      }
    }
    fetchData()
  }, [])

  console.log("順番の確認")

  return (
    <>
      {/*  */}
      {data.map((i) => (
        <div>
          <p>{i.id}</p>
          <p>{i.title}</p>
          <p>{i.userId}</p>
        </div>
      ))}
      <div>
        <p>名前が入ります</p>
        <input type="text" placeholder='名前を入力してください' value={name} onChange={handleNameChange} />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input type="text" placeholder='メールアドレスを入力してください' value={email} onChange={handleEmailChange} />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/*  */}
    </>
  )
}

export default App
