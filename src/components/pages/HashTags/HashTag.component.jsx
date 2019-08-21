import React from 'react';
import { withTranslation } from 'react-i18next';
import ReactContactForm from 'react-mail-form';



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
        let status = '1';
        for (const tag of tagsArray) {
            // create options for each tag
            let currentTagOptions = {
                tag: tag,
                options: {}
            };

            // created the random margin for tags
            // currentTagOptions.options.left = this.generateRandomNumberFromGivenRange(0, 50) + 'px';

            switch (status) {
                case '1':
                    currentTagOptions.options.left = '10%';
                    currentTagOptions.options.top = '25%';
                    currentTagOptions.options.fontSize = '15px';
                    status = '2';
                    break;
                case '2':
                    currentTagOptions.options.right = '10%';
                    currentTagOptions.options.top = '30%';
                    currentTagOptions.options.fontSize = '12px';
                    status = '3';
                    break;
                case '3':
                    currentTagOptions.options.left = '0';
                    currentTagOptions.options.top = '50%';
                    currentTagOptions.options.fontSize = '20px';
                    status = '4';
                    break;
                case '4':
                    currentTagOptions.options.right = '0';
                    currentTagOptions.options.top = '55%';
                    currentTagOptions.options.fontSize = '18px';
                    currentTagOptions.options.color = 'rgb(53, 59, 91)';
                    status = '5';
                    break;
                case '5':
                    currentTagOptions.options.left = `50%`;
                    currentTagOptions.options.top = '70%';
                    currentTagOptions.options.fontSize = '17px';
                    status = '6';
                    break;
                case '6':
                    currentTagOptions.options.left = `calc(50% - 300px)`;
                    currentTagOptions.options.bottom = '20%';
                    currentTagOptions.options.fontSize = '16px';
                    status = '7';
                    break;
                case '7':
                    currentTagOptions.options.left = `50%`;
                    currentTagOptions.options.bottom = '0';
                    currentTagOptions.options.fontSize = '19px';

                    status = '8';
                    break;
                case '8':
                    currentTagOptions.options.left = `70%`;
                    currentTagOptions.options.bottom = '15%';
                    currentTagOptions.options.fontSize = '18px';
                    status = '9';
                    break;
                case '9':
                    currentTagOptions.options.left = `15%`;
                    currentTagOptions.options.bottom = '5%';
                    currentTagOptions.options.fontSize = '18px';
                    status = '10';
                    break
                case '10':
                    currentTagOptions.options.left = `85%`;
                    currentTagOptions.options.bottom = '5%';
                    currentTagOptions.options.fontSize = '13px';
                    status = '11';
                default:
                    break;
            }

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
            this.props.t(this.props.title).toUpperCase(),
            this.props.t(this.props.description).toUpperCase()
        ];

        return (

            <div className="container">
                <div className="main">
                    {/* start circle area */}
                    <div className="we-care-circle">
                        {
                            this.generateRandomSpacesForTags(this.generateHash(tags)).map((hashTag, index) => {
                                return (
                                    <div key={index} className="tags" style={{ ...hashTag.options }}>

                                        {hashTag.tag}
                                    </div>
                                )
                            })
                        }
                        <div className="circle">
                            <div className="title">{title}</div>
                            <div className="description"> {this.props.t(description)}</div>
                        </div>
                    </div>
                    {/*    end circle are   */}

                    {/* start hashtags area */}
                    <div className="hashTags">
                    <ReactContactForm to="edgar.khachatryan95@gmail.com" />
                        {
                            /* 
                             * generateHash function here gives the tags and return hashtags array
                             * after that generateRandomSpacesForTags function gives that array and return array of tags with those css options  
                             * like this => [{tag : "hashTag", options : {html-css options}}]:
                             * after that will be render in html content
                             */
                            // this.generateRandomSpacesForTags(this.generateHash(tags)).map((hashTag, index) => {
                            //     return (
                            //         <div key={index} className="tags" style={{ ...hashTag.options }}>
                            //             {hashTag.tag}
                            //         </div>
                            //     )
                            // })
                        }
                    </div>
                    {/* end hashtags area */}
                </div>
            </div>
        );
    }
}

export default withTranslation()(HashTag);