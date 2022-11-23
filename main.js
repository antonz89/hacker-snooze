let body = document.querySelector('body');

let APIrequest = async() => {  
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`);
    let data = await response.json(); 
    // console.log(data);   

    for (let i = 0; i<100;i++){
        let response1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
        let data1 = await response1.json(); 
        console.log(data1); 

        
        //-----------------
        let div = document.createElement("div");

        body.appendChild(div);
        
        let divTopContainer = document.createElement("div");
        divTopContainer.className = "container"
        div.appendChild(divTopContainer);
        
        
        let divTop1 = document.createElement("div");
        divTop1.className = "top"
        divTopContainer.appendChild(divTop1);

        let divTop2 = document.createElement("div");
        divTop2.className = "top"
        divTopContainer.appendChild(divTop2);

        let count = document.createElement("p");
        count = i+1;

        let title = document.createElement("h3");
        
        let anchor = document.createElement("a");
        anchor.target = "_blank"
        anchor.href = data1.url;
        anchor.innerText = `${count}. ${data1.title}`;
        
        let points = document.createElement("p");
        points.className = "xxx";
        
        //some stories dont have comments which leads to an error due to data1.kids.length
        //a way to avoid an error
        if(data1.hasOwnProperty('kids')===true){
            points.innerText = `${data1.score} points by ${data1.by} | Comments: ${data1.kids.length} ` 
        } else {
        points.innerText = `${data1.score} points by ${data1.by} | Comments: N/A ` 
        }
        
        divTop2.appendChild(title);
        title.appendChild(anchor);
        div.appendChild(points);
    }    
}

APIrequest();






