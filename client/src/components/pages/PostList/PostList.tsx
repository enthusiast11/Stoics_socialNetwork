import React, { useEffect, useState, useRef } from 'react'

import styles from './postList.module.css'
import authStyles from '../../AuthForm/auth.module.css'
import classNames from 'classnames'
import Post from './Post/Post'

const PostList = () => {
  const [activeTab, setActiveTab] = useState(false)
  const isMountedRef = useRef(false);

  const setSpecialStyle = () => {
    const posts = document.getElementById('posts')?.children

    let randomPost = Math.floor(Math.random() * 8)
    if([2,5,7].includes(randomPost)) randomPost-=1
    posts![randomPost].classList.add(styles.grid_special)
  }
  
  const getMorePosts = () => {

  }

  useEffect(()=> {
    if (!isMountedRef.current) {
      //setSpecialStyle();
      isMountedRef.current = true;
    }
  }, []);
  return (
    <div className={styles.container}>
      <button onClick={() => setActiveTab(!activeTab)} className={classNames(authStyles.button, styles.button_filter)}>Фильтр</button>
      <div style={{display: activeTab? 'block': 'none'}}>
        <button className={styles.filter_item}>По дате</button>
        <button className={styles.filter_item}>По количеству лайков</button>
        <button className={styles.filter_item}>По количеству просмотров</button>
      </div>
      <div id='posts' className={styles.grid}>
        {/* {data.map(item=>{
          
        })} */}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button className={classNames(authStyles.button, styles.button_more)} onClick={getMorePosts}>Ещё</button>
      </div>
    </div>
  )
}

export default PostList