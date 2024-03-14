import SlideData from '../SlideData'
import BinarSlide from './BinarSlide';
import HighSchoolSlide from "./HighSchoolSlide";
import UniSlide from './UniSlide';

const highSchoolData: SlideData = {
    name: 'SMAN 6 BOGOR',
    category: 'EDUCATION',
    title: 'SMA NEGERI 6 BOGOR',
    time: 'Math & Natural Science | 2017-2020',
    description: '',
    content: <HighSchoolSlide />
}

const UniData: SlideData = {
    name: 'UNIVERSITAS SUMATERA UTARA',
    category: 'EDUCATION',
    title: 'COMP-SCIENCE BACHELOR DEGREE - USU',
    time: 'GPA 3.84 - CUM LAUDE | August 2020 - March 2024',
    description: '',
    content: <UniSlide />
}

const binarData: SlideData = {
    name: 'BINAR ACADEMY',
    category: 'EDUCATION',
    title: 'FULLSTACK WEB DEVELOPMENT - BINAR ACADEMY',
    time: 'HARDSKILL 5.0 & SOFTSKILL 4.9 | August 2022 - January 2023',
    description: '',
    content: <BinarSlide />
}

export default [
    UniData,
    binarData,
    highSchoolData
]