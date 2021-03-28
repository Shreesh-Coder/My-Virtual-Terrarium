var plantsList = document.getElementsByClassName("plant");

for(let i = 0; i < plantsList.length; i++){
    dragElement(plantsList[i]);
}

// dragElement(document.getElementById('plant1'));

function dragElement(id){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    id.onpointerdown = function(e){
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        id.style.color = "red";
        
        document.onpointermove = function(e){
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
        
            console.log(pos1, pos2, pos3, pos4);
        
            id.style.top = id.offsetTop - pos2 + 'px';
            id.style.left = id.offsetLeft - pos1 + 'px';
        }; //elementDrag function is clouser.
        
        document.onpointerup = stopElementDrag; //stopElementDrag funciton is clouser.

    }; //pointer drag function is clouser.

    function stopElementDrag(){
        document.onpointermove = null; //so draging of the element with the pointer will stop
        document.onpointerup = null; //For stoping the draging when pointer is released
    }

}




