import React from "react";

import Button from "../../reusecore/Button";
import {
  MarketingHoneypot,
  MarketingStatus,
  useMarketingForm,
} from "../../components/MarketingForm";
import SubscribeLearnWrapper from "./subscribeLearn.style";

const SubscribeLearnPath = () => {
  const { status, message, handleSubmit } =
    useMarketingForm("footer-subscribe");

  return (
    <SubscribeLearnWrapper>
      <div>
        <form name="contactform" method="post" onSubmit={handleSubmit}>
          <div>
            <span>
              <h2>Join the Layer5 community</h2>
              <div className="subscriptionText">
                <p>
                  Subscribe to our newsletter to receive updates on new learning
                  paths, courses, and more.
                </p>
              </div>
            </span>
            {status === "success" ? (
              <MarketingStatus status={status} message={message} />
            ) : (
              <div className="subscribe">
                <input
                  className="inputrow subscribe-email"
                  type="email"
                  placeholder="Email Address"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please fill-in this field")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
                <MarketingHoneypot />
                <Button
                  $secondary
                  type="submit"
                  title="Subscribe"
                  id="mc-embedded-subscribe"
                  disabled={status === "submitting"}
                />
                <MarketingStatus status={status} message={message} />
              </div>
            )}
          </div>
        </form>
      </div>
    </SubscribeLearnWrapper>
  );
};

export default SubscribeLearnPath;
