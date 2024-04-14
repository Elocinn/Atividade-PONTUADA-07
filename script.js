// Get the form and tbody elements
const form = document.getElementById('formAluno');
const tbody = document.querySelector('tbody');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get input values
    const ra = document.getElementById('ra').value.trim();
    const nome = document.getElementById('nome').value.trim();
    const dataNascimento = document.getElementById('dataNascimento').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    // Validate input
    if (!ra || !nome || !dataNascimento || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Format date and telephone number
    const formattedDataNascimento = formatDate(dataNascimento);
    const formattedTelefone = formatTelefone(telefone);

    // Create table row and cells
    const tr = document.createElement('tr');

    const tdRA = document.createElement('td');
    tdRA.textContent = ra;
    tr.appendChild(tdRA);

    const tdNome = document.createElement('td');
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    const tdDataNascimento = document.createElement('td');
    tdDataNascimento.textContent = formattedDataNascimento;
    tr.appendChild(tdDataNascimento);

    const tdTelefone = document.createElement('td');
    tdTelefone.textContent = formattedTelefone;
    tr.appendChild(tdTelefone);

    const tdApagar = document.createElement('td');
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-trash-alt"></i> Apagar';
    button.addEventListener('click', function() {
  
    tr.remove();
    });
    tdApagar.appendChild(button);
    tr.appendChild(tdApagar);


    // Append the row to the tbody
    tbody.appendChild(tr);

    // Reset the form after successful submission
    form.reset();
});

function formatDate(dateString) {
    const cleaned = dateString.replace(/\D/g, ''); // Remove all non-digit characters
    const day = cleaned.substring(0, 2); // Extract day
    const month = cleaned.substring(2, 4); // Extract month
    const year = cleaned.substring(4, 8); // Extract year

    // Construct the formatted date string
    return `${day}/${month}/${year}`;
}

function formatTelefone(telefone) {
    const cleaned = telefone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
        // Construct the formatted telephone number with parentheses and hyphen
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    } else {
        // If the input doesn't match the expected pattern, return the cleaned input
        return cleaned;
    }
}