const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async ({ name, email }) => {
    console.log("entra en sendEmail.js con nombre "+name+"al email: "+email );
        const msg = {
            to: {email},
            from: 'sales@mediterraneanorganicfoods.com', // Use the email address or domain you verified above
            subject: 'Sending contact',
            text: 'Nombre: '+name+" email: "+email,
            html: 'Nombre: '+name+" email: "+email,
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
                console.log("entra en enviar2");
              await sgMail.send(msg);
            } catch (error) {
              console.error(error);
          
              if (error.response) {
                console.error(error.response.body)
              }
            }
          })();
}

export { sendEmail };



/* //ES6
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})(); */