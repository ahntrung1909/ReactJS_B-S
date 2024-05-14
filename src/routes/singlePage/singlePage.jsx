import Slider from '../../components/Slider/slider.jsx'
import './singlePage.scss'
import { singlePostData, userData } from '../../lib/dummydata.js'
import Map from '../../components/Map/map.jsx'

function SinglePage() {
    return(
        <div className="single-page">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images}/>
                    <div className="info">

                        <div className="top">

                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">$ {singlePostData.price}</div>
                            </div>

                            <div className="user">
                                <img src={userData.image} alt="" />
                                <span>{userData.name}</span>
                            </div>
                            
                        </div>

                        <div className="bottom">
                            {singlePostData.description}
                        </div>

                    </div>
                </div>
            </div>

            <div className="features">
                <div className="wrapper">
                    <p className='title'>Giới thiệu</p>
                    <div className="list-vertical">
                        <div className="feature">
                            <img src="utility.png" alt="" />
                            <div className="feature-text">
                                <span>Tiện lợi</span>
                                <p>Người thuê chịu trách nhiệm</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="pet.png" alt="" />
                            <div className="feature-text">
                                <span>Thú cưng</span>
                                <p>Được phép</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="fee.png" alt="" />
                            <div className="feature-text">
                                <span>Phí thuê</span>
                                <p>Hơn 3 lần với khoản thu nhập bình quân</p>
                            </div>
                        </div>
                    </div>

                    <p className='title'>Diện tích phòng</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="" />
                            <span>80m2</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>2 giường ngủ</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="" />
                            <span>1 phòng tắm</span>
                        </div>
                    </div>

                    <p className='title'>Nơi cận</p>
                    <div className="list-horizontal">
                        <div className="feature">
                            <img src="school.png" alt="" />
                            <div className="feature-text">
                                <span>Trường học</span>
                                <p>cách 250m</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="bus.png" alt="" />
                            <div className="feature-text">
                                <span>Xe buýt</span>
                                <p>cách P100m</p>
                            </div>
                        </div>
                        <div className="feature">
                            <img src="restaurant.png" alt="" />
                            <div className="feature-text">
                                <span>Nhà hàng</span>
                                <p>cách 200m</p>
                            </div>
                        </div>
                    </div>
                    
                    <p className='title'>Địa điểm</p>
                    <div className="map-container">
                        <Map items={[singlePostData]}></Map>
                    </div>

                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Gửi tin nhắn
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Lưu địa điểm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage