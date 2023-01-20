import React from "react"
import {Link} from "react-router-dom"
const MainNavbar = () => {
    function toggleMenu() {
        const show = document.querySelector(".menu-hidden")
        const container =  document.querySelector(".menu-hidden-container")
        container.classList.add("active")
        show.classList.add("active")
    }
    function removeMenu() {
        const show = document.querySelector(".menu-hidden")
        const container =  document.querySelector(".menu-hidden-container")
        show.classList.remove("active")
        container.classList.remove("active")
    }

    const [switech, setswitech] = React.useState(true)

    const switechStyle = {
        left: switech ? "0px" : "20px",
        backgroundColor: switech ? "white" : "black",
    }
    
    const backswitech = {
        backgroundColor: switech ? "black" : "white",
    }
    const backswitec = {
        backgroundColor: switech ? "white" : "black",
        color: switech ? "black" : "white",
    }

    function switchmode() {
        setswitech(prevswitech => !prevswitech)
    }

        return (
            <section>









<div className="container"  style={{
    backgroundImage: `url('modelY.jpg')`
}}>
    <div className='fixed'>
        <div className="nav-flex">


            <h1 className="logo">TESLA</h1>
            <ul>
                <Link to="/ModelS"><li>Model S</li></Link>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Solar Roof</li>
                <li>Solar Panels</li>
            </ul>

            <ul>
                <li>Shop</li>
                <li>Account</li>
            </ul>


            <button className="menu-btn" onClick={toggleMenu}>Menu</button>

        </div>
    </div>
    <div className="menu-hidden-container" >

        <div className="menu-hidden" style={backswitec}>
            <div className="cancel-sidebar-container" style={backswitec}>
                <div className="cancel-sidebar" onClick={removeMenu}>&times;</div>
            </div>


            <ul class="menu-hidden-mainul" >
                <ul className="models">
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Solar Roof</li>
                    <li>Solar Panels</li>
                </ul>
                <ul></ul>
                <li>Existing Inventory</li>
                <li>Used Inventory</li>
                <li>Trade-In</li>
                <li>Demo Drive</li>
                <li>Insurance</li>
                <li>Cybertruck</li>
                <li>Roadster</li>
                <li>Semi</li>
                <li>Charging</li>
                <li>Powerwall</li>
                <li>Commercial Energy</li>
                <li>Utilities</li>
                <li>Find Us</li>
                <li>Support</li>
                <li>Investor Relations</li>


                <div>
                    <div>
                        <ul>
                            <li>Unites States</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>


            </ul>
            <div>
                <div className="flex">
                    <p>light</p>
                    <div className="container-switch-mode" style={backswitech}>
                        <div className="switch-mode" style={switechStyle} onClick={switchmode}></div>
                    </div>
                    <p>Dark</p>
                </div>
            </div>
        </div>
    </div>
    <div className="opacity">
        <h1 className="model-name">Model Y</h1>
        <p className="demo-drive">Schedule a Demo Drive</p>
    </div>
    <div className="btn-flex">
        <button className="custom-order">Custom Order</button>
        <button className="view-intentory" >View Inventory</button>
    </div>


</div>
            </section>
        )
}

export default MainNavbar;