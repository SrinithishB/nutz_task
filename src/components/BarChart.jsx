import style from '../style/barchart.module.css'
const BarChart=()=>{
    return(
        <div className={style.barChart}>
            <div className={style.chart}>
                <div></div>
                <div><p>800</p></div>
                <div><p>600</p></div>
                <div><p>400</p></div>
                <div><p>200</p></div>
                <div><p>0</p></div>
            </div>
            <div className={style.bar}>
                <div className={style.monday}>
                    <div className={style.hybrid}></div>
                    <div className={style.offline}></div>
                    <div className={style.online}></div>
                </div>
                <div className={style.tuesday}>
                    <div className={style.hybrid}></div>
                    <div className={style.offline}></div>
                    <div className={style.online}></div>
                </div>
                <div className={style.wednesday}>
                    <div className={style.hybrid}></div>
                    <div className={style.offline}></div>
                    <div className={style.online}></div>
                </div>
                <div className={style.thursday}>
                    <div className={style.hybrid}></div>
                    <div className={style.offline}></div>
                    <div className={style.online}></div>
                </div>
                <div className={style.friday}>
                    <div className={style.hybrid}></div>
                    <div className={style.offline}></div>
                    <div className={style.online}></div>
                </div>
                <div className={style.saturday}>
                    <div className={style.hybrid}></div>
                    <div className={style.offline}></div>
                    <div className={style.online}></div>
                </div>
                <div className={style.sunday}>
                    <div className={style.hybrid}></div>
                    <div className={style.offline}></div>
                    <div className={style.online}></div>
                </div>
            </div>
            <div className={style.date}>
                <div><h6>Monday</h6>18/08</div>
                <div><h6>Tuesday</h6>19/08</div>
                <div><h6>Wednesday</h6>20/08</div>
                <div><h6>Thursday</h6>21/08</div>
                <div><h6>Friday</h6>22/08</div>
                <div><h6>Saturday</h6>23/08</div>
                <div><h6>Sunday</h6>24/08</div>
            </div>
        </div>
    )
}
export default BarChart