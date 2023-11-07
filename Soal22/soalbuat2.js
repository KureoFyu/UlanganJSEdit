document.addEventListener("DOMContentLoaded", function () {
    const bulanList = document.getElementById("bulanList");
    const namaBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    for (let i = 0; i < namaBulan.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = namaBulan[i];
        bulanList.appendChild(listItem);
    }
});
