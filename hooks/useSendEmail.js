import {config} from '../config/index'
const sgMail = require('@sendgrid/mail');
/* Pasar el codigo a la carpeta /utils/sendEmail.js*/
sgMail.setApiKey(config.sendGridApi);

const useSendEmail = async ({ nombre, email, pais, motivo }) => {
        const msg = {
            to: 'sales@mediterraneanorganicfoods.com',
            from: 'sales@mediterraneanorganicfoods.com', // Use the email address or domain you verified above
            subject: 'Envio de contacto',
            text: 'Nombre: '+nombre+" con email: "+email+" del pais "+ pais+" con motivo de "+motivo,
            html: 'Nombre: '+nombre+" con email: "+email+ " del pais "+ pais+" con motivo de "+motivo,
        };

        /* sgMail.send(msg)
        .then(() => {console.log("entra en enviar1");}, error => {
            console.error(error);
            if (error.response) {
            console.error(error.response.body)
            }
        }); */
        (async () => {
            try {
              await sgMail.send(msg);
            } catch (error) {
              console.error(error);
          
              if (error.response) {
                console.error(error.response.body)
              }
            }
          })();
}

export { useSendEmail };
