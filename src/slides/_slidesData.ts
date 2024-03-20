import SlideData from "./SlideData";
import certificationData from "./certification/_certification";
import educationData from "./education/_education";
import experienceData from "./experience/_experience";
import githubData from "./github/_github";
import achievementData from "./achievement/_achievement";
import projectData from "./project/_project";

const slidesData: Array<SlideData> = [
    experienceData,
    educationData,
    certificationData,
    projectData,
    achievementData,
    githubData
]

export default slidesData;