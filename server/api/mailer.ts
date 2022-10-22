import nodemailer from 'nodemailer'

const config = useRuntimeConfig()

const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: config.nodemaileruser,
    pass: config.nodemailerpass
  }
})

export default defineEventHandler(async (event) => {

  // Or use SMTP if you feel like

  const body = await readBody(event) // Pass params via JSON in the POST request
  
  const result = transporter.sendMail({
    from: body.email,
    to: '1913010909@untels.edu.pe',
    subject: body.subject + ' : ' + body.name,
    text: body.text
  })

  return result
})