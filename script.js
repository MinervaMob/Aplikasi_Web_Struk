// Pastikan kode ini berada di file script.js

document.getElementById('transactionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil nilai dari form
    const customerName = document.getElementById('customerName').value;
    const transactionAmount = document.getElementById('transactionAmount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Masukkan data ke dalam struk
    document.getElementById('receiptCustomerName').textContent = customerName;
    document.getElementById('receiptAmount').textContent = transactionAmount;
    document.getElementById('receiptPaymentMethod').textContent = paymentMethod;
    document.getElementById('receiptTime').textContent = new Date().toLocaleString();

    // Tampilkan struk
    document.getElementById('receipt').classList.remove('hidden');
});

// Fungsi untuk membagikan struk ke WhatsApp sebagai gambar
document.getElementById('shareWhatsApp').addEventListener('click', function () {
    const receiptElement = document.getElementById('receipt');

    // Mengambil elemen struk dan mengubahnya menjadi gambar
    html2canvas(receiptElement).then(function (canvas) {
        // Konversi canvas ke Data URL (base64)
        const imageDataUrl = canvas.toDataURL('image/png');

        // Buat link untuk membuka WhatsApp dengan teks yang telah diencode
        const whatsappUrl = `whatsapp://send?text=Struk%20transaksi%20terlampir%20sebagai%20gambar.`;

        // Download gambar ke perangkat (opsional)
        const link = document.createElement('a');
        link.href = imageDataUrl;
        link.download = 'struk-transaksi.png';
        link.click();

        // Buka WhatsApp dan minta pengguna melampirkan gambar yang didownload
        window.location.href = whatsappUrl;
    });
});
