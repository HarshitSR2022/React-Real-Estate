import React, { useState } from "react";
import "./Projects.css";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";
import projectImg1 from "../assets/project_img_1.jpg";
import projectImg2 from "../assets/project_img_2.jpg";
import projectImg3 from "../assets/project_img_3.jpg";
import projectImg4 from "../assets/project_img_4.jpg";
import projectImg5 from "../assets/project_img_5.jpg";
import projectImg6 from "../assets/project_img_6.jpg";

const Projects = () => {
  const imagesArray = [
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6,
  ];

  const [currImgIndex, setCurrImgIndex] = useState(2);

  const handlePrevImg = () => {
    if (currImgIndex === 2) {
    } else {
      setCurrImgIndex(currImgIndex - 1);
    }
  };

  const handleNextImg = () => {
    
    

    // if (currImgIndex === 5) {
    // } else {
    //   setCurrImgIndex(currImgIndex + 1);
    // }
  };

  return (
    <motion.div
      id="Projects"
      className="about"
      initial={{opacity:0, y:200}} transition={{duration:1.5}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
    >
      <h1>
        Projects <span>Completed</span>
      </h1>
      <p>
        Crafting Spaces, Building Legacies-Explore <br /> Our Portfolio
      </p>

      <div className="arrows">
        <button onClick={handlePrevImg}>
          <img src={assets.left_arrow} alt="" />
        </button>
        <button onClick={handleNextImg}>
          <img src={assets.right_arrow} alt="" />
        </button>
      </div>

      <div className="images-container">
        <div className="images">
          {/* {projectsData.map((projects,index)=>{
               return <div key={index} className='inside-map'>
                    <img src={projects.image} alt={projects.title} />
                    <div className='d'>
                        <div className="t">
                            <h2>{projects.title}</h2>
                            <p>{projects.price} <span>|</span> {projects.location}</p>
                        </div>
                    </div>
                </div>
            })} */}

            <div className="inside-map">
              <img src={imagesArray[0]} alt="" />
              <div className="d">
                <div className="t">
                  <h2>{projectsData[0].title}</h2>
                  <p>{projectsData[0].price} <span>|</span> {projectsData[0].location}</p>
                </div>
              </div>
            </div>
            <div className="inside-map">
              <img src={imagesArray[1]} alt="" />
              <div className="d">
                <div className="t">
                  <h2>{projectsData[1].title}</h2>
                  <p>{projectsData[1].price} <span>|</span> {projectsData[1].location}</p>
                </div>
              </div>
            </div>
            <div className="inside-map">
              <img src={imagesArray[2]} alt="" />
              <div className="d">
                <div className="t">
                  <h2>{projectsData[2].title}</h2>
                  <p>{projectsData[2].price} <span>|</span> {projectsData[2].location}</p>
                </div>
              </div>
            </div>
            <div className="inside-map">
              <img src={imagesArray[3]} alt="" />
              <div className="d">
                <div className="t">
                  <h2>{projectsData[3].title}</h2>
                  <p>{projectsData[3].price} <span>|</span> {projectsData[3].location}</p>
                </div>
              </div>
            </div>  

          {/* <div className="inside-map" >
            <div className="d">
              <div className="t"> */}
                {/* <img src={imagesArray[currImgIndex - 2]} alt="" />
                <img src={imagesArray[currImgIndex - 1]} alt="" />
                <img src={imagesArray[currImgIndex]} alt="" /> */}
              {/* </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Image Slider */}
      {/* <div className='baigan'>
      <img src={imagesArray[currImgIndex-2]} alt="" />
      <img src={imagesArray[currImgIndex-1]} alt="" />
      <img src={imagesArray[currImgIndex]} alt="" />
    </div> */}
    </motion.div>
  );
};

export default Projects;
