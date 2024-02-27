import style from '../style/content.module.css'
const ContentNav=()=>{
    return(
        <div className={style.contentNav}>
            <div className={style.topnav}>
                <div className={style.arrows}>
                    <a href=""><i className="fa-solid fa-chevron-left"></i></a>
                    <a href=""><i className="fa-solid fa-chevron-right"></i></a>
                </div>
                <div className={style.search}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for courses, skills, certifications and peers" />
                </div>
                <div className={style.right}>
                    <a href=""><i className="fa-solid fa-envelope"></i></a>
                    <a href=""><i className="fa-regular fa-bell"></i></a>
                    <div className={style.avatar}></div>
                </div>
            </div>
            <div className={style.bottomnav}>
                <a href="" className={style.active} id={style.active}>Overview</a>
                <a href="">Orders</a>
                <a href="">Payouts</a>
                <a href="">Banking</a>
                <a href="">Settings</a>
            </div>
        </div>
    )
}
export default ContentNav