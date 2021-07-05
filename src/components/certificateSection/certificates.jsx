import React from 'react';
import './styles.css';
import Carousel from 'react-elastic-carousel';
import certi from './certi.js';
import Certificate from './Certificate/certificate.jsx';

function Certificates(){
    const breakpoints = [
        {width:1, itemsToShow:1},
        {width:768,itemsToShow:2},
        {width:980,itemsToShow:3}
    ]
    return (
        <div id="certificates">
            <h2 className="certiHeading">Certificates</h2>
            <Carousel breakPoints={breakpoints}>
                {certi.map((c)=>(
                    <Certificate certificatePhoto={c.certificatePhoto} certificateTitle={c.certificateTitle}
                       url={c.url} />
                ))}
            </Carousel>
        </div>
    );
}

export default Certificates;