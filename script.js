
//serives show and hide 
function toggleDescription(id) {
  const description = document.getElementById(`service-desc-${id}`);
  const button = document.querySelector(`[onclick="toggleDescription(${id})"]`);
  if (description.style.display === 'none' || description.style.display === '') {
    description.style.display = 'block';
    button.textContent = 'Show Less';
  } else {
    description.style.display = 'none';
    button.textContent = 'Learn More';
  }
}


 // Initialize the counter animation
 document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.count');

  counters.forEach(counter => {
    const finalCount = parseInt(counter.getAttribute('data'));
    const duration = parseInt(counter.getAttribute('data-speed'));
    const interval = 50;
    const increment = finalCount / (duration / interval);
    let count = parseInt(counter.getAttribute('data-from'));

    const updateCounter = () => {
      count += increment;
      if (count >= finalCount) {
        count = finalCount;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(count);
    };

    const timer = setInterval(updateCounter, interval);
  });
});

//chessbord

document.addEventListener('DOMContentLoaded', function() {
    const chessboard = document.getElementById('chessboard');
    let isBlack = true;
  
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(isBlack ? 'black' : 'white');
        chessboard.appendChild(cell);
        isBlack = !isBlack;
      }
      isBlack = !isBlack; // Switch the starting color for each row
    }
  });


  //progrsss bar 
  document.addEventListener('DOMContentLoaded', function() {
    const progress1 = document.getElementById('progress1');
    const progress2 = document.getElementById('progress2');
  
    // Set initial progress values (in percentage)
    let progressValue1 = 30;
    let progressValue2 = 70;
  
    // Update progress bar widths based on data
    progress1.style.width = progressValue1 + '%';
    progress2.style.width = progressValue2 + '%';
  });
  
  