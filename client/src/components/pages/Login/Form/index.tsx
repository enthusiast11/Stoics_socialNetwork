import React, { useState } from 'react';
import styles from "../Form/style.module.css"
import { useNavigate } from 'react-router';
import { useLoginUserMutation } from './login';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { ErrorData } from '../../../modules/AuthForm/Auth';


const Form = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigate = useNavigate()
  const userId = useSelector((state: RootState) => state.auth.userId)
  console.log(userId);
  

  const [loginUser, {isLoading, isError, error}] = useLoginUserMutation()

  const sendData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    try {

      e.preventDefault();
      await loginUser({ email, password,}).unwrap() 
      
      setEmail('')
      setPassword('')
      console.log('Данные успешно отправлены')
      navigate(`/${userId}`)

    } catch (e) {

      console.log(e);
    }
 
  }
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <form action="/auth" method='POST' style={{margin: 'auto'}}>
              <div className={styles.subscruption}>Введите логин</div>
              <div><input type="text" size={111} className={styles.input} value={email} onChange={e=> setEmail(e.target.value)} name="login" id="login" /></div>
              <div  className={styles.subscruption}>Введите пароль</div>
              <div><input type="text" className={styles.input} value={password} onChange={e=> setPassword(e.target.value)}  name="password" id="password" /></div>
            {isLoading ? <div className="loader"></div> : <button className={styles.button} onClick={sendData}>Отправить</button>}
            {isError && error && 'data' in error ? <div className={styles.error}>{JSON.stringify((error!.data as ErrorData).errors.map(item =>' ' + item.msg)).replace(/['"\[\]]/g, '')}</div> :  ''}
            <div className={styles.down}>
              <div className={styles.down_text}>Впервые здесь ?</div>
              <div className={styles.link} onClick={() => navigate('/auth')}>Регистрация</div>
            </div>
          </form>
      </div>
    </div>
    
  )
}

export default Form