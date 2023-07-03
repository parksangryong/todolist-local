import '../css/Footer.css'

//전체 삭제, 전체 체크(완료/비완료)
function Footer(props){
    const deleteAll = () => {
        props.deleteAll();
    }
    const clearAll = () => {
        props.clearAll();
    }
    const declearAll = () => {
        props.declearAll();
    }

    return(
        <div id='footer'>
            <div className='footer-txt'>
            {props.ale}
            </div>
            <div className='footer-btn'>
            <button onClick={deleteAll}>전체 삭제</button>
            <button onClick={clearAll}>전체 완료</button>
            <button onClick={declearAll}>전체 취소</button>
            </div>
            
        </div>
    )
}

export default Footer