
   



document.body.innerHTML  = '<div class ="bb"><img src="Magic_-bbb.png" id="cart" class="imeg" onclick="timme()"/><div><span id="aa" class="tt"></span></div><form class="leftCol7 "><span class="tex">  Введіть ваше питання</span><input class="inp" type="text" id="question"><input class=" button1" type="button"  value="Відправити" onclick="timme()"> </form>'
 document.body.append(body);
 let body=document.body
 function timme(){ 
     let ques=document.getElementById("question").value;
   let a =ques[ques.length-1];
     if(a=='?'){
        document.getElementById('aa').innerHTML= '';
        
        let ansver=['Так','Ні','Вірогідно що так','Вірогідно що ні','Зараз невідомо',]
        let ran=Math.floor(Math.random()* (5 - 0) + 0);
        let img1=document.getElementById("cart");
        img1.classList.add("anim") ;
  
        function time1(){
        document.getElementById('aa').innerHTML= ansver[ran];
        }
        function time2(){
        img1.classList.remove('anim')
       
        }

        setTimeout( time1,500);
        setTimeout( time2,500);
    }
    else 
        {
          document.getElementById('aa').innerHTML="Введіть своє питання"
       }
}


