import '../css/Header.css'
import dayjs from 'dayjs'

//제목, 날짜, 남은 할일 개수, 완료 할일 개수 
function Header(props){
    const declear = props.todolist.filter(
        (data) => (data.complete == 0)
    )
    const clear = props.todolist.filter(
        (data) => (data.complete == 1)
    )

    const days = dayjs(new Date()).format('YYYY-MM-DD dddd');

    return(
        <div id='header'>
            <div className='title'>My TodoList</div>
            <div className='date'>{days}</div>
            <div className='check-data'>
                <span>해야할 일 : </span><span className='f-data'>{declear.length} 개</span>
                &nbsp; / &nbsp;
                <span>완료한 일 : </span><span className='t-data'>{clear.length} 개</span>
            </div>
        </div>
    )
}

export default Header