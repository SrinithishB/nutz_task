import logo from '../image/logo.png'
import style from "../style/navbar.module.css"
const Navbar=()=>{
    return(
        <nav className={style.navbar}>
            <ul>
                <li><img src={logo} alt="" srcset="" /></li>
                <li><a href=""><i class="fa-solid fa-house"></i>Home</a></li>
                <li><a href=""><i class="fa-solid fa-medal"></i>Courses</a></li>
                <li><a href=""><i class="fa-regular fa-star"></i>Events</a></li>
                <li><a href=""><i class="fa-solid fa-building-columns"></i>Institutions</a></li>
                <li className={style.active}><a href="" ><i class="fa-solid fa-dollar-sign"></i>Revenue</a></li>
                <li><a href=""><i class="fa-brands fa-searchengin"></i>Analytics</a></li>
            </ul>
            
        </nav>
    )
}
export default Navbar