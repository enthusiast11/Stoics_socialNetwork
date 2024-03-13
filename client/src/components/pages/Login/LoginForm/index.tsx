import React, { useState } from 'react';
import styles from "../LoginForm/login.module.css"
import { useNavigate } from 'react-router';
import { useLoginUserMutation } from './login';



const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()

  const [authUser, {isLoading, isError, error}] = useLoginUserMutation()

  const sendData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    try {

      e.preventDefault();
      const res = await authUser({ email, password,})
      setEmail('')
      setPassword('')
      console.log('Данные успешно отправлены')
      navigate('/profile')

    } catch (e) {

      console.log(e);
    }
 
  }
  return (
    <div>
        <form action="/auth" className={styles.background}  method='POST'>
          <div className={styles.main}>
            <label htmlFor="username" className={styles.subscruption}>Введите логин</label>
            <input type="text" size={111} className={styles.input} name="login" id="login" /> 
            
            <label htmlFor="userсname"className={styles.subscruption}>Введите пароль</label>
            <input type="text"className={styles.input}  name="password" id="password" />
          </div>

          {isLoading ? <span className="loader"></span> : <button className={styles.button} onClick={sendData}>Отправить</button>}
          {isError ? <p>{error as string}</p> : ''}
          <div className={styles.down}>
            <p className={styles.down_text}>Впервые здесь ?</p>
            <a className={styles.link} onClick={() => navigate('/auth')}>Регистрация</a>
          </div>
        </form>
    </div>
  )
}

export default LoginForm