import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

import webDev from '../../../../images/devService.png';
import mobileDev from '../../../../images/mobileService.png';
import design from '../../../../images/designService.png';

import webDevBg from '../../../../images/devServiceBg.png';
import mobileDevBg from '../../../../images/mobileServiceBg.png';
import designBg from '../../../../images/designServiceBg.png';

import {DESIGN, MOBILE_DEVELOPMENT, WEB_DEVELOPMENT} from "./ServiceContentList";

export default class ServiceIconList extends Component {
    constructor(props) {
        super(props);
        this.bgChange = this.bgChange.bind(this);
    }

    bgChange(type) {
        return (event) => {
            this.props.onServiceTypeChange(type);
        };
    }

    render() {
        const activeType = this.props.type;

        const images = {
            [WEB_DEVELOPMENT]: {
                srcMain: webDev,
                srcActive: webDevBg,
                alt: `Web Development`,
                id: `webDev`
            },
            [MOBILE_DEVELOPMENT]: {
                srcMain: mobileDev,
                srcActive: mobileDevBg,
                alt: `Mobile Development`,
                id: `mobileDev`
            },
            [DESIGN]: {
                srcMain: design,
                srcActive: designBg,
                alt: `Design`,
                id: `design`
            },
        };

        return (
            <Row className="justify-content-between pt-5 pb-5 text-center serviceIcon">
                {
                    Object.keys(images).map((type, i) => {
                        let imgSrc = images[type].srcMain,
                            bottomBorder = ``;

                          if(activeType == type) {
                              imgSrc = images[type].srcActive;
                              bottomBorder = `bottomBorder`;
                          }

                          return (
                              <Col key={i} id={images[type].id} onClick={this.bgChange(type)}>
                                  <div className={`serviceIcon ${bottomBorder}`}>
                                      <img draggable={false} src={imgSrc} alt={images[type].alt} />
                                  </div>
                              </Col>
                          );
                    })

                }
            </Row>
        );
    }
}
