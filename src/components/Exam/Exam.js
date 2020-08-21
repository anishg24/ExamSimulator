import React, {useEffect, useState} from "react";
import {Layout} from "antd";
import ExamHeader from "./ExamHeader";
import ExamContent from "./ExamContent";
import './Exam.css';
import {useEventEmitter, useSessionStorageState} from "@umijs/hooks";
import Moment from 'moment';

const Exam = () => {
    const sections = JSON.parse(sessionStorage.getItem("sectionData"))["sections"];
    const [currentSection, setCurrentSection] = useSessionStorageState("currentSection", 0);
    const [numberQuestions, setNumberQuestions] = useState(sections[currentSection]["num_questions"]);
    const [sectionTime, setSectionTime] = useState(Moment.duration(sections[currentSection]["time"], "minutes").asSeconds());
    const toggle$ = useEventEmitter();

    return (
        <Layout>
            <ExamHeader toggle$={toggle$} setCurrentSection={setCurrentSection} time={sectionTime}/>
            <ExamContent number={numberQuestions} toggle$={toggle$}/>
        </Layout>
    );
}

export default Exam;