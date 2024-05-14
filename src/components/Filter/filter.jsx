import './filter.scss'

function Filter() {
    
    return(
        <div className="filter">
            <h1>Kết quả tìm kiếm cho <b>London</b>! </h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="city">Địa điểm</label>
                    <input type="text" id ='city' name="city" placeholder='Địa điểm'/>
                </div>
            </div>
            <div className="bottom">
                <div className="item">
                    <label htmlFor="type">Kiểu</label>
                    <select name="type" id="type">
                        <option value="">Chọn</option>
                        <option value="buy">Mua</option>
                        <option value="rent">Thuê</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Căn hộ</label>
                    <select name="property" id="property">
                        <option value="">Any</option>
                        <option value="apartment">Chung cư</option>
                        <option value="house">Nhà</option>
                        <option value="condo">Căn hộ</option>
                        <option value="land">Mặt đất</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">Giá tối thiểu</label>
                    <input type="text" id ='city' name="city" placeholder='Any'/>
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">Giá tối đa</label>
                    <input type="text" id ='maxPrice' name="maxPrice" placeholder='Any'/>
                </div>

                <div className="item">
                    <label htmlFor="bedroom">Phòng ngủ</label>
                    <input type="number" id ='bedroom' name="bedroom" placeholder='Any'/>
                </div>

                <button>
                    <img src="/search.png" alt="" />
                </button>
            </div>
        </div>
    )
}

export default Filter