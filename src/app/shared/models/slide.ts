/*
export class Slide {
    constructor(
        public imageSource: string, 
        public description: string, 
        public author: string, 
        public tags: string[]
    ) {}
}
*/

export interface Slide {
    imageSource: string;
    description: string;
    author: string;
    tags: string[];
}