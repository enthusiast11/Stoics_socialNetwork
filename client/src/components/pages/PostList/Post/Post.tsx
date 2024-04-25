import React from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router'

import  styles from './post.module.css'
import profileStyles from '../../User/Profile/profile.module.css'


const Post = () => {
    const navigate = useNavigate()
    return (
      <div className={styles.post}>
          <img src="post_img.jpg"  className={styles.post_img}alt="" />
          <div className={styles.main}>
              <div style={{display: 'flex'}}>
                  <h2 className={styles.header}>Заголовок</h2>
                  <img src="bookamrk.svg" alt="" />
              </div>
              <div  className={classNames(styles.flex, styles.size)}>
                  <img src="person.png" alt="" className={classNames(profileStyles.item_img)} />
                  <button className={classNames(styles.item_text,)}>Профиль</button>
              </div>
              <div  className={classNames(styles.flex, styles.size)}>
                  <img src="calendar.svg" alt="" className={classNames(profileStyles.item_img)} />
                  <button className={classNames(styles.item_text,)}>Профиль</button>
              </div>
              <p className={styles.preview}>
                  Какой-то текст...     
                  <button style={{fontWeight: 'bold', textDecoration: 'underline'}} onClick={()=>navigate('')}>Читать далее</button>
              </p>
          </div>
      </div>
    )
}

export default Post