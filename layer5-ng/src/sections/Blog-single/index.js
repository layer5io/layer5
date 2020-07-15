import React from "react";
import { Link } from "gatsby";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialPinterest,
  TiSocialLinkedin
} from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Container, Row, Col } from "../../reusecore/Layout";
import VintageBox from "../../reusecore/VintageBox";
import Button from "../../reusecore/Button";
import PageHeader from "../../reusecore/PageHeader";
import Sidebar from "../Blog-sidebar";

import BlogThumb from "../../assets/images/blog/post/blog-post-5.png";

import AuthorThumb2 from "../../assets/images/app/testimonial/testimonial-thumb-2.jpg";
import AuthorThumb3 from "../../assets/images/app/testimonial/testimonial-thumb-3.jpg";
import AuthorThumb4 from "../../assets/images/app/testimonial/testimonial-thumb-4.jpg";
import AuthorThumb5 from "../../assets/images/app/testimonial/testimonial-thumb-5.jpg";

import BlogPageWrapper from "./blogSingle.style";

const BlogSingle = () => {
  return (
    <BlogPageWrapper>
      <PageHeader
        title="Rhetoric me avoid may lowest even quite first."
        categories={["App,", "Landing"]}
        author={{ name: "Alexa", profile: "#" }}
      />
      <div className="single-post-wrapper">
        <Container>
          <Row>
            <Col xs={12} lg={8}>
              <Row>
                <Col xs={12}>
                  <div className="single-post-block">
                    <div className="post-thumb-block">
                      <img src={BlogThumb} alt="prime blog page" />
                      <div className="post-meta">
                        <span>
                          <em> 15 </em> SEP
                        </span>
                      </div>
                    </div>
                    <div className="post-content-block">
                      <p className="entry-one">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mulheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremula na so fallava.
                        Evitava tropheu curiosa.
                      </p>
                      <p className="entry-two">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mulheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremula na so fallava.
                        Evitava tropheu curiosa ou agitado os acceite si
                        assiste. Voz veio veja tez digo cres.
                      </p>
                      <blockquote>
                        You never change things by fighting the existing
                        reality.To change something, build a new model.
                      </blockquote>
                      <p className="entry-three">
                        Ao corrida ar queriam reparae do imposta acoitar do.
                        Qualidades intimativa aferventar ira acompanhar mau
                        capitulada enfraquece. Em apavorar ficarmos cantante se
                        ia blasonou eu comprido.
                      </p>

                      <p className="entry-four">
                        Coracoes costumes grandeza com observou horrivel mas.
                        Amor tive fara de dado esse em. Ve es couberam oh
                        garrafal mulheres. Dourados duzentos voz lustroso diz
                        discutir ahi. Luzindo no do tremula na so fallava.
                        Evitava tropheu curiosa ou agitado os acceite si
                        assiste. Voz veio veja tez digo cres.
                      </p>
                    </div>
                    <div className="post-info-block">
                      <div className="tags">
                        <span>Tags:</span>
                        <Link to="#">App</Link>
                        <Link to="#">Landing</Link>
                        <Link to="#">SASS</Link>
                      </div>
                      <div className="share">
                        <Link to="#">
                          <TiSocialFacebook />
                        </Link>
                        <Link to="#">
                          <TiSocialTwitter />
                        </Link>
                        <Link to="#">
                          <TiSocialPinterest />
                        </Link>
                        <Link to="#">
                          <TiSocialLinkedin />
                        </Link>
                        <span>:Share</span>
                      </div>
                    </div>

                    <div className="post-comment-wrapper">
                      <h2 className="block-title">5 Comments</h2>
                      <ul>
                        <li>
                          <div className="post-comment-block">
                            <div className="author-avatar">
                              <img
                                src={AuthorThumb2}
                                alt="prime comments author"
                              />
                            </div>
                            <div className="comment-body">
                              <div className="comment-body-inner">
                                <h3>
                                  Amrita<span>Aug, 05, 2020</span>
                                </h3>
                                <div className="replay">
                                  <Link to="#">
                                    Replay <IoIosArrowRoundForward />
                                  </Link>
                                </div>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Finalmente vol sol justamente crematorio vil
                                  nos. Bem com sido esse case alem aos.Amor tive
                                  fara de dado esse em.
                                </p>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="post-comment-block">
                                <div className="author-avatar">
                                  <img
                                    src={AuthorThumb3}
                                    alt="prime comments author"
                                  />
                                </div>
                                <div className="comment-body">
                                  <div className="comment-body-inner">
                                    <h3>
                                      {" "}
                                      jacqueline <span>Aug, 05, 2020</span>{" "}
                                    </h3>
                                    <div className="replay">
                                      <Link to="#">
                                        Replay <IoIosArrowRoundForward />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="comment-content">
                                    <p>
                                      Finalmente vol sol justamente crematorio
                                      vil nos. Bem com sido esse case alem
                                      aos.Amor tive fara de dado esse em.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="post-comment-block">
                                <div className="author-avatar">
                                  <img
                                    src={AuthorThumb4}
                                    alt="prime comments author"
                                  />
                                </div>
                                <div className="comment-body">
                                  <div className="comment-body-inner">
                                    <h3>
                                      {" "}
                                      Jennifer <span>Aug, 05, 2020</span>{" "}
                                    </h3>
                                    <div className="replay">
                                      <Link to="#">
                                        Replay <IoIosArrowRoundForward />
                                      </Link>
                                    </div>
                                  </div>
                                  <div className="comment-content">
                                    <p>
                                      Finalmente vol sol justamente crematorio
                                      vil nos. Bem com sido esse case alem
                                      aos.Amor tive fara de dado esse em.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="post-comment-block">
                            <div className="author-avatar">
                              <img
                                src={AuthorThumb5}
                                alt="prime comments author"
                              />
                            </div>
                            <div className="comment-body">
                              <div className="comment-body-inner">
                                <h3>
                                  {" "}
                                  William<span>Aug, 05, 2020</span>{" "}
                                </h3>
                                <div className="replay">
                                  <Link to="#">
                                    Replay <IoIosArrowRoundForward />
                                  </Link>
                                </div>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Finalmente vol sol justamente crematorio vil
                                  nos. Bem com sido esse case alem aos.Amor tive
                                  fara de dado esse em.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="comment-box-wrapper">
                      <h2 className="block-title">Leave a Comment</h2>
                      <p>
                        Sing in to post your comment or singup if you dont have
                        any account.
                      </p>
                      <form>
                        <div className="form-inline">
                          <input type="text" placeholder="Name*" />
                          <input type="email" placeholder="Email*" />
                        </div>
                        <div className="form-group">
                          <input type="text" placeholder="Website(Optional)" />
                        </div>
                        <textarea
                          rows="10"
                          cols="50"
                          placeholder="Comment"
                        ></textarea>
                        <VintageBox
                          right={true}
                          vintageTwo={true}
                          position="relative"
                        >
                          <Button>Post Comment</Button>
                        </VintageBox>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} lg={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogSingle;
