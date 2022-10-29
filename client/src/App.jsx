import { React, useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header/Header';
import AddForm from './components/AddForm/AddForm';
import List from './components/List/List';

function App() {
  const [todoes, setTodoes] = useState([
    // todo - весь массив с объектами ниже, setTodo - функция, которая будет менять объект
    // {
    //   id: 1,
    //   title: 'first todo',
    //   status: true,
    // },
    // {
    //   id: 2,
    //   title: 'two todo',
    //   status: true,
    // },
    // {
    //   id: 3,
    //   title: 'three todo',
    //   status: false,
    // }
  ]);
  // два useEffect используем для того, чтобы при перезагрузке страницы данные не
  // удалялись с экрана, а хранились в локалсторадже. Методы getItem,
  // и setItem() принадлежит объекту Storage
  useEffect(() => {
    const raw = localStorage.getItem('todoes');
    setTodoes(raw ? JSON.parse(raw) : []);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoes', JSON.stringify(todoes));
  }, [todoes]);

  return (
    <>
      <Header />
      <AddForm todoes={todoes} setTodoes={setTodoes} />
      <List todoes={todoes} setTodoes={setTodoes} />
    </>
  );
}

export default App;
