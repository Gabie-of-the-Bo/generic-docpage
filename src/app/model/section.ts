export class Section{
    name: string;
    file: string;
    subsections: Section[];

    public constructor(name: string, file: string, subsections: Section[] = []){
        this.name = name;
        this.file = file;
        this.subsections = subsections;
    }
}