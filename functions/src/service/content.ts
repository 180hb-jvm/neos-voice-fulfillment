/**
 * Created by asiulik on 05.11.2019.
 */
import {
    SimpleResponse,
    MediaObject,
    Suggestions,
    LinkOutSuggestion,
    BasicCard,
    Button,
    Image,
} from 'actions-on-google';

import axios from 'axios';
import { getRandomArrElement } from '../helpers';
import { randomResponse } from '../data/content'
import {ContentElement, CONTENT_TYPES} from '../models/content'

export class ContentService {

    constructor(private baseUrl: string) {
    }

    async loadData(path: string): Promise<any> {
        const url = this.baseUrl + path;
        return axios.get(url).then(((contentResponseAll: any) => {
            const contentResponse = contentResponseAll.data.randomResponses ? getRandomArrElement(contentResponseAll.data.randomResponses) : getRandomArrElement(randomResponse);
            const contentElementActionsOnGoogle = contentResponse.dailyContentElement
                .map((dailyC: any) => this.mapContentElementToGoogleActionResponseType(dailyC));

            const response = {
                response: contentResponse,
                gaResponse: contentElementActionsOnGoogle
            };

            return response;
        }))
    }

    private mapContentElementToGoogleActionResponseType(contentElement: ContentElement) {
        switch (contentElement.type) {
            case CONTENT_TYPES.CONTENT_TYPE_SIMPLE_RESPONSE:
                return new SimpleResponse(contentElement.data);
                break;
            case CONTENT_TYPES.CONTENT_TYPE_AUDIO_RESPONSE:
                return new MediaObject(contentElement.data);
                break;
            case CONTENT_TYPES.CONTENT_TYPE_GIF_RESPONSE:
                return new BasicCard({
                    ...contentElement.data,
                    image: new Image({
                        url: contentElement.data.url,
                        alt: contentElement.data.alt,
                    }),
                });
                break;
            case CONTENT_TYPES.CONTENT_TYPE_IMAGE_RESPONSE:

                const cardData = {
                    ...contentElement.data,
                    image: new Image({
                        url: contentElement.data.url,
                        alt: contentElement.data.alt,
                    }),
                };

                if(contentElement.data.buttonUrl) {
                    cardData.buttons = new Button({
                       title: contentElement.data.buttonText,
                        url: contentElement.data.buttonUrl
                    })
                }

                return new BasicCard(cardData);
                break;
            case CONTENT_TYPES.CONTENT_TYPE_QUESTION_RESPONSE:
                return new BasicCard({
                    ...contentElement.data,
                    image: new Image({
                        url: contentElement.data.url,
                        alt: contentElement.data.alt,
                    }),
                });
                break;
            case CONTENT_TYPES.CONTENT_TYPE_SUGGESTIONS_RESPONSE:
                return new Suggestions(contentElement.data);
                break;
            case CONTENT_TYPES.CONTENT_TYPE_LINK_OUT_RESPONSE:
                return new LinkOutSuggestion(contentElement.data);
                break;
            default:
                console.error('contentElement.type not supported', contentElement.type);
                return new SimpleResponse(contentElement.data);
        }
    }

}

