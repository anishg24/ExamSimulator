import React from "react";
import {Layout, Row, Col} from "antd";
import Timer from "./Timer";

const {Header} = Layout;

const ExamHeader = ({toggle$, time, setCurrentSection}) => {
    return (
        <Header style={{position: "fixed", zIndex: 1, width: '100%'}}>
            <Row gutter={16}>
                <Col span={6}>
                    <h1 style={{color: "white"}}>
                        Exam Simulator
                    </h1>
                </Col>
                <Col span={6} offset={12}>
                    <Timer length={time} toggle$={toggle$} setCurrentSection={setCurrentSection}/>
                </Col>
            </Row>
        </Header>
    )
}

export default ExamHeader;