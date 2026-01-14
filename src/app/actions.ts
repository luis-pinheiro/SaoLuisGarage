"use server";

import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
    phone: z.string().min(9, "O telemóvel deve ter pelo menos 9 dígitos"),
    service: z.string().min(1, "Por favor selecione um serviço"),
    message: z.string().optional(),
});

export type ActionState = {
    success?: boolean;
    message?: string;
    errors?: {
        name?: string[];
        phone?: string[];
        service?: string[];
        message?: string[];
    };
};

export async function sendContactEmail(prevState: ActionState, formData: FormData): Promise<ActionState> {
    // 1. Validate data
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Por favor, corrija os erros no formulário.",
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, phone, service, message } = validatedFields.data;

    // 2. Configure transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        // 3. Send email to business
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || "geral@saoluisgaragem.pt",
            subject: `Novo Agendamento: ${service}`,
            text: `
        Nome: ${name}
        Telemóvel: ${phone}
        Serviço: ${service}
        Mensagem: ${message || 'Sem mensagem'}
      `,
            html: `
        <h2>Novo Pedido de Agendamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telemóvel:</strong> ${phone}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Mensagem:</strong> ${message || '<em>Sem mensagem</em>'}</p>
      `,
        });

        return {
            success: true,
            message: "Obrigado! O seu pedido foi enviado com sucesso. Entraremos em contacto brevemente.",
        };
    } catch (error) {
        console.error('Email error:', error);
        return {
            success: false,
            message: "Ocorreu um erro ao enviar o seu pedido. Por favor, tente novamente mais tarde ou ligue diretamente.",
        };
    }
}
