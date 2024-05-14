import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import './homePage.scss'

function HomePage() {
    return(
        <div className='homePage'>
            <div className="text-container">
                <div className="wrapper">
                    <h1 className='title'>Tìm mua nhà và Căn hộ</h1>
                    <p>Mua bán nhà riêng, nhà nguyên căn Hà Nội giá rẻ mới nhất T4/2024: Sổ đỏ rõ ràng, sang tên nhanh chóng, Đa dạng vị trí, diện tích, mức giá.</p>
                    
                    <SearchBar/>

                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Năm Kinh Nghiệm</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Giải thưởng</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Căn hộ có sẵn</h2>
                        </div>
                    </div>
                
                </div>
            </div>
            
            <div className="image-container">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage