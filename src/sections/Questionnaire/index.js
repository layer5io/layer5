import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const demos = {
    form:
        "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSeQmQv6Xrnb69qGUZjHcw6i92jNDXir6WN6sRAHDNRtKUzBUg/viewform?embedded=true\" width=\"500\" height=\"500\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading…</iframe>",
};

function Iframe(props) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
        />
    );
}

function App() {
    return (
        <div className="App">
            <h1>Questionnaire</h1>
            <Iframe iframe={demos["form"]} />,
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
