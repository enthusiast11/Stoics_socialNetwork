import React, { useEffect, useState } from 'react'

import styles from '../Profile/style.module.css'
import { useNavigate } from 'react-router'

const Profile = () => {

    // useEffect({
        
    // },[])

    const [display, setDisplay] = useState<string>('block')
    const [activeTab, setActiveTab] = useState<string>('profile')
    const navigate = useNavigate()
    const showTab = (value: string) => {
        setActiveTab(value)
    }
    return (
        <div className={styles.main}>
            <div className={styles.header}>Профиль</div>
            <div className={styles.profile}>
                <div className={styles.margin}>
                    <div className={styles.person}>
                        <img src="stok.jpeg" alt=""  className={styles.photo} />
                        <div className={styles.info}>Matria Ma</div>
                        <div className={styles.subcribtion}>Moscow</div>
                    </div>
                    <div className={styles.socials}>
                        <div className={styles.social}>
                            <div className={styles.info}>20</div>
                            <div className={styles.subcribtion}>subs</div>
                        </div>
                        <div className={styles.social}>
                            <div className={styles.info}>30</div>
                            <div className={styles.subcribtion}>bookmarks</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.navbar} >
                <div  className={`${styles.navbar_items} ${styles.selected} ` } >
                    <div onClick={()=>showTab('profile')} className={styles.navbar_item}>
                        <img src="person.png" alt="" className={styles.item_img} />
                        <button className={styles.item_text}>Профиль</button>
                    </div>
                    <div onClick={()=>showTab('friends')}  className={styles.navbar_item}>
                        <img src="group.png" alt="" className={styles.item_img} />
                        <button className={styles.item_text}>Друзья</button>
                    </div>
                    <div onClick={()=>showTab('settings')} className={styles.navbar_item}>
                        <img src="settings.png" alt="" className={styles.item_img} />
                        <button className={styles.item_text}>Настройки</button>
                    </div>
                </div>
                <div className={styles.navbar_items}>
                    <div className={styles.navbar_item}>
                        <img src="" alt="" className={styles.item_img} />
                        <button onClick={() => navigate('/edit')} className={styles.item_text}>Редактировать Профиль</button>
                    </div>
                </div>
            </div>
            <div style={{display: activeTab === 'profile'? 'block' :'none'}}>
                <div  className={`${styles.profile_description} ${styles.description}` }>
                    <div className={styles.description_text}>
                        <div className={styles.description_card}>
                            <div className={styles.description_header}>Обо мне</div>
                            <div className={styles.description_main}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, natus.</div>
                        </div>
                        <div className={styles.description_card}>
                            <div className={styles.description_header}>Любимая цитата</div>
                            <div className={styles.description_main}>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className={styles.profile_posts}>
                        <div className={styles.card}>
                            <div className={styles.description_header}>Мои посты</div>
                            <img className={styles.card_img} src="antic.jpg" alt=""  />
                            <div className={styles.card_main}>
                                <div className={styles.card_name}>Современный стоицизм</div>
                                <div className={styles.card_option}>
                                    <img src='pencil.png' className={styles.card_icon}/>
                                    <div className={styles.card_text}>Изменить</div>
                                </div>
                                <div className={styles.card_option}>
                                    <img src='delete.png' className={styles.card_icon}/>
                                    <div className={styles.card_text}>Удалить</div>
                                </div>
                            </div>
                        </div>             
                        <div className={styles.card}>
                            <div className={styles.description_header}>Мои посты</div>
                            <img className={styles.card_img} src="antic.jpg" alt=""  />
                            <div className={styles.card_main}>
                                <div className={styles.card_name}>Современный стоицизм</div>
                                <div className={styles.card_option}>
                                    <img src='pencil.png' className={styles.card_icon}/>
                                    <div className={styles.card_text}>Изменить</div>
                                </div>
                                <div className={styles.card_option}>
                                    <img src='delete.png' className={styles.card_icon}/>
                                    <div className={styles.card_text}>Удалить</div>
                                </div>
                            </div>

                        </div>            
                    </div>
                </div>
            </div>
            <div style={{display: activeTab === 'friends'? 'block' :'none'}}>
                <div>Друзья</div>
            </div>
            <div style={{display: activeTab === 'settings'? 'block' :'none'}}>
                <div className={styles.settings}>
                    <div className={styles.item_text}>Кто может мне писать:</div>
                    <button className={styles.select_button}>
                        <div className={styles.select_text}>Все</div>
                        <img src="expand.png" alt="" />
                    </button>
                    <div className={styles.select}>
                        <div className={styles.select_item}>Все</div>
                        <hr className={styles.devider}></hr>
                        <div className={styles.select_item}>Только друзья</div>
                    </div>

                    <button className={styles.button}>Выйти из аккаунта</button>


                </div>
            </div>
        </div>
    )
}

export default Profile