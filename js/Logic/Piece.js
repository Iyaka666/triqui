class Piece{
  constructor(shape, coordinateX, coordinateY){
    this.shape = shape; // cross - circle - square - triangle
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    //It is posible that changed the way to know its position current by hit-box 
  }
  
  get shape(){ return this.shape }
  set shape(param){ this.shape = param }
  
  get coordinateX(){ return this.coordinateX }
  set coordinateX(param){ this.coordinateX = param }
  
  get coordinateY(){ return this.coordinateY }
  set coordinateY(param){ this.coordinateY = param }
}