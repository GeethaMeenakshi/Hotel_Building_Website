document.getElementById('playButton').addEventListener('click', function() {
    window.open('video.html', '_blank');
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const today = new Date().toISOString().split('T')[0];
    
    const fromDateInput = document.getElementById("from-date");
    const toDateInput = document.getElementById("to-date");

    fromDateInput.setAttribute("min", today);
    toDateInput.setAttribute("min", today);

    fromDateInput.addEventListener("change", function() {
        const fromDate = fromDateInput.value;
        toDateInput.setAttribute("min", fromDate);
    });

    toDateInput.addEventListener("change", function() {
        const fromDate = fromDateInput.value;
        const toDate = toDateInput.value;
        if (toDate < fromDate) {
            toDateInput.value = fromDate;
        }
    });
});

function bookNow() {
    const fromDate = document.getElementById('from-date').value;
    const toDate = document.getElementById('to-date').value;
    const guests = document.getElementById('guests').value;

    if (!fromDate || !toDate || !guests) {
        alert('Please fill in all fields');
        return;
    }

    let rooms=document.getElementsByClassName('homeContent');
    for (let i = 0; i < rooms.length; i++) {
        rooms[i].classList.add('hidden');
    }

    // Display room categories
    document.getElementById('room').classList.remove('hidden');
    document.getElementById('rooms').classList.remove('hidden');
    // Store booking details
    sessionStorage.setItem('fromDate', fromDate);
    sessionStorage.setItem('toDate', toDate);
    sessionStorage.setItem('guests', guests);
}

function selectRoom(category) {
    const fromDate = sessionStorage.getItem('fromDate');
    const toDate = sessionStorage.getItem('toDate');
    const guests = sessionStorage.getItem('guests');
    
    const ticketDetails = `
        Category: ${category} Room<br>
        From: ${fromDate}<br>
        To: ${toDate}<br>
        Number of Guests: ${guests}
    `;

    document.getElementById('ticketDetails').innerHTML = ticketDetails;
    document.getElementById('room').classList.add('hidden');
    // Hide room categories and display ticket
    document.getElementById('rooms').classList.add('hidden');
    document.getElementById('confirm').classList.remove('hidden');
    document.getElementById('ticket').classList.remove('hidden');
}

function printTicket() {
    window.print();
    showHomePage;
}
