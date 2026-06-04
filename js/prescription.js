// Set current date
document.getElementById('currentDate').innerText = new Date().toLocaleDateString('en-GB');

// Add medicine row
document.getElementById('addMedicineBtn').addEventListener('click', () => {
    const tbody = document.getElementById('medicinesTableBody');
    const newRow = document.createElement('tr');
    newRow.className = 'medicine-row';
    newRow.innerHTML = `
        <td><input type="text" class="w-full border-b border-gray-200 focus:border-indigo-500 outline-none py-1 medicine-name" placeholder="e.g., Napa 500mg"></td>
        <td><input type="text" class="w-full border-b border-gray-200 focus:border-indigo-500 outline-none py-1 medicine-dose" placeholder="1+1+1"></td>
        <td><input type="text" class="w-full border-b border-gray-200 focus:border-indigo-500 outline-none py-1 medicine-duration" placeholder="5 days"></td>
        <td><button class="text-red-400 remove-medicine"><i class="fas fa-trash-alt"></i></button></td>
    `;
    tbody.appendChild(newRow);
    attachRemoveEvent(newRow.querySelector('.remove-medicine'));
});

function attachRemoveEvent(btn) {
    btn.addEventListener('click', () => {
        btn.closest('.medicine-row').remove();
    });
}

// Attach remove to existing remove buttons
document.querySelectorAll('.remove-medicine').forEach(btn => attachRemoveEvent(btn));

// Save Prescription (mock - save to localStorage and redirect to dashboard)
document.getElementById('savePrescriptionBtn').addEventListener('click', () => {
    const patientName = document.getElementById('patientName').value.trim();
    if (!patientName) {
        alert("Please enter patient name");
        return;
    }
    const patientAge = document.getElementById('patientAge').value;
    const patientPhone = document.getElementById('patientPhone').value;
    const advice = document.getElementById('advice').value;
    
    const medicines = [];
    document.querySelectorAll('.medicine-row').forEach(row => {
        const name = row.querySelector('.medicine-name').value;
        const dose = row.querySelector('.medicine-dose').value;
        const duration = row.querySelector('.medicine-duration').value;
        if (name) medicines.push({ name, dose, duration });
    });
    
    const prescription = {
        id: 'RX-' + Date.now(),
        patientName,
        patientAge,
        patientPhone,
        advice,
        medicines,
        date: new Date().toISOString().split('T')[0]
    };
    
    // Retrieve existing prescriptions from localStorage or initialize
    let allPrescriptions = JSON.parse(localStorage.getItem('curepd_prescriptions')) || [];
    allPrescriptions.unshift(prescription);
    localStorage.setItem('curepd_prescriptions', JSON.stringify(allPrescriptions));
    
    alert('Prescription saved locally! Redirecting to dashboard.');
    window.location.href = 'dashboard.html';
});

// PDF generation using html2pdf
document.getElementById('generatePdfBtn').addEventListener('click', () => {
    const element = document.getElementById('prescriptionPrintArea');
    const opt = {
        margin:        [0.5, 0.5, 0.5, 0.5],
        filename:     `CurePdRx_${document.getElementById('patientName').value || 'prescription'}.pdf`,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, letterRendering: true },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});