import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {HttpEventType, HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {UploadService} from '../../../services/upload.service';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    @Output() urlEmitter = new EventEmitter<string>();
    @ViewChild("fileUpload", {static: false})


    fileUpload: ElementRef;
    files = [];
    updatedUrl: string = "";

    constructor(private uploadService: UploadService,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    uploadFile(file) {
        const formData = new FormData();
        formData.append('file', file.data);
        file.inProgress = true;
        this.uploadService.upload(formData).pipe(
            map(event => {
                switch (event.type) {
                    case HttpEventType.UploadProgress:
                        file.progress = Math.round(event.loaded * 100 / event.total);
                        break;
                    case HttpEventType.Response:
                        return event;
                }
            }),
            catchError((error: HttpErrorResponse) => {
                file.inProgress = false;
                console.log(error);
                return of(`${file.data.name} upload failed.`);
            }))
            .subscribe((event: any) => {
                if (typeof (event) === 'object') {
                    let snackBarRef = this.snackBar.open('Image Uploaded', 'Close');
                    this.updatedUrl = event.body

                    // return url to parent
                    this.urlEmitter.emit(this.updatedUrl);
                }
            });
    }

    private uploadFiles() {
        this.fileUpload.nativeElement.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
        });
    }

    onClick() {
        const fileUpload = this.fileUpload.nativeElement;
        fileUpload.onchange = () => {
            for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                this.files.push({data: file, inProgress: false, progress: 0});
            }
            this.uploadFiles();
        };
        fileUpload.click();
    }


}
