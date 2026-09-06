import React, { useState, useEffect, useRef } from "react";
import { withPrefix } from "gatsby";
// import { Link } from "gatsby";

import { Container, Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import VintageBox from "../../../reusecore/VintageBox";
import BGImg from "../../../components/BGImage";
import ReactPlayer from "react-player/youtube";
// import mesheryPlayground from "./meshery-playground-kanvas.png";
import videoThumbnail from "./meshery-infrastructure-as-diagram.webp";

import { FaMapMarkedAlt } from "@react-icons/all-files/fa/FaMapMarkedAlt";
import { BsArrowUpRight } from "@react-icons/all-files/bs/BsArrowUpRight";
import playIcon from "../../../assets/images/homePage-images/play-button.webp";

import Banner1SectionWrapper from "./banner4.style";

// import kanvasVideo from "../../../assets/video/meshery/kanvas/kanvas-short-consul.mp4";
import useHasMounted from "../../../utils/useHasMounted";

const heroImageSrc = withPrefix("/images/lite/poster.webp");

// Transparent 1x1 GIF - the <picture> fallback below only shows this when no
// <source> matches (i.e. on mobile, where the whole .video-col is hidden via
// CSS anyway), so mobile never fetches the real ~200KB desktop thumbnail.
const HERO_VIDEO_POSTER_FALLBACK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7";

const Banner1 = (props) => {
  const [videoReady, setVideoReady] = useState(false);
  const [isDesktopViewport, setIsDesktopViewport] = useState(false);
  const thumbnailRef = useRef(null);

  const hasMounted = useHasMounted();

  // Set video as ready immediately after mount to avoid loading message
  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    // .video-col is CSS-hidden below 768px, so ReactPlayer (and the real
    // thumbnail it preloads) should never be created on mobile - otherwise
    // hydration would still fetch both, defeating the payload-avoidance the
    // SSR poster fallback exists for.
    const isDesktop = window.innerWidth >= 768;
    setIsDesktopViewport(isDesktop);
    if (!isDesktop) {
      return;
    }

    // Force the video to be marked as ready after a short delay
    // This ensures that even if events don't fire, the loading message will disappear
    const timer = setTimeout(() => {
      setVideoReady(true);
    }, 1000);

    // Preload the thumbnail
    const img = new Image();
    img.src = videoThumbnail;
    img.onload = () => {
      // Mark video as ready when thumbnail loads
      setVideoReady(true);
    };

    return () => clearTimeout(timer);
  }, [hasMounted]);

  // Multiple handlers to ensure the video gets marked as ready
  const handleVideoReady = () => {
    setVideoReady(true);
  };

  const handleThumbnailClick = () => {
    // Set ready when user clicks on thumbnail
    setVideoReady(true);
  };

  return (
    <Banner1SectionWrapper {...props}>
      <BGImg title="heroImage" src={heroImageSrc}>
        <Row style={{ marginRight: 0 }}>
          <Col $sm={4} $lg={6} className="section-title-wrapper text-col">
            <Container $fullWidthSM>
              <SectionTitle
                className="section-title"
                $leftAlign={true}
                $UniWidth="100%"
              >
                <h1>Kubernetes is better with friends</h1>
                <h2>Collaborate to innovate</h2>
              </SectionTitle>
              <span className="vintage-box-container">
                <VintageBox $right={true} $vintageOne={true}>
                  <Button
                    $primary
                    className="banner-btn one"
                    title="Learn about Kanvas"
                    $url="/cloud-native-management/kanvas"
                  >
                    <FaMapMarkedAlt size={21} className="icon-left" />
                  </Button>
                  <Button
                    $secondary
                    className="banner-btn two"
                    title="Open in Playground"
                    $url="https://kanvas.new/"
                    $external={true}
                  >
                    <BsArrowUpRight size={21} className="icon-left" />
                  </Button>
                </VintageBox>
              </span>
            </Container>
          </Col>
          <Col $sm={4} $lg={6} className="section-title-wrapper video-col">
            <div
              className={`video-wrapper ${videoReady ? "video-loaded" : ""}`}
              ref={thumbnailRef}
              onClick={handleThumbnailClick}
            >
              {hasMounted && isDesktopViewport ? (
                <ReactPlayer
                  url="https://youtu.be/034nVaQUyME?si=Yya8m6i7JUoSdZm4"
                  playing
                  controls
                  light={videoThumbnail}
                  playIcon={
                    <img
                      src={playIcon}
                      className="playBtn"
                      loading="eager"
                      alt="Play"
                      role="button"
                      aria-label="Play"
                      style={{ fontSize: "24px" }}
                    />
                  }
                  width="100%"
                  height="100%"
                  className="embedVideo"
                  onReady={handleVideoReady}
                  onStart={handleVideoReady}
                  onPlay={handleVideoReady}
                  onBufferEnd={handleVideoReady}
                  onClickPreview={handleVideoReady}
                  config={{
                    youtube: {
                      playerVars: {
                        rel: 0,
                        modestbranding: 1,
                      },
                    },
                  }}
                />
              ) : (
                // Server-rendered stand-in for ReactPlayer's own light-mode
                // preview (which only mounts client-side, see hasMounted
                // above), so the desktop LCP image is present in the initial
                // HTML instead of waiting on hydration. <picture> keeps this
                // out of mobile's payload: .video-col is CSS-hidden below
                // 768px anyway, and no <source> matches there either, so
                // browsers never fetch the real thumbnail on mobile.
                <div className="embedVideo hero-video-poster">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={videoThumbnail}
                    />
                    <img
                      src={HERO_VIDEO_POSTER_FALLBACK}
                      alt="Kubernetes is better with friends - watch the video"
                      className="react-player__preview"
                      fetchPriority="high"
                    />
                  </picture>
                  <button
                    type="button"
                    className="playBtn"
                    aria-label="Play"
                    onClick={handleThumbnailClick}
                    style={{ background: "none", border: "none", padding: 0 }}
                  >
                    <img
                      src={playIcon}
                      loading="eager"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </BGImg>
    </Banner1SectionWrapper>
  );
};

export default Banner1;
