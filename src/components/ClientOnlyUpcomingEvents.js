import React from "react";
import { isBrowser } from "../utils/isBrowser";

let UpcomingEvents = null;

if (isBrowser) {
  UpcomingEvents = require("./UpcomingEventCard").default;
}

const ClientOnlyUpcomingEvents = ({ data }) => {
  if (!isBrowser || !UpcomingEvents) {
    return null;
  }

  return <UpcomingEvents data={data} />;
};

export default ClientOnlyUpcomingEvents;