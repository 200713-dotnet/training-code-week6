import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotnet'
})
export class DotnetPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let v = value.split('');
    return v.reverse().join('');
  }
}
