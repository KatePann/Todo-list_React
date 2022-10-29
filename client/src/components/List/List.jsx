/* eslint-disable no-multi-spaces */
/* eslint-disable spaced-comment */
/* eslint-disable jsx-quotes */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import modile from './List.module.css';

export default function List({ todoes, setTodoes }) {
  const [edit, setEdit] = useState(null); // edit-редактирование
  const [values, setValues] = useState('');

  function deleteTodo(id) {
    // фильтруем туду лист, и если id того, что мы ищем несовпадает с id от кнопки, записываем данные в newTodoes
    let newTodoes = [...todoes].filter((el) => el.id !== id);
    setTodoes(newTodoes);
  }

  function statusTodo(id) {
    // фильтруем туду лист, ищем элемент с таким-же id и, если этот элемент есть, меняем его статус на противоположный
    let newTodo = [...todoes].map((el) => {
      console.log(todoes);
      if (el.id === id) {
        el.status = !el.status;
      }
      return el;
    });
    setTodoes(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValues(title);
  }

  function saveTodo(id) {
    let newTodo = [...todoes].map((el) => {
      if (el.id === id) {
        el.title = values;
      }
      return el;
    });
    setTodoes(newTodo);
    setEdit(null);
  }

  return (
    <div className={modile.conteiner}>

      {
        todoes.map((el) => (
          // не забыть присвоить уникальный ключ key={el.id}
          <div key={el.id}>
            {
              edit === el.id //тернарник на случай режима редактирования
                ? (
                  <div>
                    <br />
                    <input className={modile.myinput} value={values} onChange={(e) => setValues(e.target.value)} />
                    <br />
                  </div>
                )

                : <div className={!el.status ? modile.close : modile.title}>{el.title}</div>
            }
            {
              edit === el.id
                ? (
                  <div>
                    <button className={modile.btn} onClick={() => saveTodo(el.id)}>Сохранить</button>
                  </div>
                )
                : (
                  <div>
                    <button className={modile.btn} onClick={() => deleteTodo(el.id)}>Удалить</button>
                    <button className={modile.btn} onClick={() => editTodo(el.id, el.title)}>Редактировать</button>
                    <button className={modile.btn} onClick={() => statusTodo(el.id)}>Закрыть/Oткрыть</button>
                  </div>
                )
            }
          </div>

        ))
      }
    </div>
  );
}
