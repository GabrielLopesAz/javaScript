 
function ex24() {
	// body...
	var quant =Number(document.getElementById('real').value);
	var dol = quant/1.80
	var macro = quant/2
	var libra  = quant/3.57
	console.log(quant + "/"+ 1.80+"="+ dol)
	console.log(quant + "/"+2 +"="+ macro)
	console.log(quant + "/"+3.57 +"="+ libra)
	alert("Em Dolares é $ "+ dol + " \n Em Libras Esterlinas £ " + libra.toFixed(2) + " \n Em macros alemaes DM " + macro)
 
}
function ex18(){
 var celsius = Number(document.getElementById("cel").value);
 var fahr = (1.8 * celsius) + 32
 console.log("1.8"+"*"+celsius +"+"+"32"+"= "+ fahr)
 alert ("Em fahrenheits e " + fahr +" graus")
}
function ex1if(){
	var n1 = Number(document.getElementById("n1").value);
	var n2 = Number(document.getElementById("n2").value);
	var n3 = Number(document.getElementById("n3").value);
	var n4 = Number(document.getElementById("n4").value);
	var media = (n1+n2+n3+n4)/4 
	console.log(media)
	if(media >= 7){
		alert("Aprovado com media: "+ media)
	}
	else{
		alert("Reprovado com media: "+ media)
	}

}
function ex2if(){
	var n1 =Number(document.getElementById("n1").value);
	var n2 = Number(document.getElementById("n2").value);
	var media = (n1+n2)/2
	if(media >= 7 ){
		alert("Aprovado " +  " \n media: "+media)
	
	}
	else if (media >= 3 && media <7){
		alert("Exame Final" +" \n media: "+media)

	}
	else{
		alert("Reprovado"+" \n Media: "+ media)
	}

}
function ex3if(){
	var n1 = Number(document.getElementById("nota1").value);
	var n2 = Number(document.getElementById("nota2").value);
	if (n1 > n2 ) {
		alert("O menor Numero e : " + n2)
	}
	else {
		alert("O menor Numero e: " + n1)
	}
}
function ex4if(){
	var n1 = Number(document.getElementById("n1").value);
	var n2 = Number(document.getElementById("n2").value);
    var n3 = Number(document.getElementById("n3").value);

    if( n1 > n2 && n1>n3){
    	alert("O maior numero é o " + n1)
    }
    else if (n2 >n1  && n2>n3){
    	alert("O maior Numero é o " + n2 )

	}
}

  
    
     if (n3>n1 && n3>n2){
    	alert("O maior Numero é o "+n3)
    }
    else {
    	alert("Há Numeros iguais "+"\n " +n1+"\n "+n2 +"\n "+n3)
    }
}
	function ex5if(){
		var valor1 = Number(document.getElementById("valor1").value);
		var valor2 = Number(document.getElementById("valor2").value);
		var operacao = Number(document.getElementById("operacao").value);
		switch (operacao){
			case 1:
			 alert((valor1 + valor2)/2)
			 break;//
			 case 2 :
			  if (valor1 > valor2){
			  	alert (valor1 - valor2)
			  	}
			  else {
			  	alert(valor2 - valor1)
			  

			  }
			  break;
			  case 3:
			   alert(valor2*valor1)
			   
			   break;
			   case 4:
			   alert(valor1/valor2)

			   break;

		}
	}
	function ex7if(){
    	var salario  = Number(document.getElementById("salario").value);
     if(salario<= 500 ){
     	alert("Seu novo salario é BRL:"+ salario *1.30)

     }  
     else {
     	alert("Seu salario não alterará")
     }