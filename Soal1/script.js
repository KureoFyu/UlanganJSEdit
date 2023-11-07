function pilihHari() {
    var select = document.getElementById("hari");
    var selectedValue = select.value;
    var message = "";

    switch (selectedValue.toLowerCase()) {
        case "senin":
            message = "Saya pilih hari Senin";
            break;
        case "selasa":
            message = "Saya pilih hari Selasa";
            break;
        case "rabu":
            message = "Saya pilih hari Rabu";
            break;
        case "kamis":
            message = "Saya pilih hari Kamis";
            break;
        case "jumat":
            message = "Saya pilih hari Jumat";
            break;
        case "sabtu":
            message = "Saya pilih hari Sabtu";
            break;
        case "minggu":
            message = "Saya pilih hari Minggu";
            break;
        default:
            message = "Hari yang Anda pilih tidak valid.";
    }

    alert(message);
}