import React from "react"

function Contact(props)
{
    console.log(props)
    return (
        <div>
<h3>Name:{props.name}</h3>
<p>Phone:{props.phone}</p>
<p>Email:{props.email}</p>
            </div>
    )
}
export default Contact