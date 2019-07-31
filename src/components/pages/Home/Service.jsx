import React, {Component} from "react";
import ServiceItem from "./Service/ServiceItem"

export default class Service extends Component {
    render() {
        return (
            <div>
                Services

                <div>
                    <ServiceItem logo={"aaa"} title={"aaa"} options={["a1", "a2", "a3"]} />
                    <ServiceItem logo={"aaa"} title={"aaa"} options={["a1", "a2", "a3"]} />
                    <ServiceItem logo={"aaa"} title={"aaa"} options={["a1", "a2", "a3"]} />
                </div>
            </div>
        );
    }
}