import React from "react";
import { Col } from "../../reusecore/Layout";
import { ColorBoxWrapper } from "./ColorBox.style";

const ColorBox = props => {
    const bgcolor = props.colorCode;
    return (
        <ColorBoxWrapper bgcolor={bgcolor}>
            <Col xs={12} sm={12} lg={2} xl={2}>
                <div className="PalletBox">
                    {props.R}
                    <br />
                    {props.G}
                    <br />
                    {props.B}
                    <br />
                    {props.CMY ? props.K : bgcolor}
                    <br />
                    <br />
                </div>
            </Col>
        </ColorBoxWrapper>
    );
};

export default ColorBox;
