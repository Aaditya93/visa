import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendVarificationEmail = async (email: string, token: string) => {
    const ConfirmationLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await  resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Hello world',
        html: `
            <h1>Verify your email</h1>
            <p>Click the link below to verify your email</p>
            <a href="${ConfirmationLink}">Verify email</a>
        `
    })
}

export const PasswordResetEmail = async (email: string, token: string) => {
    const ConfirmationLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await  resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'Hello world',
        html: `
            <h1>Reset Your Password</h1>
            <p>Click the link below to verify your email</p>
            <a href="${ConfirmationLink}">Verify email</a>
        `
    })
}
