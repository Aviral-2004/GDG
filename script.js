const sampleData = [
  { commodity: 'Wheat', state: 'Uttar Pradesh', market: 'Lucknow', modalPrice: 2200, arrivalDate: '2025-03-20' },
  { commodity: 'Rice', state: 'Punjab', market: 'Amritsar', modalPrice: 3200, arrivalDate: '2025-03-21' },
  { commodity: 'Maize', state: 'Bihar', market: 'Patna', modalPrice: 1900, arrivalDate: '2025-03-19' },
  { commodity: 'Barley', state: 'Rajasthan', market: 'Jaipur', modalPrice: 1800, arrivalDate: '2025-03-18' },
  { commodity: 'Mustard', state: 'Haryana', market: 'Karnal', modalPrice: 5100, arrivalDate: '2025-03-22' },
  { commodity: 'Cotton', state: 'Maharashtra', market: 'Nagpur', modalPrice: 6200, arrivalDate: '2025-03-17' },
  { commodity: 'Jute', state: 'West Bengal', market: 'Kolkata', modalPrice: 4500, arrivalDate: '2025-03-20' },
  { commodity: 'Sugarcane', state: 'Tamil Nadu', market: 'Chennai', modalPrice: 3000, arrivalDate: '2025-03-16' },
  { commodity: 'Groundnut', state: 'Gujarat', market: 'Ahmedabad', modalPrice: 5500, arrivalDate: '2025-03-21' },
  { commodity: 'Onion', state: 'Maharashtra', market: 'Nashik', modalPrice: 1700, arrivalDate: '2025-03-15' },
  { commodity: 'Potato', state: 'Uttar Pradesh', market: 'Agra', modalPrice: 1400, arrivalDate: '2025-03-19' },
  { commodity: 'Tomato', state: 'Karnataka', market: 'Bengaluru', modalPrice: 2000, arrivalDate: '2025-03-22' },
  { commodity: 'Chilli', state: 'Andhra Pradesh', market: 'Guntur', modalPrice: 7200, arrivalDate: '2025-03-14' },
  { commodity: 'Turmeric', state: 'Telangana', market: 'Hyderabad', modalPrice: 8200, arrivalDate: '2025-03-20' },
  { commodity: 'Tea', state: 'Assam', market: 'Guwahati', modalPrice: 3500, arrivalDate: '2025-03-17' },
  { commodity: 'Coffee', state: 'Kerala', market: 'Kochi', modalPrice: 8800, arrivalDate: '2025-03-18' },
  { commodity: 'Banana', state: 'Tamil Nadu', market: 'Coimbatore', modalPrice: 1800, arrivalDate: '2025-03-19' },
  { commodity: 'Mango', state: 'Uttar Pradesh', market: 'Varanasi', modalPrice: 4200, arrivalDate: '2025-03-21' },
  { commodity: 'Apple', state: 'Himachal Pradesh', market: 'Shimla', modalPrice: 15000, arrivalDate: '2025-03-16' },
  { commodity: 'Grapes', state: 'Maharashtra', market: 'Pune', modalPrice: 3200, arrivalDate: '2025-03-22' }
];

function displaySampleData() {
  const container = document.getElementById('priceContainer');
  container.innerHTML = '';

  // Display at least 18 cards
  const dataToShow = sampleData.slice(0, Math.max(18, sampleData.length));

  dataToShow.forEach((item) => {
    const card = `<div class='price-card'>
                    <h3>🌾 ${item.commodity}</h3>
                    <p>📍 Region: ${item.state} - ${item.market}</p>
                    <p>💰 Price: ₹${item.modalPrice}</p>
                    <p>🕰 Last Updated: ${item.arrivalDate}</p>
                  </div>`;
    container.insertAdjacentHTML('beforeend', card);
  });
}

function addPriceCard() {
  const commodity = document.getElementById('commodity').value;
  const state = document.getElementById('state').value;
  const market = document.getElementById('market').value;
  const modalPrice = document.getElementById('modalPrice').value;
  const arrivalDate = document.getElementById('arrivalDate').value;

  if (commodity && state && market && modalPrice && arrivalDate) {
    const newItem = { commodity, state, market, modalPrice: Number(modalPrice), arrivalDate };
    sampleData.push(newItem);
    displaySampleData();
    
    // Clear inputs
    document.getElementById('commodity').value = '';
    document.getElementById('state').value = '';
    document.getElementById('market').value = '';
    document.getElementById('modalPrice').value = '';
    document.getElementById('arrivalDate').value = '';
  } else {
    alert('Please fill in all fields before adding!');
  }
}

document.addEventListener('DOMContentLoaded', displaySampleData);
