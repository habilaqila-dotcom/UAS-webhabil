function validasi() {
    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let kategori = document.getElementById("kategori").value;

    if (nama === "" || jumlah === "" || kategori === "") {
        alert("Semua field harus diisi!");
        return false;
    }
    return true;
}
