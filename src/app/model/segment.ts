export class Segment{
    type: string;
    content: string;
    language: string;
    inline_css: string;
    page: number;

    public constructor(type: string, content: string, language?: string, inline_css?: string, page?: number){
        this.type = type;
        this.content = content;
        this.language = language;
        this.inline_css = inline_css;
        this.page = page? page : 1;
    }
}