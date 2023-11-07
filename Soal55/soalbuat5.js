function daftar() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var alamat = document.getElementById('alamat').value;

    if (nama === "" || email === "" || alamat === "") {
        alert("Form belum lengkap.");
    } else {
        alert("Anda telah terdaftar!");
        document.getElementById('registrationForm').reset();
    }
}