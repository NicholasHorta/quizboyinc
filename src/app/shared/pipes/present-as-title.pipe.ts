import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'presentAsTitle',
  standalone: true
})
export class PresentAsTitlePipe implements PipeTransform {
  transform(title: string): string {
    const modifiedTitle = title
      .split('-')
      .map(l => l.charAt(0).toUpperCase() + l.slice(1))
      .join(' ');

    return modifiedTitle;
  }
}
