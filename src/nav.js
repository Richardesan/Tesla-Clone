import React from "react"

export default function Navbar() {
    const [change ,setchange] = React.useState(false)
    function toggle() {
       setchange(PrevChage => !PrevChage)
    }
    const style = {
            backgroundColor:  change === true ? "black" : "white",
            right: change === true ? "0px" : "11px",
            transition: "0.3s"
    }
    const bg = {
        backgroundColor:  change === true ? "white" : "black",
        transition: "0.3s"
    }
    const mainbg ={
        backgroundColor:  change === true ? "black" : "white",
        color:  change === true ? "white" : "black",
        transition: "0.3s"
    }
    return (
    <div>
         <div style={mainbg}className="main-container">
        <nav className="Navbar">
            <h2 className="logo">React facts</h2>
            <div className="mini-navflex">
                <span onClick={toggle} className="light">Light</span>
                <div style={bg} className="ball-container">
                    <span style={style} onClick={toggle}className="ball"></span>
                </div>
                <span onClick={toggle} className="dark">Dark</span>
            </div>
        </nav>
        <div className="mini-container">
        <h1>Fun Facts about React</h1>
        <ul className="list">
            <li>Was first released in 2013</li>
            <li>Was originally created by jordan Walkie</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is Maintanied by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
        </div>
    </div>
    )
}
