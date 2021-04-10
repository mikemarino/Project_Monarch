const newFormHandler = async (event) => {
    event.preventDefault();

    const sitter_first_name = document.querySelector('#first_name').value.trim();
    const sitter_last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const addressLine1 = document.querySelector('#addressLine1').value.trim();
    const addressLine2 = document.querySelector('#addressLine2').value.trim();
    const city = document.querySelector('#city').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    const mobile = document.querySelector('#mobile').value.trim();
    const aboutTitle = document.querySelector('#aboutTitle').value.trim();
    const aboutText = document.querySelector('#aboutText').value.trim();



    // ========

    if (sitter_first_name) {
       
            // var serviceArray = [];

            // var m = document.querySelector('.service-box');

            // var arrLen = document.querySelector('.service-box').length;

            // console.log(arrLen);

            // for (var i = 0; i < arrLen; i++) {
            //     var w = m[i];
            //     if (w.checked) {
            //         serviceArray.push({
            //             "service_id": w.value
            //         });
            //         console.log(w.value);
            //     }
            // }

            // var service_id = serviceArray;
            // console.log(service_id);
          
        const response = await fetch(`/api/sitter`, {
            method: 'POST',
            body: JSON.stringify({
                sitter_first_name,
                sitter_last_name,
                email,
                addressLine1,
                addressLine2,
                city,
                zipcode,
                mobile,
                aboutTitle,
                aboutText,
            


            }),
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (response.ok) {
            document.location.replace('/sitters');
        } else {
            alert('Failed to create Sitter');
        }
    }
};

document
    .querySelector('#petSitterForm')
    .addEventListener('submit', newFormHandler);