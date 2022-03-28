import nodemailer from "nodemailer"

export const emailRegistro =async (datos)=>{
    const {email, nombre, token} = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USERS,
          pass: process.env.EMAIL_PASS
        }
      });

      //Informaación del email

      const info = await transport.sendMail({
          from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
          to: email,
          subject: "UpTask - Comprueba tu cuenta",
          text:"Comprueba tu cuenta en UpTask",
          html:`<p>Hola: ${nombre} comprueba tu cuenta en UpTask</p>
          <p>Tu cuenta ya está casi lista, solo debes comprobarla en el siguiente enlace:
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar cuenta</a>
          </p>

          <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
          
        `

      })
}


export const emailOlvidePassword =async (datos)=>{
  const {email, nombre, token} = datos
 

  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
      user: process.env.EMAIL_USERS,
      pass: process.env.EMAIL_PASS
      }
    });

    //Informaación del email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - Restablece tu password",
        text:"Restablece tu password",
        html:`<p>Hola: ${nombre} has solicitado restablecer tu password</p>
        <p>Sigue el siguiente enlace para generar un nuevo password:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer password</a>
        </p>

        <p>Si tú no solicitaste este email, puedes ignorar el mensaje</p>
        
      `

    })
}