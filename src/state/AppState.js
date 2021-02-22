import {observable, makeObservable} from 'mobx';

export class AppState {
    constructor(user, token, currentPage) {
        makeObservable(this, {
            user: observable,
            token: observable,
            currentPage: observable
        });

        this.user = user;
        this.token = token;
        this.currentPage = currentPage;
    }
}
