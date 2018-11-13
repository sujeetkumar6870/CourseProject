export class Recipe{
    //model is just a blueprint of the object we create
    public name:string;
    public description:string;
    public imagePath: string; //holds the URL of the image

    constructor(name:string, desc:string, imagePath:string){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
    }
}