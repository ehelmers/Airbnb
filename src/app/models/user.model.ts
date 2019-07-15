export class User {
    public id: number;
    //this is outside of the constructor because the database will generate the id
    //the other attributes are inside of the constructor because the user sets these values 
    

    constructor (
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string, 
        public image_url: string = 'https://placekitten.com/100/100'
    ) {}
}