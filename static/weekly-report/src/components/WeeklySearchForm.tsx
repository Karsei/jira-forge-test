import React from "react"
import {Option, Select} from "@forge/ui"
import ForgeUI, { UserPicker } from "@forge/ui"

const WeeklySearchForm = function () {
    return (
        <div>
            <Select label="With a defaultSelected" name="milestone">
                <Option defaultSelected label="Milestone 1" value="weekly" />
                <Option label="Milestone 2" value="weekl" />
                <Option label="Milestone 3" value="three" />
            </Select>
            <UserPicker label="User" name="user" />
        </div>
    )
}

export default WeeklySearchForm