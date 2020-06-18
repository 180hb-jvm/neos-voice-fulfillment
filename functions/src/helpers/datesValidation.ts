/**
 * Created by asiulik on 04.11.2019.
 */

import { endActionDate, startActionDate } from '../config/dates'

export function checkIsBeforeActionDate(dateTime = startActionDate){
    return new Date().getTime() < dateTime ;
}

export function checkIsAfterActionDate(dateTime = endActionDate){
    return  new Date().getTime() > dateTime;
}

export function compareDatesAreTheSameDay(d1: Date, d2: Date){
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}