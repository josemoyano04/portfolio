import { useState } from 'react';
import '../../styles/ContactMe.css';

export function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://formspree.io/f/xgvknzqv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                console.log('Formulario enviado con éxito');
                alert('Email enviado exitosamente!')
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error('Error al enviar el formulario');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    return (
        <article className='contact-me' id='contact-me'>
            <h2 className='title'>Contactame</h2>
            <section className='form-section'>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name='name' id='name' required value={formData.name} onChange={handleChange} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' required value={formData.email} onChange={handleChange} />

                    <label htmlFor="message-input">Mensaje</label>
                    <textarea id='message-input' name='message' required value={formData.message} onChange={handleChange} />

                    <button type="submit">Enviar</button>
                </form>
            </section>
        </article>
    );
}
