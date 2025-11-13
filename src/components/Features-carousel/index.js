const FeaturesCarousel = ({ features, heading }) => {
  return (
    <FeaturesWrapper>
      <div className="features-carousel">
        <h2 className="main-heading" style={{ marginTop: '20px' }}>
          {heading ? heading : "Features"}
        </h2>
        <Slider
          autoplay={true}
          autoplaySpeed={3500}
          arrows={false}
          dots={true}
          infinite= {true}
          speed="500"
          slidesToShow={1}
          slidesToScroll={1}
        >
          {features.map((feature, stableIdx) => (
            <div key={stableIdx}>
              <Feature Element="div" id={feature.id} title={feature.title} active>
                {feature.description}
              </Feature>
              <div className="terminal-wrapper">
                {features[stableIdx].content}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </FeaturesWrapper>
  );
};
