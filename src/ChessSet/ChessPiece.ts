

export default class ChessPiece{

  type : string;

  white : boolean = true;

  constructor(t : string, w){
    this.type = t;
    this.white = w;
  }

  isWhite(){
    return this.white;
  }


}
