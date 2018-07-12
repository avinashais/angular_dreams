import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class NavigationService{
    private showNavigationBar = new Subject<null>();

    constructor() {
  
    }
  
    public getNavigationbarState(): Observable<boolean> {
        return this.showNavigationBar.asObservable();
      }
  
    public setNavigationbarState() {
      return this.showNavigationBar.next();
    }
}