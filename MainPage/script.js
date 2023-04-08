 // Get the scrollable container and its content
  const container = document.querySelector('.category-scrollable');
  
  let isMouseDown = false; // Variable to track mouse down state
  let startX; // Variable to store initial mouse X position
  let scrollLeft; // Variable to store initial scroll position of the container
  
  container.addEventListener('mousedown', (event) => {
    isMouseDown = true; // Set mouse down state to true
    startX = event.clientX; // Store initial mouse X position
    scrollLeft = container.scrollLeft; // Store initial scroll position of the container
  });
  
  container.addEventListener('mouseup', () => {
    isMouseDown = false; // Reset mouse down state to false
  });
  
  container.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return; // Return early if mouse is not down
  
    // Calculate the distance dragged by the mouse
    const dragX = event.clientX - startX;
  
    // Update the scroll position of the container by adding the distance dragged
    container.scrollLeft = scrollLeft - dragX;
  });