export class Movie {
    ImdbID: string;
    Title: string;
    Description: string;
    ReleaseDate: string;
    Director: string;
    Actors: string;
    ImdbRating: number;
    Language: string;
    Genre: string;
    ImageURL: string;

    constructor(ImdbID: string, Title: string, Description: string, ReleaseDate: string, Director: string, Actors: string, ImdbRating: number, Language: string, Genre: string, ImageURL: string) {
        this.ImdbID = ImdbID;
        this.Title = Title;
        this.Description = Description;
        this.ReleaseDate = ReleaseDate;
        this.Director = Director;
        this.Actors = Actors;
        this.ImdbRating = ImdbRating;
        this.Language = Language;
        this.Genre = Genre;
        this.ImageURL = ImageURL;
    }
}
