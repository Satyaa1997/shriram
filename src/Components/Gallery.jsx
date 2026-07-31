import React from "react";
import "./Gallery.css";

import img1 from "../assets/about.jpg";
import img2 from "../assets/club.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img14.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/light.jpg";
import img8 from "../assets/img2.jpg";

const Gallery = () => {

const images=[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8
];


return (

<section className="gallery-section">

    <div className="gallery-heading">

        <span>OUR PROJECT</span>

        <h2>
            Explore Shri Ram Film City
        </h2>

        <p>
            A glimpse of premium township,
            modern infrastructure and luxury living spaces.
        </p>

    </div>


    <div className="gallery-bento">


        {
            images.map((img,index)=>(

                <div 
                className={`gallery-box box-${index+1}`}
                key={index}
                >

                    <img src={img} alt="gallery"/>

                    <div className="gallery-overlay">

                        <h3>
                            Shri Ram Film City
                        </h3>

                        <p>
                            Premium Development
                        </p>

                    </div>

                </div>

            ))
        }


        <div className="gallery-more">

            <button>
                View More +
            </button>

        </div>


    </div>


</section>

)

}

export default Gallery;