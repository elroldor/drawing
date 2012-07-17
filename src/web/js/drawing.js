
function HandleCanvasDrawing(canvasId, getBrushFn){
    
    var canvas = $("#"+canvasId)[0];          
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;
    
    var canvasOffset = $("#"+canvasId).offset();
    var context = canvas.getContext('2d');  
      
    var defaultBrush = getBrushFn(context);   
    
    defaultBrush.init();
    console.log("init complete");
   
    $("#drawingCanvas").mousedown(function(e){
        console.log(e);
        defaultBrush.startDrawing(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
    });
    
    $("#drawingCanvas").mouseup(function(e){
        console.log(e);
        defaultBrush.endDrawing();
    });
    
    $("#drawingCanvas").mousemove(function(e){
        defaultBrush.drawLine(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
    });
}