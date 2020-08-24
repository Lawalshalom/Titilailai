import React from 'react';
import moment from 'moment'

const Placeholder = () => {
    console.log(moment())
    console.log(moment()._locale._weekdays[moment().weekday()])
    return (
        <div className="text-center" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", background: "#fff"}}>
            <h2><strong>5 days to launch!</strong></h2>
            <img src="countdown.jpeg" alt="placeholder-text" style={{width: "100%"}}/>
        </div>
    )

};
export default Placeholder;