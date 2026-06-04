// Load prescriptions ONLY from localStorage (no mock fallback)
function loadPrescriptionsFromStorage() {
    const stored = localStorage.getItem('curepd_prescriptions');
    if (stored) {
        return JSON.parse(stored);
    }
    // Return empty array if nothing saved yet
    return [];
}

let prescriptions = loadPrescriptionsFromStorage();

function renderDashboard(filterTerm = '') {
    const tbody = document.getElementById('prescriptionsTableBody');
    const emptyState = document.getElementById('emptyState');
    
    let filtered = prescriptions;
    if (filterTerm) {
        filtered = prescriptions.filter(p => 
            p.patientName.toLowerCase().includes(filterTerm) || 
            (p.patientPhone && p.patientPhone.includes(filterTerm))
        );
    }
    
    if (filtered.length === 0) {
        tbody.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    
    emptyState.classList.add('hidden');
    tbody.innerHTML = filtered.map(p => `
        <tr class="prescription-row">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">${p.date}</td>
            <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-800">${p.patientName}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${p.patientPhone || '—'}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm">
                <button class="text-indigo-600 hover:text-indigo-800 mr-3 view-btn" data-id="${p.id}"><i class="fas fa-eye"></i> View</button>
                <button class="text-green-600 hover:text-green-800 print-pdf-btn" data-id="${p.id}"><i class="fas fa-print"></i> PDF</button>
            </td>
        </tr>
    `).join('');
    
    // View button -> go to view.html with ID
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-id');
            window.location.href = `view.html?id=${id}`;
        });
    });
    
    // PDF button (for now)
    document.querySelectorAll('.print-pdf-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('You can download the PDF from the prescription view page.');
        });
    });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        renderDashboard(e.target.value.toLowerCase());
    });
}

// Initial render
renderDashboard();

// Optional: refresh when returning from new-prescription (already handled by redirect)