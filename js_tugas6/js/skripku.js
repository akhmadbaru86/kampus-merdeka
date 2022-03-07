function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2() {
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function hitung(x) {
    let frm = document.getElementById("formulir");
    let a1 = frm.a1.value;
    let a2 = frm.a2.value;

    let hasil ;
    switch(x) {
        case"tambah" : hasil = parseInt(a1) + parseInt(a2);break;
        case"kurang" : hasil = parseInt(a1) - parseInt(a2);break;
        case"kali" : hasil = parseInt(a1) * parseInt(a2);break;
        case"bagi" : hasil = parseInt(a1) / parseInt(a2);break;
        case"pangkat" : hasil = Math.pow(parseInt(a1) , parseInt(a2));break;
    }

    if(a1== ""){
        alert( "harap isi data berupa angka");
    }
    else if(isNaN(a1)){
        alert( "harap isi data berupa angka");
    }
    else if(a2== ""){
        alert( "harap isi data berupa angka");
    }
    else if(isNaN(a2)){
        alert( "harap isi data berupa angka");
    } else {
        frm.hasil.value = hasil;
    }
}