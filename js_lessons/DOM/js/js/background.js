const div=document.createElement("div");
const body = document.querySelector("body");
body.appendChild(div);



// image.setAttribute("src", "https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80",)
const images=[ {src:"https://images.unsplash.com/photo-1479090793912-eb9929f4fdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80"},
                 { src:"https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
                  {src:"https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80"},
                  {src:"https://images.unsplash.com/photo-1548391350-968f58dedaed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
                  {src:"https://images.unsplash.com/photo-1503416997304-7f8bf166c121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"},
                  {src:"https://images.unsplash.com/photo-1599939571322-792a326991f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"}];

    images.map((image)=>{
        const img=document.createElement("img");
        img.setAttribute("src", image.src)
        img.setAttribute("class", "hi")// class name ugch bg;  eswel  img.className("hr")
      
        img.style = "width:200px;height:200px";

      
        div.appendChild(img);
        }
        )
        