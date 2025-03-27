function toggleBox(boxNumber) {
    // Collapse all boxes first
    const allBoxes = document.querySelectorAll('.box');
    const allContents = document.querySelectorAll('.content');
  
    allBoxes.forEach((box, index) => {
      if (index + 1 === boxNumber) {
        box.classList.toggle('active');
        const content = box.querySelector('.content');
        if (content) {
          content.style.display = content.style.display === 'block' ? 'none' : 'block';
        }
      } else {
        box.classList.remove('active');
        const content = box.querySelector('.content');
        if (content) {
          content.style.display = 'none';
        }
      }
    });
  }
  
  // Ensure proper content visibility on page load
  document.addEventListener('DOMContentLoaded', () => {
    const initialContent = document.getElementById('box2-content');
    if (initialContent) {
      initialContent.style.display = 'none';
    }
  });
  