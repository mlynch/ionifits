import { Injectable } from '@angular/core';

import { AmplifyService } from 'aws-amplify-angular';

import { Subject } from 'rxjs';

export interface UserState {
    user: any;
    isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  private _userState = new Subject<UserState>();
  userStateChanged$ = this._userState.asObservable();

  constructor(public amplifyService: AmplifyService ) {
    this.amplifyService = amplifyService;

    this.amplifyService.authStateChange$
        .subscribe(authState => {
            console.log('Auth state change in user!', authState);
            if (!authState.user) {
                this.user = null;
                this._userState.next({
                    user: this.user,
                    isLoggedIn: false
                });
            } else {
                this.user = authState.user;
                this._userState.next({
                    user: this.user,
                    isLoggedIn: true
                });
            }
        });

  }
}
