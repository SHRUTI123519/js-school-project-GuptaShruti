document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.getElementById('timeline');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalYear = document.getElementById('modal-year');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');

  fetch('events.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load events.json');
      return res.json();
    })
    .then(events => renderTimeline(events))
    .catch(err => {
      console.error(err);
      timeline.textContent = 'Failed to load timeline.';
    });

  function renderTimeline(events) {
    timeline.innerHTML = '';
    events.forEach((ev, i) => {
      const item = document.createElement('article');
      item.className = 'timeline-item';
      item.tabIndex = 0;
      item.innerHTML = `
        <div class="thumb-wrap">
          <img src="${ev.imageURL}" alt="${ev.title} thumbnail" class="thumb">
        </div>
        <div class="meta">
          <strong class="year">${ev.year}</strong>
          <div class="title">${ev.title}</div>
        </div>
      `;
      const open = () => openModal(ev);
      item.addEventListener('click', open);
      item.addEventListener('keydown', (e) => { if (e.key === 'Enter') open(); });
      timeline.appendChild(item);
    });
  }

  function openModal(ev) {
    modalImg.src = ev.imageURL;
    modalImg.alt = ev.title;
    modalTitle.textContent = ev.title;
    modalYear.textContent = ev.year;
    modalDesc.textContent = ev.description;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
});
