const body = document.querySelector('body');
body.onload = () => {

    //insert css file
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://asset.cloudinary.com/def3l7pcw/5ea00f0c8a8b1065e754c89b8337f713';
    document.getElementsByTagName('HEAD')[0].appendChild(link);

    // get information from script tag
    const whatsAppPhoneNumber = document.getElementById("whatsAppPopupIcon").dataset.phoneNumber;
    const whatsAppPosition = document.getElementById("whatsAppPopupIcon").dataset.position;
    const whatsAppText = document.getElementById("whatsAppPopupIcon").dataset.text;

    const whatsappdiv = document.createElement('div');
    whatsappdiv.className = 'whatsappdiv';

    const whatsappimg = document.createElement('img');
    whatsappimg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg';
    whatsappimg.className = 'whatsappimg';
    whatsappdiv.appendChild(whatsappimg);

    whatsappdiv.onclick = () => {
        window.open('https://api.whatsapp.com/send?phone='+whatsAppPhoneNumber+'&text='+whatsAppText, '_blank');
    };

    //location of the whatsapp icon ( right or left)
    positions = ['right', 'left']
    whatsappdiv.classList.add(positions[whatsAppPosition % 2])
    body.appendChild(whatsappdiv);
};