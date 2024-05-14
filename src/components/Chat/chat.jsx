import { useState } from 'react'
import './chat.scss'

function Chat() {
    const [chat, setChat] = useState(false)

    function handleClick(){
        setChat(prev => prev = true)
    }

    function addMsg() {
        const center1 = document.querySelector('.center')
        const textV = document.querySelector('textarea').value
        
        //Lấy thời gian hiện tại
        const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

        if(textV == ''){
            alert('Bạn chưa nhập tin nhắn')
            return
        }

        // Tạo một element div mới
        const newMsgDiv = document.createElement('div');
        newMsgDiv.className = 'chat-msg own';
    
        // Tạo nội dung cho div mới
            newMsgDiv.innerHTML = `
            <p>${textV}</p>
            <span>${time}</span>
        `;

        // Thêm div mới vào cuối .center
        center1.appendChild(newMsgDiv);

        // Xóa nội dung của textarea sau khi thêm tin nhắn
        document.querySelector('textarea').value = '';
    }
    return(
        <div className="chat">
            <div className="msgs">
                <h1>Tin nhắn</h1>
                <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>D'Angelo Russell</span>
                    <p>Tin nhắn 1</p>
                </div>
                <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>Anh Trung</span>
                    <p>Tin nhắn 2</p>
                </div>
                <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>Đức Huy</span>
                    <p>Tin nhắn 3</p>
                </div>
                {/* <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>D'Angelo Russell</span>
                    <p>Ice in my Veins!...</p>
                </div>
                <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>D'Angelo Russell</span>
                    <p>Ice in my Veins!...</p>
                </div>
                <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>D'Angelo Russell</span>
                    <p>Ice in my Veins!...</p>
                </div>
                <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>D'Angelo Russell</span>
                    <p>Ice in my Veins!...</p>
                </div>
                <div className="msg" onClick={handleClick}>
                    <img src="/dlo333.jpg" alt="" />
                    <span>D'Angelo Russell</span>
                    <p>Ice in my Veins!...</p>
                </div> */}
                
            </div>
            {chat && <div className="chat-box">
                <div className="top">
                    <div className="user">
                        <img src="/dlo333.jpg" alt="" />
                        <span>D'Angelo Russell</span>
                    </div>
                    <span onClick={() => setChat(prev => prev = false)} className='close'>X</span>
                </div>
                <div className="center">
                    <div className="chat-msg">
                        <p>Hello Everyone </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own">
                        <p>Hello Everyone </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Hello Everyone </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own">
                        <p>Hello Everyone </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg">
                        <p>Hello Everyone </p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chat-msg own">
                        <p>Hello Everyone </p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button onClick={addMsg}>Send</button>
                </div>
            </div>}
        </div>
    )
}

export default Chat
