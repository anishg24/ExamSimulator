import React, {useEffect, useState} from "react";
import {Avatar, Dropdown, Affix} from "antd";
import {ClockCircleOutlined} from '@ant-design/icons';
import {useSessionStorageState, useUpdateEffect} from "@umijs/hooks";

const TimerMenu = ({toggle$}) => {
    const [timerActive, setTimerActive] = useState();
    const toggleTimer = () => {
        toggle$.emit()
        setTimerActive(sessionStorage.getItem("timerActive") === "true");
    }

    return (
        <Affix offsetBottom={10} style={{textAlign: "right", marginRight: 5}}>
            <Avatar className={`timer-menu ${timerActive ? 'active': 'not-active'}`}
                    size={40}
                    icon={<ClockCircleOutlined />}
                    onClick={() => toggleTimer()}
            />
        </Affix>
    )
}

export default TimerMenu;