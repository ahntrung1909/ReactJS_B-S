import Chat from '../../components/Chat/chat.jsx'
import List from '../../components/List/list.jsx'
import './profilePage.scss'

function ProfilePage() {
    return(
        <div className="profile-page">

            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>Thông tin người dùng</h1>
                        <button>Cập nhật thông tin</button>
                    </div>    
                    <div className="info">
                        <span>
                            Ảnh đại diện:
                            <img src="/dlo333.jpg" alt="" />
                        </span>
                        <span>Tên người dùng: <b>D'Angelo Russel</b></span>
                        <span>Email: <b>iceinmyveins@gmail.com</b></span>
                    </div>
                    

                    <div className="title mrt">
                        <h1>Danh sách của tôi</h1>
                        <button>Tạo bài viết mới</button>
                    </div>
                    <List></List>

                    <div className="title mrt">
                        <h1>Danh sách đã lưu</h1>
                    </div>
                    <List></List>
                </div>
            </div>
            
            <div className="chat-container">
                <div className="wrapper">
                    <Chat></Chat>
                </div>
            </div>
            
        </div>
    )
}

export default ProfilePage
