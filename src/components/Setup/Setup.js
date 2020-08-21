import React from "react";
import {Spin, Result} from "antd";
import SetupForm from "./SetupForm";
import {SettingOutlined} from "@ant-design/icons/lib";


const Setup = ({setView}) => {
    const settingIcon = <SettingOutlined style={{fontSize: 64}} spin />
    return (
        <Result icon={<Spin indicator={settingIcon} />}
                title="Setup an Exam"
                subTitle="It's as easy as adding a section!"
        >
            <SetupForm setView={setView}/>
        </Result>
    )
}

export default Setup;