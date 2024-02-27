import style from '../style/revenue.module.css'
import Sales from './Sales'
const RevenueBox=()=>{
    return(
        <div className={style.revenueBox}>
            <div className={style.topselling}>
                <div className={style.totalRevenue}>
                    <div>
                        <h2>₹32,000</h2>
                        <p>Earnings [this week]</p>
                    </div>
                    <div>
                        <h2><i className="fa-solid fa-arrow-up"></i>4%</h2>
                        <p> Previous [week]</p>
                    </div>
                </div>
                <div className={style.courses}>
                    <h3>Top selling courses</h3>
                    <div>
                        <div><p><h3>1</h3>Beginner PHP course</p><h4> ₹14,000</h4></div>
                        <div><p><h3>2</h3>PHP Workshop with Anna University</p><h4> ₹10,000</h4></div>
                        <div><p><h3>3</h3>Advanced PHP course</p><h4> ₹8,000</h4></div>
                        <div><p><h3>4</h3>Advanced PHP course</p><h4> ₹8,000</h4></div>
                        <div><p><h3>5</h3>Advanced PHP course</p><h4> ₹8,000</h4></div>
                    </div>

                </div>
            </div>
            <Sales/>
        </div>
    )
}
export default RevenueBox