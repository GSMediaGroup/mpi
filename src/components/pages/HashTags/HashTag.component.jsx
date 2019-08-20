import React from 'react';

class HashTag extends React.Component {
    constructor(props) {
        super(props);
    }

    /* 
     * This function generate hashTags
     * RETURN : Array of hashTags
     */
    generateHash = (tagsArray) => {
        return tagsArray.map(i => { return '#' + i.toString().toLowerCase() });
    }

    /* 
     * This function generate random number in given range
     * RETURN : Number
     */
    generateRandomNumberFromGivenRange = (start, end) => {
        return Math.floor(Math.random() * (end - start) + start);
    }

    /* 
     * This function generate random spaces for tags
     * (with margin random attribute)
     *  RETURN : Array of that format => [{tag : "hashTag", options : {html-css options}}]:
     */
    generateRandomSpacesForTags = (tagsArray) => {
        let spacesAndTags = [];

        for (const tag of tagsArray) {
            // create options for each tag
            let currentTagOptions = {
                tag: tag,
                options: {}
            };
            // created the random margin for tags
            currentTagOptions.options.margin =  this.generateRandomNumberFromGivenRange(0, 50) + 'px';

            spacesAndTags.push(currentTagOptions);
        }

        return spacesAndTags;
    }

    render() {
        /* 
         * Hashtags will come from props
         * And Will be without < # > symbol:
         * Title and description in circle will come from props too.
         */
        const [tags, title, description] = [
            this.props.tags,
            this.props.title.toUpperCase(),
            this.props.description.toUpperCase()
        ];

        return (

            <div className="container">
                <div className="main">
                    {/* start circle area */}
                    <div className="we-care-circle">
                        <div className="circle">
                            <div className="title">{title}</div>
                            <div className="description"> {description}</div>
                        </div>
                    </div>
                    {/*    end circle are   */}

                    {/* start hashtags area */}
                    <div className="hashTags">
                        {
                            /* 
                             * generateHash function here gives the tags and return hashtags array
                             * after that generateRandomSpacesForTags function gives that array and return array of tags with those css options  
                             * like this => [{tag : "hashTag", options : {html-css options}}]:
                             * after that will be render in html content
                             */
                             this.generateRandomSpacesForTags(this.generateHash(tags)).map((hashTag, index) => {
                                return (
                                    <div key={index} className="tags" style={{ ...hashTag.options }}>
                                        {hashTag.tag};
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* end hashtags area */}
                </div>
            </div>
        );
    }
}

export default HashTag;