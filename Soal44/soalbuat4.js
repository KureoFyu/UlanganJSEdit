function cekUsia() {
    var usia = parseInt(document.getElementById('usia').value);
    var hasilPengecekan = document.getElementById('hasil');
    
    if (usia >= 17) {
        hasilPengecekan.innerHTML = "Anda sudah cukup usia untuk membuat KTP.";
    } else {
        hasilPengecekan.innerHTML = "Maaf, Anda belum cukup usia untuk membuat KTP.";
    }
}