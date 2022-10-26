export class Comment {
    rating: number | undefined;
    comment: string | undefined;
    author: string | undefined;
    date: string | undefined;

    constructor(rating: number, comment: string, author: string, date: string) {
        this.rating = rating;
        this.comment = comment;
        this.author = author;
        this.date = date;
      }
}