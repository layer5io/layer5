import React from "react";

import Button from "../../reusecore/Button";
import SubscribeLearnWrapper from "./subscribeLearn.style";

const SubscribeLearnPath = () => {
  return (
    <SubscribeLearnWrapper>
      <div>
        <form
          name="contactform"
          method="post"
          action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb"
        >
          <div>
            <span>
              <h2>Stay meshy!</h2>
              <div className="subscriptionText">
                <p>
                  Subscribe to our newsletter to receive updates on new learning
                  paths, courses, and more.
                </p>
              </div>
            </span>
            <div className="subscribe">
              <input
                className="inputrow subscribe-email"
                type="email"
                placeholder="Email Address"
                name="EMAIL"
                id="mce-EMAIL"
                required
                onInvalid={e => e.target.setCustomValidity("Please fill-in this field")}
                onInput={e => e.target.setCustomValidity("")}
              />
              <Button secondary title="Subscribe" id="mc-embedded-subscribe" />
            </div>
          </div>
        </form>
      </div>
    </SubscribeLearnWrapper>
  );
};

export default SubscribeLearnPath;
