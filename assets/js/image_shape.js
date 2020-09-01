function image_shape(shape, id) {
	//vrisw poio stin seira button patithike
	var num = id.slice(-1);
    //psaxnw tin eikona pou antistoixei sto button
    img = document.getElementById('img'+num);
    
    //svinw tin teleutaia class apo to img
    indx=img.className.lastIndexOf('-');
    img.className=img.className.slice(0,indx+1);
    
    //prosthetw to sxima poy thelei o xristis
    img.className += shape;
    
    
    
}