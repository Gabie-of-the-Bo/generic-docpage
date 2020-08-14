export class Segment{
    type: string;
    content: string;
    language: string;
    page: number;

    public constructor(type: string, content: string, language?: string, page?: number){
        this.type = type;
        this.content = content;
        this.language = language;
        this.page = page? page : 1;
    }
}