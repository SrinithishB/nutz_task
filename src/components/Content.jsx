import ContentNav from "./ContentNav"
import style from '../style/content.module.css'
import Revenue from "./Revenue"
import Recent from "./Recent"
const Content=()=>{
    return(
        <div className={style.content}>
            <ContentNav/>
            <Revenue/>
            <Recent/>
        </div>
        
    )
}
export default Content