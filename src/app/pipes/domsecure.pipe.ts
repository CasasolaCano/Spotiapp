import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domsecure'
})
export class DomsecurePipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer) {

  }

  transform(value: string): SafeResourceUrl {
    
    const url :string = 'https://open.spotify.com/embed?uri=' 

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
