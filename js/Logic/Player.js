class Player{
    constructor(name, score = 0, piece){
        this.name = name;
        this.score = score;
        this.piece = piece; //it will be decided with a stone, paper or scissors
    }

    get name(){ return this.name } 
    set name(param){ this.name = param }

    get score(){ return this.score } 
    set score(param){ this.score = param }

    get piece(){ return this.piece } 
    set piece(param){ this.piece = param }
}