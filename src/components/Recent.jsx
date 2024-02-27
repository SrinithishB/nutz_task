import style from '../style/recent.module.css'
const Recent=()=>{
    return(
        <section className={style.recent}>
            <div className={style.head}>
                <h2>Recent Transactions</h2>
                <h5>Show all transactions</h5>
            </div>
            <div className={style.box}>
                <table className={style.table} cellspacing="0" cellpadding="0">
                    <tr className={style.thead}>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th><h3>Received from</h3></th>
                        <th><h3>Paid for</h3></th>
                        <th><h3>Through</h3></th>
                        <th><h3> Amount</h3></th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td className={style.name}>
                            <div>
                            <i class="fa-solid fa-medal"></i>
                            <div>
                                <h3>Siddharth R</h3>
                                <p>Jun 10, 2021 at 10:00 AM</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h3>Festival of UX/UI Design</h3>
                                <p>Term fees</p>
                            </div>
                        </td>
                        <td>Cash</td>
                        <td>₹ 12,345.00 +</td>
                        <td><i class="fa-solid fa-ellipsis"></i></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" checked="true" name="" id="" /></td>
                        <td className={style.name}>
                            <div>
                            <i class="fa-regular fa-star"></i>
                            <div>
                                <h3>Siddharth R</h3>
                                <p>Jun 10, 2021 at 10:00 AM</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h3>Festival of UX/UI Design</h3>
                                <p>Term fees</p>
                            </div>
                        </td>
                        <td>Online</td>
                        <td>₹ 12,345.00 +</td>
                        <td><i class="fa-solid fa-ellipsis"></i></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td className={style.name}>
                            <div>
                                <i class="fa-solid fa-dollar-sign"></i>
                                <div>
                                    <h3>Siddharth R <p>Refund</p></h3>
                                    <p>Jun 10, 2021 at 10:00 AM</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div>
                                <h3>Festival of UX/UI Design</h3>
                                <p>Term fees</p>
                            </div>
                        </td>
                        <td>Online</td>
                        <td>₹ 12,345.00 -</td>
                        <td><i class="fa-solid fa-ellipsis"></i></td>
                    </tr>
                    
                </table>
            </div>
        </section>
        
    )
}
export default Recent