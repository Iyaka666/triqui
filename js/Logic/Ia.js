class IA{
    constructor(piece){
        //---------------------------------------------------------------------------------------
        //To set name random for IA with [A-Za-z0-9]. These range are take of ASCII
        
        //range from 4 to 12 quantity character's at the nickname
        const CONTROL_LOOP = Math.trunc(Math.random() * 8) + 3;
        /*
        At the const controlCondition the 3 will return it but will be ignored in the conditional
        so that numbers get the same probality, in the next going to escape one at the end range ASCII
        however the probability will be selected is lower, for that interest range be equal
        */
        const PROBALITY_LOWER = 1; 
        let rangeUppers = Math.trunc(Math.random() * 26) + 65 + PROBALITY_LOWER;
        let rangeLowers = Math.trunc(Math.random() * 26) + 97 + PROBALITY_LOWER;
        let rangeNumbers = Math.trunc(Math.random() * 10) + 48 + PROBALITY_LOWER;
        let controlCondition = Math.trunc(Math.random() * 3);
        let name = '';
        count = 0
        while(true){
            switch (controlCondition){
                case 0: name += String.fromCharCode(rangeUppers);
                break;
                case 1: name += String.fromCharCode(rangeLowers);
                break;
                case 2: name += String.fromCharCode(rangeNumbers);
                break;
                default: name += '-';
                break;
            }
            count++;
            if(CONTROL_LOOP === count) break;
        }
        //---------------------------------------------------------------------------------------
        this.name = name;
        this.piece = piece;        
    }
    
    get name(){ return this.name }
    set name(param){ this.name = param}

    get piece(){ return this.piece }
    set piece(param){ this.piece = param}
}