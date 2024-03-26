import React, { useState } from 'react';
import styles from "../AuthForm/style.module.css"
import { authApi } from './api/rtk_query/auth';
import { useAuthUserMutation } from './api/rtk_query/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIdUsers } from '../../../store/slices/auth';
import { UseSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export interface ErrorData {
  errors: { msg: string }[];
}
const AuthForm = () => {

  const [name, setName] = useState<string | null>()
  const [cname, setCname] = useState<string | null>()
  const [email, setEmail] = useState<string | null>()
  const [password, setPassword] = useState<string| null>()
  const [repassword, setRepassword] = useState<string | null>()
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [authUser, {isLoading, isError, error,}] = useAuthUserMutation()
  const sendData =async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      e.preventDefault();
      console.log(name, email, password, repassword);

    
     const test = await authUser({name, email, password, repassword}).unwrap()
      dispatch(setIdUsers(test.id))
      console.log(test.id);
      
      
     
     
        // setName('')
        // setCname('')
        // setEmail('')
        // setPassword('')
        // setRepassword('')
        console.log('Данные успешно отправлены',)
        navigate(`/${test.id}`)
    } catch (e) { 
      console.log(e)
    }
      
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <form action="/auth" className={styles.background}>  
            <div className={styles.subscruption}>Введите Имя</div>
            <div><input type="text" size={111} value={name!} onChange={e => setName(e.currentTarget.value)} className={styles.input} name="username" id="username" /></div> 
            
            <div className={styles.subscruption}>Введите почту</div>
            <div><input type="text" value={email!} onChange={e => setEmail(e.currentTarget.value)} className={styles.input}  name="email" id="email" /></div>

            <div className={styles.subscruption}>Придумайте пароль</div>
            <div><input type="text" value={password!} onChange={e => setPassword(e.currentTarget.value)}  className={styles.input} name="password" id="password" /></div>
            
            <div className={styles.subscruption}>Повторите пароль</div>
            <div><input type="text" value={repassword!} onChange={e => setRepassword(e.currentTarget.value)}  className={styles.input}  name="repassword" id="repassword" /></div>

         { isLoading? <span className={styles.loader}></span> : <button className={styles.button} onClick={e=> sendData(e)}>Отправить</button>}
         {isError && error && 'data' in error ? <div className={styles.error}>{JSON.stringify((error!.data as ErrorData).errors.map(item =>' ' + item.msg)).replace(/['"\[\]]/g, '')}</div> :  ''}
          <div className={styles.down}>
            <div className={styles.down_text}>Уже есть аккаунт?</div>
            <div onClick={()=> navigate('/login')} className={styles.link}>Войти</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthForm