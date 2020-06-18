/**
 * Created by asiulik on 04.11.2019.
 */

export function requiredTextValidation(requiredString: string, sentence: string): boolean{
    return sentence.toLowerCase().indexOf(requiredString.toLowerCase()) > -1;
}
