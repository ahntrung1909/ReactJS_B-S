import { listData } from '../../lib/dummydata.js'
import './listPage.scss'
import Filter from '../../components/Filter/filter.jsx'
import Card from '../../components/Card/card.jsx'
import Map from '../../components/Map/map.jsx'

function ListPage({items}) {
    const data = listData

    return(
        <div className="list-page">
            <div className="list-container">
                <div className="wrapper">
                    <Filter></Filter>
                    {data.map(item => (
                        <Card key={item.id} item={item}></Card>
                    ))}
                </div>
            </div>
            <div className="map-container">
                <Map items={data}></Map>
            </div>
        </div>
    )
}

export default ListPage