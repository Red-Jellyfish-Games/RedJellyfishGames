import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommunicationService {
    // Observable sources
    private mobileMenuSource = new Subject<boolean>();

    // Observable streams
    mobileMenuStream$ = this.mobileMenuSource.asObservable();

    // Service message commands
    ChangeMobileMenu(open: boolean) {
        this.mobileMenuSource.next(open);
    }
}