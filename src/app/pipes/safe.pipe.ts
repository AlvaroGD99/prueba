import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safe'
})
@Injectable()
export class SafePipe {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url,args) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    
  }

}
