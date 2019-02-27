import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceUnderscores'
})
export class ReplaceUnderscoresPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value.replace(/_/ig," ");
  }

}
