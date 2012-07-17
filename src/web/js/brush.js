function DrawingBrush(ctx, color) {    
    this._ctx = ctx;
    this._prevCol = this._ctx.strokeStyle;
    this._color = color;
    this.init();
}
    
DrawingBrush.prototype.init = function(){
    this._isDrawing = false;
    this._startPtX = 0;
    this._startPtY = 0;
    this._ctx.strokeStyle = this._prevCol;
};

DrawingBrush.prototype.endDrawing = function() {
    this.init();
};

DrawingBrush.prototype.startDrawing = function(startPtX, startPtY) {
    this._isDrawing = true;
    
    this._ctx.strokeStyle = this._color;
    
    this._startPtX = startPtX;
    this._startPtY = startPtY;
    
    this._ctx.beginPath();
    this._ctx.moveTo(this._startPtX, this._startPtY);
};

DrawingBrush.prototype.drawLine = function(endPtX, endPtY) {
    if(this._isDrawing){
        this._ctx.lineTo(endPtX, endPtY);
        this._ctx.stroke();
    }
};