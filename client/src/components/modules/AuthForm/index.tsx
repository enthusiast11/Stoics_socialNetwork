import React, { useState } from 'react';
import styles from "../AuthForm/auth.module.css"
import { authApi } from './api/rtk_query/auth';
import { useAuthUserMutation } from './api/rtk_query/auth';
import { useNavigate } from 'react-router-dom';



const AuthForm = () => {

  const [name, setName] = useState<string>('')
  const [cname, setCname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repassword, setRepassword] = useState<string>('')
  const navigate = useNavigate();

  const [authUser, {isLoading, isError, error}] = useAuthUserMutation()

  const sendData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    try {

      e.preventDefault();
      const res = await authUser({name, cname, email, password, repassword})
      setName('')
      setCname('')
      setEmail('')
      setPassword('')
      setRepassword('')
      console.log('Данные успешно отправлены',)
      navigate('/profile')
 
    } catch (e) {

      console.log(e);
    }
  }
 
  return (
    <div>
        <form action="/auth" className={styles.background}>  
          <div className={styles.main}>
            <label htmlFor="username" className={styles.subscruption}>Введите Имя</label>
            <input type="text" size={111} value={name} onChange={e => setName(e.currentTarget.value)} className={styles.input} name="username" id="username" /> 
            
            <label htmlFor="userсname"className={styles.subscruption}>Введите фамилию</label>
            <input type="text" value={cname} onChange={e => setCname(e.currentTarget.value)} className={styles.input}  name="userсname" id="userсname" />

            <label htmlFor="email" className={styles.subscruption}>Введите почту</label>
            <input type="text" value={email} onChange={e => setEmail(e.currentTarget.value)} className={styles.input}  name="email" id="email" />

            <label htmlFor="password" className={styles.subscruption}>Придумайте пароль</label>
            <input type="text" value={password} onChange={e => setPassword(e.currentTarget.value)}  className={styles.input} name="password" id="password" />
            
            <label htmlFor="password" className={styles.subscruption}>Повторите пароль</label>
            <input type="text" value={repassword} onChange={e => setRepassword(e.currentTarget.value)}  className={styles.input}  name="repassword" id="repassword" />
          </div>

         { isLoading? <span className="loader"></span> : <button className={styles.button} onClick={e=> sendData(e)}>Отправить</button>}
         {isError ? <p>{error as string}</p> : ''}
          <div className={styles.down}>
            <p className={styles.down_text}>Уже есть аккаунт?</p>
            <p onClick={()=> navigate('/login')} className={styles.link}>Войти</p>
          </div>
        </form>
    </div>
  )
}

export default AuthForm