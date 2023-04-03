import React from "react";
import CustomersWrapper from "./blockquote-image.style";

const Customers = (props) => {
  return (
    <CustomersWrapper>

      {props.type === "1" ?

        <section className="bq-section">
          <div className="type-one-wrapper type-one-wrapper-boxed">
            <div className="bq-quote type-one-quote">
              <div className="type-one-quote-userpic"><img src={props.image}></img></div>
              <div className="type-one-quote-qmark">
                &#10077;
              </div>
              <div className="type-one-quote-pattern">
              </div>
              <div className="type-one-quote-base">
                <blockquote className="type-one-text">
                  {props.quote}
                </blockquote>
                <div className="type-one-quote-meta">
                  <div className="type-one-meta-info">
                    <div className="type-one-author"><cite>{props.person ? props.person : ""}</cite></div>
                    <div className="type-one-source"><span>{props.title ? props.title : ""}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        :
        props.type === "2" ?
          <section className="bq-section">
            <div className="type-one-wrapper type-one-wrapper-boxed">
              <div className="bq-quote type-two-quote">
                <div className="type-two-quote-pattern">
                  <div className="type-two-quote-qmark">
                    &#10077;
                  </div>
                </div>

                <div className="type-two-quote-userpic"><img src={props.image}></img></div>

                <div className="type-two-quote-base">
                  <blockquote className="type-two-quote-text">
                    {props.quote}
                  </blockquote>
                  <div className="type-two-quote-meta">
                    <div className="type-two-quote-meta-info">
                      <div className="type-two-quote-author"><cite>{props.person ? props.person : ""}</cite></div>
                      <div className="type-two-quote-source"><span>{props.title ? props.title : ""}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          :
          <section className="bq-section">
            <div className="type-one-wrapper type-one-wrapper-boxed">
              <div className="bq-quote type-three-quote">

                <div className="type-three-quote-qmark">
                &#10078;
                </div>

                <div className="type-three-quote-base">
                  <blockquote className="type-three-quote-text">
                    {props.quote}
                  </blockquote>
                  <div className="type-three-quote-meta">
                    <div className="type-three-quote-userpic"><img src={props.image}></img></div>
                    <div className="type-three-quote-meta-info">
                      <div className="type-three-quote-author"><cite>{props.person ? props.person : ""}</cite></div>
                      <div className="type-three-quote-source"><span>{props.title ? props.title : ""}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      }

    </CustomersWrapper>
  );
};

export default Customers;
