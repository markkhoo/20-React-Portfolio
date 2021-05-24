import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>Waves by <a href="https://codepen.io/goodkatz/pen/LYPGxQz?editors=1100/">Daniel Österman</a></p>
            <p>2021</p>
            <p>Powered with <a href="https://reactjs.org/">React</a></p>

            {/* React needs svg Namespace tag conversions: (shape-rendering TO shapeRendering) & ( xmlns:xlink TO  xmlnsXlink ) & ( xlink:href TO xlinkHref ) https://stackoverflow.com/questions/59820954/syntaxerror-unknown-namespace-tags-are-not-supported-by-default */}
            <div id="background-container">
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(53, 74, 95, 0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(53, 74, 95, 0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(53, 74, 95, 0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(53, 74, 95, 1)" />
                    </g>
                </svg>
            </div>
        </div>
    )
};

export default Footer;