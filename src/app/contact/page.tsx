import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
    title: 'Contact',
    description: "Get in touch with NexGen Professional Solutions. Start the conversation today.",
};

export default function ContactPage() {
    return <ContactForm />;
}