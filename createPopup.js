const btn = document.getElementById('createPopup')
btn.onclick = () => {
    const phoneNumber = document.getElementsByName('phoneNumber')[0].value;
    const position = document.getElementsByName('position')[0].selectedIndex;
    const text = document.getElementsByName('text')[0].value;

    const textArea = document.getElementsByTagName('textarea')[0];
    textArea.value = `<script id="whatsAppPopupIcon" src="https://niranjan.social/whatsapp-popup/script.js" data-phoneNumber=${phoneNumber} data-position=${position} data-text="${text}></script>`;
};