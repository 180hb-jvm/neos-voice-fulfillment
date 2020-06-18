/**
 * Created by asiulik on 05.11.2019.
 */

import {ContentElement, DailyContentResponse} from '../models/content'

// const SimpleResponseContentElement: ContentElement[] = [
//     {
//         type: 'SIMPLE_RESPONSE',
//         data: {
//             speech: '<speak>Example daily content 1 - Audio in background <audio src="https://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3"></audio></speak>',
//             text: 'Example daily content 1'
//         }
//     },
//     {
//         type: 'LINK_OUT_SUGESTIONS',
//         data: {
//             name: 'Suggestion Link',
//             url: 'https://assistant.google.com/',
//         }
//     }
// ];
//
const SimpleResponseContentElement2: ContentElement = {
    type: 'SIMPLE_RESPONSE',
    data: {
        speech: 'Example content from mock data',
        text: 'Example content from mock data'
    }
};
//
// const MediaAudioResponse: ContentElement[] = [
//     {
//         type: 'SIMPLE_RESPONSE',
//         data: {
//             speech: 'Example audio',
//             text: 'Example audio'
//         }
//     },
//     {
//         type: 'AUDIO',
//         data: {
//             name: 'Jazz in Paris',
//             url: 'https://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3',
//             description: 'A funky Jazz tune'
//         }
//     },
//     {
//         type: 'SUGGESTIONS',
//         data: ['Show daily content']
//     }
// ];
// //
const ImageResponse: ContentElement[] = [
    {
        type: 'SIMPLE_RESPONSE',
        data: {
            speech: '<speak>Content for today <audio src="https://storage.googleapis.com/automotive-media/Jazz_In_Paris.mp3"></audio></speak>',
            text: 'What we have prepared for today, please check!'
        }
    },
    {
        type: "IMAGE",
        data: {
            url: 'https://giphygifs.s3.amazonaws.com/media/12P29BwtrvsbbW/giphy.gif',
            alt: 'Example alt',
            subtitle: 'This is a subtitle',
            title: 'Title: this is a title',
            display: 'CROPPED',
            buttonText: 'Raffle button',
            buttonUrl: "https://www.mobiliar.ch/"
        }
    },
    {
        type: 'SIMPLE_RESPONSE',
        data: {
            speech: 'Do you want to ask anything about Christmas?',
            text: 'Do you want to ask anything about Christmas?'
        }
    },
];

const QuestionResponse: ContentElement[] = [
    {
        type: 'SIMPLE_RESPONSE',
        data: {
            speech: 'Question of the day',
            text: 'Question of the day!'
        }
    },
    {
        type: "QUESTION",
        data: {
            url: 'https://media.giphy.com/media/xT0xeF6wv822LRlI8o/giphy.gif',
            alt: 'Question image description',
            title: 'Question of the day',
            subtitle: 'This is a subtitle',
            text: '' +
            'Question of the the value' +
            '\n' +
            'Possiblie answers: ' +
            '\n' +
            '\n' +
            'Answer 1' +
            '\n' +
            'Answer 2' +
            '\n' +
            'Answer 3' +
            '',
            questionData: {
                question: "Example question",
                answers: ['Answer 1', 'Answer 2', 'Answer 3'],
                correctAnswer: 'Answer 2'
            }
        }
    },
    {
        type: 'SUGGESTIONS',
        data: ['Answer 1', 'Answer 2', 'Answer 3']
    }
];

export const dailyContentResponses: any[] = [];

console.log('QuestionResponse', QuestionResponse);

export const contentResponse: DailyContentResponse = {
    dailyContentElement: ImageResponse,
    dailyContentElementGeneralType: 'DEFAULT',
};


export const randomResponse = [
    {
        "dailyContentElement": [
            SimpleResponseContentElement2,
            SimpleResponseContentElement2,
        ],
        "dailyContentElementGeneralType": "DEFAULT"
    },
    {
        "dailyContentElement": ImageResponse,
        "dailyContentElementGeneralType": "DEFAULT"
    }
];
