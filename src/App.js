import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import Todolist from './components/Todolist';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs'

function App() {
  const [todolist, setTodolist] = useState([])
  const [ale, setAle] = useState('')

  useEffect(
    () => {
      getTodo();
    }, [])

  const getTodo = () => {
    var myArr = JSON.parse(localStorage.getItem('todo'))

    if(myArr == null){
      setTodolist([])
    }else{
      setTodolist(myArr)
    }

    setAle('전체조회')
  }

  const checkTodo = (tf) => {
    var myArr = JSON.parse(localStorage.getItem('todo'));

    var result = myArr.filter(
      (data) => (data.complete == tf)
    )
    //console.log(result)
    setTodolist(result)

    if(tf == 0){
      setAle('할일만 보여줍니다.')
    }
    else if(tf == 1){
      setAle('완료한 일만 보여줍니다.')
    }
    
  }

  const addTodo = (intodo) => {
    if(todolist.length == 0){
      var numA = 1
    }
    else{
      var leng = todolist.length
      var numA = todolist[leng-1].num + 1;
    }
   
    const days = dayjs(new Date()).format('YYYY-MM-DD');

    const todoObj = [...todolist, {num: numA, todo: intodo, date: days, complete: 0}]
    //console.log(todoObj)

    localStorage.setItem('todo', JSON.stringify(todoObj));

    alert('추가되었습니다.')
    window.location.href='/todolist-local/'
  }

  const deleteTodo =  (num) => {
    const result = todolist.filter(
      (data) => (data.num != num)
    )

    localStorage.setItem('todo', JSON.stringify(result));

    alert('삭제되었습니다.')
    window.location.href='/todolist-local/'
  }

  const updateTodo = (num, mtodo, mdate, mcomplete) => {
    const todoObj = {num: num, todo: mtodo, date: mdate, complete: mcomplete};

    const result = todolist.map((data) => (
        data.num === todoObj.num ? {...data, ...todoObj} : data
    ));

    localStorage.setItem('todo', JSON.stringify(result));

    alert('수정되었습니다.')
    window.location.href='/todolist-local/'
  }

  const deleteAll =  () => {
    localStorage.removeItem('todo')
    alert('전체 삭제되었습니다.')
    window.location.href = '/todolist-local/'
  }
  const clearAll =  () => {
    for(var i=0; i<todolist.length; i++){
      todolist[i].complete = 1
    }
    //console.log(todolist)
    localStorage.setItem('todo', JSON.stringify(todolist));
    alert('전체 완료되었습니다.')
    window.location.href = '/todolist-local/'
    
  }
  const declearAll =  () => {
    for(var i=0; i<todolist.length; i++){
      todolist[i].complete = 0
    }
    //console.log(todolist)
    localStorage.setItem('todo', JSON.stringify(todolist));
    window.location.href = '/todolist-local/'
    alert('전체 취소되었습니다.')
  }

  const completeTodo = (num, completestate) => {
    for(var i=0; i<todolist.length; i++){
      if(todolist[i].num == num){
        todolist[i].complete = completestate
      }
    }
    //console.log(todolist)
    localStorage.setItem('todo', JSON.stringify(todolist));
    window.location.href = '/todolist-local/'
  }

  return (
    <div id="App">
      <div id='wrap'>
        <Header todolist={todolist} />
        <TodoInput addTodo={addTodo} checkTodo={checkTodo} getTodo={getTodo} />
        <Todolist todolist={todolist} deleteTodo={deleteTodo} updateTodo={updateTodo} completeTodo={completeTodo}  />
        <Footer ale={ale} deleteAll={deleteAll} clearAll={clearAll} declearAll={declearAll} />
      </div>
    </div>
  );
}

export default App;
