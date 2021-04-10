const newFormHandler = async (event) => {
    event.preventDefault();
  
    const sitter_first_name = document.querySelector('#sitter_first_name').value.trim();
    const sitter_last_name = document.querySelector('#sitter_last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const address = document.querySelector('#address').value.trim();
    const zipcode_id = document.querySelector('#zipcode_id').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const mobile = document.querySelector('#mobile').value.trim();
    const aboutTitle = document.querySelector('#aboutTitle').value.trim();
    const aboutText = document.querySelector('#aboutText').value.trim();
  
    if (sitter_first_name && sitter_last_name && email && address && zipcode_id && phone && mobile && aboutTitle && aboutText) {
      const response = await fetch(`/api/profile`, {
        method: 'POST',
        body: JSON.stringify({ sitter_first_name,sitter_last_name, address, email, zipcode_id, phone, mobile,aboutTitle,aboutText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);