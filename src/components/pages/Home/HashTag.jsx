import React, { Component } from 'react';
import HashTag from '../HashTags/HashTag.component';

class Tags extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const Title = "we care";
        const Description = `for your projects`;
        const Tags = [
            "helpfullteam",
            "responsibleattitude",
            "loveourjob", 
            "developingnewtechnologies", 
            "carefultesting", 
            "clearcoding",
            "helpfullteam",
            "responsibleattitude",
            "loveourjob", 
            "developingnewtechnologies", 
            "carefultesting", 
            "clearcoding",
            "consulting"];
        return (
            <section id="tags" className="sectionPaddingTop">
                <div className="m-0 h-100">
                    <HashTag tags={Tags} title={Title} description={Description} />
                </div>
            </section>
        );
    }
}

export default Tags;