import React from "react";
import Howitworks from "./howitworks.style";

export default function HowBoundaryWorksDiagram({ activeExampleIndex }) {
    return (
        <Howitworks>
            <div className='root' style={{padding: "0px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="scroll" viewBox="0 0 559.92 498.86">
                    <g style={{ isolation: "isolate" }}>
                        <g id="Layer_2" data-name="Layer 2">
                            <path
                                d="M396.22 246.69a109.35 109.35 0 11-109.34-109.34"
                                strokeDasharray="1.5 5"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                stroke="#00d3a9"
                                fill="none"
                            />

                            {/* Hosts & Services */}
                            <g>
                                {/* service Mesh - 3 */}
                                <rect  className={activeExampleIndex >= 3 ? "show " : "render "} x="100.07" y="110.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 4 */}
                                <rect className={activeExampleIndex >= 4 ? "show " : "render "} x="100.07" y="330.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 5 */}
                                <rect  className={activeExampleIndex >= 6 ? "show " : "render "} x="420.07" y="330.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 6 */}
                                <rect className={activeExampleIndex >= 7 ? "show " : "render "} x="420.03" y="110.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 7 */}
                                <rect  className={activeExampleIndex >= 8 ? "show " : "render "} x="259.05" y="0.04" width="56" height="56" rx="3.5" />
                                {/* service Mesh - 8 */}
                                <rect className={activeExampleIndex >= 5 ? "show " : "render "} x="259.05" y="437.04" width="56" height="56" rx="3.5" />
                            </g>

                            {/* Top-right arrow segment, always active */}
                            <path
                                d="M395 226.76a115.51 115.51 0 00-84-88.92"
                                className='arrowSegment'
                            />

                            {/* Arrow (Example 1) */}
                            <g
                                className={activeExampleIndex !== 0 ? " " : "inactive arrowOne"}
                            >
                                {
                                    activeExampleIndex === 0 &&
                                <circle className='spacer' cx="367.07" cy="319.22" r="11.19" />
                                }
                                <path
                                    className={activeExampleIndex !== 0 ? "render arrowHead" : "show arrowHead"}
                                    d="M375.62 319.52l-11.39 3.66 2.51-11.69 8.88 8.03z"
                                />
                                <path
                                    d="M370.08 316.86a108.68 108.68 0 0023.67-47.78"
                                    className={activeExampleIndex !== 0 ? "render-arrow arrowSegment" : "show-arrow arrowSegment"}
                                />
                            </g>

                            {/* Arrow (Example 2) */}
                            <g
                                className={ activeExampleIndex !== 1 ? " " : "inactive arrowTwo"}
                            >
                                {
                                    activeExampleIndex === 1 &&
                    <circle className='spacer' cx="209.12" cy="323.72" r="11.19" />
                                }

                                <path
                                    className={activeExampleIndex !== 1 ? "render arrowHead" : "show arrowHead"}
                                    d="M209.37 332.4l-3.1-11.56 11.56 3.09-8.46 8.47z"
                                />
                                <path
                                    d="M212.3 327a108.51 108.51 0 0046.56 26"
                                    className={activeExampleIndex !== 1 ? "render-arrow arrowSegment" : "show-arrow arrowSegment"}
                                />
                                <path
                                    className={activeExampleIndex !== 1 ? "render-arrow arrowSegment" : "show-arrow arrowSegment"}
                                    d="M307.46 355.47A115.53 115.53 0 00394 269M395 226.76a115.51 115.51 0 00-84-88.92"
                                />
                            </g>

                            {/* Arrow (Example 3) */}
                            <g
                                className={activeExampleIndex !== 2 ? " " : "inactive arrowThree"}
                            >
                                {
                                    activeExampleIndex >= 2 &&
                    <circle className='spacer' cx="206.57" cy="172.98" r="11.19" />
                                }

                                <path
                                    className={activeExampleIndex >= 2 ? "show arrowHead" : "render  arrowHead"}
                                    d="M198.03 172.68l11.39-3.67-2.52 11.7-8.87-8.03z"
                                />
                                <path
                                    d="M203.57 175.33a108.58 108.58 0 00-23.67 47.78"
                                    className={activeExampleIndex >= 2 ? "show-arrow arrowSegment" : "render-arrow arrowSegment"}
                                />
                                <path
                                    d="M396.22 246.69a109.35 109.35 0 11-187.39-76.58"
                                    className={activeExampleIndex >= 2 ? "show-arrow arrowSegment" : "render-arrow arrowSegment"}
                                />

                            </g>

                            {/* Meshery logo */}
                            <g transform="translate(261.52 222.91)">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                    width="51"
                                    height="51" viewBox="0 0 134.95 135.02">
                                    <polygon className="cls-1"
                                        points="69.49 31.82 69.49 64.07 97.44 47.89 69.49 31.82"/>
                                    <polygon className="cls-1"
                                        points="69.49 70.81 69.49 103.22 97.7 87.09 69.49 70.81"/>
                                    <polygon className="cls-2"
                                        points="65.47 63.85 65.47 32.09 37.87 47.92 65.47 63.85"/>
                                    <path className="cls-2" d="M10.1,103.1a67.79,67.79,0,0,0,21.41,21.55V90.71Z"/>
                                    <polygon className="cls-2"
                                        points="65.47 103.06 65.47 71.05 37.8 87.07 65.47 103.06"/>
                                    <polygon className="cls-1"
                                        points="35.54 122.63 63.56 106.61 35.54 90.41 35.54 122.63"/>
                                    <polygon className="cls-2"
                                        points="99.61 122.8 99.61 90.63 71.63 106.63 99.61 122.8"/>
                                    <path className="cls-2" d="M127,99.37a67.22,67.22,0,0,0,7.91-28.94L105.78,87.11Z"/>
                                    <polygon className="cls-1"
                                        points="103.64 83.69 131.76 67.61 103.64 51.45 103.64 83.69"/>
                                    <polygon className="cls-2" points="99.61 44.5 99.61 12.52 71.76 28.49 99.61 44.5"/>
                                    <polygon className="cls-2" points="99.61 83.55 99.61 51.28 71.7 67.44 99.61 83.55"/>
                                    <polygon className="cls-2"
                                        points="67.48 135.02 67.49 135.02 67.48 135.02 67.48 135.02"/>
                                    <polygon className="cls-1"
                                        points="35.54 51.22 35.54 83.73 63.66 67.45 35.54 51.22"/>
                                    <path className="cls-2" d="M65.47,0A67.2,67.2,0,0,0,35.83,7.83l29.64,17Z"/>
                                    <polygon className="cls-1" points="35.54 12.3 35.54 44.62 63.68 28.48 35.54 12.3"/>
                                    <path className="cls-2" d="M31.51,10.34A67.89,67.89,0,0,0,10.1,31.89L31.51,44.25Z"/>
                                    <path className="cls-1" d="M99.43,8A67.23,67.23,0,0,0,69.49,0V25.15Z"/>
                                    <path className="cls-1" d="M0,69.87A67.27,67.27,0,0,0,8.07,99.63L29.76,87.07Z"/>
                                    <path className="cls-1" d="M8.07,35.37A67.16,67.16,0,0,0,0,65L29.79,47.91Z"/>
                                    <path className="cls-2" d="M35.78,127.13A67.13,67.13,0,0,0,65.47,135V110.15Z"/>
                                    <path className="cls-1" d="M124.92,32a67.9,67.9,0,0,0-21.28-21.52V44.3Z"/>
                                    <path className="cls-1" d="M103.64,124.54A68,68,0,0,0,125,102.86L103.64,90.52Z"/>
                                    <path className="cls-2" d="M135,64.81a67.06,67.06,0,0,0-8-29.35L105.49,47.88Z"/>
                                    <path className="cls-1" d="M69.49,135a67.12,67.12,0,0,0,29.63-7.83L69.49,110Z"/>
                                    <polygon className="cls-2" points="31.51 83.44 31.51 51.56 3.83 67.43 31.51 83.44"/>
                                </svg>

                            </g>

                            {/* Istio */}
                            <g transform="translate(259.05 107.99)">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="66px" height="66px" viewBox="0 0 465 694" enableBackground="new 0 0 465 694" >
                                    <image id="image0" width="465" height="694" x="0" y="0"
                                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdEAAAK2CAMAAAAmBFbWAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                                                AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAArlBMVEX////z9vru8vijtddX
                                                eLdGa7Czwt9nhr7E0OZ4k8XV3e2Joc3m6/SartROcrP3+PyrvNtff7u8yeJwjcLN1+qBmsne5PGS
                                                p9Dq7vb19/tdfbpQc7SSqNBHbLFmhL6Encvy9fqitdeOpc96lMZlhL1RdLXBzeTf5vH+/v709vrg
                                                5vLL1um3xeCuvtzr7/aYrdN0kMSputre5fFRc7WGnsu7yOLw8/ligryXrNPN1+le/DCBAAAAAWJL
                                                R0QAiAUdSAAAAAd0SU1FB+QMDBMiK9tJA8QAABGrSURBVHja7ZvXclzJEQWXokbeUF7Uynu7K2/+
                                                /8e0MISZuaZNddep6sxXPLADGacwQCQ/+ggAAAAAAAAAenjzOe8XgC1v3nq/AGx583nvF4Atby5f
                                                8H4CmPLm8kXvJ4Apby6XL3m/ASz5zOiXvd8Alnxm9PIV70eAIXdGv+r9CDDkzujla96vADvujX7d
                                                +xVgx73Rb3zT+xlgxr3RyzvvZ4AZD0a/5f0MMOPB6OXb3u8AKx6Nfsf7HWDFo9HLd70fAkZ8MPo9
                                                74eAER+MXr7v/RKw4cnoD7xfAjY8Gb0QHOXg2SjBUQ6ejRIc5eDZKMFRDl4YJThKwQujBEcpeGmU
                                                4CgDL40SHGXglVGCowS8MkpwlIDXRgmO4vPaKMFRfF4bJTiKz5VRgqPwXBklOArPtVGCo+hcGyU4
                                                is6NUYKj4NwYJTgKzq1RgqPY3BolOIrNhlGCo9BsGCU4Cs2GUYKj0GwZJTiKzJZRgqPIbBolOArM
                                                plGCo8BsGyU4isu2UYKjuOwYJTgKy45RgqOw7BglOArLnlGCo6jsGSU4isquUYKjoOwaJTgKyr5R
                                                gqOY7BslOIrJgVGCo5AcGCU4CsmRUYKjiBwZJTiKyJFRgqOIHBolOArIoVGCo4AcGyU4isexUYKj
                                                eJwYJTgKx4lRgqNwnBklOIrGmVGCo2icGSU4isapUYKjYJwaJTgKxrlRgqNYnBslOIpFgVGCo1AU
                                                GCU4CkWJUYKjSJQYJTiKRJFRgqNAFBklOApEkVGCo0CUGSU4ikOZUYKjOBQaJTgKQ6FRgqMwlBol
                                                OIpCqVGCoygUGyU4CkKxUYKjIBQbJTgKQrlRgqMYlBslOIpBhVGCoxBUGCU4CkGNUYKjCNQYJTiK
                                                QJVRgqMAVBklOApAnVGCI33qjBIc6VNnlOBIn0qjBEfyVBolOJKn1ijBkTq1RgmO1Kk2SnAkTrVR
                                                giNx6o0SHGlTb5TgSJt6owRH2jQYJTiSpsEowZE0LUYJjpRpMUpwpEyTUYIjYZqMEhwJ02aU4EiX
                                                NqMER7o0GiU4kqXRKMGRLI1GCY5kaTVKcKRKq1GCI1WajRIcidJslOBIlHajBEeatBslONKkwyjB
                                                kSQdRgmOJOkwSnAkSY9RgiNFeowSHCnSZZTgSJAuowRHgvQZJTjSo88owZEenUYJjuToNEpwJEev
                                                UYIjNXqNEhyp0WuU4EiNbqMER2J0GyU4EqPfKMGRFv1GCY60MDBKcCSFgVGCIyksjBIcKWFhlOBI
                                                CQujBEdKmBglOBLCxCjBkRA2RgmOdLAxSnCkg5FRgiMZjIwSHMlgZZTgSAUrowRHKpgZJTgSwcwo
                                                wZEIZkYJjkSwM0pwpIGdUYIjDQyNEhxJYGiU4EgCS6MERwpYGiU4UsDUKMGRAKZGCY4EMDVKcCSA
                                                rVGCI39sjRIc+WNslODIHWOjBEfuWBslOPLG2ijBkTfmRgmOnDE3SnDkjL1RgiNf7I0SHPlib5Tg
                                                yJcBRgmOXBlglODIlRFGCY48GWGU4MiTIUYJjhwZYpTgyJExRgmO/BhjlODIjzFGCY78GGSU4MiN
                                                QUYJjtwYZZTgyItRRgmOvBhmlODIiWFGCY6cGGeU4MiHcUYJjnwYaJTgyIWBRgmOXBholODIhZFG
                                                CY48GGmU4MiDoUYJjhwYapTgyIGxRgmO5jPWKMHRfAYbJTiazmCjBEfTGWyU4Gg6o40SHM1mtFGC
                                                o9kMN0pwNJnhRgmOJjPeKMHRXMYbJTiaywSjBEdTmWCU4GgqM4wSHM1khlGCo5nMMEpwZM0PD742
                                                xSjBkTFHP8emGCU4suX9jw6+OMcowZEpb/2NEhxZ8v5jAaMER4a8vQgYJTiy4/3HEkYJjsx4e5Ew
                                                SnBkxWcTlTBKcGTFZxPVMEpwZMPdRDWMEhzZcDdREaMERxbcT1TEKMGRBfcTVTFKcNTPw0RVjBIc
                                                9fMwURmjBEe9PE5UxijBUS+PE9UxSnDUx4eJ6hglOOrjw0R1jBIcdfE0USGjBEc9PE1UyCjBUQfP
                                                E1UySnDUzvNElYwSHDXzYqJSRgmOWnkxUSmjBEeNvJyollGCozZeTlTLKMFRE68mqmWU4KiJVxMV
                                                M0pw1MDriYoZJThq4PVE1YwSHFVzNVE1owRH1VxNVM4owVEl1xOVM0pwVMn1RPWMEhxVcTNRPaME
                                                R1XcTFTQKMFRBbcTFTRKcFTB7UQFjRIclbMxUUWjBEfFbExU0SjBUSlbE5U0SnBUyNZEJY0SHJWx
                                                OVFNowRHRWxOVNMowVEJ2xMVNUpwVMD2REWNEhydszNRUaMER+fsTFTVKMHRGXsTVTVKcHTG3kRl
                                                jRIcHbM7UVmjBEfH7E5U1yjB0RH7E9U1SnB0xP5EhY3+2Pu7JszBRIWNEhztczBRZaMER3scTVTZ
                                                KMHRHkcTVTZKcLTD4USljRIcbXM4UWmjBEebHE9U2yjB0RbHE9U2SnC0wclExY0SHN1yMlFxowRH
                                                N5xNVN0owdE1ZxNVN0pwdMXpRNWNEhxdcTpReaMER684n6i8UYKjV5xPVN8owdELCiaqb5Tg6AUF
                                                Ew1glODoiZKJBjBKcPREyUQjGCU4eqRoohGMEhw9UjTREEYJju4pm2gIowRH95RNNIRRgqM7Cica
                                                wyjB0UfFE41hlOCofKJBjBIcFU80iFGCo+KJRjG6fHBUPNEoRlcPjsonGsbo4sFR+UTDGF07OKqY
                                                aBijawdHFRONY3Tl4KhmonGMrhwc1Uw0kNF1g6OqiQYyum5wVDXRSEZXDY7qJhrJ6KrBUd1EQxld
                                                MziqnGgoo2sGR5UTjWV0xeCodqKxjK4YHNVONJbRBYOj6okGM7pecFQ90WBGlwuO6icazehqwVH9
                                                RKMZXSw4aphoOKNrBUcNEw1ndKngqGWi8YyuFBy1TDSe0YWCo6aJxjO6UHDUNNGARpcJjtomGtDo
                                                MsFR20QjGl0kOGqcaESjiwRHjRMNaXSJ4Kh1oiGNLhEctU40ptEFgqPmicY0ukBw1DzRoEbTB0ft
                                                Ew1qNH1w1D7RoEazB0cdE41qNHlw1DHRqEZzB0c9Ew1rNHVw1DPRsEYzB0ddE41rNHFw1DXRuEbz
                                                Bkd9Ew1sNG1w1DfRwEazBkedEw1sNGtw1DnRyEZzBke9E41sNGdw1DvR0EYzBkfdEw1tNGNw1D3R
                                                2EbzBUf9E41tNF9w1D/R4EazBUcGEw1uNFtwZDDR6EZzBUcWE41uNFdwZDHR6EZTBUcmEw1vNFNw
                                                ZDLR8EYTBUc2E41vNE9wZDPR+EbTBEdGE01gNEtwZDTRBEaTBEdWE81gNEdwZDXRDEZTBEdmE81g
                                                NEVwZDbRFEYTBEd2E01hNEFwZDfRHEbDB0eGE81hNHxwZDjRJEaDB0eWE01iNHhwZDnRLEZDB0em
                                                E81iNHRwZDrRNEYDB0e2E01jNHBwZDvRNEbjBkfGE81jNGxwZDzRPEajBkfWE01kNGhwZD3RREZj
                                                BkfmE81kNGRwZD7RTEYjBkf2E01lNGBwZD/RVEbjBUcDJprKaLzgaMBEcxmNFhyNmGguo9GCoxET
                                                TWY0VnA0ZKLJjMYKjoZMNJvRSMHRmIlmMxopOBoz0XRG4wRHgyaazmic4GjQRPMZjRIcjZpoPqNR
                                                gqNRE81nNEhwNGyiCY3GCI6GTTSh0RDB0biJZjQaITgaN9GMRgMERwMnmtKofnA0cKIpjcoHRyMn
                                                mtOoenA0cqI5jYoHR0MnmtOoeHA0dKJJjUoHR2MnmtSodHA0dqJZjQoHR4MnmtWocHA0eKJpjcoG
                                                R6MnmtaobHA0eqJ5jYoGR8MnmteoaHA0fKKJjUoGR+MnmtioZHA0fqKJjSoGRxMmmtmoYHA0YaKZ
                                                jeoFRzMmmtqoXHA0Y6KpjaoFR1MmmtuoWHA0ZaK5jWoFR3MmmtyoVHA0Z6LJjSoFR5MmmtyoUnA0
                                                aaLZjeoER7Mmmt2oTnA0a6LpjaoER9Mmmt6oSnA0baL5jWoER/Mmmt+oRnA0b6ILGFUIjiZOdAGj
                                                CsHRxImuYNQ/OJo50RWM+gdHMye6glH34GjqRJcw6h0cTZ3oEkadg6O5E13DqG9wNHeiaxh1DY4m
                                                T3QRo57B0eSJLmLUMTiaPdFVjPoFR7MnuopRt+Bo+kRXMeoWHE2f6DJGnYKj+RNdxqhTcDR/ousY
                                                dQmOHCa6jlGX4MhhogsZdQiOPCa6kFGH4MhjoisZnR4cuUx0JaPTgyOXiS5ldHJw5DPRpYxODo58
                                                JrqU0bnBkdNE1zI6NThymuhaRmcGR14TXczoxODIa6KLGZ0XHLlNdDWj04Ijt4muZnRWcOQ30eWM
                                                TgqO/Ca6nNE5wZHjRJczOic4cpzoekZnBEeeE13P6IzgyHOiCxodHxy5TnRBo+ODI9eJrmh0dHDk
                                                O9EVjY4OjnwnuqTRscGR80SXNDo2OHKe6JpGRwZH3hNd0+jI4Mh7omsaHRgcuU90UaPjgiP3iS5q
                                                dFhw5D/RVY2OCo78J7qq0UHBkcBElzU6JjgSmOiyRocERwoTXdfoiOBIYaLrGh0QHElMdF2jA4Ij
                                                iYkubNQ8ONKY6MJGzYMjjYmubNQ4OBKZ6MpGjYMjkYkubdQ0OFKZ6NJGTYMjlYmubdQwOJKZ6NpG
                                                DYMjmYkubtQsONKZ6OJGzYIjnYkubtQqOBKa6OpGjYIjoYmubtQmOFKa6PJGTYIjpYkub9QiOJKa
                                                KEYNgiOpiWK0PzjSmihG+4MjrYlitDs4EpsoRruDI7GJYrQ3OFKbKEYvncGR2kQxeukLjuQmitE7
                                                OoIjuYli9I724Ehvohi9pzk40psoRu9pDY4EJ4rRBxqDI8GJYvSBtuBIcaIYfaAtOFKcKEYfaQmO
                                                JCeK0UdagiPJiWL0A/XBkeZEMfqB+uBIc6IYfaI2OBKdKEafqA2ORCeK0WfqgiPViWL0mbrgSHWi
                                                GH2mKjiSnShGX/Au/kR/8tOfHf1B8+e/+OWvfv0b70fOoyI40pvoncvf/u73JY//wx//9Oe3a6gt
                                                D46UJlrhcjm1xcGRyETbXS6jtjQ4cp+omcvsaguDI8+JjnK5oTbFx6iy4MhnopNcbqiNvNqi4Gj6
                                                RH1cJlFbEhxNnKiEy9hqC4KjORNVdBlSbUFwNHqiAVxuqNX9GHUaHA2caDyXG2rlVnsaHA2ZaHiX
                                                ympPgiPriWZzKaj2JDiym2hyl1d4qj0MjkwmupbLKxzUHgZHnRNd2uUVE9UeBEftE8XlLuN/+TkI
                                                jlomistShq12PziqnCguGzFX+27vXyqeKC5tsFK7FxyVTBSXQ+hVuxMcHU8UlzNo/Bi1HRztThSX
                                                DlSudjM4eotLRcrUbgVHryeKSzmO1W4ER29xGYRNtbfB0XtchuOV2pvgCJeBuVfr/QgAAAAAAAAA
                                                AAAAAAAAAAAAAAAAAAAAAIAx/AVi8+5G6Sef1v1HcdDhr3/7++ZMcRqRf/zzX//eP704DcZ//vu/
                                                sx+nOI3D3q3FaUSOby1Og1Fwa3Eah9Jbi9MI1N1anIrTcGtxqkvrrcWpIn23FqdiGNxanOpgdWtx
                                                qoDtrcWpMwNuLU79GHVrcerB2FuL08lMuLU4ncesW4vTGcy9tTgdjMOtxek4vG4tTkfge2txaozA
                                                rcWpHSq3FqcWaN1anHYieGtx2o7qrcVpC9q3FqeVBLi1OC0nyq3FaQmxbi1OTwh4a3G6T9Rbi9Mt
                                                Yt9anF6R4Nbi9Jkstxand+S6tcs7TXhrV3aa9dau6TT3rV3O6QK3diWnq9zaNZyudWvTO13w1mZ2
                                                uuqtvSaH07Vv7TXhnXJrb4jslFu7TUyn3Nojwjnl1p4SySm3towYTrm1Ncg75dZWo+yUW9uGplNu
                                                bQ9yTrm13Sg55dbaoOGUW2uJu1NurTmeTrm1Y/Bxyq0dyXSn3NrhzHTKrZ3DHKfc2pkMd8qtnc5I
                                                p9xaH8Y45dZ6Yu6UW+uOpVNurQY2Trm1SnQ75dbK0eOUW6tJm1NurTLVTrm18tQ45dbGoMwptzYS
                                                p065teE4csqtjcm2U25tZG6ccmvD89IptzYHD065tZn45FNuLQAAAAAAAAAAAACk4v8dJLe2Uj/G
                                                xwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0xMlQxOTozNDo0MyswMDowMCJ4jOcAAAAldEVY
                                                dGRhdGU6bW9kaWZ5ADIwMjAtMTItMTJUMTk6MzQ6NDMrMDA6MDBTJTRbAAAAAElFTkSuQmCC"
                                    />
                                </svg>
                            </g>

                            {/* Linkerd */}
                            <g className='authenticate' transform="translate(363.32 212.91)">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="66"
                                    height="66"
                                    id="linkerd-logo" x="0" y="0" enableBackground="new 0 0 138.9 129.2" version="1.1"
                                    viewBox="0 0 138.9 129.2" >
                                    <g><g><g><linearGradient id="SVGID_1_" x1="130.52" x2="130.52" y1="24.532" y2="79.491" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/><stop
                                        offset="1" stopColor="#018AFD"/></linearGradient><polygon
                                        points="125.9 24.5 125.9 74.2 135.1 79.5 135.1 29.8" className="st0"/><linearGradient
                                        id="SVGID_2_" x1="7.78" x2="7.78" y1="24.534" y2="79.495"
                                        gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/>
                                        <stop offset="1" stopColor="#018AFD"/></linearGradient><polygon
                                        points="3.2 79.5 12.4 74.2 12.4 24.5 3.2 29.8" className="st1"/></g><g><polygon points="48.1 79 90.2 103.3 90.2 92.8 50.8 70 48.1 71.5 48.1 71.5" className="st2"/>
                                        <path
                                            d="M92.6,117.4L48.1,91.7v10.6l11.9,6.9l-14.3,8.3c-1,0.6-1,1.9,0,2.5l7,4l16.5-9.5l16.5,9.5l7-4 C93.6,119.4,93.6,118,92.6,117.4z"
                                            className="st2"/></g><g><linearGradient id="SVGID_3_" x1="130.52" x2="130.52" y1="48.861" y2="99.634" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/><stop
                                        offset="1" stopColor="#018AFD"/></linearGradient>
                                    <path
                                        d="M125.9,54.1v44c0,1.1,1.2,1.8,2.2,1.3l6.3-3.6c0.4-0.3,0.7-0.7,0.7-1.3V48.9L125.9,54.1z"
                                        className="st3"/>
                                    <linearGradient id="SVGID_4_" x1="110.368" x2="110.368" y1="60.496" y2="111.269"
                                        gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/>
                                        <stop offset="1" stopColor="#018AFD"/></linearGradient>
                                    <path
                                        d="M108,111.1l5.9-3.4c0.7-0.4,1.1-1.1,1.1-1.9V60.5l-9.2,5.3v44C105.8,110.9,107,111.6,108,111.1z"
                                        className="st4"/>
                                    <linearGradient id="SVGID_5_" x1="90.216" x2="90.216" y1="72.13" y2="123.959"
                                        gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/>
                                        <stop offset="1" stopColor="#018AFD"/></linearGradient>
                                    <path d="M85.6,124l8.4-4.9c0.4-0.3,0.7-0.7,0.7-1.3V72.1l-9.2,5.3V124z"
                                        className="st5"/>
                                    <linearGradient id="SVGID_6_" x1="48.089" x2="48.089" y1="72.13" y2="123.958"
                                        gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/>
                                        <stop offset="1" stopColor="#018AFD"/></linearGradient>
                                    <path
                                        d="M44.2,119.1l8.4,4.9V77.4l-9.2-5.3v45.7C43.5,118.4,43.8,118.8,44.2,119.1z"
                                        className="st6"/>
                                    <linearGradient id="SVGID_7_" x1="27.937" x2="27.937" y1="60.495" y2="111.269"
                                        gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/>
                                        <stop offset="1" stopColor="#018AFD"/></linearGradient>
                                    <path
                                        d="M24.4,107.7l5.9,3.4c1,0.6,2.2-0.1,2.2-1.3v-44l-9.2-5.3v45.3C23.4,106.6,23.8,107.3,24.4,107.7z"
                                        className="st7"/>
                                    <linearGradient id="SVGID_8_" x1="7.785" x2="7.785" y1="48.861" y2="99.633"
                                        gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2BEDA7"/>
                                        <stop offset="1" stopColor="#018AFD"/></linearGradient>
                                    <path
                                        d="M4.3,96l5.9,3.4c1,0.6,2.2-0.1,2.2-1.3v-44l-9.2-5.3v45.3C3.2,94.9,3.6,95.6,4.3,96z"
                                        className="st8"/></g><g><path d="M135.1,29.8l-9.2-5.3l-16.5,9.5l-11-6.3l14.3-8.3c1-0.6,1-1.9,0-2.5l-5.9-3.4c-0.7-0.4-1.5-0.4-2.2,0 l-15.4,8.9l-11-6.3l14.3-8.3c1-0.6,1-1.9,0-2.5l-5.9-3.4c-0.7-0.4-1.5-0.4-2.2,0l-15.4,8.9L53.7,1.9c-0.7-0.4-1.5-0.4-2.2,0 l-5.9,3.4c-1,0.6-1,1.9,0,2.5l80.3,46.3l9.2-5.3l-16.5-9.5L135.1,29.8z" className="st2"/>
                                        <path
                                            d="M31.4,13.5l-5.9,3.4c-1,0.6-1,1.9,0,2.5l80.3,46.3l9.2-5.3l-81.4-47C32.9,13.1,32.1,13.1,31.4,13.5z"
                                            className="st2"/>
                                        <polygon
                                            points="3.2 29.8 19.7 39.3 3.2 48.9 12.4 54.2 28.9 44.6 39.8 51 23.4 60.5 32.5 65.8 49 56.3 60 62.6 43.5 72.1 52.7 77.4 69.1 67.9 85.6 77.4 94.8 72.1 12.4 24.5"
                                            className="st2"/></g></g></g></svg>


                            </g>

                            {/* Consul */}
                            <g transform="translate(249.32 322.91)"
                                className={activeExampleIndex === 0 ? "" : " inactive authorize"}
                            >
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="66px" height="66px" viewBox="0 0 172 167" enableBackground="new 0 0 172 167">
                                    <image id="image0" width="172" height="167" x="0" y="0"
                                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACnCAYAAACM9rcbAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
                                    AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAA
                                    XnRFWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMACmlwdGMKICAgICAgMjgKMzg0MjQ5NGQwNDA0MDAw
                                    MDAwMDAwMDBmMWMwMjZlMDAwMzUyNDY0NzFjMDIwMDAwMDIwMDA0MDAKYJo9ngAAQzlJREFUeNrt
                                    vWmQJEd2JvbcPa6MvOu+uqtvAN0ABkDhGFyDmQEwBGfImeVNikuNiaR6eYi75C4lGqUVpV1JNBN3
                                    9YNak0yCmUwrLSkuybVZYi6Scw+uwdVAA42+z6qu+8g743Z3/ciMTI/IyKysrOqqbKCfmVtmVWVF
                                    Rnh88fz5O76H4CMuJ0+eRMKP4fco9D7q56gBEa9RwoXX8Pt2A9r8LL4CAMCLL77I4WMmaPuH6D9p
                                    A9J2YMQR79u9ht9HHR9gc3CyiPesze/bAVp8/diA9yMD2A4gbQdQHDFI+L3iYSlrSlrGlPSMKSVV
                                    D+uqh+OqhxMyQ3HMQEaA5Por5ohTBuBxxF2PcMPF3HQJr1oyq1ZUWi6pXrWkeWZO9yyKOYUmUBkA
                                    hH8OjzCYAT5m4L3tARsB1HYgFYFIQu8lxcPyWFlJjJaVwUFDHk9aZH/MxftkisckhoYJgwHMUQoB
                                    aIiDjAApwIEAAELN7wCog4oDcEDAAMDjwD2OwGYIqgzxMkWQ9whbcQhfNGW2UNK8m2sJd3EpZefW
                                    465BMfegBt7wiAJwGLwfaeDetoAVgBrWpmENSkJDAgAp5mLl0EZseKKoTmcN6VjcIfeoHj4sMTSG
                                    OcpgDrH652+p8Jo2NiiGnIf5oi2xyxWVnt/Q3cs3s9bNuYyddyTmAIAPYhHM7TRwQOt+lIB7WwG2
                                    jTYFCILU154SCAAFAHmiqKaOrMcOjJaV+5I2eUhz8XGJoXHMUQKaGnLPhQN4DPOSh/lNS2bnipr3
                                    3lLK+fDiiDGX090qALhQA25YE3fSvB8J4N42gA1p1KjlPqBBAUAGAHmqoKaPrenHxkrKY0lb+qRC
                                    0THCUBZ2QXvulHAAj2K+akvsXEmjby6m7bfPjlWvCOD1Aexr4CizoX6o2xu4fQ/YTYAaCdKUJekn
                                    luMHp3Pa02lLekah6G7CUOZ2uN4uhFHM1y2JfVCIeT+8Nmi+cWaiOusQZkMQvD6AP1LA7dsbGGGj
                                    hpd9H6hyfSgHctrgfUuJR4cr8vO6Qx6VGBqDPlrqd1o4gOcRPl9R6KvLKfs7709WTi8nnSIAOBBt
                                    NojgBbgNgdt3gG1jp4aXfR+kMmFIO7Ecn7prVX9mwJA/r3r4XsxB3+vr2G1hiJdMmb27lnC/fmai
                                    8urVQXMNAKK0btQm7bYBbV8BNmL5F91R4rKvEIa0+5YS0/es6J/PmtIXZA8fRrW/f6yFI7BtiX24
                                    obtfe3+i8u1LI8Yy1IAral1R4wY8C/0O3L4AbBs7NQxUpT7U+xcT+08sx7+QNaQvKhQfgttoA7Vb
                                    wgFcW2Jn1xLuV96fLH/nypC5Ak3gim4yCiGvQj+Dds8B20GrBjQqAGgHctrww3Opzw9X5Z9XPXwU
                                    7gB1U+EIHEtip5dS9l+8OV364UrSyUO0xr0tzIQ9BWwdrFE7fxGoataQ0k/cSD81WVR/OeaShxEH
                                    ZY/n7bYThqBaVeir1wfN//fVQ4V3HcINaA/cvgXtngC2C62qAIAKALFH5lLHTizHv5yyyAuYo+Re
                                    T9jtLh7mq3nd+8rpyfJfnR2rzgGABUHgtngT+gm0u76khsAapVFjAKCPlZThH7sw8DPH1vQ/iDvk
                                    SQRI3evJ+igI5iiuO+TByZL60GhZKS+nnBVH4iz0sQBAT506tden3ZBdBawAVtFNFdCoABB/bDZ1
                                    75M30r8/XFX+U4mhYegDW/ujJAgASwyNZUzpyQO5WIZhPreadKvCRwKeg5mZmb4B7a4BVrBXw8u/
                                    Wh962pIyL1wY+Mm7VvU/1F3y6B031a0VDEjTXfKJiZJ632BVXr4xYC1xFJ1IMzMzg/oBtLccEG3s
                                    VdH5rwFA7Mh6bPLx6+lfz5rST9WTUfpOOAJGEfcY4h7F4FFce88QUI6AceCAOEIYAGOGCOEgY4Yk
                                    wpGEGUiYI4L6b7XAmosfPram/8lgVf4//v7u3J9txN1wJhhAyEzYK7mlgI2wV0WwKlADq/74jfT9
                                    9y7F/7HukCdQH7iqOALmYe7YEquaMitVVC9fUWixotJSRaVlU2amLTHblpjtYe4xBJwhzjgCjjkg
                                    xBGWGCIyRbJCsRJzsaY7WE84JJWwpHTcIem4gzMxlyQVinTCkLzX10wYGks45FMJh/zNRtytQjMy
                                    hqBPwApwCwHbBqz+5koFAE2mKPH8xYHnD+S031EoPrxXk8ABuCsxs6LQjULMW92Iu0urCXclr7uF
                                    ikqrNmEWR20TqQNJ08I1t00eJwxJMRfHUpaUGjTkgeGKPDZYlcdTljQSc3FKYmjX3XaOxG6eGa/+
                                    u9ms5UAzRVNM4ewLuSWAbeMJICBsrlKWlHn+4sDPTZSUf0QYGtztC2cImCXTUi7mLayknLmFtH1z
                                    NeGsVRVa4ajhl9ws7zQqaTrqQQ0AlmIuVVQqVVQqLaZtCQBkiSE1Y0rp8ZI6NlFUpkcqynTSkoYV
                                    imK3ei4o5pVLw+Zf/OhA8apwrn0HVoBbANgObisfrPpYSRn+7OXsrw5V5V/GHMV362I5ALclVtmI
                                    uzfnM/bl2aw1u5Zw1lzCTWj6If3XqFS9zRKlfdmsPEeCUEqkh7m8Hndz63F34cw4nIk7JDlRVMcO
                                    5rQj4yX1SNIiI7dC83IEdC5jf/eHh/NvBaeqf8wAUXYUsJuAVQMAfTqnTXz6avZ3Mqb0pd2KWDHE
                                    vZJGV+Yz9sUrQ8bFhbS96DYjPf5whNENWKO0qyjhkp2WOjIIgRaEfImqQouXh421y8PGpZQlpQ/m
                                    tIOH12PHhyvKIc3FyZ3avK3FnQ9ePpz/lku4DcGMrk7XtmeyY4DdBKwxANAPr8emnr6W+adpU/r8
                                    bmyuPMydnO7OXRsyP7g4YlzMx7wc1CI7/ogCbDuwblb8F5ZOhZDi/ESBVhWGVtK80vsTlbWzY9Wz
                                    k0V14u4V/b59Be143CEDiPee71tW6cKPDpS+ltcb8+KnI4ph2r6SHQFsN2C9a1U/8OT19O+nLOl5
                                    uMVJ1R7mznrcvXFx1Hjn4ohxyZBpCQDM+rCE1yjN2gmoUVwBANEmQfi1U4FkGLgNTQu1lUkDAM3D
                                    vDKbtUpzGWt2pKK8fe9S/BMHcrFPJGwytFWN6xBWPj1Z/sb1QfM6AFQBwKjPiZjJ1XdadidNgrZg
                                    PbIe2//k9fR/lbKk5+AWGvIMcW8j7s2dH62+eWHUuGjItAC1G2FC84ZEgbUbjdoNUKPmJPy6FY0r
                                    alutPp8xjkBfSTrV1YSzPFquvn//UuKhAzntAd0h2W7n6fKw+f33pirvAkAZACrCPPnz0Zf5BNsG
                                    bJsIVsNm3Z/XJp+6lvm9lCU9C7cIrByAlzVv9dKw+dYHE5XTJc3bgNoN8DWHKQzRBIiqfwrnh24G
                                    0k43shsGmnYVvy15wNDUtjrUgBtfTjnVlWRueX9e+/DBheTjk0X1hLyJZ2Ex7bz7+sHiDxjiRagB
                                    tlyfq3Yatm9kW4ANpQeG/az6eEkZ/fSVzH+RNqUfh1tkBjiEGzez1vtv7yu9tpxyFqE28f4woAnY
                                    cFZSlEbtREzR7sZ1C9io33Ui/QjXrYnANaCmbQ0A0DkCY3bAMhfT9uLx5fj5+5cSTw0Y8nSUfVuI
                                    eddfP1j8RlWhawBQqo8qNB9mMWOrr7QrwDY2Pm3A6mvWeNImAz92cfAfDRrKz9+KnAAOwPO6e/Pt
                                    /aVvvn6w+GpJo8sAUBBGsT587eHfFF+LtEtg7mSr7tCpR3JvhR8Y0TPhhUbY/eYBgMswuCspZ+1m
                                    xrqqepimbGlYYs0sN0tmuTenS391dci8KMyRCFjRHOAAwPsJrAA9AqnNJsvXrDHMUeL5iwM/N1SR
                                    fwFx2PGwo0u4NZe13n1juvjDtYS7BDUbzB9bAWdXdumtuGknT54UfwwHHRg0lQGtz7EIVBtqysGG
                                    psejYfbkdc/8zrF87viyc+mh+eTzWVM6TDG3Lw4b3zgzXnkPmkAtQ+tmq130ri9kyzZlBFhFMyAO
                                    AIkXzg/++JH12B9KDA3s9AlXFbr+/kTle6enyu86hBegaYP5YPVNgK4L7yB0c/ZCq4Sqhf357VTi
                                    7rvBxA2ZXr8H8fp7baysDD51LfMcxdz827s3vmLJLA9NU8BffXztGrBdu52HiHOPlJ2Y114BG6lZ
                                    ASD5+I30ww8uJP4HxcPT2z05UTgAX0+4V9+YLv7d1SHzMjSB6g/fXhVt1U5A7VvStE2YGMNeBdGb
                                    0NiQ1YcGAJLmYZkwxKoK9edJXI1EU6BrsLZ5wMT3bTen25nvLQE2ZLf6E+aDNXF4PXbgM1ey/zJh
                                    k8d6PaEoYYh7c1n7vVcPFf5+Pe4uQVBDiBPvL23tapT6GqhR0oGdsW2xZn347jAJmqaFU58jcSMa
                                    Lo3ZCljbEUKL0o6kuaf57xqwEdUCoq81nrKkoS9+OPRPh6ryz8IOegQ8zK3Lw8Zrrxwqfs9Q6DoE
                                    7S8RrCJphFi+fFvV3beTTYAr+nAVCHoVSP1zDGoPsRjdE+drU6/AJrRRUSzl4U3ltnkQtgrYsN2q
                                    Qc1eSn3pw6FfmM7Ffq9OU7kj4hBW/XC8+u0fHSi+5hKeg2iwtgspfiSAGpYumHGk0PDB5Hsewplo
                                    vYI1TAItkkH73ycClYZeG/dnK/emK8BGmAI+WHUASD42m5qZuZn8nxSK9+3UjbElVj49WfnbN6dL
                                    P2KI5yHopvIjM+Elre/LlHdKOnCPdQKQD5ioIEm3YG0bmRspK7EDeW1Qd0icIk7XEk7+xqBVsCQW
                                    zs8QKZO2BNpNAdvGFGhssiaK6uQLFwb+u5QlPbNTN8OSWOndqfLX395feoOjgE/V9xlGgfUjq1U7
                                    SRfLtGiehX29XQUH2kQzG2bHPSvxkfsXE89mTOk5maIjqLbqUor4miWzUwtp+5uvHCq+ZyjU3+CJ
                                    G+JGGU4396tbwIZNgRjUTir9M++P/OpUUf2NnfK32hIrvztV/vpb+0uv18FagPZgvS3IH3ZD2gAX
                                    IHiPIzdAXYJV3Gg3vBKfvZx98Oia/k80Fz+BIDpdlGK+Woh5/9/Lhwv/djZrrUP0ytjVvesY6drM
                                    K/DYbGrm2Jr+O4Sh9E5Muku48f5k5W/fnC6/xhHkIQhW0WYVndwfe7AC1LgDZmZmxM2O/9puAEBX
                                    YAVokyfy6SvZh+9Z0f9HzcOPdEoXxRzFYy6ZGS+pyeWU835FpW7UufjX0Um6jXS1ZGENGPLAPSvx
                                    X5YpGt+JCaeYO+dHq9/50YHSKwzxHDRDrD5Y/YTrLW0WPk7iz0EdaLybz3YhkeH3QxuxiWNrsd9V
                                    KL6ny4PIaUv6haeuZmb/wwOrfwZtwuAnT55Enc6tLWA7ZGGpABB74nr6cylLemonJpohoNcGzdde
                                    q2UQ+Zq1AEGwWtAEa1+mvvWL7PB8RJkDsQcWEj8Wc8mjWzoQB3W4Kv/88ZX4q+dGq1ehNZVz0wct
                                    0l8aYQ8FTvbYqn5gsqj+HOag7cSMLKbt0y8fLvy9LbENaDUD7oB1D0RQWAChqOaAIWcHDPkzvexb
                                    FIoPHtyIPQI1s0KGYIXuptLJwR8FVg0A9E8sJn4i5uKjOzEx+Zh347WDhW+WVboCm4P1jhmw+9Ji
                                    EoyWlTHFQwd7OhgHJW2S+6C2UisQ9BUjgM65CS2A3azc5aH55PHhivx52IFolimz/Dv7S99YSjmz
                                    0BoUEKNXLQnFd8C6a9KCg7iDB7bDzqNQPK55WIdma6pwpKyttLNhw2E/BQA0heLEPSv6lxSKJ7Y7
                                    CxRx9+KI8f2zY9Uz0ASrr1nFOHdPGUR3ZEclgAcPcwzbSz+UcI3tpkW7biYBLdkhz1UBAO0TC4kT
                                    GVP+1E7MwHLKef+t/aVXoQnUTjbrHbDujYT9uQgAcE73Ki7hpV4Pasps3VCov8nqHbDhEwPB0FYo
                                    Thxb078gUzS83VmoqHT5rf2lb9WTWTqZAeE2PXekD2Q55RQrqne9l/9liDvLKft8r9/dAGwX2vV4
                                    xty+G6tuCvxgdsC6BjWghjVrVATrjs26NxIVcKAOYc61Qet1D3Njqwcsq/TK2dHqWWjTV2EzCWvY
                                    tsnZh9djz++Edl1LumffnSq/CcFKgU418XfAuvciJs54AOC+N1X+YCnlvMa3QLbhEF46N1b95nrC
                                    zUOHHJBO0gmwjRTC48vxQ1lTemK7V21LrPj+ROV7VYVuQPt6+Duatb9ETBP0oF5TZkms/PLh/EvL
                                    KeftOglyR3EIL18Yrb70zv7yKQjeb3GfArAJaCWAyApYUbtqd63qz6gentzulc9n7HcujhgXoH3y
                                    deCJuwPWPRcRrH4urQO1e1ZdS7hLf3/3xp9/8kZ6dTqvPa55uIU6iWLuFDVv9uxY9VvvTVXeYoiH
                                    Cx/DyfawldBsS2HhZFEdGa7Kn4Jt+l2rCl0+PVl5pX7CUWAN2K13wLq38uKLL3IhJ8FP/vYrFkyo
                                    4UMqxDz8rbtzX91XUN8/tBE7PlCVplQPJxkCaih0YynlXL08bJwrxLxVCJbdi4WPXW+spU3CsOqx
                                    Vf1+zcWHtnPxHIDPZa23b2asWQhWt/Y908gdAYDm5sg3CQxo5phwhrg3m7XM2aw1izgoMsMyQ5x7
                                    mPsl6X7ho7/Jbuu63OxEfA0bVR+kKBTpk0X1aczRtnIGqipdPjNefROCjCxiacudTVb/in8vKETX
                                    bfnFjSYAqByB7BBGoKmV/b+J1FFi5t2W0kP9ZT4qhUw9uqYfSNnkge1e8HzGfmcxbc9DK29ASyOz
                                    O2DtWxHNAh+EFagt83kA2ACAdQBYA4BVYawBgJ8uKnJ4tWywATbnOPBLgAFaa93VAzntQdnDI9u5
                                    SlNmG+dHqu9AEKxt/a13ZO+lA2h80PrvRTPBhGZ9l8hgE6ZW8u97W9vV//4o5SWaBAFzIObi+FBV
                                    eXi7xMOrSefDuaw1B0FitjvBgT6UNgQe4fciUMVKXJ+RRkwVFCtmfe0cVlDiHirAxhMFXP9paGlJ
                                    dGgjti9u47u2MwEu4ZXLQ8bbHEXarX3P4/RxkTal41HvRRELGT2IbubRjugufGzxsy1DBG5Ywzaq
                                    Iffntftkioe2MxFFzZu9NmhdhaYZ8JEJve4mn9QuXUc7YgxxnxN27jdKxKG5KeskUaQbIBxL5DGI
                                    LJ+RoNWdJUsMaYNV+f7tmAMcAVtI26cNhRah1W697bRrG4BudoN4+P/6CcBt+AaiyDHEa2AQDSox
                                    2sUhqJmjOung0LHDvAlRNKg8bBJIACBPFNXhuEO2VVFgSSx3bcg8C9Ha9bYpc+lAzCa+tpMWjdRp
                                    Q7FH1yUScIjkGDIAkH0FLTFRVLKEIVJRqXEzYxXzumdBK29tVFVuVKhfTlpEu28psW+ipN4Tc/EE
                                    B+C2xFaWU8759ycqsyXNM6G1OQoAABMB29hwTRXUQwpFo9uZkKLmXV9M2UsQBOttY7t24LKK8kWG
                                    gbtpmfVeArdDV3UZABSJIfWTN9JHD+a05+M2eUJiaBIACEdQdQm7VtS8738wUf3++dHqKtTuK4ag
                                    m8qfkzDphvqpq5njR9Zjv6g75NOEoTFUC/9zDuCNlpXlo2uxH1wZMv/85cOF89DEDYI6aCUIatca
                                    5UxFuZswpPc6IRwBXU4551zCqxAkHut77doFW2DU+yjAiktl1Pu9Bm4U34Q6WJXTz10a+Onhqvyr
                                    EkUHIBSSlyk5HnPI57Km/Na+gvq/fuuu3NtQAxaCGrj860cgJFARhvQvnBt8bl9B+32ZoiPhc0E1
                                    U3RfypJ+5b6lxGMpS/qTr59Y/57w/RwAeHg5kFUPx1IWCR9wS+IQVprLWpegVbv2tc91Ew4pkc4y
                                    TB4cB4BEfYi/87laNWiyCoqVog2wd7uJ26FrjKrX05IWybxwYfDkaFn5Q4miQ9AmfwQBKJqLnzq6
                                    pv/PP3Zh4FP16xSLCkWzQgMA/fmLA5/en9f+KAKsLSJTdGw6r/23z17KPi4cWwYAIpoEEgDIwxU5
                                    G3PJtkjdqgpdXE46yxDNgt2X5sAmGxDxBkiKwWKZFW9UL9ADss0niceHEYM4ACCOoUoJWnc1NG+m
                                    yWxxVFq24ti3yXwnum//BTYUm5FI7PA1itpVAwD92csDPzFYlX4Nc+iqnapM0cFDG7H/8oGFxPLp
                                    ycpl4dg+zb0CANqxVX3fgbz22xJDXdcCyhRNH96I/ealgnn9ZsZa8udJNAkIAEijZWVCpmhb7qyc
                                    7l0zFFqBYH+BvuXA2mQD0iA9G1hwxwYW3CfUKvs0ceEEYnwU1ehFw94UxhGYqTW6NnTDOWfH8Q/y
                                    E/JrG/vkRQjysvrzAtA0EW71vEQWmB5d0/eNlZRfwRwlt3Iw1cMnji/Hf+70ZOVPIZh3gKH+IJxY
                                    jj+nuvi+rZ5ozCUPf2Ix8ambGeul+lx5PmAbN2ewKu8nvHf7lSLurCadqxDUri05j/0im21AAEBN
                                    rXnDo1edH9cq7GeIx+8BDuomh8WIQxxRHscUDsgOfT5WYpcG592vrB5Uvl4Yk1bq8+NvVnytxOrn
                                    tBugDZgDd63qj6sUH+vlWGlL+vTRNf0rl4eN69AMJBAAUBM2SWVN6UnUQwMYxEEbqEpPSBR926v1
                                    wnV8k6ChUZI2mUS8d/+rS3h5LeEsQpBWMZK4ba+lDVjFngGxyXP2g5ll97dkhz/RBVCjhYNMPH5C
                                    L9JjU2etzybXpf99/rj2FsdAoLlh8aVn80C0g8P/24aQuGFnZkzpgV6bVcsUT04V1LsuDxuL0Ix6
                                    EaixxAwoFE/1eo80Dx8aNOTsStKpQt2GbXgJFA+ruku2VVlgyWxtPe6uQ9CP1nfmwCZgjWGPJ6bf
                                    t15IbtDfxZRP78iXcpAlhz+ZXXQPKib/Nzce0F6iMmpH08M2A22njVqHQEdLZYnm4ZjEUM9JToiD
                                    otWSpFRorhj+Jj6JOfS8YmOOdIU2STcC0Ye0RRLqNrOzKipdKqu0AkGnb19pVkGi0ipjiEHiwGnr
                                    p1Lr3j/fMbAKgilMJHLeHxx81/wlTHkSap6Exk5YOK9I4J08eRJ1oHAPjyjfccD8qWvW3pv/IeAe
                                    5gDNzWljxa4qlFIEdq+HdjEvl1TPNzFw4MQzppyRKcpu417wsuotQbR27Rt31mZdHPefsZ5PbHi/
                                    hxgM3qpzQAwy8QL97en3rZ+AmgvMd32F6XsaoBWAGgW8MIU7gdYMqigfM7Ylxm2JFXu9Foa4ndfd
                                    PDQftsb3rSdco6rQhV6PbSh0qax5vtZGAfdNwiZpwlDPTTUY4m4x5i1Dq3YNVEXupTmwSWM8feSa
                                    cyK15v0OZrDtkvbNBDEYSG7Q3xq/ZD8IIX8jhAISbVxSUb1oxeHTAYkPQYsJwhDAasK5yFEjBLol
                                    cQgvrCbcdeFXjXvtEOYup5wPejk2Q9xZSjlnGWqu0IEnNOGQAcxRbxsLAPAwWIWYtw6tjYe7rjvf
                                    JQnfdAUAYorBsoPz7peJy3eEmbEbwR6fzi56vxorsSEIatmo5TzsyRAbyvnBDHFoEAxaRCWzcACg
                                    l0bMs4bcmyYsxNzzC2l7A4KraaNX7pnxyrsl1bu61eOWNHr5w/HKGRBq/gK5BHGbDCLeuy1DMTfK
                                    Ki1B60ara7KFWyltggMNspDRq84Tisk+u9vnJVvsqdGr9mduPBh7CYIPuz9v/oMe1UxOHqzK+onl
                                    +P7hinJEoShNMTerCl2+NmhduTxsbHiYiyaa2Me2QY5xM2OtXh+0vnt8Wf+HmKOuvQW2xDbOjRk/
                                    pLWCQzEZBkOdw2Al6ayfmah89ZG51K+rHu7K5LQlljszUfnaetzdACElNRA4UD2cRtso53YJq1QV
                                    WoVWZuV+1K4Bc0A1WCaZo19EDHqmkez5hDho8QL9yViJvWqmsNh2NJzwLGpWRXeI/szVzMNTBfUX
                                    NQ8/ghkaRgASrwUujOm8du3B+cTX3puqfO38aHU5dFyAYImL9aMDxVeSNtm3L699BnehuDzMqxdH
                                    jK9+OFa5AMEQvG9z4vrvjVNT5fcUiv/qvsXET8dc3NHcMmW29v5E5a/fnSyfhmDfYC+QXigz1FVI
                                    rp24hJctmZnQ2jOr36Rls5VdcO+RLPbAXp2Q5PATAwvu/QspNQfBZCExgdpPUtEGq3L6cxcHfmmo
                                    Kp8kIZcUAiCIQ1rx8IPDFeXeT13NPD1gSP/6tYPFc8KxfSXi1n9nVBWa/+7R/H988nraOpjTnlE8
                                    nGpzuryq0JXzo8Y335wu/rBeURLuno6Ec1Y4AuVH08XXNnQ3f/9i4rNDVfkuheKkT7zBEVCbsPJ6
                                    3L34wWTlu5eGjfMQ0W1c1LBYpr2T1AIAuJhX3drys1mL912XNuZAA7CJPH0UM9iOh2Rbghgk9AJ9
                                    DADegKZW8culOQR4elHiuUsDvzxcUf7JZnF/BCDHXPyZ+5YSCVNm//zdqfLl+hz4oPXJMQwAUEqa
                                    t/LtY7mvHlvTL9+1pj82YMgHFA+lEEeYYe4aMt1YSToXz48ab81lrWtQq4YV+dFsaOavcmGeCUeA
                                    Lo4YH14fsOaniuq+sZKyL+6QDABARaX5pZQ9t5hy5h2JFaCVLzioYRWKZWkbKYUAAB7hBsU8KqrV
                                    VZudXRBxA9PYYcsWTygmv3cPzwsAABSLHdcqLGMlcBVqpooPKgCh5dRT1zKPDVfkX+82SQUAQHPx
                                    I/cvJn790rDxxxWVFqCVzcXfgCKPcH5urHr6wqhxJWNK2bRF0hLFsiUxK6+7uYpKi1Crgi5Dk80l
                                    TD8E0EwzFKsKqCMx+9qgWbo2aF6GZh4GhSarTBWaxBuBVleNEhnCgGzHQwAA4BJWhdb8z34zCcQo
                                    DwEAJVaiQ8Tl2+YO265gDyZiJTpiJfAqNF1R/iZJBgA17pDU/rz2s71EppI2ee7hm6m/+8GR/OsQ
                                    NNsc4WONJsoMcSOnu4Wc7vorMYPaQ2RBk5egXRt7/1hiMrtfYWtCMx1RBKzIFCOOBodFA7CYI7Kd
                                    HAIAAIoCTB7hHW4/SFTAQFJNNogYT23ryDsgmPGEavBhCPpPfS2lAIB2eD12IO6QmV6OTxjKjpWU
                                    JwHgXQhukEQl44PKgiCo/CJEn1vAB60/wptFgODq6nskfA4D0X3n/90/tg1N8yJAuNIALOKAtgtY
                                    jrhf2xP2DPSTlwAglMBMHJ5CvSa27KRwUIjDM9D0mfoa1ne/KcMV+RBhqOcIXNwh9yRtkiir1OfH
                                    8kHqa9uG1wCCkTeAIKB9YPmvUeVP4hABa0HQLwzC392I0Ti/Rpk35ghvx6VVv5pGz1DhAvdcNil7
                                    IZiBBnx7174TggAQZtzPrxUjUwLfGR7Yjq+ccEjHXBIvqzSs3USb1gekGCEDCPIQeMJno4JE4nHD
                                    DIhO6PrCoBaPF9jANy6c7yy2wtq13yQQOaoXCu3wFGxdOADnGPk76/AgACB5mG/rXBkC6mLmHy+w
                                    Gaq/90His7n43+9/TtTIYUCFzUAe+g7/Mzh03MbpQTBS1uLHb/AgcQTA0fZuGeZou+1wdlMabi5P
                                    RhYH8HalqKrzGVFPbuTHRo687m1QxC2pxz5ZhkxXShp1oXX37gPDj4BhaFYOtOTrQhBUm22wRY3r
                                    /+z/TxRLTGTA6cUXX+QNhHMEnDefsp6km+hIHwp3NVzhGFl7fiII2U4MF6GD3/r6gLlgymy+t+OD
                                    t5p0z1HMO93nsEkXtkNFUEX9TydBWxwgvMLJkyebGpEizjji2wIs4UiG4NPYz9K4EWYSF6mM8nt9
                                    QlSCgpXABWgFSSOZZCPuluYz1o96yX6qKHT23Gj1A4iORLZLsGk3ojoYhu99VIXuZtllMgTTIwPH
                                    bmhYhjnbTqItAIBMG6HdThex6xIRrAiAwdFxxdXQ7F6fp6vheStJCtBqF4p2pfPOvvJrG7p7ZkvH
                                    JrxycaT6zcW0vQZdkl5AMwtMHFr9b34qZCfwBiobQCiTjzskefeqPvHEjfSxJ26kjx1di41JDCUg
                                    WBbvA7xxbH8J5w7h1CXc3M6EyxTphCFCMe8LoLaRlh0pR+BWM+ScXqDP9NKhekdOCgE1U/gcIwGy
                                    PHHn3fB/bsTd9dcOFf7qU1ezsawh3QWbzLVLePXSsPH1Nw6U3oRWB79vtza4KQBAniipyU8sJE4M
                                    GPL9qocmoLbhWy+r9MLlYeP9D8erKxD05YrhWP+Y4VRIZcCQE09dSz82XFF+TPXQvZijLAAgivmK
                                    JbNTC2n77149WDxjKNQQju8Lk4Qv4PVIVc8iUZxQPSwbCo2yQ3zH815K1DLrAYBbHJMuZJfcJdni
                                    +/fixKiM1gpj0jkIJr+LSzcGIXR5fcC6Zkm5f/vJ2dTnx4vKgwrFLeXZDIFX1rz5c6PVb7+zr/w6
                                    xTzcX8Df9DTAShjSnr2cnTmQ035Vc/HjmKM0CCtx1pTN8bJy8cRy/N+/drD4jfmMnQcIbBR9s9IH
                                    bKMb0X1LialH5pK/mbClL2IOafFcJYb2qx5+OGGTfzBaVv7ytYPF/+faoLlWP3bzc+JNdGrUQj2L
                                    zFBSd7AWAmy/adqwT9AFAKeaIavVLHk7s+RNwTb90b2IkSHvloekBQhGjHzA+uJrQAkAyFLKvvH1
                                    4+t/cXg99s6BXOx41pSmFIriFIFrKDS3nHKuXBo2zq7H3UVoNqAWKdtFwCqEIf2LZ4e+MFlQf19i
                                    KLLSFXGIKR5+YKys3v38xYH7Xz1U/NPLw8YSBO+3SFWkAkDsnpX4vk/eSP1R3CHPQ3tMIMLQ2EBV
                                    /q1PX8lMMMT/1Y0Ba1n8QEDD2hIr8VrFRE83TKYombKl+HrC3cwY32sJd0WxAcBa36+8Hs/TR3Zb
                                    y3oqWl7fJ78CQcLnMHOf758V7UXuEu5dGDWMC6PGRZkiTaFYoZgzh3CLIW5BsIOLn0wiZlT5DC36
                                    s5ezT00W1D+QGBrf7JwRBy1tSb/wxPU0zenu/7IRd3P+nyAYndN0h6QemUuejDvkOegCCwhATlrS
                                    Tz15PbOxnFr9N5bEGqui7yVgAMAqKs3Xw6s9CWEonrJIBtoXvu0ah1RY6huvqKhLI5mjMkAW8uPy
                                    dziGXXNxcQRuYVT6XmlEugGtMXnfHIhqhlGCZjOMNQBYcwlfqip03pLYAkN8pf77dag1xfCzqvzv
                                    8DW3BPV+bNM57de6AasgJG1JP/34jfSz0CzJEXf7KgDEHp1LPZy2pJ+ALShCBCANGNLPfvJG+hFo
                                    VhVLEgi70bLqFSgGG9PeCBUIR1rWkEchulqzn+xY0Yb1NawJANWVw8obWoUdTK17z+xCuJZXs+Tt
                                    lSPqK9DMTAqT50Ux5oghUhuau3axIYbvVfATSURiPv+YYnvWh2MufnCrF4A5xMfKypcGDPn1nO76
                                    xw1QFU0WlWcJQwNbPTZhaGhfQf1xzNFphrgDdeaXxo65rNIyRdyUYWv8Sr4gDlLKkiagtUKzn0wC
                                    ceMlJnoYAKBRGeUX71a/Ts7wdLxAH7yV526myNmFe9SXXBVtQGuT6LCvNMqJ7wNWZEX0zzfcwSXs
                                    GRC9AtpQVX4Y894qTjQX33Mgpx3M6W4ZmqsBAQBlpKIM6A7ZMq+WL7pD7p8oKsPzGdsAANnPcWQA
                                    wIoxr+Rsoz4dACDhkEnCUDv/3J6K4I8V3Vq+FvKX2rKVwEvzJ7S/rmbJu900/u1BuJEmH8yfUP/S
                                    TJF5aPbeDbcyFcEaNg3C9mkRatn/4vDNgEASNDT9rxgAJM3DMdXDPTNWYo6SaUuahGY6ov8AKSmL
                                    DEjbyC6TGBoaMGQ/5ZL4gKUAQCsqNSyZrfd6cAAA3cFTQ1U5BdFads9BK0iUbdjIojdTeH7ufu0v
                                    i6PS9xlB2/JPB76UgF0akV6Zu1/799UMmYWaLSr2X/U3RO1KjMKa0weu32VSTKoWm/iFW6Q2ggWY
                                    IRVx6LnbJaqR3+kQzOOVAED2MN9WyioAcIZ4I7ombrqoh7lbUejSdo6uUDw8VlbGIBilaEcKsesS
                                    2nyFczQNaPZDzds6Xpy7X3tp+ajyF1YCX+uVaAKgXmQXx7Mrh9W/mr1f+4qVwDehtmkKl5iI6Xrt
                                    bNdw7qiY9OwPH6SdyKQRAGCXMOQR3vNGkyHuGTKzIKikMADgYsyzHcJ7XrUNhc7fzNr5+vGQv+lq
                                    NFgoat4yR0B7TeaWGIqPlJWDAPAetN987fXGCyDoLUDQ5OoXz5EzgujqQeXN4oh0fWDBvT+15j2g
                                    GnwSezwGm68YnBFkOTpaLA1JH+Sm5NNWAq9As8DO942GzYG2vXeFDtviNQAEgzSdcpLDGXXIJZyV
                                    VHpzsNpbkM+U2cLsgLkAEatoPuaZxZh3JWmTE73cow3dPV/UvMbDJHoJKAB46wl30cPckGnvG6/B
                                    qnw35qAw1MoT1Q8Saq0uaqtwGl1jY2bHsbV0TN1Ym1beS+ToVCLvHdDKbEJyeJZ4XEeslqnGMXiM
                                    INNVUcFO4MVKlsxWBqU5V0UFCC7Zol9U1K4d+5f5P588ebJxU/2pb3O57f4eSLKeHTDPThXVokxR
                                    GrYmfDXhvLeUcgoQNGMauLoyZLw9UlaeUSjKbOXAlsTWL40Yp8Q5ETUsBQBvJems2BLbkCnpCbAA
                                    AEmbHB0pKwPLtYsImwV9oWHroPV/9IEpSnhTZgGA6amoWhiXNgrj0gXEQJVcrhGHxzCtJcNzgjxP
                                    RpanIJPjRk2SX/8k2prtbMyG3dqpwriD1m0nvt0aZRJ550eNK8fW9HcmiuqzW5lHQ6GLZ8eqb0DQ
                                    lPG9BB4AuB+OVy9O57WXD+RiX+h25WYIvLms9f2Lw8aseOwWk6AQ80pVhS4lbHKgVzBoHh6fzmsH
                                    llPOTWglIvNZpm8pn383IoDW3zWLUaV2u/IGXxXHoLgqkly1QarnH0vcGPmgNUOjXTuoLVcadzOP
                                    wr4h0utgS8x4c7r0jc9eyu5PW1JX3GIu4eXzo8bXrg6ZsxC0mf1rsQHA9jA3Xj5U+Kbi4YHxkvo4
                                    3gS0DIG3kLZefeVQ4dscNapmHQDwyMzMjO9wlgFAZQi0qYI2NVSV74Uel3HMkcIRrJwfNU5D0E0T
                                    qPk6depUL4ffUZmZmQkTo/mvLQkywg0RtaaoOSvQuuT7I7x7j+quc8vaQZ06dQpmZmYAWvNeGzv6
                                    YsxzKxpdGjTk0ZhHBjqF6E2ZrZ8dq/7Na4eKL3MUuXEUXWfEkhlbyNizukN4wiEjEkMaRODLklj+
                                    6pD53R8czb9U1ugqNG18AwBsMjMz4zucGzmQCUdKTBXUh3EtIbsnwRzhuaz1mqmwKrTpL9sPgK3f
                                    yDBow9n1YtGdD1hRaxoQveRHuZjCDaJ3jZ08dJ1in7HGCpjTPWM+Y18hDKoKxRrhSEEAiCPgFINr
                                    yiy3mHbefWu69DenJ8vvcAQFaLrmRA6BcK4tsiXmXRuy5jbi7lWGeJkjcCnmri2xUkmjCzcz9ql3
                                    9pe+8c7+8o9siW1AMGHHhHqkK7yEuYtpe96S2VrCJj2zT8dcfODIeuzoRtxdgaZ/TjQLbnmbn24l
                                    YiMjAqhdJak4wvVR/v/580ojXiPZcXZhPqIqWE3hulBOd/l3j+W/mbKkN0fL8ljKljKYIWLKtLqW
                                    cFfW4+4qxdx3/xWh6eUQo3S+vRxwazLE6bVB07o2aF5XPRzXXRzjANyUmWVLzAemnysRACvUmV/E
                                    KkgPAJy1uJMrad7sdgArMZSczmuffHO69BYE69s96KPNlyiCTStuUMKmQUAjQWtQJKq8JVwFuhdA
                                    7eQdsYRr8fFglzTPKGneCjTp5H2yC381EU0g0S3HhGOFPS/+92m2xIq2xMLMLxYEV6kWqqIWDcsR
                                    2CsJ5+JYSX1iO4WFWUN++EBOG78xYFWgqWX7uedB+KaGgSvaf53SJ9vF/sO/a3znLl+mqGXDFbQi
                                    nZAGzfsG0AScb8P7CTvhkHK7KllRo4sky+L3igGQcBd4RmZmZsRW4426GwRADuZiM9I2KDjrpcg3
                                    rg6Zl6GVxYMDAMzMzPSFLSvKqVOnwrZt2FEfpT3DdfpRNfstQN3ta4+w2cPX5Z+3aKv7wPTtcv81
                                    CqybMb+I5lWYR6sKrQ9BYP9DZmZmImnIqwqFwxuxuxJO722QEABRKJZnB+wfWTIzoI37pt8A60sE
                                    cAGiwduNRm3IXgA1fF11j0H4egIuTmgN+fpACvNpRXa6jDh+wPSMOL64KY1sqC1FnKgDALZLuLmc
                                    dM6NVJSZ7XBuJRxy4r6l+AMvHy5sgGA8Cxe4G53/tiWbOOm7Ou8+vT7/nPwVL4yDcFg9bNOHyTQA
                                    WjvVAAQ9Lv7SH87i62Tz+38L1nRBSF1fGzTPHVvTc5tRfHcSwlBiOq89F3Pxm2ZNy/pPpa/Zt8WF
                                    sNvSp8Dr+ToiPCM+WNrlM0fa4dC5mkC0aUW2l07HjdyYhqMzAWa6m1l7Mae7F7Y7OWlTevSh+eSD
                                    0L6jCdrLDK6PswjZa2HtJi7b4hCXaYBmsWG4q43IXRCVXC7as2L9WmRvN/8Ba8cc5wCAxRA3Zwes
                                    9yjm2yLYkBhKH16PfT7ukBS0tvbZc9bAj7tEJLaHl/yWoA80q20btVsAoEsMJYaqciZlSWkItl/y
                                    FZWYCBVlAojaFV588cVAToWv2QKtKwEgBQBZABgeMOQDXzoz9M/SlnRoO5NCMS9/MF75lz88Uvgu
                                    NHnxRUczA9jbpnN3pCYR9KT+a5gcQwYARfWw+uhc6vC+vPqE7pITdf5a1yFsvhjz3vlwrPrWpRFj
                                    HYLEG1ElQA1phwNS3wGHG1Y0XFymzNBoRckOVZV70DZSBDFHatwlqcW081ZVpeFOMw1/3czMDOpX
                                    r8HHRSK8I2JfiIBWPbIeG3vhwuCvTee0/zppS19UKL5fZuiwzNBRzcMzKVt6bn9ee2isrOZnB6wV
                                    inl4w7olV1+Y9zNsx1oAYF0YNU6ZMlvb7kQkbOmhh28mPwvNsl0xAtZvJTR3JCjhzjuxu1f1fc9c
                                    yf7RQFX+XYmhaYBWbxLiENM8/OTBnPYnXzg3+NOkxp8lBiS2VPPXDrBiSp05l7HmV5POB9u+Yg7K
                                    voL2M8eX44ehtYP1nQ1Yf0q4J4QCAFrakjKPzaZ/K2mTn0RddAInDI1OFNV/9tyl7Keg2Ve3bSPo
                                    doJDBnc4KcIGAJMjMC6OGG9tp+OzL5qLDz+wkPh5zcNJ6NAH9Q5o+0rC2lV//Eb66bRJvgRb2DRL
                                    DI1N57Vf21dQR6F9X91NT0SUsD+2kfd5Zci4sppwt61lAQANGvLnnr6aeQaCO8g7pkEfSZvu4RIA
                                    qDEXJ8ZKyucx33oZleaSh+5dSjwOzfu+pRIqDNC2kjRQRlzLLq++5kistN3JIAwlD23Evlw3Dfzl
                                    wT/5xgXc0bJ7LpEcr5NFdSzm4uO9HBBz0Aar8qPQQVF1uu9RGjaKFcUEAOPysHF5ZWe0LMRcfPfM
                                    fPLLaUvKwh17tp+lxYZNW9IwYVsrKBRFoWgq7pAEtG68ADbRtJ0AG6llz45XXrYklt+Jmcga8vOf
                                    uZz9EuYN5uUo0N6xZ/dewv5XFbYX8JHqxNFRFAAdpfGlbWh8fO4mX8tWLw4blxcy9luwA7msmIM2
                                    WVS//MzVzJNQMw1iEFwmGpGwO6DdE4migCdFzTMp5kavBzUUtlJRqdj+aMtuLVGikmH8+iWDI6ic
                                    nqy8UlHpcjdfsJnIFA0fW9V/84GFxD3Q3IT5Lo/AxdwBbX/IStIpmjJb7OV/GQJnOen0nJ8SAOwm
                                    WrZRZHczY81dGzRfYdug7hEl5uJ7Zm6m/vGR9dh+AIjDHXdXv4gYhWoosrJKzcW0/U4v1E2mTBcv
                                    DRsXoEMFRidpZ4e007KNqtBTU+XXN+LuxZ2amaRNnnjyevq3x0vKKES7u+6Adu+kJbD03mT5rULM
                                    O7+VgzDE3RsD1g/qnWzEzKyuAdsSSovIsA/YL/6wZQYIwJ4sqScI217bev97NJccGq2oseWUfdZQ
                                    mAsdnr47OQe3VoQck7CXQAIAxVAYuIQXRivKEYXiTTuhMwTefMZ++YdHCl9zJJ6HVh6DrigAIisJ
                                    IpIeAFrr2KW1hFsdKSuprCEf2k5ijC8IAOsuuWu0rMjzGfucJd8B7V5JKClKLKNqNIhbS7gVQ6HL
                                    WVMe0jySbUe84UisdG3Q/O4PjhS+WifH8IlF/IT+QAVKp4y9SMC2KVQTq0UJABCOgBR0rzBVVA/G
                                    XLJlSvAoQQBEd8nd4yVVXkw7F0yZ+VWYYdAiuJPd1ZWcPHkSbXWeQkwx/qvIGIMBAK/H3fJ8xr5C
                                    Mc9JHCGokW5Qj3CzqtC1pbT9/ql9la+/NV16tc497LPEiOmlYvFixxq/zZIWogIJEtSeDAUA1NWE
                                    s/j+ZOVvn7ie/rLqbb40dCOYgzZaUf7hC+cH5O8ey/+fK0lnFVrdK35pTYPU7U4ubU3a2fjh33c5
                                    X52INzAAQE536SuHCjnVw29mTCmreVhjiLOSRktllRYZ4j5RtEjeHAXWTc+nbXFhBy3rvzaWiLWE
                                    Wxk05NiAIR/utWVSWBCApLvknomSminEvIvFmBeuerhjIoTE16T1H9txKPh/23S+QseKksDGnGJu
                                    VVVaKMa8jZJG12yJ5TlqMLj4YA33cgho180eoo7VsKFyYF9algaOAK8l3I2JkjqWsMnYTt0ABEBi
                                    Lrl7qqhOORK/tJZwq7DJU/hxBG0EUHGbEXbQo068EG2Uli+R1dYQpLAPk+K1A2vXJf+blm9HPGWR
                                    FQq2xHhZpfmponZEjWgj2asgAKx6+NB4WblLpXj2Zq1VZOgjgVeYmZn52AA3lFUV3hz5G6QwE3og
                                    O6oL0Iq/6kSOIRLkhemG2pJjwBbomjYFbESphCiBp7kY8yzCwRwrKccI3xFXV+N7ZIonhyvyQyMV
                                    pTSXtRdCpRbi+TTef5SBK2jVKKCKXbnlE8vxzCNzqX2LacdwCY/UmJ1A24Epph3xhg9ckRyjIxdu
                                    t/uPrggyOpgG/mtj0pZTbjFpEzJkyIcwR9vtIBI8WY6yGUt6ZDqvxcoqnS3GPAcgMg4d+HlmZmbL
                                    u+R+lQ52qghUv8RafeJ6+uAjN1N/OFSVfz1tSR9eHjZz0Jp/2pE2ahNK0qiSbRG4IjuMD+wAOcZW
                                    NstdA6qNaQDCewQ1exYtpZy1oaqczFjy/p3wz4qCOdLiDnlgX1E7qjtkaSFt5zmK3lSE39/OwG1j
                                    p4pLvwjUWNwhyRcuDH72rlX9v9c8/DzmaDzukvGqwt5eT7j+BrbFXbgF0Pr/74NPpCEKjzDvWM+s
                                    jV0DdhMDPOBg9giHlaSzOlZWR5I7uAkTvgwrFE8PV5XH9hU0XNboYknzfBY+3PxYNIhvJ+B22FA1
                                    HPhQr7Oqj/g9K/H9z17O/udjJeV3ZYYP+dcuMTQ9YEjo8rD5gUt4GKyN13ZzI1TTArTmGITNhDCV
                                    USQZ3lbnY8var27ki0+4z/ahA0ASADJQ4zQYGC+ph567lP1PBqtyV5z5vQhH4FQV+sa1QfP/fv1g
                                    8W2rRoorGvbtCITFSe8rH24XvAAt3AAAoGZMKf3k9fQz+wralzUX3w8RCokhXr4xYP3xV+9d/yoE
                                    o01h9sGOcxLh6w2fc/h/d2SuewWs/7/+cuQ/4XEIgfZATjv26SvZX8qYUs/kyN0IxXy9EPO+eX60
                                    +tfvTVYuU8zDrdw3690akN0EcIebH47lh/sSKACgyhTFHptN33d0PfZLSYs8u1mtlUPYjXf3lf+b
                                    N6ZL70EraLdMatJtMtJOzGlP9qVwgi216hAB2qNrseNPX8v8Yr1x8q0U7hB+Ixd3/+bsWPWbZ8Yr
                                    s9Bq9IeBK9LvtGheUXYKxG1ucNQeoSV/AwStShjSHppPHr1rVf9SxpR+QmKoa/OrrNJXv3Ms9y9m
                                    B6w5CDJoBzKo+mnlESdnyyKYBoGKSqhp2gQEQZu9a1W/94nr6Z9JW9LUrb4oDkAdiV3N697Xz49W
                                    /+7DsepsnR9MNBNE10q73Mwt02p2KZ2W/E1dVZqLY59YTBw9sq5/PmNKL8gU7Yct3ksOQFeTzp+/
                                    dO/6/2YodANCvQSEeekrc6lnt1MbV1c7DYU24m65FKPLIxVlIubizK28KASAJYYG4zZ5dLKoPn1s
                                    TR9PWZKZ113DkbhoykRFgsSIULg4rh24uh3hY4c1aIsWhaYS0AercvaTc+mZJ26k/7ODudhvJ23y
                                    GcJRBnpQPAgAx1x8OG1JK5eHzWsQzRbeuNf9Itvyk24StmsBb173qnndWxyuKCN6LbvrliZiIwBM
                                    OMrqLnlopKJ85tiafnxfQVMRBzOvex5HLZEgEcR+6XFUaDOqIUcnkOLQcaM0Z6NlOzRBGlMoSpxY
                                    Thx8/Eb6+Zn55G9MFtVfizvkMcJRervzhwEpSYccwhydXcjYaxBt4/cVrf+2ANvBNye+D2jbYswz
                                    VpLOzawpp5O2NLJTyTKbCMIcxVUPH8tY8qf3F7Sn717VD08WVU1i2C3FKKO1NulSaEQBWgQchmht
                                    TSJG+NgiQAMg1VycuHtV3//oXPrpR2fTv3JkXf+NAVP+B6qHj2KOumnK3LUQhjIZUx7N6+6pQsyr
                                    QhvQ9gtgd+TCIzZhYoMPcSOWhppdm05Z0tjT19KfO7QRe5wwpOzFxTMEhkfYnCmzMyXNO72cdM7e
                                    zNgLyymn5BAW9ix0a+uG57aTxiVQ7wMxVlJS03lt30hZOZGyyEMxF98nMzyFOGi3eh44AF1LOH/2
                                    0n3rf1pt2rPhSoC+sGV37EntErQJqIE2DQBp1cODn7yReur4SvyzO5VL26twAI9hnncJn7cJu2oo
                                    9GJRo9cKMW95LeGsb8TdSlmlDsVc7AfQLWAbtmrGlNQBQ44PV+TBAUOeTFrkQNwld6kuPiozNIUZ
                                    yqAuyNV2Whji5dms/ccv3bf2H6Dp6gqk/32kAAvQFrSi98AHbao+MohD+t7lxH0P30z+eNq89R6E
                                    LQhnCEyGeIlivuZhvuYRvuYQvuYSlnMJLzmEVVzCDYq4yxFQhoAjDoA5EMyRrFCkSxTrCkVpheJB
                                    maIhmaJRiaFhwtAg5iiDOezoEr8dMWX2xrfuzv3u9QFzHmpaNuDm6gfA7uiTLDRlYxF/jkqYYByB
                                    d2a88l5Od3NPXE+/MF5STmCOdl3DRAjCHHTMkS4xNBZKPeMcgAICjwN4tR+BcQA/FQoDIIwACHCQ
                                    6hqzL0DZRnhVoWcujhj/bj5tGRBqt9lPsqPZVACBjVg41gzQ6qxvGPhljRqzA9Z1mWI7bUkjcq3b
                                    c78KQgAYAUgIQEGAVARIw4A0VBtq7fcgo2Azir4Tirm5lHK+/8Mjhf/rg4nKeYbbh2r7YeO144D1
                                    LywEWoDoDoIBbesS7s4OWAsVjS6nLTkTc0lml7wIH0upqHTxg4nK3/zwSOFv602sxYjXlooDd0tu
                                    CWD9i9ukRWR0xxIEbD3uFm5mrWsKxV7Slob6XNveduJhbs1n7HdfPlz8j2fHqx94hBegWRwYmVcA
                                    8BEHrH+Bm4A23F6nMSyZWTcGrZvFmDefsImuuyS70wnhHzfhCFhB926+N1X+u1cPFb+X091FqJVd
                                    h0uvw4AFgI8BYP2LbJOtLtqyUQ2GKUdAc3G3cH3QusowFBIOSasUJ3Y6KfzjIIZCc1eGzddfPlz4
                                    xpUh8wLFPA9NsJYg2OxYrLnqqySYXdFYocRfUdqbBkIuq0u4M5+xl29m7CuEIzvukIxMcewOcDcX
                                    W2KVmxn79GsHi994b6r8tqGwNaiBtABNwPodusVq1gDnVT9oV4BdAqwvoWz1MFNiWNN6ECq5MBVm
                                    Xh8wZ1eSznWJI1d3cUqiWLsD3FZxCDMWM/aHb02X/v6t6dJrubi3AAgKAI3hcwWES69bbNd+0a4A
                                    e3SjIxo+RJV8+O0g/SiZPxIAEMccJSaL6uS9S/GZqYJ6QndJFvE7HgVbYpWVpHP5wohx6sqwcdUh
                                    vARNjoB2ZdeiGyuQS9BPYAXYQ80UAVox7S+cXicCVwcBwJij+FhZGb97Rb93f167N2WR0T4JPOya
                                    cATMlGlhKeVcvDBSPX1jwJp1CffZAcMg9bVpVEVGIF+i38AK0AdLaQdt6wPXz2byi+xi0Gy6Gxfe
                                    61lDGjy2pt81ndOODxryfsXD8Y+yueBhbpc0b3kua5+7NGycX07ZSww1QOmDVfy5HVDbds/uN+mL
                                    m9lG24rA9VPx/DJmH7gieP0eCTHFw4mpojp5eD1293hJOZq0pWGZfjR8uRRxz1BYfjXpXLuRtS7c
                                    GDRvlFVagCbjis+UbgjvfZB2VZzZr2AF6BPA+tJG20YBV8wfFcHrA9j/nZa0SXqqoE3tz6uHR8vK
                                    wYRNhm43D4OHuWMqrLCuu3PzGevqXNa6sRF3NxgKsKtEDR+oDrQCNSrrrK/BCtCHNy0EWoBNCvEg
                                    qHVFAGuhoSZskhovqaMTJWX/SFnZl7akMc3FScKQ0k8Apoh7jsSNikrX1+POzaWUM7eQthfyuptn
                                    KLCsizRA4ntRm26mUfteq4rSNzcpLB3MhHCpc1jrigAWgSz+TZEY0rKGlB2uKMPDFXls0JDHkrY0
                                    pLk4JVOkEYbk3QAxQ5x6hNu2xCtVhebzMXd5LeEurSaclY24mzNlVoVW6h9LeLWglRYoTA102wPV
                                    l74FrC9dADdK6/r2bhjE4u8U4bMy5qDEHRJPWVIqY0qZrCEPpmyS1R2S1lwcVyiKyxSrmIOEOSKY
                                    A0EckcYEcmEuUQ0MHDhnqBaxo3VguoSbNmGGodBiRaWFkublc7qXy8e8QkX1Ki7hfqa/z1HlDzti
                                    OBAsY/dHuJy9BagAtx9YfRD0vUQwoURtznyt69u6IoAVCGphJeJvsvB/jZouwpAsM6TEXKzGHBJT
                                    KVYVD6mqh1XFwyrhQAhHBDNEEABiiDOOgFHEPYdwx5GY4xBu2xKzDYWalsQsW2KOh7lTbxskEqmF
                                    CdUcCJKrhX8nAjRKm35kgCre/NtGugBuVC1/GMDhoYT+FlWIGC48jKqY9c+ppa8VtIafxSGCze1y
                                    dCJaa9v/6nYGqi+3FWB96YJ7Kqx5w5WrYnBCajNEwIePFeYY6BawUZlpIvBETdtuRAG0I/3SRwGo
                                    vtyWgBVlE627GYDblWMT6FzGvRUNG5W0HplSCa2ADIMzrEWjlvyPJFB9+f8BKsIESS5DCecAAAAl
                                    dEVYdGRhdGU6Y3JlYXRlADIwMjAtMTItMTJUMTk6MzQ6NDQrMDA6MDDn37JpAAAAJXRFWHRkYXRl
                                    Om1vZGlmeQAyMDIwLTEyLTEyVDE5OjM0OjQ0KzAwOjAwloIK1QAAAABJRU5ErkJggg==" />
                                </svg>
                            </g>

                            {/* Access */}
                            <g  transform="translate(137.32 212.91)"
                                className={activeExampleIndex <= 1 ? " " : "inactive access"}
                            >
                                {/*<path className='spacer' d="M140.24 213.11h68.6v66.62h-68.6z" />*/}
                                {/*<image*/}
                                {/*    className='dropShadow'*/}
                                {/*    width="75"*/}
                                {/*    height="75"*/}
                                {/*    transform="translate(137.32 212.91)"*/}
                                {/*    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVR4Xu2cW1LjSBBFj93G0PRrepqYWQKLYz0sjj3Mo7sxxg9szUdWulLlElbOl6vJG5FRkmwJ5+FmSSbImnRdR2icZqfeMKTJ7d3k1HvOWd3DvdslkzHOKsAMbbckm/Rh+xTAV2ElSDao7LeqzgTAXo8PQavCMk6aIlCmlbDwWpKF06WxjCqwI1iFm96ZmKXQfQXWQlmWZaeQdsCLiV2KPbAvgQ1N8ApqBsxNXAIXKSwwe945qoSlULbABlincZOOvQDd5PauN4/1YCVXTcmgLoEr4DrF+7R/SXZZCexcZcvvBYGyBp6BZYqpea+6rw6LfvnNETAfgc8pPgEfEGgX6fwW5q/OjFp6awTQI/ATyRlyee6B/eT2bqLuOsAyc5U6a4646TPwFfgG/AZ8Scev6MM6V1AqdcsOKbdnBNR35BcPuTS3aXuaRqDurCl5rlJY34A/gBsE3EcEls5drcDSEtwATwioeXpdy3KVxm15gdoEr7AukXL7hDjqBvgT+B0B+B75QS05S2GtgAWSIwi8ZTo257hi+mVoXtAyvEDc8wEpva8IqBtyKVpnnbssrGcyqDUC6Zp8t69Wy1AZKix11zV5ov+SoiVn2TvhljxHrck3LAuq9+Ctk/xMd9LJpbtmZIddkcHpeEF7sNQgWyQnfYa0D902l8EytNsWmEKbF6OFde7SMgQpxRl9QOW3kqOcahO8fbP9LviuGGvfE89Z6q7ys4+ujFN/z5o4ogWV1VN+/lfzmDJOtYu2AqjU0Gc/mdsQrNG035LGOitEwHIpYDkUsBwKWA4FLIcClkMBy6GA5VDAcihgORSwHApYDgUshwKWQwHLoYDlUMByKGA5FLAcClgOBSyHApZDAcuhgOVQwHIoYDkUsBwKWA4FLIcClkMBy6GA5VDAcihgORSwHBqCpe1mmPFXl823mvNYZ3UcA2wVYi2PUbmcahroRkYLOpXDyVxqsOyJtn1/V4wa0Mb/yo/NZxCchWVf1AvbVn7tVNdRz51y/h0X9pdf5qHd9rpUQa+J3G7PALqH+y610dmLKqgt0vm5Ineqa79eS/2Gmpf2Ry/TqLkpNAusAzhqKDcXVVBlK/8C6VK3PcWtdbJqXkvgB5LPggxOe6NrDjsqwxLWCmm8/oF0fCqoDe11spbO+gn8A/yL5PdEdtiRu6A+wWsfsbrqkQwG5IctaKv7XpO2JlggoP5CuvAfye56Id+8DhoqQ23nX9JfIEJb/Ftb18E6S7vvtRS/A38jeS6RHBVWrwx7C/dMbu+mSPK2mbz1FUM6MyqsLeKiJ/KKITp/2blr3z3cHxxWc5badUNOXmv9ibbXorF3eV3wwq5Fs0Ly3FHMV8DgklBTfp1VjmyC5Q1M7/gbE4fHh7FLQqm7dFvnsBXtrZ9VwrLA7EP3zkTfQUlvbWW2cv4qQ49X1/97q2v+dSZ6+68tkvgWV5Msy1I2RizFOQpWTS2vUzoGTE3/G9Zb1H9jnvZy1NR71wAAAABJRU5ErkJggg=="*/}
                                {/*/>*/}
                                {/*<rect*/}
                                {/*    className='iconBg'*/}
                                {/*    x="147.53"*/}
                                {/*    y="219.88"*/}
                                {/*    width="55"*/}
                                {/*    height="55"*/}
                                {/*    rx="3"*/}
                                {/*/>*/}
                                {/*<path*/}
                                {/*    className='vaultIcon'*/}
                                {/*    d="M162.45 234.8L175 260l12.63-25.16zm14 5h1.46v1.45h-1.46zm-2.9 5.83h-1.46v-1.46h1.46zm0-2.19h-1.46V242h1.46zm0-2.19h-1.46v-1.45h1.46zm2.19 6.57h-1.44v-1.46h1.46zm0-2.19h-1.44v-1.46h1.46zm0-2.19h-1.44V242h1.46zm0-2.19h-1.44v-1.45h1.46zm.71.73h1.46v1.46h-1.46zm0 3.65v-1.46H178v1.46z"*/}
                                {/*/>*/}
                                <svg xmlns="http://www.w3.org/2000/svg"  width="66" height="66" className="octarine"
                                    id="Layer_1" x="0" y="0" enableBackground="new 0 0 174 201" version="1.1"
                                    viewBox="0 0 174 201">
                                    <title>octarine</title>
                                    <g id="Layer_2_1_"><g id="Layer_2-2"><path d="M169.2,126.7c0,0,0,0.1,0,0.2c-2.4,6.9-5.5,13.6-9.3,19.9c5.3-25.1,1.9-62.2-27.2-88.9l-0.1-0.1 c-0.3-0.3-0.5-0.5-0.8-0.8c1.4,1.2,2.8,2.5,4.2,3.8c0.6,0.6,1.3,1.2,1.9,1.8c13.1,13,25.9,30.6,30.3,46.8l0.3,1.1 c0.1,0.4,0.2,0.7,0.2,1.1s0.1,0.7,0.2,1.1c1.2,5,1.2,10.2,0,15.3C169,127.4,169.1,127.1,169.2,126.7L169.2,126.7z" className="st0"/><path
                                        d="M132.7,57.9c29.1,26.7,32.5,63.8,27.2,88.9c-4.9,8.1-10.7,15.6-17.4,22.4C154.7,147.6,162.2,88.1,132.7,57.9 L132.7,57.9z"
                                        className="st1"/><path
                                        d="M132.7,57.9c29.4,30.3,22,89.8,9.8,111.3c-8.9,9.2-19.3,16.9-30.7,22.8c26.2-26.9,47.2-107,17.6-136.9 c1.1,0.9,2.1,1.8,3.1,2.7L132.7,57.9z"
                                        className="st2"/><path
                                        d="M120.8,48.5c3,2,5.9,4.2,8.7,6.5c29.5,29.9,8.6,110-17.6,136.9c-18.9,9.5-38.7,11.9-54.1,2.8 c-26.1-15.4-46.6-75-52.2-97.8c7,7.3,15.2,13.2,24.3,17.6l1.2,0.6c12.2,5.7,25.6,8.4,39,7.7c21.8-0.5,43.1-10.7,54.1-21.8 c0.4-0.4,0.8-0.8,1.2-1.2C137.3,87.7,141.7,63.8,120.8,48.5L120.8,48.5z"
                                        className="st3"/><path
                                        d="M102.6,18.4c0.1,0,0.2,0.1,0.2,0.1l-0.7-0.3C102.4,18.3,102.5,18.4,102.6,18.4z"
                                        className="st4"/><path
                                        d="M122.8,102.2c-49.7,41.9-109-14-122.2-35.6c-0.3-7.4,0.2-14.8,1.5-22c12.9,22.7,71.7,99.6,121.5,57 C123.3,101.8,123,102,122.8,102.2L122.8,102.2z"
                                        className="st5"/><path
                                        d="M83.2,103.2c25.6,15.5,42.1-3.9,42.1-3.2l-1.1,1l-0.7,0.6C73.8,144.2,15,67.3,2.1,44.6 C5,29.1,12.4,14.4,27.6,5.8C52.9-8.6,85,10.1,102.2,18.3c-0.5-0.2-1.1-0.5-1.7-0.8c-8.5-3.9-17.4-6.8-26.5-8.7l-0.8-0.2 c-6.6-1.2-13-1.5-18.5-0.3l-0.5,0.1c-4.8,1.1-8.5,3.2-10.7,6.5c-0.1,0.1-0.2,0.3-0.3,0.4c-1.6,2.2-2.7,4.7-3.3,7.4l-0.1,0.3 c-0.1,0.5-0.2,0.9-0.3,1.4c-1,3.5-1.1,8.1-0.3,13.2c1.3,7.9,3.8,15.5,7.4,22.7c0.2,0.4,0.4,0.7,0.6,1.1c5,10.1,11.4,19.4,19,27.6 c0.4,0.4,0.8,0.9,1.2,1.3c0.2,0.2,0.4,0.4,0.6,0.6c1.5,1.5,3.1,3,4.7,4.4c0.3,0.3,0.6,0.6,0.9,0.8 C76.6,98.8,79.8,101.1,83.2,103.2z"
                                        className="st6"/><path
                                        d="M82.2,50.1c-11,8-21.8,34.6,1,53.1c-35.9-27.1-18.4-78.3,1.2-91.7c5.5,1.7,10.9,3.7,16.2,6 c0.6,0.2,1.1,0.5,1.7,0.8l0.7,0.3c28,14,58.4,37.5,67.1,64.4c6.8,21,1.9,35.9-0.8,43.7c0.9-4.7,0.8-9.6-0.3-14.2 c-0.1-0.3-0.1-0.7-0.2-1.1s-0.2-0.7-0.2-1.1l-0.3-1.1c-4-15-15.3-32.3-30.3-46.8c-0.6-0.6-1.3-1.2-1.9-1.8c-1.6-1.5-3.2-3-4.8-4.3 c-1.4-1.3-2.8-2.6-4.3-3.7c-1.9-1.6-4-3-6.2-4.2l-0.1,0C112.3,43.6,97.9,39,82.2,50.1L82.2,50.1z"
                                        className="st4"/><path
                                        d="M0.6,66.6c13.1,21.6,72.5,77.5,122.2,35.6C73.2,144.6,16.2,103.6,2.1,82C1.3,76.9,0.8,71.8,0.6,66.6z"
                                        className="st7"/><path
                                        d="M84.4,11.5c-19.6,13.4-37.1,64.7-1.2,91.7c-0.6-0.5-1.3-1-1.9-1.4c-35-27-32.7-75.4-15.1-93.9 c2.3,0.2,4.7,0.5,7,0.9L74,8.9C77.5,9.5,81,10.4,84.4,11.5z"
                                        className="st8"/><path
                                        d="M81.3,101.7c0.6,0.5,1.3,1,1.9,1.4c-3.3-2.1-6.5-4.5-9.5-7.1c-0.3-0.2-0.6-0.5-0.9-0.8 c-0.8-0.7-1.6-1.4-2.3-2.2s-1.5-1.4-2.3-2.2c-0.2-0.2-0.4-0.4-0.6-0.6L66.2,89c-7.6-8.3-14-17.5-19.1-27.6 c-0.2-0.4-0.4-0.7-0.6-1.1c-3.6-7.2-6.1-14.8-7.4-22.7c-0.7-4.4-0.6-8.9,0.3-13.2c0-0.1,0.1-0.2,0.1-0.4c0.1-0.3,0.1-0.7,0.2-1 l0.1-0.3c0.7-2.6,1.8-5.1,3.3-7.4c2.5-3.3,6-5.7,10.1-6.7C40,32.9,44.3,73.7,81.3,101.7z"
                                        className="st9"/><path
                                        d="M123.6,101.5l0.7-0.6l1.1-1c-0.4,0.4-0.8,0.8-1.2,1.2c-6.5,6.3-23.6,18.8-48.4,21.3 c-1.4,0.2-3.4,0.3-5.8,0.4h-2.9c-12.4,0-24.7-2.7-36-7.8l-1.2-0.6c-9-4.5-17.2-10.4-24.3-17.6C4,92.1,2.9,87.1,2.1,82 c14.1,21.6,71.1,62.7,120.7,20.3C123,102,123.3,101.8,123.6,101.5z"
                                        className="st10"/><path
                                        d="M66.2,7.8c-17.6,18.5-19.9,66.9,15.1,93.9c-37-28-41.2-68.8-28-93l1-0.3l0.5-0.1C58.5,7.6,62.4,7.4,66.2,7.8 L66.2,7.8z"
                                        className="st11"/><path
                                        d="M73.7,96.1c3,2.7,6.1,5,9.5,7.1c25.6,15.5,42.1-3.9,42.1-3.2 M68.1,90.9c0.8,0.8,1.6,1.5,2.3,2.2 s1.6,1.5,2.3,2.2 M47.2,61.4c5.1,10,11.5,19.3,19.1,27.6l1.2,1.3 M39.8,23.1c-0.1,0.5-0.2,0.9-0.3,1.4c-0.9,4.4-1,8.8-0.3,13.2 c1.3,7.9,3.8,15.5,7.4,22.7 M54.2,8.5c-4.8,1.1-8.5,3.2-10.7,6.5c-0.1,0.1-0.2,0.3-0.3,0.4c-1.5,2.3-2.6,4.7-3.3,7.4 M73.2,8.7 c-2.3-0.4-4.7-0.7-7-0.9c-3.8-0.3-7.7-0.2-11.5,0.6 M100.6,17.5c-8.5-3.9-17.4-6.8-26.5-8.7 M102.9,18.6l-0.7-0.3"
                                        className="st12"/><path
                                        d="M2.1,44.6C5,29.1,12.4,14.4,27.6,5.8C52.9-8.6,85,10.1,102.2,18.3 M29.8,114.6c-9-4.5-17.2-10.5-24.3-17.6 C4,92.1,2.9,87.1,2.1,82c-0.8-5.1-1.3-10.2-1.5-15.3c-0.3-7.4,0.2-14.8,1.5-22 M124.1,101.2c-6.5,6.3-23.6,18.8-48.4,21.3 c-1.4,0.2-3.4,0.3-5.8,0.4c-13.4,0.6-26.8-2-39-7.7"
                                        className="st12"/><path
                                        d="M122.8,102.2C73.2,144.6,16.2,103.6,2.1,82 M124.3,100.9l-0.7,0.6c-0.3,0.2-0.5,0.5-0.8,0.7 c-49.7,41.9-109-14-122.2-35.6"
                                        className="st13"/><path d="M2.1,44.6L2.1,44.6" className="st12"/><path
                                        d="M125.3,100l-1.1,1l-0.7,0.6C73.8,144.2,15,67.3,2.1,44.6" className="st13"/><path
                                        d="M168.5,110.4c0.1,0.4,0.2,0.7,0.2,1.1s0.1,0.7,0.2,1.1c1.2,5,1.2,10.2,0,15.3c0.1-0.3,0.2-0.7,0.4-1 c2.6-7.8,7.5-22.7,0.8-43.7c-8.7-26.9-39.1-50.4-67.1-64.4c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.3-0.1-0.4-0.2 c-0.5-0.2-1.1-0.5-1.7-0.8c-5.3-2.3-10.7-4.3-16.2-6c-3.4-1.1-6.8-2-10.3-2.6l-0.8-0.2c-6.6-1.2-13-1.5-18.5-0.3l-0.5,0.1l-1,0.3 c-4,1-7.6,3.4-10.1,6.7c-1.6,2.2-2.7,4.7-3.3,7.4l-0.1,0.3c-0.1,0.3-0.2,0.6-0.2,1c0,0.1-0.1,0.2-0.1,0.4c-1,3.5-1.1,8.1-0.3,13.2 c1.4,7.9,3.9,15.5,7.4,22.7c0.2,0.4,0.4,0.7,0.6,1.1c5,10.1,11.4,19.3,19,27.5c0.4,0.4,0.8,0.9,1.2,1.3c0.2,0.2,0.4,0.4,0.6,0.6 c1.5,1.5,3.1,3,4.7,4.4c0.3,0.3,0.6,0.6,0.9,0.8c3,2.6,6.2,5,9.5,7.1c-22.9-18.5-12.1-45.1-1-53.1c15.7-11.1,30.2-6.5,38.4-1.7 M137.9,62.5c15,14.5,26.3,31.7,30.3,46.8"
                                        className="st12"/><path
                                        d="M125.5,51.8c0.1,0.1,0.2,0.2,0.3,0.3c1.2,0.9,2.4,1.9,3.6,2.8c0.8,0.7,1.6,1.3,2.4,2 c1.4,1.2,2.8,2.5,4.2,3.8 M122,49.3c1.2,0.8,2.3,1.5,3.1,2.2"
                                        className="st12"/><path
                                        d="M81.3,101.7c-37-28-41.2-68.8-28-93 M83.2,103.2c-0.6-0.5-1.3-1-1.9-1.4c-35-27-32.7-75.4-15.1-93.9 M83.2,103.2c-35.9-27.1-18.4-78.3,1.2-91.7"
                                        className="st13"/><path
                                        d="M129,54.5c-1.2-1-2.4-1.9-3.5-2.7l-0.4-0.3c-1.4-1-2.8-2-4.1-2.8 M120.7,48.5c21,15.3,16.6,39.3,4.7,51.5 c-0.4,0.4-0.8,0.8-1.2,1.2c-11.1,11.1-32.4,21.2-54.1,21.8h-2.9c-12.4,0-24.7-2.7-36-7.8l-1.2-0.6c-9.1-4.4-17.3-10.4-24.3-17.6 c5.7,22.8,26.2,82.4,52.2,97.8c15.4,9.1,35.2,6.7,54.1-2.8c11.4-5.9,21.8-13.6,30.7-22.8c6.6-6.8,12.5-14.3,17.4-22.4 c3.8-6.3,6.9-12.9,9.3-19.9c0,0,0-0.1,0-0.2c0.9-4.7,0.8-9.6-0.3-14.2c-0.1-0.3-0.1-0.7-0.2-1.1s-0.2-0.7-0.2-1.1l-0.3-1.1 c-4.4-16.2-17.1-33.8-30.3-46.8c-0.6-0.6-1.3-1.2-1.9-1.8c-1.6-1.5-3.2-3-4.8-4.3c-0.7-0.6-1.5-1.2-2.2-1.8"
                                        className="st12"/><path
                                        d="M132.7,57.9c29.1,26.7,32.5,63.8,27.2,88.9 M120.8,48.5c3,2,5.9,4.2,8.7,6.5c1.1,0.9,2.1,1.8,3.1,2.7"
                                        className="st13"/><path
                                        d="M122,49.3c1.7,1,3.4,2.2,5,3.4c1.5,1.2,2.9,2.4,4.3,3.7c0.2,0.2,0.4,0.4,0.6,0.6s0.6,0.5,0.8,0.8l0.1,0.1 c29.4,30.2,22,89.8,9.8,111.3"
                                        className="st13"/><path
                                        d="M120.8,48.5c0.1,0,0.1,0.1,0.2,0.1c0.3,0.2,0.7,0.4,1,0.6" className="st12"/><path
                                        d="M120.7,48.5L120.7,48.5 M120.6,48.4L120.6,48.4c2.3,1.2,4.4,2.6,6.3,4.2c0.7,0.6,1.4,1.2,2.1,1.8l0.1,0 l0.4,0.4c0,0,0.1,0.1,0.1,0.1c29.5,29.9,8.6,110-17.7,136.9"
                                        className="st13"/></g></g></svg>

                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </Howitworks>
    );
}
