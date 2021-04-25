import React from 'react';
import './Services.css';

const Services = () =>{
    return (
        <div className="services">
            <div className="services__left">
                <img id="img-services" src="https://themebeyond.com/html/movflx/img/images/services_img.jpg" alt=""/>
            </div>
            <div className="services__right">
                <span className="services__right--title">
                    <span className="services__right--title--content">OUR SERVICES</span> 
                </span>
                <br/>
                <h2>Download Your Shows <br/> Watch Offline.</h2>
                <p id="none">Lorem ipsum dolor sit amet, consecetur adipiscing elseddo 
                    eiusmod tempor.There are many variations of passages of 
                    lorem Ipsum available, but the majority have suffered 
                    alteration in some injected humour.
                </p>
                <div className="services__right--circles">
                    <div className="circles">
                        <i style={{position: 'absolute', color: '#fff', fontSize: '38px', top: '24px', left: '18px'}} className="fas fa-tv" />
                    </div>
                    <div className="circles--content">
                        <h5>Enjoy on Your TV.</h5>
                        <p >Lorem ipsum dolor sit amet, consecetur adipiscing <br /> elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="services__right--circles">
                    <div className="circles">
                        <i style={{position: 'absolute', color: '#fff', fontSize: '38px', top: '24px', left: '18px'}} className="fas fa-video" />
                    </div>
                    <div className="circles--content">
                        <h5>Watch Everywhere.</h5>
                        <p>Lorem ipsum dolor sit amet, consecetur adipiscing <br /> elit, sed do eiusmod tempor.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;
