document.addEventListener("DOMContentLoaded", () => {
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalImage = document.getElementById("modalImage");
  const modalCategory = document.getElementById("modalCategory");
  const modalYear = document.getElementById("modalYear");

  // Fetch events
  fetch("events.json")
    .then(response => response.json())
    .then(events => {
      events.forEach(event => {
        const marker = document.createElement("div");
        marker.className = "event-marker";
        marker.textContent = event.title + " (" + event.year + ")";
        
        marker.addEventListener("click", () => {
          modalTitle.textContent = event.title;
          modalDescription.textContent = event.description;
          modalImage.src = event.imageURL;
          modalCategory.textContent = event.category;
          modalYear.textContent = event.year;
          modal.style.display = "block";
        });

        timeline.appendChild(marker);
      });
    });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
