import { useState } from 'react'
import '../css/TodoItem.css'
import dayjs from 'dayjs'

// 할일, 수정/삭제버튼, 체크시 완료 되도록
function TodoItem(props){
    const kdate = dayjs(props.date).format('YYYY-MM-DD ddd')

    const [edit, setEdit] = useState(false)
    const [mtodo, setMtodo] = useState(props.todo)
    const [mdate, setMdate] = useState(kdate)

    const deleteTodo = () => {
        //console.log('del')
        props.deleteTodo(props.num)
    }

    const updateTodo = () => {
        //console.log('up')
        if(edit === true){
            props.updateTodo(props.num, mtodo, mdate, props.complete)
        }
        setEdit(!edit);
    }

    const completeTodo = (e) => {
        //console.log(e.target.checked)
        if(e.target.checked === true){
            const completestate = 1;
            const num = props.num;
            props.completeTodo(num, completestate)
        }
        else if(e.target.checked === false){
            const completestate = 0;
            const num = props.num;
            props.completeTodo(num, completestate)
        }
    }

    if(edit === false){
        return(
            <div id='todoitem'>
                <input type="checkbox" onChange={completeTodo} className={props.complete === 1? 'check-todo' : 'uncheck-todo'} defaultChecked={props.complete === 1? 'check' : ''} />
                <span className='txt-todo' id={props.complete == '1'? 'check-todo' : ''}>{props.todo}</span>
                <span className='date-todo' id={props.complete == '1'? 'check-todo' : ''}>{kdate}</span>
                <button onClick={deleteTodo}>삭제</button>
                <button onClick={updateTodo}>수정</button>
            </div>
        )
    }
    else if(edit=== true){
        return(
            <div id='todoitem'>
                <input type="checkbox" onChange={completeTodo}  defaultChecked={props.complete == 1? 'check' : ''} />
                <span className='txt-todo'><input type='text'  defaultValue={props.todo} onChange={(e) => setMtodo(e.target.value)} /></span>
                <span className='date-todo'><input type='text' defaultValue={kdate} onChange={(e) => setMdate(e.target.value)} /></span>
                <button onClick={deleteTodo}>삭제</button>
                <button onClick={updateTodo}>저장</button>
            </div>
        )
    }
}

export default TodoItem