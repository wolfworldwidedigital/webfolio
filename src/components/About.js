import { Fragment, useState } from "react";
import AnimatedText from "./AnimatedText";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "David",
  lastName: "De Wolf",
  bithday: "23.04.1988",
  address: "Barcelona - Spain",
  phn: "+34 657 423 718",
  email: "admin@wolfworldwide.digital",
  serviceLists: [
    "Website Development",
    "Digital Experience",
    "Content Marketing",
    "Social Media Design",
    "Shared Web Hosting",
  ],
  skills: {
    programming: [
      { name: "WordPress", value: "95" },
      { name: "JavaScript", value: "80" },
      { name: "Angular", value: "90" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "Dutch", value: "100" },
      { name: "French", value: "90" },
    ],
  },
  education: [
    { year: "2014 - 2016", unv: "Oxford University", degree: "Master Degree" },
    { year: "2010 - 2014", unv: "Texas University", degree: "Bachelor Degree" },
    { year: "2008 - 2010", unv: "Simone College", degree: "Associate Degree" },
  ],
  working: [
    {
      year: "2021 - running",
      company: "Treated | WebCare Group",
      deg: "Customer Service EU",
    },
    { year: "2015 - 2018", company: "Avo Corporation", deg: "Content Manager" },
    { year: "2012 - 2015", company: "FC Barcelona", deg: "Football Player" },
  ],
  partnersLogos: [
    "img/partners/1.png",
    "img/partners/2.png",
    "img/partners/3.png",
    "img/partners/4.png",
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/1.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <AnimatedText />
                </h3>
              </div>
              <div className="text">
                  My name is <span>David De Wolf.</span> I am an enthusiastic, hardworking and committed individual,
                  with a proven track record of designing websites, providing accurate translations
                  and digital marketing.
                  I have strong technical skills, as well as excellent interpersonal skills.  I am eager
                  to be challenged in order to grow and expand on the skill-set I have gained
                  through my education and experience as a freelancer.
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
