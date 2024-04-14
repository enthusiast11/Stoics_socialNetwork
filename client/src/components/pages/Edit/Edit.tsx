import React, { useState, useEffect } from 'react'
import { ChangeEvent } from 'react'

import styles from './edit.module.css'
import { useNavigate } from 'react-router'
import { useEditChangesMutation } from '../../../store/slices/edit'
import { useGetDataQuery } from '../../../store/slices/user'


const Edit = () => {

  const userId: string = localStorage.getItem('userId')!
  const [editChanges,{}] = useEditChangesMutation()

  const { data , isLoading, isError, refetch } = useGetDataQuery(userId)

  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<File | string>('');
  const [preview, setPreview] = useState<File | string>('');
  const [location, setLocation] = useState<string>('');
  const [about, setAbout] = useState<string>('');
  const [quote, setQuote] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);
  
  useEffect(() => {
    if (data) {

      setName(data.user.name || '');
      setAvatar(data.user.avatar || '') 
      setLocation(data.user.location || ''); 
      setAbout(data.user.about || ''); 
      setQuote(data.user.quote || '');
    }
  }, [data]);

  const navigate = useNavigate();

  const sendData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('location', location);
      formData.append('about', about);
      formData.append('quote', quote);
      formData.append('image', avatar);
      
      e.preventDefault();
      await editChanges({ user: formData, userId });
      
      setName('');
      setLocation('');
      setQuote('');
      setAbout('');
      
      console.log('Данные успешно изменены');
      console.log(formData.get('quote'));
      navigate(`/${userId}`);
    } catch (e) {
      console.log(e);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = document.querySelector<HTMLInputElement>('input[type="file"]');
    const file = fileInput!.files && fileInput!.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === 'string') {
          setPreview(result);
          setAvatar(file);
          console.log(result);
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
    <div>
      {isLoading ? (
        <p>Загрузка данных</p>
      ) : (
        <div className={styles.main}>
          <div className={styles.profile}>
            <div className={styles.margin}>
              <div className={styles.flex}>
                <div style={{backgroundImage: preview? `url(${preview})`: `url(/profile/${userId}/${avatar})`}} className={styles.avatar}>
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
                  <div><input type='text'  value={name} onChange={e=> setName(e.target.value)} className={styles.personal_data} /></div>
                  <div className={styles.header}>Местонахождение</div>
                  <div><input type='text' value={location} onChange={e=> setLocation(e.target.value)} className={styles.personal_data} /></div>
                  <div className={styles.header}>Обо мне</div>
                  <div><input type='text' value={about} onChange={e=> setAbout(e.target.value)} className={styles.personal_data} /></div>
                  <div className={styles.header}>Любимая цитата</div>
                  <div><input type='text' value={quote} onChange={e=> setQuote(e.target.value)} className={styles.personal_data}/></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.position}><button onClick={sendData} className={styles.button}> Cохранить</button></div>
        </div>
      )}
    </div>
  )
}

export default Edit;
