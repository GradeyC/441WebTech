class Shape{
    constructor(x,y,H,W,C){//H= height| W=Width| C = Color|
        this.x = x;
        this.y = y;
        this.H = H;
        this.W= W;
        this.C = C;
    }
    setx(x){
        this.x = x;   
    }
    sety(y){
        this.y = y;
    }
    setH(H){
        this.H = H;
    }
    setW(W){
        this.W= W;
    }
    setC(C){
        this.C = C;
    }
    get Xvalue(){
        return this.x;
    }
    get Yvalue(){
        return this.y;
    }
    get Hvalue(){
        return this.H;
    }
    get Wvalue(){
        return this.W;
    }
    get Cvalue(){
        return this.C;
    }
}