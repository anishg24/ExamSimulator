import React from "react";
import {Layout} from "antd";
import Exam from "./components/Exam/Exam";
import Info from "./components/Info/Info";
import "./App.css"
import Setup from "./components/Setup/Setup";

const {Content} = Layout;

const View = ({view, setView}) => {
    return (
        <Content>
            {view === "info" && <Info setView={setView}/>}
            {view === "setup" && <Setup setView={setView}/>}
            {view === "exam" && <Exam/>}
        </Content>
    )
}

export default View;