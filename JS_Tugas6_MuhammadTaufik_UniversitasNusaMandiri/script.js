function hitung() {
  let frm = document.getElementById("formulir");
  let a1 = frm.angka1.value;
  let a2 = frm.angka2.value;
  let total = a1 * a2;
  frm.hasil.value = total;
}
function hitung2() {
  let frm = document.getElementById("formulir");
  let a1 = frm.angka1.value;
  let a2 = frm.angka2.value;
  let total = a1 / a2;
  frm.hasil.value = total;
}
function hitung3() {
  let frm = document.getElementById("formulir");
  let a1 = frm.angka1.value;
  let a2 = frm.angka2.value;
  let total = parseFloat(a1) + parseFloat(a2);
  frm.hasil.value = total;
}
function hitung4() {
  let frm = document.getElementById("formulir");
  let a1 = frm.angka1.value;
  let a2 = frm.angka2.value;
  let total = parseFloat(a1) - parseFloat(a2);
  frm.hasil.value = total;
}
function hitung5() {
  let frm = document.getElementById("formulir");
  let a1 = frm.angka1.value;
  let a2 = frm.angka2.value;
  let total = Math.pow(a1, a2);
  frm.hasil.value = total;
}
function t() {
  let frm = document.getElementById("formulir");
  let a1 = frm.angka1.value;
  let a2 = frm.angka2.value;
  //jika inputan salah
  if (isNaN(a1) || a1 == "") {
    alert("Data Harga Salah/Kosong");
  } else if (isNaN(a2) || a2 == "") {
    alert("Data Jumlah Salah/Kosong");
  } else {
    //jika inputan benar
    let total = a1 * a2; //perhitungan
    frm.hasil.value = total; //penempatan hasil di element form hasil
  }
}

function kosong1() {
  let frm = document.getElementById("formulir");
  frm.angka1.value = "";
}

function kosong2() {
  let frm = document.getElementById("formulir");
  frm.angka2.value = "";
}

function hapus() {
  let frm = document.getElementById("formulir");
  frm.angka1.value = "";
  frm.angka2.value = "";
  frm.hasil.value = "";
}
