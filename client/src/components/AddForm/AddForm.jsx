/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //npm для уникального id
import style from './AddForm.module.css';

export default function AddForm({ todoes, setTodoes }) {
  const [values, setValues] = useState('');
  console.log(values);

  function saveTodo() {
    setTodoes(
      [...todoes, {
        id: uuidv4(),
        title: values,
        status: true,
      },
      ],
    );
    setValues('');
  }

  return (
    <div className={style.myinput}>
      {/* в value input-a передаем значение values из стейта */}
      <input className={style.btn} type="text" placeholder="Введите задачу" value={values} onChange={(e) => setValues(e.target.value)} />
      <button className={style.btn} onClick={saveTodo}>Сохранить</button>
      <br />
    </div>
  );
}
