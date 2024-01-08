let duymeler = document.getElementById('kvadratlar').children;
/*
    children propertysi getElementById ile elde etdiyimiz
    div-in daxilindeki butun div'leri bir arraya salir ve ilk basda
    tanimladigimiz duymelere bu arrayi atayir
*/

let sum = 0;
/* Sum'a onceden 0 vermek vacibdir,
   !!!YOXSA O DA USTUNE NESE GELİNENDE BİZİM KİMİ EKZİSTENSİAL KRİZE GİRİB
   MEN NE İDİM NE OLDUM SUALLARI İLE BAŞ BAŞA SONSUZ EZİYYETE MEHKUM OLAR!!!
*/

function selected(index) {
    //Ilk sertimiz butonun sari olub olmadigini, yeni artiq secilmis olub olmadigini yoxlayir
    if (duymeler[index].className == 'btn') {
        // Ve eger sertimiz odenirse onu sari yeni secilmis hala salir
        duymeler[index].className = 'btnsari';
        // Sum'a ise daxilindeki ededi int seklinde elave edir
        sum += parseInt(duymeler[index].innerHTML);
        // Burda ise yeni sum'umuzu result bolumune yazir
        document.getElementById('result').innerHTML = 'Sum:' + sum;
    }

    //Ikinci sertimiz de eyni sekilde butonun secilmis yeni sari oldugu halda yuxardaki islemin tam eksini edir
    else if (duymeler[index].className == 'btnsari') {
        duymeler[index].className = 'btn';
        sum -= parseInt(duymeler[index].innerHTML);
        document.getElementById('result').innerHTML = 'Sum:' + sum;
    }
}

//hormetle en sevimli part-time ders izah edib, full-time derd cekeniniz hohseyuh