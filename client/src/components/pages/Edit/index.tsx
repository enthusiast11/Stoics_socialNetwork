import React, { useState } from 'react'
import { ChangeEvent } from 'react'

import styles from './style.module.css'
import { useNavigate } from 'react-router'
import { useEditChangesMutation } from '../../../store/slices/edit'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

const Edit = () => {
    const [name, setName] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [quote, setQuote] = useState<string>('')
    const [about, setAbout] = useState<string>('')
    const [avatar, setAvatar] = useState('')
    const [visible ,setVisible] = useState<boolean>(false)
    const navigate = useNavigate()
    const [editChanges,{isError, data}] = useEditChangesMutation()

    const route =  useSelector((state: RootState) => state.auth.userId)
    const sendData =  (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
        e.preventDefault();
        editChanges({name, location, quote, about, avatar})
        .then(()=>{
            setName('')
            setLocation('')  
            setQuote('')  
            setAbout('')  
            console.log('Данные успешно изменены',)
            navigate(`/${route}`)
        })
        .catch(e=> console.log(e)
        )
     
      }
      const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileInput = e.target.closest('#input')?.querySelector<HTMLInputElement>('input[type="file"]');
        const file = fileInput!.files && fileInput!.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result;
            if (typeof result === 'string') {
              setAvatar(result);
            }
          };
          reader.readAsDataURL(file);
        }
      };
      const handleButtonClick = () => {
        const fileInput = document.getElementById('input');
        if (fileInput) {
            fileInput.click();
        }
    };
  return (
    <div className={styles.main}>
        <div className={styles.profile}>
            <div className={styles.margin}>
                <div className={styles.flex}>
                    <div style={{backgroundImage: `url(${avatar})`}} className={styles.avatar}>
                        <img src="camera.svg" onClick={()=> setVisible(!visible)} alt="" />
                    </div>
                    <div style={{display: visible ? 'block': 'none'}} className={styles.avatar_modal}>
                    <label className={styles.input_file} htmlFor="fileInput">
	   	                  <input  onChange={e => handleImageChange(e)} type="file" id='input' name="file"/>
 	   	                  <button onClick={handleButtonClick} className={styles.button}>Выберите файл</button>           
 	                  </label>
                        <hr  />
                    </div>
                    <div className={styles.personal}>
                        <div className={styles.header}> Имя</div>
                        <div><input type='text' value={name} className={styles.personal_data} onChange={e => setName(e.target.value)}/></div>

                        <div className={styles.header}>Местонахождение</div>
                        <div><input type='text' value={location} className={styles.personal_data} onChange={e => setLocation(e.target.value)}/></div>

                        <div className={styles.header}>Обо мне</div>
                        <div><input type='text' value={quote} className={styles.personal_data} onChange={e => setQuote(e.target.value)}/></div>

                        <div className={styles.header}>Любимая цитата</div>
                        <div><input type='text' value={about} className={styles.personal_data} onChange={e => setAbout(e.target.value)}/></div>
                    </div>
                </div>
            </div>
        </div>
    
        <div className={styles.position}><button onClick ={sendData}className={styles.button}> Cохранить</button></div>
    </div>
  )
}

export default Edit