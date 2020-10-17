import React from "react";

const CommunityMeetingsTable=()=> {
    return (
        <div>
            <div align="center"><h3 className="first">Layer5 Meetings</h3></div>

            <div>
                <table id="meetingstable">
                    <tr>
                        <th className="first" id="meeting">Meeting</th>
                        <th>Slack Channel</th>
                        <th>Meeting Minutes</th> 
                        <th>Meeting Link</th>
                        <th>Meeting Recordings</th>
                    </tr>
                    <tr>
                        <td className="first">Layer5 Community Meeting</td>
                        <td><a href="https://layer5io.slack.com/archives/CDM0ACDM5">#general</a></td>
                        <td><a href="https://bit.ly/2It7IA4">Minutes</a></td>
                        <td><a href="https://meet.layer5.io/community">Zoom</a></td>
                        <td><a href="https://www.youtube.com/playlist?list=PL3A-A6hPO2IMPPqVjuzgqNU5xwnFFn3n0">YouTube</a></td>
                    </tr>
                    <tr>
                        <td className="first">Websites Meeting</td>
                        <td><a href="https://layer5io.slack.com/archives/C015QJKUMPU">#websites</a></td>
                        <td><a href="https://bit.ly/2XK4eQV">Minutes</a></td>
                        <td><a href="https://meet.layer5.io/websites">Zoom</a></td>
                        <td><a href="https://www.youtube.com/watch?v=Zba0b0ZojOI&list=PL3A-A6hPO2IO1ZuLj3cbOTdi-hlkF4Lqu">YouTube</a></td>
                    </tr>
                    <tr>
                        <td className="first">Meshery Development Meeting</td>
                        <td><a href="https://layer5io.slack.com/archives/CFGG6U10E">#meshery</a></td>
                        <td><a href="https://bit.ly/31OGQTk">Minutes</a></td>
                        <td><a href="https://meet.layer5.io/meshery">Zoom</a></td>
                        <td><a href="https://www.youtube.com/watch?v=SJctAfZ52d8&list=PL3A-A6hPO2INr4oEIorJqC8N0FtxnYj0a">YouTube</a></td>
                    </tr>
                    <tr>
                        <td className="first">MeshMap Meeting</td>
                        <td><a href="https://layer5io.slack.com/archives/C011VPREG2Z">#meshery-ci</a></td>
                        <td><a href="https://bit.ly/3aXOaAs ">Minutes</a></td>
                        <td><a href="https://meet.layer5.io/meshmap">Zoom</a></td>
                        <td><a href="https://www.youtube.com/watch?v=ds9D2KgZKxo&list=PL3A-A6hPO2IM7rYiKxG4l3eQNc6X3IUex">YouTube</a></td>
                    </tr>
                    <tr>
                        <td className="first">Newcomers' Meeting</td>
                        <td><a href="https://layer5io.slack.com/archives/C019426UBNY">#newcomers</a></td>
                        <td><a href="https://bit.ly/353Aa7D">Minutes</a></td>
                        <td><a href="https://meet.layer5.io/newcomers">Zoom</a></td>
                        <td><a href="https://www.youtube.com/watch?v=E1juH6Rjovo&list=PL3A-A6hPO2INVEknQ4R-VwDMUT9yM_FSm">YouTube</a></td>
                    </tr>
                    <tr>
                        <td className="first disable">CNCF - SMI Community Meeting</td>
                        <td><a href="https://layer5io.slack.com/archives/C010H0HE2E6">#smi</a></td>
                        <td><a href="https://docs.google.com/document/d/1NTBaJf6LhUBlF8_lfvBBt_MbyPvT-6CZNg6Ckpm_yCo/edit">Minutes</a></td>
                        <td><a href="https://zoom.us/my/cncfsmiproject">Zoom</a></td>
                        <td>N/A</td>
                    </tr>
                    <tr>
                        <td className="first disable">CNCF - SIG Network Meeting</td>
                        <td><a href="https://app.slack.com/client/T08PSQ7BQ/CMG237Z5Z">#sig-network</a></td>
                        <td><a href="https://docs.google.com/document/d/18hYemFKK_PC_KbT_TDBUgb0rknOuIhikkRxer4_bv4Q/edit# ">Minutes</a></td>
                        <td><a href="https://zoom.us/my/cncfsignetwork">Zoom</a></td>
                        <td><a href="https://www.youtube.com/playlist?list=PLj6h78yzYM2MEMGCTD41MlYB8T-d9kNRT">YouTube</a></td>
                    </tr>
                </table>
                <br />
            </div>
        </div>
    );
};

export default CommunityMeetingsTable;
