import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presentAsTitle',
  standalone: true
})
export class PresentAsTitlePipe implements PipeTransform {
  transform(title: string): string {
    const modifiedTitle = title
      .split('-')
      .map(str => str.charAt(0).toUpperCase() + str.slice(1))
      .join(' ');

    return modifiedTitle;
  }
}
