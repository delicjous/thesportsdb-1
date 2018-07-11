import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncPipe implements PipeTransform {
    transform(value: string,allow:number): any {
        if(value && value.length && value.length > allow){
            return value.substring(0,allow) + '...'
        }
        return value;
    }
}