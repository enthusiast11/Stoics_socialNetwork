import React, {useEffect} from 'react'
import { useNavigate } from 'react-router';

import { useGetDataQuery } from '../../store/slices/user';
import styles from './navbar.module.css'
import classnames from 'classnames';

const Navbar = () => {
    const userId = localStorage.getItem('userId')
    console.log(userId);

    const navigate = useNavigate()

    const  { data , isLoading, isError, refetch } = useGetDataQuery(userId);
    useEffect(()=>{
        refetch()
    },[data])
    console.log(data);
  return (
    <header className={classnames(styles.navbar, styles.container)} >
        <div className={classnames(styles.navbar_item,styles.logo)}>Stoics</div>
                <button onClick={()=>navigate('profile')} className={classnames(styles.navbar_item, styles.item_text)}>Чат</button>
                <button onClick={()=>navigate('friends')} className={classnames(styles.navbar_item, styles.item_text)}>Создать пост</button>
                <button onClick={()=>navigate('settings')} className={classnames(styles.navbar_item, styles.item_text)}>Лента</button>
                <button onClick={()=>navigate('settings')} className={classnames(styles.navbar_item, styles.item_text)}>Профиль</button>
            <div className={styles.navbar_item}>
                <img src="headphones.jpg" alt="" className={styles.item_img} />
                <img src={data?.user?.avatar ? `/profile/${userId}/${data?.user?.avatar}`:'stok.jpeg'} alt="" className={styles.photo} />
            </div>
    </header>
  )
}

export default Navbar