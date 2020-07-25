import React from "react";
import Particles from "react-particles-js";

import particle1 from "../../assets/images/app/particle/01.png";
import particle2 from "../../assets/images/app/particle/02.png";
import particle3 from "../../assets/images/app/particle/03.png";
import particle4 from "../../assets/images/app/particle/04.png";
import particle5 from "../../assets/images/app/particle/05.png";

export default () => (
    <div
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }}
    >
        <Particles
            className="particle"
            params={{
                particles: {
                    number: {
                        value: 2,
                        density: { enable: true, value_area: 800 },
                    },

                    shape: {
                        type: ["images"],
                        images: [
                            {
                                src: `${particle1}`,
                                width: 170,
                                height: 150,
                            },
                            {
                                src: `${particle2}`,
                                width: 45,
                                height: 45,
                            },
                            {
                                src: `${particle3}`,
                                width: 32,
                                height: 32,
                            },
                            {
                                src: `${particle4}`,
                                width: 170,
                                height: 150,
                            },
                            {
                                src: `${particle5}`,
                                width: 170,
                                height: 150,
                            }
                        ],
                    },
                    opacity: {
                        value: 0.17626369048095938,
                        random: true,
                        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
                    },
                    size: {
                        value: 30,
                        random: false,
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: "none",
                        random: false,
                        straight: false,
                        bounce: true,
                        attract: { enable: true,  rotateY: 200 },
                    },
                },
                retina_detect: true,
            }}
        />
    </div>
);
