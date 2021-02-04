function calcular(){

    var latino = document.getElementById("numeroLatino").value;

    var romano = document.getElementById("numeroRomano").value;

    
    

    if(latino == "" && romano == ""){

        alert("Tiene los dos campos vacios!\nDebe de rellenar uno de los campos para realizar la conversión.")

    }else if(latino != "" && romano != ""){
        alert("Tiene los dos campos rellenados!\nDebe de rellenar uno de los campos para realizar la conversión.")
    }else if(latino == ""){
        romano = romano.toUpperCase(); //Paso todo a mayusculas por si introduce en minuscula.
        //Validador de que ha introducido una expresión correcta en romano
        var _regexp = /^((\(M\)){0,3})(\(C\)\(M\)|\(C\)\(D\)|(\(D\))?(\(C\)){0,3})(\(X\)\(C\)|\(X\)\(L\)|(\(L\))?(\(X\)){0,3})(M\(X\)|M\(V\)|(\(V\))?)(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
        if(_regexp.test(romano) == true){
            pasarLatino(romano);
        }else{
            
            alert("Introduzca un caracter válido.");
        }


        
    }else{
        if(latino>0 && latino<=3999){

            pasarRomano(latino);

        }else{
            alert("Debe de introducir un número entre 1 y 3999.")
            vaciar();
        }
    }

}

function pasarLatino(rom){
    var rom0 = rom;
    var lat = "";
    var rom1 ="";//Usare rom1 para entrar a los bucles y no solapara el rom mismo
    //Valor de los millares
    if(rom.slice(0,3)=="MMM" && rom.slice(0,4)!="MMMM"  ){
        lat = "3000";
        rom1 = rom.substring(3); //Le voy eliminado los caracteres ya convertidos
        
    }else if(rom.slice(0,3)!="MMM" && rom.slice(0,2) == "MM"){
        lat = "2000";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,2)!="MM" && rom.slice(0,1)=="M"){
        lat = "1000";
        rom1 = rom.substring(1);
    }else{
        rom1 = rom;
    }
    
    rom = rom1;

    //Valor de las centenas
    if(rom.slice(0,2)=="CM"){
        lat = lat.slice(0,1) + "900";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,4)=="DCCC" && rom.slice(0,5)!="DCCCC"){
        lat = lat.slice(0,1) + "800";
        rom1 = rom.substring(4);
    }else if(rom.slice(0,4)!="DCCC" && rom.slice(0,3)=="DCC"){
        lat = lat.slice(0,1) + "700";
        rom1 = rom.substring(3);
    }else if(rom.slice(0,3)!="DCC" && rom.slice(0,2)=="DC"){
        lat = lat.slice(0,1) + "600";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,2)!="DC" && rom.slice(0)=="D"){
        lat = lat.slice(0,1) + "500";
        rom1 = rom.substring(1);
    }else if(rom.slice(0,2)=="CD"){
        lat = lat.slice(0,1) + "400";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,3)=="CCC" && rom.slice(0,4)!="CCCC"){
        lat = lat.slice(0,1) + "300";
        rom1 = rom.substring(3);
    }else if(rom.slice(0,3)!="CCC" && rom.slice(0,2)=="CC"){
        lat = lat.slice(0,1) + "200";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,2)!="CC" && rom.slice(0)=="C"){
        lat = lat.slice(0,1) + "100";
        rom1 = rom.substring(1);
    }else{
        rom1 = rom;
    }
    
    rom = rom1;
    //Valor de las decenas
    if(rom.slice(0,2) == "XC"){
        lat = lat.slice(0,2) + "90";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,4) == "LXXX" && rom.slice(0,5) != "LXXXX"){        
        lat = lat.slice(0,2) + "80";
        rom1 = rom.substring(4);
    }else if(rom.slice(0,4) != "LXXX" && rom.slice(0,3) == "LXX"){        
        lat = lat.slice(0,2) + "70";
        rom1 = rom.substring(3);
    }else if(rom.slice(0,3) != "LXX" && rom.slice(0,2) == "LX"){        
        lat = lat.slice(0,2) + "60";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,2) != "LX" && rom.slice(0) == "L"){        
        lat = lat.slice(0,2) + "50";
        rom1 = rom.substring(1);
    }else if(rom.slice(0,2) == "XL"){
        lat = lat.slice(0,2) + "40";
        rom1 = rom.substring(2);
    }else if(rom.slice(0,3) == "XXX" && rom.slice(0,4) != "XXXX" ){
        lat = lat.slice(0,2) + "30";        
        rom1 = rom.substring(3);
    }else if(rom.slice(0,3) != "XXX" && rom.slice(0,2) == "XX"){
        lat = lat.slice(0,2) + "20";        
        rom1 = rom.substring(2);
    }else if(rom.slice(0,2) != "XX" && rom.slice(0) == "X"){
        lat = lat.slice(0,2) + "10";        
        rom1 = rom.substring(1);
    }else{

        rom1 = rom;
    }

    rom = rom1;
    //Valor de las unidades
    if(rom == "IX"){
        lat = lat.slice(0,3) + "9";


    }else if(rom =="VIII" && rom !="VIIII"){
        lat = lat.slice(0,3) + "8"
    }else if(rom =="VII"){
        lat = lat.slice(0,3) + "7"
    }else if(rom =="VI"){
        lat = lat.slice(0,3) + "6"
    }else if(rom =="V"){
        lat = lat.slice(0,3) + "5"
    }else if(rom =="IV"){
        lat = lat.slice(0,3) + "4"
    }else if(rom =="III" && rom !="IIII"){
        lat = lat.slice(0,3) + "3"
    }else if(rom =="II"){
        lat = lat.slice(0,3) + "2"
    }else if(rom =="I"){
        lat = lat.slice(0,3) + "1"
    }
    var num = parseInt(lat);

    if(Number.isInteger(num)){
        vaciar();
        document.getElementById("numRom").innerHTML= rom0;
        document.getElementById("numLat").innerHTML= num;
        document.getElementById("igual").innerHTML= "=";
    }else{
        alert("Introduzca un caracter válido.");
    }

}

function pasarRomano(lat){
    var rom = "";
    var lat1 = lat;


    //Miro el valor de los millares
    if(lat>=3000){
        rom =  "MMM";

    }else if(lat<3000 && lat>=2000){
        rom = "MM";

    }else if(lat<2000 && lat>=1000){
        rom = "M";
    }

    //Miro el valor de la centenas, para eso uso el slice y cojo los 3 últimos valores
    if(lat.slice(-3)>=900){
        rom = rom + "CM";
    }else if(lat.slice(-3)<900 && lat.slice(-3)>=800){
        rom = rom + "DCCC";
    }else if(lat.slice(-3)<800 && lat.slice(-3)>=700){
        rom = rom + "DCC";
    }else if(lat.slice(-3)<700 && lat.slice(-3)>600){
        rom = rom + "DC";
    }else if(lat.slice(-3)<600 && lat.slice(-3)>=500){
        rom = rom + "D";
    }else if(lat.slice(-3)<500 && lat.slice(-3)>=400){
        rom = rom + "CD";
    }else if(lat.slice(-3)<400 && lat.slice(-3)>=300){
        rom = rom + "CCC";
    }else if(lat.slice(-3)<300 && lat.slice(-3)>=200){
        rom = rom + "CC";
    }else if(lat.slice(-3)<200 && lat.slice(-3)>=100){
        rom = rom + "C";
    }

    //Miro el valor de la decenas, para eso uso el slice y cojo los 2 últimos valores

    if(lat.slice(-2)>=90){
        rom = rom + "XC";
    }else if(lat.slice(-2)<90 && lat.slice(-2)>=80){
        rom = rom + "LXXX"
    }else if(lat.slice(-2)<80 && lat.slice(-2)>=70){
        rom = rom + "LXX"
    }else if(lat.slice(-2)<70 && lat.slice(-2)>=60){
        rom = rom + "LX"
    }else if(lat.slice(-2)<60 && lat.slice(-2)>=50){
        rom = rom + "L"
    }else if(lat.slice(-2)<50 && lat.slice(-2)>=40){
        rom = rom + "XL"
    }else if(lat.slice(-2)<40 && lat.slice(-2)>=30){
        rom = rom + "XXX"
    }else if(lat.slice(-2)<30 && lat.slice(-2)>=20){
        rom = rom + "XX"
    }else if(lat.slice(-2)<20 && lat.slice(-2)>=10){
        rom = rom + "X"
    }

     //Miro el valor de la unidades, para eso uso el slice y cojo el  último valor

     if(lat.slice(-1) == 9){
         rom = rom + "IX";
     }else if(lat.slice(-1) == 8){
        rom = rom + "VIII";
     }else if(lat.slice(-1) == 7){
        rom = rom + "VII";
     }else if(lat.slice(-1) == 6){
        rom = rom + "VI";
     }else if(lat.slice(-1) == 5){
        rom = rom + "V";
     }else if(lat.slice(-1) == 4){
        rom = rom + "IV";
     }else if(lat.slice(-1) == 3){
        rom = rom + "III";
     }else if(lat.slice(-1) == 2){
        rom = rom + "II";
     }else if(lat.slice(-1) == 1){
        rom = rom + "I";
     }


    
    document.getElementById("numLat").innerHTML=lat; 
    document.getElementById("numRom").innerHTML=rom;    
    document.getElementById("igual").innerHTML= "=";
    vaciar();
}

function vaciar(){
    var vacio ="";
    document.getElementById("numeroRomano").value = vacio;
    document.getElementById("numeroLatino").value= vacio;
}

function vaciarTodo(){    
    var vacio ="";

    vaciar();
    
    document.getElementById("numLat").innerHTML=vacio; 
    document.getElementById("numRom").innerHTML=vacio;    
    document.getElementById("igual").innerHTML= vacio
}