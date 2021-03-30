class Shapes{
    constructor(X,Y,H,W,C){
        this.X=X;//X value
        this.Y=Y;//Y value
        this.H=H;//height value
        this.W=W;//width value
        this.C=C;//Color value
    }
    setX(X){
        this.X = X;   
    }
    setY(Y){
        this.Y = Y;
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
        return this.X;
    }
    get Yvalue(){
        return this.Y;
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