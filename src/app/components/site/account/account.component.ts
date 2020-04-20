import {Component, Input, OnInit} from '@angular/core';
import {UserDetails} from "../../../models/UserDetails";
import {UserService} from "../../../services/user-manage.service";
import {ActivatedRoute} from "@angular/router";
import {Storyboard} from "../../../models/Storyboard";
import {HttpResponse} from "@angular/common/http";
import {ApiResponse} from "../../../models/ApiResponse";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    userInfo: UserDetails;
    storyboards: Storyboard[] = [];
    response: ApiResponse;
    userId: number;
    edit: boolean = false;
    formGroup: any = {};
    uploadedLink: string = "";


    constructor(
        private service: UserService,
        private route: ActivatedRoute,
        public snackBar: MatSnackBar
    ) {
        this.route.params.subscribe((params: any) => {
            if (params.id) {
                this.userId = params.id;
            }
        });
    }

    ngOnInit() {
        if (this.userId) {
            this.service.getUserInfo(this.userId).subscribe(user => this.userInfo = user.content);

        } else {
            this.service.getInfo().subscribe(user => {
                this.userInfo = user.content;
                console.log(this.userInfo)
                this.service.getStoryboards(this.userInfo.userId).subscribe((s: Storyboard[]) => {
                    this.storyboards = s;
                });
            });
        }
    }

    linkUploadedHandler($event: any) {
        this.uploadedLink = $event;
        console.log("UPLOADED LINK:", this.uploadedLink)
    }



    onSubmit() {
        let link = "";
        if (this.uploadedLink != "") {
            link = this.uploadedLink;
        }
        else {link = this.userInfo.profilePicture;}

        let user: UserDetails = new UserDetails(
            this.userInfo.userId, link,
            this.userInfo.username, this.formGroup.firstName,
            this.formGroup.lastName, this.formGroup.bio);

        this.service.updateUser(user).subscribe(
            res => {
                this.ngOnInit();
                this.edit = false;
                let snackBarRef = this.snackBar.open('User updated!', 'Close');
            },
            err => {
                let snackBarRef = this.snackBar.open(err.error.message, 'Close');
                console.log(err.error.message)
            }
        );
    }


}
