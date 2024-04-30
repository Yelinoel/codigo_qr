// const form = document.getElementById('contacto-form');{}
// const qrContainer = document.getElementById('qr-display');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Limpiar contenido anterior del contenedor
//   qrContainer.innerHTML = '';

//   // Recopilar datos del formulario
//   const nombre = document.getElementById('nombre').value;
//   const email = document.getElementById('email').value;
//   const telefono = document.getElementById('telefono').value;
//   const empresa = document.getElementById('empresa').value || '';
//   const sitioWeb = document.getElementById('sitio-web').value || '';
//   const notas = document.getElementById('notas').value || '';

//   // Concatenar información del contacto
//   const informacionContacto = `NOMBRE: ${nombre}\nEMAIL: ${email}\nTELÉFONO: ${telefono}\nEMPRESA: ${empresa}\nSITIO WEB: ${sitioWeb}\nNOTAS: ${notas}`;

//   // Generar código QR
//   const qrcode = new QRCode(qrContainer, {
//     text: informacionContacto,
//     width: 256,
//     height: 256,
//     colorDark: '#000000',
//     colorLight: '#ffffff',
//     correctLevel: 2 // Nivel de corrección de error alto
//   });
// });
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contacto-form');
//     const qrContainer = document.getElementById('qr-display');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         // Limpiar contenido anterior del contenedor
//         qrContainer.innerHTML = '';

//         // Recopilar datos del formulario
//         const nombre = document.getElementById('nombre').value;
//         const email = document.getElementById('email').value;
//         const telefono = document.getElementById('telefono').value;
//         const empresa = document.getElementById('empresa').value || '';
//         const sitioWeb = document.getElementById('sitio-web').value || '';
//         const notas = document.getElementById('notas').value || '';

//         // Concatenar información del contacto
//         const informacionContacto = `NOMBRE: ${nombre}\nEMAIL: ${email}\nTELÉFONO: ${telefono}\nEMPRESA: ${empresa}\nSITIO WEB: ${sitioWeb}\nNOTAS: ${notas}`;

//         // Generar código QR
//         const qrcode = new QRCode(qrContainer, {
//             text: informacionContacto,
//             width: 256,
//             height: 256,
//             colorDark: '#000000',
//             colorLight: '#ffffff',
//             correctLevel: 2 // Nivel de corrección de error alto
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contacto-form');
    const qrIframe = document.getElementById('qr-iframe');
    const qrDisplay = document.getElementById('qr-display');
  
    qrIframe.addEventListener('load', function() {
      const qrContainer = this.contentDocument.getElementById('qr-container');
  
      form.addEventListener('submit', (event) => {
        event.preventDefault();
  
        // Limpiar contenido anterior del contenedor
        qrContainer.innerHTML = '';
  
        // Recopilar datos del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const empresa = document.getElementById('empresa').value || '';
        const sitioWeb = document.getElementById('sitio-web').value || '';
        const notas = document.getElementById('notas').value || '';
  
        // Concatenar información del contacto
        const informacionContacto = `NOMBRE: ${nombre}\nEMAIL: ${email}\nTELÉFONO: ${telefono}\nEMPRESA: ${empresa}\nSITIO WEB: ${sitioWeb}\nNOTAS: ${notas}`;
  
        // Generar código QR
        const qrcode = new QRCode(qrDisplay, {
          text: informacionContacto,
          width: 256,
          height: 256,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.H // Nivel de corrección de error alto
        });
      });
    });
  });
  