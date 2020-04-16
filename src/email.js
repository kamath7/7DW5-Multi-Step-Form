require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.REACT_APP_EMAIL_API_KEY);

function sendEmail(toEmail, values){
    const msg = {
        to: toEmail,
        from: 'kamathinc@gmail.com',
        subject: 'Your data',
        text: `${values.firstName} , ${values.lastName}, ${values.occupation} , ${values.city}, ${values.bio}`,
        html: `
        <table border="1px solid back">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Occupation</th>
          <th>Bio</th>
          <th>City</th>
        </tr>
        <tr>
          <td>${values.firstName}</td>
          <td>${values.lastName}</td>
          <td>${values.occupation}</td>
          <td>${values.bio}</td>
          <td>${values.city}</td>
        </tr>
      </table>
        `,
      };
      sgMail.send(msg);
}

export {sendEmail};