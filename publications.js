document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and publication items
    const filterButtons = document.querySelectorAll('.category-btn');
    const publicationItems = document.querySelectorAll('.publication-item');

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the filter value
            const filter = this.getAttribute('data-filter');
            
            // Filter publication items
            publicationItems.forEach(item => {
                // Show all items if 'all' is selected
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    // Check if item matches the selected filter
                    const itemType = item.getAttribute('data-type');
                    item.style.display = itemType === filter ? 'block' : 'none';
                }
            });
        });
    });
});