function luasPersegi(){
    let panjangSisi = document.getElementById("squareSide").value;
    let hasilLuas = (parseFloat(panjangSisi) * parseFloat(panjangSisi)).toFixed(2);
    if (isNaN(parseFloat(panjangSisi)) || parseFloat(panjangSisi) <= 0) {
        document.getElementById("hasilLuas1").innerHTML = "Mohon masukkan angka dengan benar (lebih dari 0)";
        document.getElementById("hasilLuas2").innerHTML = "";
        document.getElementById("hasilLuas3").innerHTML = "";
        document.getElementById("squareSide").value = ""
    }
    else {
        document.getElementById("hasilLuas1").innerHTML = "L = S x S";
        document.getElementById("hasilLuas2").innerHTML = "L = " + parseFloat(panjangSisi) + " x " + parseFloat(panjangSisi);
        document.getElementById("hasilLuas3").innerHTML = "L = " + hasilLuas;
    }
}

function resetLuas(){
    document.getElementById("hasilLuas1").innerHTML = "";
    document.getElementById("hasilLuas2").innerHTML = "";
    document.getElementById("hasilLuas3").innerHTML = "";
    document.getElementById("squareSide").value = ""
}

function kelilingPersegi(){
    let panjangSisiKeliling = document.getElementById("sisiKeliling").value;
    let hasilKeliling = (4 * parseFloat(panjangSisiKeliling)).toFixed(2);
    if (isNaN(parseFloat(panjangSisiKeliling)) || parseFloat(panjangSisiKeliling) <= 0) {
        document.getElementById("hasilKeliling1").innerHTML = "Mohon masukkan angka dengan benar (lebih dari 0)";
        document.getElementById("hasilKeliling2").innerHTML = "";
        document.getElementById("hasilKeliling3").innerHTML = "";
        document.getElementById("sisiKeliling").value = ""
    }
    else {
        document.getElementById("hasilKeliling1").innerHTML = "K = 4 x S";
        document.getElementById("hasilKeliling2").innerHTML = "K = 4 x " + parseFloat(panjangSisiKeliling);
        document.getElementById("hasilKeliling3").innerHTML = "K = " + hasilKeliling;
    }  
}

function resetKeliling(){
    document.getElementById("hasilKeliling1").innerHTML = "";
    document.getElementById("hasilKeliling2").innerHTML = "";
    document.getElementById("hasilKeliling3").innerHTML = "";
    document.getElementById("sisiKeliling").value = ""
}