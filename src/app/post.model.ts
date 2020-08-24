import { Optional } from '@angular/core';


export class Post{
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor(@Optional id: number, userId: number, title: string, body: string){
        this.id = id;
        this.userId=userId;
        this.title = title;
        this.body = body;
    }    
}