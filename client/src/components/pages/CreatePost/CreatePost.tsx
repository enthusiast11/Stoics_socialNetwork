//@ts-ignore
import React from 'react'
import { useState } from 'react'

const CreatePost = () => {
  const [header, setHeader] = useState<string>('')
  const [main, setMain] = useState<string>('')
  function sendData() {
    setHeader("")
    setMain("")
  }
  return (
    <div>
      <h4>Введите заголовок</h4>
      <input type="text" value={(header)} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setHeader(e.target.value)}/>
      <h4>Введите текст</h4>
      <input type="text" value={(main)} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setMain(e.target.value)}/>
      <button onClick={sendData}>Отправить</button>
    </div>
  )
}

export default CreatePost