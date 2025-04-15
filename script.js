  document.querySelectorAll('.custom-accordion').forEach((accordion) => {
    const summary = accordion.querySelector('summary');
    const content = accordion.querySelector('p');

    summary.addEventListener('click', (e) => {
      e.preventDefault();

      const isOpen = accordion.hasAttribute('open');

      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + 'px';
        requestAnimationFrame(() => {
          content.style.maxHeight = '0px';
          content.style.opacity = '0';
        });

        setTimeout(() => {
          accordion.removeAttribute('open');
        }, 600); 
      } else {
        accordion.setAttribute('open', '');
        content.style.maxHeight = '0px';
        requestAnimationFrame(() => {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
        });
      }
    });
  });









  
