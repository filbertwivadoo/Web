


function daftarSekarang() {

    var nama = document.getElementById('nama').value;
    var kelas = document.getElementById('kelas').value;
    

    var kegiatanDipilih = [];
    var checkboxKegiatan = document.getElementsByName('kegiatan');
    for (var i = 0; i < checkboxKegiatan.length; i++) {
        if (checkboxKegiatan[i].checked) {
            kegiatanDipilih.push(checkboxKegiatan[i].value);
        }
    }
    

    var waktuDipilih = "";
    var radioWaktu = document.getElementsByName('waktu');
    for (var j = 0; j < radioWaktu.length; j++) {
        if (radioWaktu[j].checked) {
            waktuDipilih = radioWaktu[j].value;
        }
    }
    

    document.getElementById('errorNama').style.display = 'none';
    document.getElementById('errorKelas').style.display = 'none';
    document.getElementById('errorKegiatan').style.display = 'none';
    document.getElementById('errorWaktu').style.display = 'none';
    

    var adaError = false;
    

    if (nama == "") {
        document.getElementById('errorNama').style.display = 'block';
        adaError = true;
    }
    

    if (kelas == "") {
        document.getElementById('errorKelas').style.display = 'block';
        adaError = true;
    }
    

    if (kegiatanDipilih.length < 1) {
        document.getElementById('errorKegiatan').style.display = 'block';
        adaError = true;
    }
    

    if (waktuDipilih == "") {
        document.getElementById('errorWaktu').style.display = 'block';
        adaError = true;
    }
    

    if (adaError == false) {
        document.getElementById('hasilNama').innerHTML = nama;
        document.getElementById('hasilKelas').innerHTML = kelas;
        document.getElementById('hasilKegiatan').innerHTML = kegiatanDipilih.join(', ');
        document.getElementById('hasilWaktu').innerHTML = waktuDipilih;
        document.getElementById('hasil').style.display = 'block';
    } else {
        document.getElementById('hasil').style.display = 'none';
    }
}


function resetForm() {

    document.getElementById('nama').value = "";
    document.getElementById('kelas').value = "";
    

    var checkboxKegiatan = document.getElementsByName('kegiatan');
    for (var i = 0; i < checkboxKegiatan.length; i++) {
        checkboxKegiatan[i].checked = false;
    }
    

    var radioWaktu = document.getElementsByName('waktu');
    for (var j = 0; j < radioWaktu.length; j++) {
        radioWaktu[j].checked = false;
    }
    

    document.getElementById('errorNama').style.display = 'none';
    document.getElementById('errorKelas').style.display = 'none';
    document.getElementById('errorKegiatan').style.display = 'none';
    document.getElementById('errorWaktu').style.display = 'none';
    

    document.getElementById('hasil').style.display = 'none';
}