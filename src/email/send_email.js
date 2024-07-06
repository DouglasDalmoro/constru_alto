import { EMAIL_FROM, SUBJECT, NAME_FROM, TEMPLATEID } from "../config"

const Recipient = require("mailersend").Recipient;
const EmailParams = require("mailersend").EmailParams;
const MailerSend = require("mailersend");

const MailerSend = new MailerSend.MailerSend({
  api_key: "key",
});

const recipients = [new Recipient(EMAIL_FROM, "Your Client")];

const personalization = [
  {
    email: "recipient@email.com",
    data: {
      nome_contato: "joao",
      telefone_contato: "carlos",
      descrição_contato: "beto",
    },
  },
];

const emailParams = new EmailParams()
  .setFrom(EMAIL_FROM)
  .setFromName(NAME_FROM)
  .setRecipients(recipients)
  .setSubject(SUBJECT)
  .setTemplateId(TEMPLATEID)
  .setPersonalization(personalization);

mailersend.send(emailParams);
