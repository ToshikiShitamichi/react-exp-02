import { useEffect, useState } from 'react'
export const useForm = () => {
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

    return {
        handleNameChange,
        handleEmailChange,
        name,
        email,
        data,
    }
}