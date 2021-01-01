import React from "react";
import { Row, Col } from "../../reusecore/Layout";
import { ColorBoxWrapper } from "./ColorBox.style";

const ColorBox = props => {
    const bgcolor = props.colorCode;
    const dark = props.dark;
    return (
        <ColorBoxWrapper bgcolor={bgcolor}>
            <Col>
                <div className="PalletBox">
                    <Row>
                        <h4 className="color-name"> {props.name} </h4>
                    </Row>
                    <div className="color-data">
                        <Row>
                            RGB  {props.R},{props.G},{props.B}
                            <br />
                            {props.CMY ? props.K : bgcolor}
                            <br />
                        </Row>
                    </div>
                </div>
            </Col>
        </ColorBoxWrapper>
    );
};

export default ColorBox;
