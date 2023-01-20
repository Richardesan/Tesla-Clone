import React from "react";
import ModelSnav from "./modelSnav"


const ModelS = () => {


    return (
        <div>
            <ModelSnav />
            <div className="inferior-design-container container" style={{
                backgroundImage: `url('model-s-interior.jpg')`,
            }}>
                <h2 className="inferior-design-text">Inferior design</h2>
            </div>
            <div className=" video-background container">
                <div className="vidclass-container">
                <video className="vidclass" autoplay>
                    <source src="modelsvideo.mp4" type="video/mp4" />
                    Your browser does not support the video
                </video>
                </div>
                
            </div>
        </div>
    )
}

export default ModelS;