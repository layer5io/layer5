import React, { useEffect, useState } from "react";
import { Container } from "../../reusecore/Layout";
import L404SectionWrapper from "./404.style";
import Button from "../../reusecore/Button";

const messages = [
  {
    headline: "404: Not Found in This Namespace",
    body: "We scanned every namespace. Twice. The page is now officially in the void.",
  },
  {
    headline: "GitOps Says It's Deployed",
    body: "Pipeline is green. The cluster is gaslighting us. Welcome to reality.",
  },
  {
    headline: "The Demo Worked Perfectly",
    body: "Then someone merged to main. This is the part where we all pretend we're surprised.",
  },
  {
    headline: "This Page Is Currently in the Backlog",
    body: "Right below 'actually improve the 404 page' and above 'fix the broken links'.",
  },
  {
    headline: "Even Kanvas Couldn't Design This Page",
    body: "We tried dragging it onto the canvas. It refused to exist. Rude.",
  },
  {
    headline: "Page Evicted from the Cluster",
    body: "Insufficient resources or it just didn't want to be here anymore. Can't blame it.",
  },
  {
    headline: "404: Desired State vs. Actual State",
    body: "Our GitOps repo insists this page exists. The universe strongly disagrees.",
  },
  {
    headline: "This URL Has Been Rolled Back",
    body: "For safety. Or because someone had a moment of panic during a deploy. We're not naming names.",
  },
  {
    headline: "We Searched the Entire Repo",
    body: "Including the weird branch no one touches and that one forgotten docs folder. Still nothing.",
  },
  {
    headline: "404: Maintainer Not Found",
    body: "Our contributors are excellent at shipping code. Updating links? Less so.",
  },
  {
    headline: "404: This Page Achieved 'Deprecated' Status",
    body: "It was here yesterday. Then we did a 'quick refactor' at 2 a.m.",
  },
  {
    headline: "The Link You Followed Has Left the Repo",
    body: "Probably living its best life on a feature branch that never got merged.",
  },
  {
    headline: "Even With 10k+ GitHub Stars...",
    body: "we still couldn't find this page. Meshery manages entire clusters better than we manage our own URLs.",
  },
  {
    headline: "This Content Is Experiencing a Rolling Update",
    body: "It'll be back any second now. Or never. We stopped checking after the third deploy.",
  },
  {
    headline: "Congratulations, You Found a Rare 404",
    body: "Most people just get the boring ones. You get the special edition.",
  },
  {
    headline: "404: Your Request Was Dropped by the Load Balancer",
    body: "It had better things to do. Like route traffic that actually exists.",
  },
  {
    headline: "We Looked in the Docs, Slack, and Git History",
    body: "Still nothing. Time to file an issue and assign it to someone else?",
  },
];

const L404 = () => {
  const [message, setMessage] = useState(null);

  const getRandomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)];
  };

  useEffect(() => {
    setMessage(getRandomMessage());
  }, []);

  const handleNewMessage = () => {
    setMessage(getRandomMessage());
  };

  if (!message) return null; // Prevents flash before random message loads

  return (
    <L404SectionWrapper>
      <Container>
        <h1 className="message">{message.headline}</h1>
        <p className="funny-body">{message.body}</p>

        <h2 className="subtitle">Page does not exist.</h2>

        <div className="button-row">
          <Button
            id="return-layer5"
            aria-label="return-to-layer5-page"
            $secondary
            $url="/"
            $external={false}
          >
            Return to Layer5
          </Button>

          <Button
            onClick={handleNewMessage}
            aria-label="show-another-funny-404-message"
          >
            Show another message
          </Button>
        </div>
      </Container>
    </L404SectionWrapper>
  );
};

export default L404;
