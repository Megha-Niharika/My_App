import React from "react"
//import ReactDOM from "react-dom";


function Footer()
{
    // const firstName = "Abhay"
    // const lastname = "girl"
    const date = new Date()
    const hours = date.getHours()
    let timeofday

        if(hours<12)
{
        timeofday = "morning"
}
else if(hours >= 12 && hours <= 17)
{
        timeofday = "evening"
}
else{
    timeofday = "night"
}

const style = {
    color: "#FF8C00",
    backgroundColor:"red",
    fontSize : "200px"
}
    return(
        <footer>
<h3 style={style} >Good  {timeofday}!</h3>
            </footer>
    )
}
export default Footer