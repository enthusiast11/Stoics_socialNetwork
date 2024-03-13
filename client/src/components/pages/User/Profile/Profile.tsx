import React from 'react'

import styles from '../Profile/style.module.css'

const Profile = () => {
  return (
    <div>
        <div className={styles.header}>Профиль</div>
        <div className={styles.main}>
            <div className={styles.person}>
                <img src="" alt=""  className={styles.photo} />
                <div className={styles.name}></div>
                <div className={styles.location}></div>
            </div>
            <div className={styles.socials}>
                <div className={styles.social}>
                    <div className={styles.social_data}></div>
                    <div className={styles.social_text}></div>
                </div>
                <div className={styles.social}>
                    <div className={styles.social_data}></div>
                    <div className={styles.social_text}></div>
                </div>
            </div>
        </div>
        <div className={styles.navbar}>
            <div className={styles.navbar_item}>
                <div>
                    <img src="" alt="" className={styles.item_img} />
                    <div className={styles.item_text}>Профиль</div>
                </div>
            </div>
            <div className={styles.navbar_item}>
                <div>
                    <img src="" alt="" className={styles.item_img} />
                    <div className={styles.item_text}>Друзья</div>
                </div>
            </div>
            <div className={styles.navbar_item}>
                <div>
                    <img src="" alt="" className={styles.item_img} />
                    <div className={styles.item_text}>Настройки</div>
                </div>
            </div>
            <div className={styles.navbar_item}>
                <div>
                    <img src="" alt="" className={styles.item_img} />
                    <div className={styles.item_text}>Редактировать</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Profile