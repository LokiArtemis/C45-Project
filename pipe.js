function Pipe(){
    this.top=random(height/2)
    this.bottom=random(height)
    this.x= width;

    this.show=function(){
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }
this.update=function(){
    this.x-=this.speed;
}
}
