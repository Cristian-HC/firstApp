export class Movie{
    
    id?: number;
    likes: number = 0;
    
    constructor(
        id: number,
        title: string,
        url: string,
        likes: number
    ){}
}