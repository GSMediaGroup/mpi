import React, { Component } from 'react';
import HashTag from '../HashTags/HashTag';

class Tags extends Component {
    render() {
        const Title = "HASHTAGS_TITLE";
        const Description = "HASHTAGS_DESCRIPTION";
        const Tags = [
            "responsibleattitude",
            "goodservice",
            "responsivestaff",
            "carefultesing",
            "loveourjob",
            "developingnewtechnologies",
            "meetingdeadlines",
            "consulting",
            "helfulteam",
            "clearcoding"
        ];

        return (
            <section id="tags" className="sectionPaddingTop mt-5">
                <div className="m-0 h-100">
                    <HashTag tags={Tags} title={Title} description={Description} />
                </div>
            </section>
        );
    }
}

export default Tags;