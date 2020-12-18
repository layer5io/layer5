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

                            {/* Authenticate */}
                            <g className='authenticate'>
                                <image
                                    className='dropShadow'
                                    width="75"
                                    height="75"
                                    transform="translate(363.32 212.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAD+0lEQVR4Xu2cW1LbQBBFj41t3iEEKllCFpf1sDj2kJd5GtugfMw00xqNLHXyEQn6VnVJth5UH26PZYruSVVVuPpp1nVCmyZfv026zhmqquurv3LIpI+zMjBt+2ORTvh1vw/AnbAiJB0UXo9RlYra613QirCUk6YEKNNCaHhjkYbzUgh5v+i0BqzMTXsqZjHktQAbelnmZSdAnmNsYzyrKLqsbYEXUDNgoWIfmMfQwPR1Q1MOS0BtYjwBaxWQgNVUc1Z01ZQEah84AI5iHMbX+ySX5cCGKg1qS4C0Ah6Bhxir+L447UW7K3eWLr8FAcwJ8CHGKXBMgDaP1w99/crXqS3BUY/APXAL3BDykPPk3Im6Pjkrc9WC4KRT4CNwDlzE/bN47IA6rCGCEmkAW4KDHoAl8Bv4AfyK+7fx2JrMXSVnTUlr1RHBURfAZ+CSAO6EAEvWrrHAkrVqBdwRqmQRz3kmAJI1bEv8ZBSVFniBtU8oN3HXJfAF+EQAeEj4QWNz1ppQgjckUPLePWntkrJ8lYYlCUspzgnuOSaU3jkB1CWpFLWzhi7trAfqoO4J8HS1aBPsLEOBJe46Ii30ZzHG7Kx5fH9NKEf5pJdHo+Kn/AxeF3doumtGctgBCZxs54wPlhhkQ3oUEkflj0MTCHyq66sqL0O9r4EJtEW21bCGLoEFzTz0t5PSg3axDOWgdpjEXrYtfU8csuR5qSsfnX9NXX/PmhhiDOrKYWcejY/HFuU367zxgFXKo1cubbDyG74HdRqhr7NcOCyTHJZBDssgh2WQwzLIYRnksAxyWAY5LIMclkEOyyCHZZDDMshhGeSwDHJYBjksgxyWQQ7LIIdlkMMyyGEZ5LAMclgGOSyDHJZBDssgh2WQwzLIYRnksAxyWAY5LIMclkEOy6A2WNKRgNq+del8izn3dVZFE+BYIZby6JVLV9NA1TPGoK4cOnMpwdIX6jb+52wrAeP4X/m++bSC07D0QbmxbuXfEFrOZCvXTjF0Kfwn6V9+nseG+rgCAaavBWLC1fVVFdvo9E0FlLTJ6k516dcba7+h5PFIyk2gaWAVQFuPtAYlMw/kxnfUW2U3jLuTdUnI544E7ikeLzmsUYY5rBWhJXZJvfl6zbg7WaVH+ieh635JyFMc1nAXlBd4aecXV92SwEBqlX0L3fe/gO+kEQXirkbnPbSX4ZYA5YHwG9iLx6X5+i3OdbghzXMQWLUyzMerTAnJ62by9zIxRNYvvXa9VNdXrw4rOUvsuiYlL7V+z9ufRSOTQmrrFdA6EmrK+51yVBzaA+1fd8Rdsi9r2Ir3Mz+rIZ/M1vyq8wL0m8xWO+gz/2ryaZKy86/TJHfJ55S6duoPpB8K5VDMD2sAAAAASUVORK5CYII="
                                />
                                <rect x="372.79" y="219.38" width="56" height="56" rx="3.5" />


                                <path
                                    className='iconLines'
                                    d="M389.93 255.31a3.74 3.74 0 013.73-3.74 3.74 3.74 0 013.74 3.74v1.49h-7.47z"
                                />
                                <path
                                    className='iconLines'
                                    d="M396.27 241.33h-7.64a1.84 1.84 0 00-1.84 1.84V255a1.84 1.84 0 001.84 1.84h22.11a1.84 1.84 0 001.84-1.84v-11.83a1.84 1.84 0 00-1.84-1.84h-7.63"
                                />
                                <path
                                    className='iconLines'
                                    d="M400.64 246.42h8.43M400.64 249.94h3.29M407.53 249.94h1.54"
                                />
                                <circle
                                    className='iconLines'
                                    cx="393.66"
                                    cy="248.21"
                                    r="3.37"
                                />
                                <path
                                    className='iconLines'
                                    d="M394.78 238h9.82v2.46l-4.91 3.07-4.91-3.07z"
                                />
                            </g>

                            {/* Authorize */}
                            <g
                                className={activeExampleIndex === 0 ? "" : " inactive authorize"}
                            >
                                <path className='spacer' d="M252.67 324.28h68.6v66.62h-68.6z" />
                                <image
                                    className='dropShadow'
                                    width="75"
                                    height="75"
                                    transform="translate(249.32 322.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAEVElEQVR4Xu2cW1LbQBBFj41tHnmQBCpZQhaX9bA4FpEnYDvGRvmYaaY1Glnq/EQT+lZ1SbZkQR9uj+RUumdN0+Aap8XQCX2aff4yGzpnqmpub/7KIbMxzsrA9O3XIp3w8/4YgEdhRUg6KLyuUY2K1utj0IqwlJPmBCjzQmh4tUjDeSqEvF90WgdW5qYTFYsY8lqATb0s87ITIIcY+xgHFUWX9S3wAmoBrFScAssYGpj+3NSUwxJQjzF+AzsVkIC11HJWdNWcBOoUOAMuYpzH16ckl+XApioNak+AtAU2wDrGNr4vTnvS7sqdpctvRQDzGngb4w3wigBtGT8/9fUrX6f2BEdtgAfgDvhFyEPOk3Nn6vPJWZmrVgQnvQHeAe+Bq7h/GY+d0YY1RVAiDWBPcNAa+An8AL4C3+P+XTy2I3NXyVlz0lp1QXDUFfARuCaAe02AJWtXLbBkrdoC94QqWcVzDgRAsobtiXdGUWmBF1inhHITd10Dn4APBIDnhB9Um7N2hBL8RQIl7z2Q1i4py2dpWJKwlOKS4J5XhNJ7TwB1TSpF7aypSztrTRvUAwGerhZtgqNlKLDEXRekhf4yRs3OWsb3d4RylDu9PBoV7/ILeF7coeuuBclhZyRwsl1SHywxyCPpUUgclT8OzSDwaW5vmrwM9b4GJtBW2VbDmroEFnTz0N9OSg/axTKUg9phEifZtvQ9ccqS56WhfHT+LQ39e9bMEDVoKIejeXRujz3KLzZ44QmrlMeoXPpg5Rd8CRo0wlhnuXBYJjksgxyWQQ7LIIdlkMMyyGEZ5LAMclgGOSyDHJZBDssgh2WQwzLIYRnksAxyWAY5LIMclkEOyyCHZZDDMshhGeSwDHJYBjksgxyWQQ7LIIdlkMMyyGEZ5LAMclgGOSyDHJZBfbCkIwG1ffEa66yGLsBaIfb97oO5DTUNNCOjBuW/aymHo7mUYOkL6Db+Q7aVgDr+r3yeTz6iYPCPrmHl1HXztfQV79RWPjvH0KXwjyS5PZG67vcqZESBBteBtwBobm+a2EanHSWgpE1Wd6pLv15N/YaQYG1ibEkjCjS43DhAtww1KJl5IIDuabfKPlJfJ6s0lG8IjeP3hC7WDSHXR9rLTANQaijPXSWOeiB0qevm6x11dbJCG5Y0lOcd9xpYpxRLC7xcUFx1RwIDqVW2pu57aMOSvmgZUyDANrQ771vA+spQLrgmlN5JPC4/pLa5DpASl5EEYoQfwDdCnuKuzpgCULDiIq/LUGDJg+uB1OJf08QQSO4QWFI5a9LEEIGlndUCVnKWpi/JP5FcVfMsGkiVk9/A1qQylEWe3lk00V25/QSe/CVqm3IE3UcBea6SZ0Y96UjfEQcXeEgXlH1Zw7bUNz8LurD0ctP7cJrPz3ppk9mgXY4CrfP1Z9RkttbB/3fmHySHaXjQAwoGYD2f9H9Nk4RuWYadgYmSo2CVVPOcUhgGU9Jfw3qJ+gOPxgR0lfraPQAAAABJRU5ErkJggg=="
                                />
                                <rect
                                    className='iconBg'
                                    x="259.55"
                                    y="330.14"
                                    width="55"
                                    height="55"
                                    rx="3"
                                />

                                <path
                                    className='iconLines'
                                    d="M280 365.09a2.5 2.5 0 012.5-2.5H296"
                                />
                                <path
                                    className='iconLines'
                                    d="M282.46 347.59H296v20h-13.5a2.5 2.5 0 01-2.5-2.5v-15a2.5 2.5 0 012.46-2.5zM278.13 352.47h4.71M278.13 356.47h4.71"
                                />
                            </g>

                            {/* Access */}
                            <g
                                className={activeExampleIndex <= 1 ? " " : "inactive access"}
                            >
                                <path className='spacer' d="M140.24 213.11h68.6v66.62h-68.6z" />
                                <image
                                    className='dropShadow'
                                    width="75"
                                    height="75"
                                    transform="translate(137.32 212.91)"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVR4Xu2cW1LjSBBFj93G0PRrepqYWQKLYz0sjj3Mo7sxxg9szUdWulLlElbOl6vJG5FRkmwJ5+FmSSbImnRdR2icZqfeMKTJ7d3k1HvOWd3DvdslkzHOKsAMbbckm/Rh+xTAV2ElSDao7LeqzgTAXo8PQavCMk6aIlCmlbDwWpKF06WxjCqwI1iFm96ZmKXQfQXWQlmWZaeQdsCLiV2KPbAvgQ1N8ApqBsxNXAIXKSwwe945qoSlULbABlincZOOvQDd5PauN4/1YCVXTcmgLoEr4DrF+7R/SXZZCexcZcvvBYGyBp6BZYqpea+6rw6LfvnNETAfgc8pPgEfEGgX6fwW5q/OjFp6awTQI/ATyRlyee6B/eT2bqLuOsAyc5U6a4646TPwFfgG/AZ8Scev6MM6V1AqdcsOKbdnBNR35BcPuTS3aXuaRqDurCl5rlJY34A/gBsE3EcEls5drcDSEtwATwioeXpdy3KVxm15gdoEr7AukXL7hDjqBvgT+B0B+B75QS05S2GtgAWSIwi8ZTo257hi+mVoXtAyvEDc8wEpva8IqBtyKVpnnbssrGcyqDUC6Zp8t69Wy1AZKix11zV5ov+SoiVn2TvhljxHrck3LAuq9+Ctk/xMd9LJpbtmZIddkcHpeEF7sNQgWyQnfYa0D902l8EytNsWmEKbF6OFde7SMgQpxRl9QOW3kqOcahO8fbP9LviuGGvfE89Z6q7ys4+ujFN/z5o4ogWV1VN+/lfzmDJOtYu2AqjU0Gc/mdsQrNG035LGOitEwHIpYDkUsBwKWA4FLIcClkMBy6GA5VDAcihgORSwHApYDgUshwKWQwHLoYDlUMByKGA5FLAcClgOBSyHApZDAcuhgOVQwHIoYDkUsBwKWA4FLIcClkMBy6GA5VDAcihgORSwHBqCpe1mmPFXl823mvNYZ3UcA2wVYi2PUbmcahroRkYLOpXDyVxqsOyJtn1/V4wa0Mb/yo/NZxCchWVf1AvbVn7tVNdRz51y/h0X9pdf5qHd9rpUQa+J3G7PALqH+y610dmLKqgt0vm5Ineqa79eS/2Gmpf2Ry/TqLkpNAusAzhqKDcXVVBlK/8C6VK3PcWtdbJqXkvgB5LPggxOe6NrDjsqwxLWCmm8/oF0fCqoDe11spbO+gn8A/yL5PdEdtiRu6A+wWsfsbrqkQwG5IctaKv7XpO2JlggoP5CuvAfye56Id+8DhoqQ23nX9JfIEJb/Ftb18E6S7vvtRS/A38jeS6RHBVWrwx7C/dMbu+mSPK2mbz1FUM6MyqsLeKiJ/KKITp/2blr3z3cHxxWc5badUNOXmv9ibbXorF3eV3wwq5Fs0Ly3FHMV8DgklBTfp1VjmyC5Q1M7/gbE4fHh7FLQqm7dFvnsBXtrZ9VwrLA7EP3zkTfQUlvbWW2cv4qQ49X1/97q2v+dSZ6+68tkvgWV5Msy1I2RizFOQpWTS2vUzoGTE3/G9Zb1H9jnvZy1NR71wAAAABJRU5ErkJggg=="
                                />
                                <rect
                                    className='iconBg'
                                    x="147.53"
                                    y="219.88"
                                    width="55"
                                    height="55"
                                    rx="3"
                                />
                                <path
                                    className='vaultIcon'
                                    d="M162.45 234.8L175 260l12.63-25.16zm14 5h1.46v1.45h-1.46zm-2.9 5.83h-1.46v-1.46h1.46zm0-2.19h-1.46V242h1.46zm0-2.19h-1.46v-1.45h1.46zm2.19 6.57h-1.44v-1.46h1.46zm0-2.19h-1.44v-1.46h1.46zm0-2.19h-1.44V242h1.46zm0-2.19h-1.44v-1.45h1.46zm.71.73h1.46v1.46h-1.46zm0 3.65v-1.46H178v1.46z"
                                />

                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </Howitworks>
    );
}
