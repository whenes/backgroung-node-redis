import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3 
  },
  async handle({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: 'whenes <whenes@hotmail.com>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuario',
      html: `Olá, ${user.name}, bem-vindo a DIO.`
    });
  }
}

