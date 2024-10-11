import { useState } from 'react';
import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser";

const EmailService = () => {
    const [loading, setLoading] = useState(false);

    const sendEmail = async (form) => {
        try {
            setLoading(true);

            const response = await emailjs.sendForm(
                `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
                form,
                {
                    publicKey: `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`,
                }
            );

            // console.log("SUCCESS!", response);

            toast.success("Email sent successfully!");
            form.reset();
        } catch (error) {
            console.error("FAILED...", error);
            toast.error("Failed. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading };
};
export const sendEmailNotification = async (messageData) => {
    const templateParams = {
        name: messageData.name,
        message: messageData.message,
        email: messageData.email,
    };

    try {
        const result = await emailjs.send(
            `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
            `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_GUESTBOOK_ID}`,
            templateParams,
            `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`             // Ganti dengan user ID dari EmailJS
        );
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};
export default EmailService;
