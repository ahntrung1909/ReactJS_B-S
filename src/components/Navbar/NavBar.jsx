import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function NavBar() {
    const [open, setOpen] = useState(false)

    const user = false;
    
    return(
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src="/faze.png" alt="" />
                    <span>Bất Động Sản</span>
                </a>
                <a href="">Trang Chủ</a>
                <a href="">Giới Thiệu</a>
                <a href="">Liên Lạc</a>
                <a href="">Người Môi giới</a>
            </div>

            <div className="right">
                {user ? (
                <div className='user'>
                    <img src="/dlo333.jpg" alt="" />
                    <span>Nguyễn Anh Trung</span>
                    <Link className='profile' to='/profile'>
                        <div className="noti">3</div>
                        <span>Hồ sơ</span>
                    </Link>
                </div>
                ) : (
                <>     
                    <a href="">Đăng nhập</a>
                    <a href="" className='register'>Đăng ký</a>
                </>)
                }
                <div className="menuIcon">
                    <img src="/menu.png" 
                    onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "menu active" : "menu"}>
                    <a href="">Trang Chủ</a>
                    <a href="">Giới Thiệu</a>
                    <a href="">Liên Lạc</a>
                    <a href="">Người Môi giới</a>
                    <a href="">Đăng nhập</a>
                    <a href="">Đăng ký</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import './navbar.scss'
// function NavBar() {
//     const [open, setOpen] = useState(false)

//     return(
//         <nav>
//             <div className="left">
//                 <Link href="/" className='logo'>
//                     <img src="/logo.png" alt="" />
//                     <span>21Mercy</span>
//                 </Link>
//                 <Link href="">Home</Link>
//                 <Link href="">About</Link>
//                 <Link href="">Contacts</Link>
//                 <Link href="">Agents</Link>
//             </div>

//             <div className="right">
//                 <Link href="">Sign In</Link>
//                 <Link href="" className='register'>Sign Up</Link>
//                 <div className="menuIcon">
//                     <img src="/menu.png" 
//                     onClick={() => setOpen((prev) => !prev)} />
//                 </div>
//                 <div className={open ? "menu active" : "menu"}>
//                     <Link href="">Home</Link>
//                     <Link href="">About</Link>
//                     <Link href="">Contacts</Link>
//                     <Link href="">Agents</Link>
//                     <Link href="">Sign In</Link>
//                     <Link href="">Sign Up</Link>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default NavBar