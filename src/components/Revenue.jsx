import style from '../style/revenue.module.css'
import RevenueBox from './RevenueBox'
const Revenue =()=>{
    return(
        <section  className={style.revenue}>
            <div className={style.head}>
                <h1>Revenue</h1>
                <div className={style.select}>
                    <select name="" id=""><option value="">Courses</option></select>
                    <select name="" id=""><option value="">this week</option></select>
                </div>
            </div>
            <RevenueBox/>
        </section>
    )
}
export default Revenue