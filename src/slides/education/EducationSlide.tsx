import SlideShow from "../SlideShow"
import educationData from './_education'
import './default.scss'

const EducationSlide = () => {
    return(
        <SlideShow data={educationData} />
    )
}

export default EducationSlide;