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
    document.getElementById('receipt').style.display = 'block';
});

// Fungsi untuk membagikan struk ke WhatsApp
document.getElementById('shareWhatsApp').addEventListener('click', function () {
    const customerName = document.getElementById('customerName').value;
    const transactionAmount = document.getElementById('transactionAmount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const receiptTime = new Date().toLocaleString();

    // Format teks yang akan dibagikan
    const shareText = `Struk Transaksi:\nNama Pelanggan: ${customerName}\nNominal Transaksi: Rp${transactionAmount}\nMetode Pembayaran: ${paymentMethod}\nWaktu Transaksi: ${receiptTime}`;

    // Encode teks untuk URL
    const encodedText = encodeURIComponent(shareText);

    // Buat URL WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;

    // Buka WhatsApp dengan URL
    window.open(whatsappUrl, '_blank');
});
