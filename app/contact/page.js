"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import Reveal from "@/components/Animations/ScrollReveal/Reveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClickClear = () =>{
    setSuccess(false);
    setForm({ name: '', email: '', message: '' });
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // fake submit
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 900);
  }

  return (
    <Reveal>
      <main className="max-w-4xl mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-gray-600">
            Have a question, feedback or want to work together? Send us a message and we'll get back to you shortly.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-xl font-semibold mb-4">Send a message</h2>
            <form onSubmit={handleSubmit} noValidate>
              <label className="block mb-3">
                <span className="text-sm font-medium">Name *</span>
                <input
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  name="name"
                  placeholder="Your full name"
                />
                {errors.name && <small className="text-red-500">{errors.name}</small>}
              </label>
              <label className="block mb-3">
                <span className="text-sm font-medium">Email *</span>
                <input
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                />
                {errors.email && <small className="text-red-500">{errors.email}</small>}
              </label>
              <label className="block mb-4">
                <span className="text-sm font-medium">Message *</span>
                <textarea
                  className={`w-full mt-1 p-2 h-28 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  name="message"
                  placeholder="Tell us what's on your mind"
                />
                {errors.message && <small className="text-red-500">{errors.message}</small>}
              </label>
              <div className="flex items-center gap-3">
                <button
                  className="bg-[var(--clr-primary)] p-2 text-white hover:bg-black transition rounded-md"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  className="px-4 py-2 border rounded-md hover:bg-[var(--clr-primary) hover:text-white]"
                  onClick={handleClickClear}
                >
                  Clear
                </button>
              </div>
            </form>
            {success && (
              <div className="mt-4 p-3 rounded-md bg-green-50 border border-green-200 text-green-800">
                Thanks, your message has been received.
              </div>
            )}
          </section>
          <aside className="bg-white p-6 rounded-2xl shadow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact details</h3>
              <p className="flex items-center gap-2 text-gray-700"><Mail size={16} /> contact@novastack.tech</p>
              <p className="flex items-center gap-2 text-gray-700 mt-2"><Phone size={16} /> +880-1792-438195</p>
              <p className="flex items-center gap-2 text-gray-700 mt-2"><MapPin size={16} /> Khulna, Bangladesh</p>
              <div className="mt-5">
                <h4 className="text-sm font-medium mb-2">Follow us</h4>
                <div className="flex gap-3">
                  <a href="#" aria-label="Twitter" className="p-2 rounded-full border"><Twitter size={18} /></a>
                  <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border"><Linkedin size={18} /></a>
                  <a href="#" aria-label="GitHub" className="p-2 rounded-full border"><Github size={18} /></a>
                </div>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p className="mb-2">Prefer another way?</p>
              <div className="flex gap-3">
                <a className="inline-flex items-center gap-2 p-2 rounded-md border" href="contact@novastack.tech"><Mail size={14}/> Email</a>
                <a className="inline-flex items-center gap-2 p-2 rounded-md border" href="tel:01792438135"><Phone size={14}/> Call</a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </Reveal>
  );
}
