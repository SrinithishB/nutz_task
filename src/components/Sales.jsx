import style from '../style/revenue.module.css'
import BarChart from './BarChart'

const Sales=()=>{
    return(
        <div className={style.sales}>
            <h3>Course sales for [this week]</h3>
            <div className={style.sliders}>
                <div className={style.online}>
                    <h3>₹32,000</h3>
                    <div>
                        <input type="range" />
                        <p>Online</p>
                    </div>
                </div>
                <div className={style.offline}>
                    <h3>₹14,000</h3>
                    <div>
                        <input type="range" />
                        <p>Offline</p>
                    </div>
                </div>
                <div className={style.hybrid}>
                    <h3>_ _</h3>
                    <div>
                        <input type="range" />
                        <p>Hybrid</p>
                    </div>
                </div>
                <div className={style.averages}>
                    <h3>₹500</h3>
                    <div>
                        <input type="range" />
                        <p>Historical averages</p>
                    </div>
                </div>
                
            </div>
            <BarChart></BarChart>
        </div>
    )
}
export default Sales