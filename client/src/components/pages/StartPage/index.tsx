import React from 'react'

import styles from './style.module.css'
import AuthForm from '../../modules/AuthForm/Auth'

export const StartPage = () => {
    const scrollToRegistration = () => {
        const registrationBlock = document.getElementById('registrationBlock');
        const headerBlock = document.getElementById('header');
        if (registrationBlock) {
            const rect = registrationBlock.getBoundingClientRect();
            const y = rect.top + window.scrollY + rect.height / 2 - window.innerHeight / 2 - headerBlock!.offsetHeight/2;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
    return (
    <div className={styles.main}>
        <div className={styles.black}>
            <header id='header'>
                <div className={styles.logo}>Stoics</div>
                <button onClick={scrollToRegistration} className={styles.button_auth}>Стать участником</button>
            </header>

            <section className={styles.seneka}>
                <div className={styles.seneka_main}>
                    <div className={styles.seneka_text}>
                        “Общество — свод из камней, который обрушился 
                        бы, если бы один не поддерживал другого”
                    </div>
                    <hr className={styles.devider} />
                    <div className={styles.seneka_author}>-Seneka</div>
                    <button onClick={scrollToRegistration} className={styles.button_auth}>Стать участником</button>
                </div>
                    <img src="seneka.png" alt="" className={styles.seneka_img} />

            </section>
        </div>

        <div className={styles.beige}>
            <section className={styles.invite}>
                <div className={styles.invite_symbol} ><img src="paragraph.png" alt="" /></div>
                <hr className={styles.devider} />
                <div className={`${styles.invite_text} ${styles.invite_text}`}>
                    Присоединяйтесь к сообществу поклонников стоицизма,
                    общайтесь с людьми, участвуйте во встречах, читайте
                    посты.
                </div>
            </section>
        </div>

        <div className={styles.black}>
            <section className={styles.seneka}>
                <div className={styles.seneka_main}>
                    <div className={styles.seneka_text}>
                        Если вы у вас есть интересные мысли
                        на тему стоицизма, или у вас есть опыт
                        в организации тематических встреч, то
                        можете присоединиться в качестве автора
                        или организатора
                    </div>
                    <button onClick={scrollToRegistration} className={`${styles.button_auth} ${styles.margin}`}>Стать участником</button>
                </div>
                    <img src="epictetus.png" alt="" className={styles.seneka_img} />
            </section>
        </div>
         
        <div id='registrationBlock' className={styles.beige}>
            <section  className={styles.auth}>
                <AuthForm/>
            </section>
        </div>

        <div className={styles.black}>
            <footer className={styles.bottomer}>
                <div className={styles.bottomer_item}>
                    <div className={styles.logo}>Stoics</div>
                    <div className={styles.bottomer_ctext}>© Stoics</div>
                </div>
                <div className={styles.bottomer_item}>
                    <div className={styles.bottomer_contacts}>Контакты</div>
                    <div className={styles.bottomer_text}>+7 (000) 000-00-00</div>
                    <div className={styles.bottomer_text}>stoics@mail.ru</div>
                </div>
            </footer>
        </div>
    </div>
  )
}
