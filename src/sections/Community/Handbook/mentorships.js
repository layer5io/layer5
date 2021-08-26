import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import styled from "styled-components";
import {Link} from "gatsby";
import Slider from "react-slick";
import SCA from "./images/scaIcon.jpg";
import MLH from "./images/mlh.svg";
import LFX from "./images/Linux_Foundation_logo.png";
import Hacktoberfest from "./images/hacktoberfest2020.png";
import GSOC from "./images/gsoc.png";
import GSOD from "./images/gsod.png";
import TOC from "../../../components/handbook-navigation/index";


const ConductWrapper = styled.div`
    padding: 0 5rem 3rem 20rem;
    margin-top: -25rem; 
    .rows{
      margin-top:2rem;
    } 
    h2{
      color:#00d3a9;
      margin-bottom: 1rem;
      font-size: 25px;
    }
    h3{
      color:#00d3a9;
      margin-bottom: 1rem;
      font-size: 23px;
    }
    p{
      font-size: 17px;
    }
   .showcase{
	    text-align: center;
	    margin: 4rem 0;
	    .slider{
		margin: auto;
		width: 60%;
		.slick-arrow{
		    margin: 0 -1.25rem 0 -3.125rem;
		}	
		.slick-arrow:before{	
		    color: ${props => props.theme.primaryColor};
		    font-size: 2rem;
		    display: inline-block;
		}
		.slick-arrow:hover:before{	
		    color: ${props => props.theme.secondaryColor};	
		}
	    }
    }
    .poster{
	  width: 20rem;
	  margin:0 auto;
	  margin-bottom: 2rem;
    }
    .gdocs{
	  margin: 0 auto;
    	  margin-bottom: 2rem;      
	  width: 10rem;
	  height:10rem;
    }
    .page-main-para{
          text-align:center;
          font-family: "Qanelas Soft", "Open Sans", sans-serif;
          letter-spacing:1px;
    }
    
    @media screen and (max-width:750px){
          padding: 0rem 3rem;
    	  margin-top: 0; 
          .showcase{
	    margin-bottom: 2rem;
	    .slider{
		width: 80%;
          }
    }

    @media screen and (max-width: 475px){
          padding: 0rem 1.5rem;
	  .showcase .slider .slick-arrow{
		margin: 0 -.25rem 0 -1.25rem;
          }
    }
`;


const MentorshipPrograms= () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Mentorship Programs</h1>
      </div>   
      <TOC />
      <ConductWrapper>
        <Container>
          <p className="page-main-para">As an open-source organization and a community, we participate in different mentorships programs where project ideas are submitted for people to contribute to during the program. </p>
        </Container>
        <div className="showcase">
          <Slider
            className="slider"
            arrows={true}
            infinite={false}
            speed="500"
            slidesToScroll={1}
          > 
            <div className="box">  
              <h2>Google Summer of Code</h2>
              <img className="poster" src={GSOC}/>
              <p>Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open-source organization on a 10-week programming project during their break from school.</p>
              <p>Every Summer, Layer5 submits a new project idea for student developers to contribute to for a particular period. Also, stipends are awarded at the end of the program to the contributors.</p>
              <p>The critical component of these projects is our Community. This community, which you will join as a participant in Google Summer of Code, improves the world of diverse cloud-native systems. Your contributions will affect people you've never met. The Layer5 community includes software engineers, researchers, students, artists, system administrators, operators, and web designers, all of whom will be happy to help you get started.</p>
              <p>We believe that all contributors should expect and be part of a safe and friendly environment for constructive contribution. We can more effectively and successfully compare and challenge different ideas to find the best solutions for advancement while building our community’s size, diversity, and strength.</p>
              <p>Learn more about the program and how to participate <a href="https://summerofcode.withgoogle.com/">here</a></p>
            </div>
            <div className="box">
              <h2>Google Season Of Docs</h2>
              <img className="poster gdocs" src={GSOD}/>
              <p>Google Season of Docs provides support for open source projects to improve their documentation and allows professional technical writers to gain experience in open source. This is to raise awareness of open source, docs, and technical writing. Google season of docs started in 2019.</p>
              <p>Each year, layer5 submits a new project idea for technical writers to contribute to for a particular period. Also, stipends are awarded to the contributors.</p>
              <h3>Impact of Google Season of Docs Participation</h3>
              <p>Layer5 and its mentors have participated as mentors in GSoD 2020, GSoC 2019, 2020, and 2021. Mentoring and seeing others learn and grow is what Layer5 is all about - it’s a platform for mentees to hoist themselves up on and leapfrog from. We’re a platform for shared success.</p>
              <p>Technical writers and other contributors are what comprise Layer5 - an open organization built for the community by the community. Many student contributors have been placed into new jobs with technology companies like Red Hat, Microsoft, and VMware, to name a few larger organizations. Layer5 expects much from interns, and in return, we put them on stage at DockerCon and KubeCon. We promote them and uplift their works. There are many examples of this on the layer5.io websites. Several former interns are now project maintainers.</p>
              <p>Learn more about the program and how to participate, <a href="https://developers.google.com/season-of-docs">Here</a></p>
            </div>  
            <div className="box">  
              <h2>Hacktoberfest</h2>
              <img className="poster" src={Hacktoberfest} height= "300px" width= "100px"/>
              <p>Hacktoberfest is open to everyone in the global community. Whether you’re a developer, student learning to code, event host, or a company of any size, you can help drive the growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge. </p>
              <p>Every year in October, Hacktoberfest is held. So far, Layer5 has been a participant organization with different projects and issues such as first-timers-only, help-wanted, and good-first-issues for open-source contributors. This is to help towards completing the Hacktoberfest challenge.
                  Also, meetups are held across October to introduce you to Layer5 project repositories and help you get started on those pull requests. 
              </p>
              <p>Learn more about the program and how to participate, <a href="https://hacktoberfest.digitalocean.com/">Here</a></p>
            </div>
            <div>
              <h2>Linux Foundation</h2>
              <img className="poster" src={LFX}/>
              <p>The Linux Foundation (Mentorship Programs) are designed to help developers with the necessary skills–many of whom are first-time open source contributors–experiment, learn, and contribute effectively to open source communities. 
 Layer5, as an organization, has been participating in the Linux Foundation mentorship program since 2019.
              </p>
              <p>The program offers mentorships, program certification, and also stipend for the mentee.</p>
              <p>Learn more about the program and how to participate, <a href="https://lfx.linuxfoundation.org/tools/mentorship">Here</a></p>
            </div>
            <div>
              <h2>MLH Fellowship Program</h2>
              <img className="poster" src={MLH}/>
              <p>The MLH Fellowship is a 12-week internship alternative for students interested in becoming software engineers. Instead of an internship at a single company, you'll contribute to the type of Open Source projects that every company depends on. The programs pair fun, educational curriculum with practical experience that you can put on your resume right away. It's collaborative, remote, and happens under the guidance of expert mentors.</p>
              <p>Layer5, as an organization, participates in the program by submitting a project idea for contributors to work on and also provides mentorship during the time phase given.</p>
              <p>Learn more about the program and how to participate, <a href="https://fellowship.mlh.io/">Here</a></p>
            </div>
            <div>
              <h2>She Code Africa Contributhon</h2>
              <img className="poster" src={SCA}/>
              <p>The She Code Africa Contributhon Program is a virtual open-source boot camp for four weeks where ladies get the opportunity to work with open source organizations on selected projects with dedicated mentorship. On completion of the program, a stipend of $500 is awarded. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsors and mentor open source organizations to work on projects used by millions of people worldwide.</p>
              <p>Layer5 is participating in Contributhon as a Mentoring Organization. This program engages more with the open-source ecosystem in Africa and diversifies contributions. Most especially, we love making an impact. Various project ideas are submitted for the selected ladies to contribute during the one-month time phase.</p>
              <p>Learn more about the program and how to participate,<a href="https://sites.google.com/shecodeafrica.org/contributhon/home">Here</a></p>
            </div>
           
          </Slider>
        </div> 
    

        
      </ConductWrapper>       
    </HandbookWrapper>
  );
};
  
export default MentorshipPrograms;
