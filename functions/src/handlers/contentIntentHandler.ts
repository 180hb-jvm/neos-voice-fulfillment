/**
 * Created by asiulik on 04.11.2019.
 */

import { ContentService } from '../service/content'

export async function contentBussinesHandler(agent: any){

    const contentServiceInstance: ContentService = new ContentService('http://domain');
    const contentDataResponse = await contentServiceInstance.loadData('/de/contexts/business.json');

    return contentDataResponse.gaResponse.map((gaContentElement: any) => {
        agent.ask(gaContentElement);
        return gaContentElement;
    })

}

export async function contentPersonalHandler(agent: any){

    const contentServiceInstance: ContentService = new ContentService('http://domain');
    const contentDataResponse = await contentServiceInstance.loadData('/de/contexts/personal.json');

    return contentDataResponse.gaResponse.map((gaContentElement: any) => {
        agent.ask(gaContentElement);
        return gaContentElement;
    })

}

export async function contentProductHandler(agent: any){

    const contentServiceInstance: ContentService = new ContentService('http://domain');
    const contentDataResponse = await contentServiceInstance.loadData('/de/product/return.json');

    return contentDataResponse.gaResponse.map((gaContentElement: any) => {
        agent.ask(gaContentElement);
        return gaContentElement;
    })

}