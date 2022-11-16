

var button = document.querySelector("#upd"),
    hei = document.querySelector("#hei"),
    len = document.querySelector("#len"),
    display = document.querySelector("#result"),
    min = document.querySelector("#min");

var langas = document.getElementsByTagName('td');


var a,  
    i,
    m,
    counter=0;
    let allMines = [];
    stat = 'play',
    statCounter=0;


    let score=0;
    let minos=0;

    hei.value = 10;
    len.value = 10;
    min.value = 30;
    


    let digit = 0;
    let sum = 0;
    let visosMinos = 0;


    window.onload = function (){
        GenerateTable();
    }


    //tikrinam ar jau yra lentele
    function CheckIfTableExist(){
       
        let laikinas = document.getElementById('table1');
        if(typeof(laikinas) != 'undefined' && laikinas != null ){
            let tevas = laikinas.parentElement;
            tevas.removeChild(laikinas);
            
        }
    }

    const testas = document.getElementById('test');

   
    addEventListener("contextmenu", (e) =>{
        e.preventDefault();
    })
   

    

    //padeti veliavele ant langelio
    function veliava(veliavos_id){
        const minesLeft = document.getElementById('Display');
        let flagas = document.getElementById(veliavos_id);

        if(flagas.innerText === ''){
        flagas.innerText += '🚩';
        visosMinos--;
        }
        else if(flagas.innerText === '🚩')
        {
            flagas.innerText = '';
            visosMinos++;
        }
        
        minesLeft.textContent = `Mines left = ${visosMinos}`;

        

        
    }
    

    



    statCounter = 0;
    function checkIfWon(statCounter){

        for(let n=1;n<= 100; n++){
          
            if(document.getElementById(n).getAttribute('name') === 'clicked')
            {
                statCounter++;
            };
        }

        if(statCounter === 100){    
            stat = 'won';
            display.textContent = "YOU WON"
            
        }else{
            display.textContent = "";
        }
    
        
    }

    function showAllMines(){
        let acutaulMines = 0
      for(let i=1; i<sum; i++){
        let nu = document.getElementById(i)
        if(nu.getAttribute('value') === 'mine'){
            acutaulMines++;
            nu.style.backgroundImage = "url('mine.png')";
        }
      }  
    alert(acutaulMines);
    }
  
    


    function change(clicked_id){
        if (document.getElementById(clicked_id).innerText === '🚩'){
            visosMinos++;
            document.getElementById('Display').innerText = `Mines left = ${visosMinos}`; 

        };

        statCounter = 0;
        digit=0;

        sitas = document.getElementById(clicked_id);
        sitoval= document.getElementById(clicked_id).getAttribute('value');
        sitas.style.background = "lightgrey";
        sitas.textContent = '';
        let temp = parseInt(clicked_id);

        let l,tl,t,tr,r,br,b,bl;

        let ilgis = parseInt(i);
        let aukstis = parseInt(a);


        

        try{
            l =document.getElementById(temp-1).getAttribute('value');
       
        }
        catch(err) {
        }
      


        try{
            tl = document.getElementById(temp-(ilgis+1)).getAttribute('value');
      
        }
        catch(err) {
        }



        try{
            t = document.getElementById(temp-ilgis).getAttribute('value');
      
        }
        catch(err) {
        }



        try{
            tr = document.getElementById(temp-(ilgis-1)).getAttribute('value');
          
        }
        catch(err){}


        
        try{
         
            r = document.getElementById(temp+1).getAttribute('value');
          
        }
        catch(err){}


        try{
            br = document.getElementById(temp+(ilgis+1)).getAttribute('value');
            
        }
        catch(err){}



        try{
            b = document.getElementById(temp+ilgis).getAttribute('value');
      
        }
        catch(err){}



        try{
            
            bl = document.getElementById(temp+(ilgis-1)).getAttribute('value');
          
        }
        catch(err){}

//sukuriam kairiausios kolonos ids
        let leftneeded = sum - (ilgis - 1);
        const lside = [];
            for(let x = 1; x<= leftneeded; x+=ilgis){
                lside.push(x);
            };
//-----

//sukuriam desiniausios kolonos ids
        
        const rside = [];
            for(let x =ilgis; x<=sum;x+=ilgis){
                rside.push(x);
            };

//kas vyksta jeigu paspaudi ant minos
        if(sitoval === 'mine'){
            sitas.style.backgroundImage = "url('mine.png')";
            sitas.style.background = "red";
        
            showAllMines();
            sitas.textContent='';
            stat = 'lost';
            
        }else{
//kas vyksta jeigu ne ant minos
            sitas.setAttribute("name", "clicked");
            digit=0;
            let ktiesa= 0;
            let dtiesa= 0;
            
            
            for(var p=0; p<lside.length; p++){
                if(lside[p] === temp){
                    ktiesa=1;
                }
            }
            


            for(let v = 0; v<rside.length; v++){
                if(temp === rside[v]){
                    dtiesa = 1;
                }
            }




                    if(ktiesa === 1){
                            

            
                            if(t === 'mine'){
                                digit++;
                            
                            };
            
            
                            if(tr === 'mine'){
                                digit++;
                                
                            };
                            
            
                            if(r === 'mine'){
                                digit++;
                            
                            };
            
                            if(br === 'mine'){
                                digit++;
                        
                            };
            
                            if(b === 'mine'){
                                digit++;
                        
                            };

                            switch(digit){
                                case 1:
                                    sitas.style.color = 'blue';
                                break;
                                case 2:
                                    sitas.style.color = 'green';
                                break;
                                case 3:
                                    sitas.style.color = 'red';    
                                break;
                                case 4:
                                    sitas.style.color = 'purple';    
                                break;
                                case 5:
                                    sitas.style.color = 'maroon';
                                break;
                                case 6:
                                    sitas.style.color = 'turquoise';
                                break;
                                case 7:
                                    sitas.style.color = 'black';
                                break;
                                case 8:
                                    sitas.style.color = 'pink';
                                break;
                               
                            }

                            sitas.textContent = digit;




                    }else if(dtiesa === 1){
                
                    

                        if(l === 'mine'){
                            digit++;
                            
                        };

                        if(bl === 'mine'){
                            digit++;
                        
                        };

                        if(tl === 'mine'){
                            digit++;
                            
                        };

                        if(t === 'mine'){
                            digit++;
                        
                        };

                        if(b === 'mine'){
                            digit++;

                        };
                        switch(digit){
                            case 1:
                                sitas.style.color = 'blue';
                            break;
                            case 2:
                                sitas.style.color = 'green';
                            break;
                            case 3:
                                sitas.style.color = 'red';    
                            break;
                            case 4:
                                sitas.style.color = 'purple';    
                            break;
                            case 5:
                                sitas.style.color = 'maroon';
                            break;
                            case 6:
                                sitas.style.color = 'turquoise';
                            break;
                            case 7:
                                sitas.style.color = 'black';
                            break;
                            case 8:
                                sitas.style.color = 'pink';
                            break;
                           
                        }

                        sitas.textContent = digit;
                    }else{
                        if(l === 'mine'){
                            digit++;
                            
                        };
    
                        if(tl === 'mine'){
                            digit++;
                            
                        };
    
                    
                        if(bl === 'mine'){
                            digit++;
                        
                        };
                                
    
                        if(t === 'mine'){
                            digit++;
                        
                        };
    
    
                        if(tr === 'mine'){
                            digit++;
                            
                        };
    
    
                        if(r === 'mine'){
                            digit++;
                        
                        };
    
                        if(br === 'mine'){
                            digit++;
    
                        };
    
                        if(b === 'mine'){
                            digit++;
    
                        };
    
                        
                     

                        switch(digit){
                            case 1:
                                sitas.style.color = 'blue';
                            break;
                            case 2:
                                sitas.style.color = 'green';
                            break;
                            case 3:
                                sitas.style.color = 'red';    
                            break;
                            case 4:
                                sitas.style.color = 'purple';    
                            break;
                            case 5:
                                sitas.style.color = 'maroon';
                            break;
                            case 6:
                                sitas.style.color = 'turquoise';
                            break;
                            case 7:
                                sitas.style.color = 'black';
                            break;
                            case 8:
                                sitas.style.color = 'pink';
                            break;
                           
                        }
                        sitas.textContent = digit;

                        
                    }
            
                    checkIfWon(statCounter);






    };
        


        

        
            
        
    }
        

   /* 
    addEventListener('contextmenu', (e) =>{
        this.alert('kazkas gavosi');
        e.preventDefault(); 
    })
    */
    


    function mineGenerator(sum){
        
        for(let y=0 ; y<minos; y++){
            let rndId = Math.floor(Math.random()* sum); 
            let m = document.getElementById(rndId);
            m.setAttribute("value", "mine");
            m.setAttribute("name", "clicked");
            
            
        }
    }

  

    function removeTable(){
        var removeTab = document.getElementById('table1');

        var parentEl = removeTab.parentElement;
        
        parentEl.removeChild(removeTab);
        counter=0;
        score=0;
     
    }


    function GenerateTable(){
        
        statCounter=0;
        CheckIfTableExist();
        a=hei.value;
        i=len.value;
        sum = a*i;
        
        minos = min.value;
      
        counter = 0;
    
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
        tbl.style.textAlign = "center";

        for( let x =1; x<=a; x++){
            const row = document.createElement("tr");
           
            for(let y=1;y<=i;y++){
            const cell = document.createElement("td");
            counter++;
            cell.setAttribute("value", "normal");
            cell.setAttribute("id", counter);
            cell.setAttribute("onclick", "change(this.id)");
            cell.setAttribute("oncontextmenu", "veliava(this.id)");
           
            
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
        
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    
    tbl.setAttribute("id", "table1");
    tbl.style.backgroundColor = 'grey';

    mineGenerator(sum);
    
    visosMinos =0;
    for(let i=1; i<sum; i++){
        let nu = document.getElementById(i)
        if(nu.getAttribute('value') === 'mine'){
            visosMinos++;
        }
    };
      document.getElementById('Display').textContent = `Mines left = ${visosMinos}`;
    return visosMinos;
    }

    

   