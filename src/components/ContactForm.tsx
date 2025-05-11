'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = {
      name,
      email,
      company,
      phone,
      message,
      date: selectedDate ? selectedDate.toISOString() : '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setMessage('');
        setSelectedDate(null);
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send message: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-gray-900 text-white rounded-lg shadow-xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gold-500 mb-8">Solicitar Información</h2>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre Completo</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm text-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm text-white"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300">Empresa (Opcional)</label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm text-white"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Teléfono (Opcional)</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm text-white"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-300">Fecha y Hora Preferidas para Contacto</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy HH:mm"
          minDate={new Date()}
          placeholderText="Seleccione fecha y hora"
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm text-white"
          wrapperClassName="w-full"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:ring-gold-500 focus:border-gold-500 sm:text-sm text-white"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 focus:ring-offset-gray-900 transition duration-150 ease-in-out"
        >
          Enviar Solicitud
        </button>
      </div>
      {status && <p className="text-center text-sm mt-4 text-gray-400">{status}</p>}
    </form>
  );
};

export default ContactForm;

