import React, {useState} from "react";
import {Result, Button, Modal, Badge, Alert, Typography} from "antd";
import {FormOutlined, CloseOutlined} from "@ant-design/icons/lib";
import InfoModal from "./InfoModal";
import FeatureList from "./FeatureList";
import "./Info.css"

const {Title} = Typography

const InfoTitle = () => {
    return (
        <Badge.Ribbon text={"ALPHA"} style={{marginRight: "43%", marginBottom: "10px"}} placement={"end"} color={"red"}>
            Exam Simulator
        </Badge.Ribbon>
    )
}

const AlphaAlert = () => {
    return (
        <>
            <br/>
            <Alert message={<Title level={3}>Alpha Release</Title>}
                   description={"Not all functionality shown below is implemented. This is a proof of concept release. Use with caution!"}
                   type={"error"}
                   closable
                   showIcon
                   style={{textAlign: "left"}}
            />
        </>
    )
}


const Info = ({setView}) => {
    const [infoModalIsVisible, setInfoModalIsVisible] = useState(false);

    return (
        <>
            <Result
                icon={<FormOutlined/>}
                title={<InfoTitle/>}
                subTitle="An easy way for you to take a timed multiple choice exam."
                extra={[
                    <Button type={"dashed"} onClick={() => setInfoModalIsVisible(true)}>Learn More</Button>,
                    <Button type={"primary"} onClick={() => setView("setup")}>Get Started</Button>,
                    <br/>,
                    <AlphaAlert/>
                ]}
            >
                <Modal title={"Learning More..."}
                       centered={true}
                       visible={infoModalIsVisible}
                       onOk={() => setInfoModalIsVisible(false)}
                       onCancel={() => setInfoModalIsVisible(false)}
                       okText={"Sounds good!"}
                       cancelText={"Ok..."}
                >
                    <InfoModal/>
                </Modal>
                <div>
                    <FeatureList/>
                </div>
            </Result>
        </>
    )
}

export default Info;