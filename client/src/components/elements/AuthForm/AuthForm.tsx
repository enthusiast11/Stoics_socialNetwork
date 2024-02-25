import React from 'react';
import styles from "../AuthForm/Form.module.css"



const AuthForm = () => {
  return (
    <div>
        <form action="/register" className={styles.background}  method='POST'>
          <div className={styles.main}>
            <label htmlFor="username" className={styles.subscruption}>Введите Имя</label>
            <input type="text" size={111} className={styles.input} name="username" id="username" /> 
            
            <label htmlFor="userсname"className={styles.subscruption}>Введите фамилию</label>
            <input type="text"className={styles.input}  name="userсname" id="userсname" />

            <label htmlFor="email" className={styles.subscruption}>Введите почту</label>
            <input type="text"className={styles.input}  name="email" id="email" />

            <label htmlFor="password" className={styles.subscruption}>Придумайте пароль</label>
            <input type="text" className={styles.input} name="password" id="password" />
            
            <label htmlFor="password" className={styles.subscruption}>Повторите пароль</label>
            <input type="text" className={styles.input}  name="password" id="password" />
          </div>

            <button className={styles.button}>Отправить</button>
            <div style={{textAlign: 'center', display: "flex", justifyContent: 'center'}}>
              <p className={styles.down_text}>Уже есть аккаунт?</p>
              <a href="#" className={styles.link}>Войдите</a>
            </div>

            

            

        </form>
    </div>
  )
}

export default AuthForm