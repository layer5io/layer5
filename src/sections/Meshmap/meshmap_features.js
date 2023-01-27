/* eslint-disable */
import React from 'react'
import styled from "styled-components";
import DesignerIcon from "./images/Designer.svg"
import VisualizerIcon from "./images/Visualizer.svg"
import grid from "./images/grid.svg"
import circles from "./images/circles.svg"
import contextAware from "./images/context-aware.gif"
import collaboration from "./images/collaborate.gif"

const MeshmapFeaturesWrapper = styled.div`
    background: #ffffff;
    padding: 8rem 6rem 3rem 6rem;
    margin-bottom: 3rem;
    min-height: 55rem;

    h1 {
        /* background-color: ${props => props.theme.black}; */
        font-weight: 500;
        font-size: 60px;
        color: #444444;
        position: absolute;
        margin-top: 3rem;
        left: 10rem;
        line-height: 4.3rem;
        margin-bottom: 1rem;
        span {
            font-size: 60px;
            width: fit-content;
            border-radius: .25rem;
            /* padding: .5rem; */
            /* background-color: ${props => props.theme.saffronLightColor};     */
            font-weight: 700;
            color: #444444;
        }
        @media screen and (max-width: 380px) {
            font-size: 38px;
            span{
                font-size: 48px;
            }
        }
    }

    h2 {
        position: absolute;
        top: 57.7rem;
        left: 19rem;

        font-weight: 400;
        span {
            font-size: 40px;
            width: fit-content;
            border-radius: .25rem;
            font-weight: 700;
            color: #477E96;
            transition: transform .35s ease-in-out;
        }
    }

    .designer-logo::-webkit-scrollbar{
        display: none;
    }
    .designer-logo {
        width: 38rem;
        overflow: hidden;
        scrollbar-width: none;
        margin-top: 19rem;
        position: absolute;
        right: 3rem;
        height: 25rem;
        overflow-y: scroll;

    }

    .grid-icon {
        position: absolute;
        top: 47.8rem;
        left: 29.8rem;
    }

    .circles-icon {
        position: absolute;
        width: 40rem;
        height: 40rem;
        left: 65rem;
        top: 65rem;
    }

    .vertical-line
    {
        position: absolute;
        top: 60rem;
        left: 15rem;
        height: 16rem;
        width: 0px;
        border: 1.5px solid rgba(0, 0, 0, 0.3);

    }

    .point {
        position : absolute;
        top: 59rem;
        left: 14.9rem;
        height: 2px;
        width: 2px;
        border-radius: 50%;
        border: 3px solid rgba(0, 0, 0, 0.5);
    }

    .features-point {
        position : absolute;
        top: 58.2rem;
        left: 10.5rem;
        transition: ease-in 200ms;
        :hover {
            color:#00D3A9;
            cursor: default;
            text-decoration: underline;

        }
    }

    .line {
        position: absolute;
        width: 30.2vw;
        height: 3px;
        left: 18.9rem;
        top: 61.5rem;
        border: 2px;
        background: linear-gradient(135deg, #477E96 10%, #fff);

    }

    .tagline {
        position: absolute;
        width: 36vw;
        height: 0px;
        left: 10rem;
        top: 50.7rem;
        font-family: 'Qanelas Soft DEMO';
        font-style: normal;
        font-weight: 100;
        font-size: 45px;
        line-height: 61px;
        color: #000000;
    }

    .feature-name {
        transition: transform 1000ms ease-in-out;
    }

    .feature-desc {
        position: absolute;
        width: 45.2vw;
        left: 19rem;
        top: 62.5rem;
        font-family: 'Qanelas Soft DEMO';
        font-style: normal;
        font-weight: 100;
        font-size: 28px;

    }

    .desc {

        position: absolute;
        width: 30.2vw;
        height: 87px;
        left: 19rem;
        top: 66rem;

        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 29px;
        letter-spacing: -0.025em;
        color: rgba(0, 0, 0, 0.6);
        transition: transform .35s ease-in-out;

    }

    .get-started {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 19px 33px;
        gap: 10px;
        position: absolute;
        width: 160px;
        height: 55px;
        left: 10rem;
        top: 37rem;
        background: #00B39F;
        border-radius: 5px;
        color: #ffffff;
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 17px;
        font-weight:400;
        border-color: #ffffff
    }
    `;

function MeshmapFeatures() {

    const handleVisualize = () => {
        setFeature('Visualize');
        setFeatureDesc('Apply patterns and manage many Kubernetes clusters.');
        setDesc1("Deploy designs, apply patterns, manage and operate your deployments in real-time. Bring all your Kubernetes clusters under a common point of management. Interactively connect to terminal sessions or initiate and search log streams from your containers.");
        setfeatureImage(VisualizerIcon);
    }
    const handleDesign = () => {
        setFeature('Design');
        setFeatureDesc('Discover and model cloud native deployments.'); 
        setDesc1("Discover and model cloud native deployments.Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Using GitOps? Integrate advanced performance analysis into your pipeline.");
        setfeatureImage(DesignerIcon);
    }
    const handleCollaborate = () => {
        setFeature('Collaborate');
        setDesc1("Friends don't let friends GitOps alone!");
        setfeatureImage(collaboration);
    }

    const [feature, setFeature] = React.useState('Design');
    const [featureDesc, setFeatureDesc] = React.useState('Discover and model cloud native deployments.')
    const [desc1, setDesc1] = React.useState("Discover and model cloud native deployments.Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Using GitOps? Integrate advanced performance analysis into your pipeline.");
    const [featureImage, setfeatureImage] = React.useState(DesignerIcon)

    return (
        <MeshmapFeaturesWrapper>
            <div className="circles-icon">
                <img src={circles} alt="" />
            </div>
            <div className='designer-logo'>
                <img src={featureImage} alt="Designer" />
                <img src={contextAware} style={{marginTop : "6rem"}} alt="Designer" />

            </div>
            <div className="grid-icon">
                <img src={grid} alt="grid" />
            </div>
            <div className="tagline">
                MeshMap Features
            </div>
            <div className="point"></div>
            <div className="features-point" onClick={handleDesign}>Design</div>
            <div className="vertical-line"></div>
            <div className="point" style={{ top: "76.8rem" }}></div>
            <div className="features-point" style={{ top: "76rem", left: "9rem" }} onClick={handleVisualize}>Visualize</div>
            <div className="vertical-line" style={{ top: "78rem" }}></div>
            <div className="point" style={{ top: "94.8rem" }}></div>
            <div className="features-point" style={{ top: "94rem", left: "8rem" }} onClick={handleCollaborate}>Collaborate</div>
            <div>
                <div className="feature-name"><h2><span>{feature}</span></h2></div>
                <div className="line"></div>
                <div className="feature-desc">{featureDesc}</div>
                <div className="desc">{desc1}<br /><br />{desc1}<br /><br />{desc1}</div>
                <button className="get-started">Get Started</button>
            </div>
        </MeshmapFeaturesWrapper>
    )
}

export default MeshmapFeatures;

