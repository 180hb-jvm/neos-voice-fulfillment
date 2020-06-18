/**
 * Created by asiulik on 05.11.2019.
 */


export interface ContentElement {
    type: ContentType;
    data: any;
}

type ContentType = 'IMAGE' | 'GIF' | 'AUDIO' | 'QUESTION' | 'SIMPLE_RESPONSE' | 'SUGGESTIONS' | 'GENERAL' | 'LINK_OUT_SUGESTIONS';
type DefaultContentType = 'QUESTION' | 'DEFAULT';

export const CONTENT_TYPE_SIMPLE_RESPONSE = 'SIMPLE_RESPONSE';
export const CONTENT_TYPE_QUESTION_RESPONSE = 'QUESTION';
export const CONTENT_TYPE_AUDIO_RESPONSE = 'AUDIO';
export const CONTENT_TYPE_IMAGE_RESPONSE = 'IMAGE';
export const CONTENT_TYPE_GIF_RESPONSE = 'GIF';
export const CONTENT_TYPE_SUGGESTIONS_RESPONSE = 'SUGGESTIONS';
export const CONTENT_TYPE_LINK_OUT_RESPONSE = 'LINK_OUT_SUGESTIONS';

export const CONTENT_TYPES = {
    CONTENT_TYPE_SIMPLE_RESPONSE,
    CONTENT_TYPE_QUESTION_RESPONSE,
    CONTENT_TYPE_AUDIO_RESPONSE,
    CONTENT_TYPE_IMAGE_RESPONSE,
    CONTENT_TYPE_GIF_RESPONSE,
    CONTENT_TYPE_SUGGESTIONS_RESPONSE,
    CONTENT_TYPE_LINK_OUT_RESPONSE,
};

export interface DailyContentRequestPayload {
    locale: string;
}

export interface DailyContentResponse {
    dailyContentElement: ContentElement[];
    dailyContentElementGeneralType: DefaultContentType;
}