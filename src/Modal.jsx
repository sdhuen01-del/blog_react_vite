import React from 'react'

const Modal = (props) => {
  const {title, setTitle, color, titlenum, setModal, input, setInput} = props
  return (
    <div className='modal' style={{backgroundColor: color}}>
        <h4>제목 : {title[titlenum]}</h4>
        <p>날짜</p>
        <p>상세내용</p>

        <input
        type="text"
        onChange={e => setInput(e.target.value)}
        value={input}
      />

        <button onClick={()=>{
          if (input.trim() !== '') {
            let copy = [...title]
            copy[titlenum] = input   
            setTitle(copy)
            setInput('')
          }
        }}>제목 수정</button> <br />

        <button onClick={()=>{
          setModal(false)}}>닫기</button>
    </div>
  )
}

export default Modal

//rafce