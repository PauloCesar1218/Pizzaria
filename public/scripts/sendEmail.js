;(function () {
    const form = document.querySelector('form');
    
    
    const API_URL = 'http://localhost:5000/enviar'

    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        console.log(formData.get('assunto'));
        
        const email = {
            remetente: formData.get('remetente'),
            assunto: formData.get('assunto'),
            corpo: formData.get('corpo')
        };

        console.log(email);
        

        fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
        .then(email => {
            console.log(email);
            form.reset();
            alert(email.msg);
        })

    })

})()
