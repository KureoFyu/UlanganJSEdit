function hitungVolumeKubus() {
    var sisi = parseFloat(document.getElementById('sisi').value);

    if (sisi > 0) {
        var volume = Math.pow(sisi, 3);

        document.getElementById('hasilVolume').innerHTML = "Volume kubus adalah: " + volume;
    } else {
        document.getElementById('hasilVolume').innerHTML = "Masukkan panjang sisi yang valid.";
    }
}