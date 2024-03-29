import { useState } from 'react';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const useEmailService = () => {
    const [loading, setLoading] = useState(false);

    const sendEmail = async (form) => {
        try {
            setLoading(true);

            const response = await emailjs.sendForm(
                `${process.env.EMAILJS_SERVICE_ID}`,
                `${process.env.EMAILJS_TEMPLATE_ID}`,
                form,
                {
                    publicKey: `${process.env.EMAILJS_PUBLIC_KEY}`,
                }
            );

            console.log("SUCCESS!", response);

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

export default useEmailService;
