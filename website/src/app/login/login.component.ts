import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SearchService} from "../components/search-result/search.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = '';
    password = '';
    result = '';

    constructor(private router: Router, private searchService: SearchService) {

    }

    ngOnInit() {

    }

    onSubmit() {
        this.searchService.login(this.username, this.password).subscribe(data => {
            if (data['failed'] === 'false') {
                this.router.navigate(['/search']);
            } else {
                this.result = data['message'];
            }
        });
    }

}
