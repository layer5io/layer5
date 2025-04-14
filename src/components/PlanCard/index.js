import React, { useState } from "react";
import Button from "../../reusecore/Button";
import { Col, Row, Container } from "../../reusecore/Layout";
import PlanCardWrapper from "./planCard.style";
import FeatureDetails from "./collapsible-details";
import Modal from "react-modal";
import CommonForm from "../CommonForm";

const PlanCard = ({ planData , isYearly }) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (!planData || !Array.isArray(planData) || planData.length === 0) {
    return <div>No plan data available</div>;
  }

  return (
    <PlanCardWrapper>
      <Container>
        <Row $Hcenter>
          {planData.map((x) => (
            // <Col $xl={4} $lg={2} $md={1} $sm={1} key={x.tier}>
            <Col key={x.tier}>
              <div className={`${x.featured ? "featured" : ""} pricing-table`}>

                {x.tier === "Personal" ? <div className="pricing-label">Free Forever</div> : null}

                {x.tier === "Team Designer" ? <div className="featured-label">Most Popular</div> : null}

                {x.pricing_coming_soon && (
                  <div className="pricing_coming_soon">
                    {x.pricing_coming_soon}
                  </div>
                )}

                <h2>{x.tier}</h2>
                <h5 className="byline">{x.byline}</h5>

                <div className="price-container">
                  {isYearly ? (
                    x.yearlyprice !== undefined ? (
                      <div className="price">
                        <span className="price-amount"><sup>$</sup>
                          {x.yearlyprice === 0
                            ? "0"
                            : x.yearlyprice.toFixed(0)}
                        </span>
                        <span className="currency">USD</span>
                        <span className="price-per">per user/year</span>
                      </div>
                    ) : (
                      <div className="pricing_coming_soon">
                        {x.pricing_coming_soon}
                      </div>
                    )
                  ) : (
                    x.monthlyprice !== undefined ? (
                      <div className="price">
                        <span className="price-amount"><sup>$</sup>
                          {x.monthlyprice === 0
                            ? "0"
                            : x.monthlyprice.toFixed(0)}
                        </span>
                        <span className="currency">USD</span>
                        <span className="price-per">per user/month</span>
                      </div>
                    ) : (
                      <div className="pricing_coming_soon">
                        {x.pricing_coming_soon}
                      </div>
                    )
                  )}
                </div>


                <Button
                  // disabled={x.tier === "Team Operator"}
                  $primary
                  className={
                    x.button[0] === "Coming Soon"
                      ? "price-button-disabled"
                      : "price-button-link"
                  }
                  onClick={x.tier === "Enterprise" ? openModal : undefined}
                >
                  {x.tier === "Enterprise" ? "Contact Sales" : x.button[0]}
                </Button>

                <h6>{x.byline2}</h6>

                <div className="pricing-features">
                  {x.summary &&
                    x.summary.map((t) => (
                      <div className="feature" key={t.id}>
                        <FeatureDetails
                          category={t.category}
                          description={t.description}
                          tier={t.tier}
                        />
                      </div>
                    ))}
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
        contentLabel="Enterprise Inquiry Form"
        style={{
          content: {
            maxHeight: "90vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          },
          overlay: {
            overflow: "auto",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }
        }}
      >
        <Button $secondary className="close-modal-btn" onClick={closeModal}>
    X
        </Button>
        <h2 className="modal-heading">Contact sales</h2>
        <div style={{
          flex: 1,
          overflow: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}>
          <CommonForm
            title="Contact sales"
            form="contact"
            account_desc=""
            submit_title="Thanks for contacting us!"
            submit_body="We'll get back to you as soon as we can."
            submit_button_title="Contact sales"
          />
        </div>
      </Modal>
    </PlanCardWrapper>
  );
};

export default PlanCard;
