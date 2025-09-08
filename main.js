        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for table of contents links
            document.querySelectorAll('.toc a').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Search functionality
            const searchForm = document.querySelector('.search-bar');
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const searchTerm = this.querySelector('input').value;
                if (searchTerm.trim() !== '') {
                    alert(`Searching for: ${searchTerm}`);
                    // In a real application, you would redirect to search results or filter content
                }
            });
        });