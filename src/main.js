import React from "react"
import MainNavbar from "./mainNavbar";
const Main = () => {

    return (
        <section>
         <MainNavbar />
            <div className="container" style={{
                backgroundImage: `url('M3.jpg')`
            }}>

                <h1 className="model-name">Model 3</h1>
                <p className="demo-drive">Schedule a Demo Drive</p>
                <div className="btn-flex">
                    <button className="custom-order">Custom Order</button>
                    <button className="view-intentory" >View Inventory</button>

                </div>
            </div>
            <div className="container" style={{
                backgroundImage: `url('modelS.jpg')`,

            }}>

                <h1 className="model-name">Model S</h1>
                <p className="demo-drive">Schedule a Demo Drive</p>
                <div className="btn-flex">
                    <button className="custom-order">Custom Order</button>
                    <button className="view-intentory" >View Inventory</button>

                </div>
            </div>
            <div className="container" style={{
                backgroundImage: `url('modelX.jpg')`
            }}>
                <h1 className="model-name">Model X</h1>
                <p className="demo-drive">Schedule a Demo Drive</p>
                <div className="btn-flex">
                    <button className="custom-order">Custom Order</button>
                    <button className="view-intentory" >View Inventory</button>

                </div>

            </div>
            <div className="container" style={{
                backgroundImage: `url('SolarPanel.jpg')`
            }}>
                <h1 className="model-name">Solar Panels</h1>
                <p className="align">Lower cost Panels in America</p>
                <div className="btn-flex">
                    <button className="custom-order">Custom Order</button>
                    <button className="view-intentory" >View Inventory</button>

                </div>

            </div>
            <div className="container" style={{
                backgroundImage: `url('solarRoof.webp')`
            }}>
                <h1 className="model-name">Solar Roofs</h1>
                <p className="align">Produce Clean Energy From Your Proof</p>
                <div className="btn-flex">
                    <button className="custom-order">Custom Order</button>
                    <button className="view-intentory" >View Inventory</button>

                </div>


            </div>
            <div className="container" style={{
                backgroundImage: `url('accessory.jpg')`
            }}>
                <h1 className="model-name">Accessory</h1>

                <div className="btn-flex">
                    <button className="custom-order shop">Shop Now</button>


                </div>


            </div>

        </section>
    )
}

export default Main;