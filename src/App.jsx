import Content from "./components/Content"
import Navbar from "./components/Navbar"
import style from "./style/app.module.css"
const App=()=>{
    return(
        <div className={style.app} >
            <Navbar/>
            <Content/>
        </div>
    )
}
export default App