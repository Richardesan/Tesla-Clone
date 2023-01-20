import React from "react"
import { Link } from "react-router-dom"


const ModelSnav = () => {
    function toggleMenu() {
        const show = document.querySelector(".menu-hidden")
        const container = document.querySelector(".menu-hidden-container")
        container.classList.add("active")
        show.classList.add("active")
    }
    function removeMenu() {
        const show = document.querySelector(".menu-hidden")
        const container = document.querySelector(".menu-hidden-container")
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
            <div className="container " style={{
                backgroundImage: `url('modelS.jpg')`,
            }}>
                <div className=''>
                    <div className="nav-flex">


                        <h1 className="logo">TESLA</h1>
                        <ul>
                            <Link to="/ModelS"><li>
                                Model S</li></Link>
                            <li>Model 3</li>
                            <li>Model X</li>
                            <li>Model Y</li>
                            <li>Solar Roof</li>
                            <li>Solar Panels</li>
                     </ul>

                        <ul>
                            <li>Shop</li>
                            <li>Account</li>
                              <li> <button className="menu-btn1" onClick={toggleMenu}>Menu</button></li>  

                        </ul>


                 
                    </div>
                </div>
                <div className="menu-hidden-container" >

                    <div className="menu-hidden" style={backswitec}>
                        <div className="cancel-sidebar-container" style={backswitec}>
                            <div className="cancel-sidebar" onClick={removeMenu}>&times;</div>
                        </div>


                        <ul className="menu-hidden-mainul">
                            <ul className="models">
                                <Link to="/ModelS"><li>Model S</li></Link>
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
                <div className="op">
                    <h1 className="model-name">Model S</h1>
                    <p className="demo-drive border">Plaid</p>
                </div>
                <section className="tey">
                    <section className="footer-performance">
                        <div>
                            <h1 className="footer-main">396 mi</h1>
                            <p className="footer-stat">Range (EPA est.)</p>
                        </div>
                        <div>
                            <h1 className="footer-main">1.99s</h1>
                            <p className="footer-stat">0-60 mph*</p>
                        </div>
                        <div>
                            <h1 className="footer-main">200mph</h1>
                            <p className="footer-stat">Top Speed*</p>
                        </div>
                        <div>
                            <h1 className="footer-main">1,020 hp</h1>
                            <p className="footer-stat">Peak Power</p>
                        </div>
                        <div>
                            <button className="order-btn">Order Now</button>
                        </div>
                    </section>
                </section>
            </div>

        </section>
    )
}

export default ModelSnav;