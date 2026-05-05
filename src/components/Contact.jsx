import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitContact, resetContactState } from '../features/contact/contactSlice';
import SectionHeading from './SectionHeading';
import useInViewReveal from '../hooks/useInViewReveal';

const Contact = () => {
  const dispatch = useDispatch();
  const { status, message, error } = useSelector((state) => state.contact);
  const [ref, visible] = useInViewReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  useEffect(() => {
    if (status === 'succeeded') {
      setForm({ name: '', email: '', phone: '', message: '' });
      const timer = window.setTimeout(() => dispatch(resetContactState()), 5000);
      return () => window.clearTimeout(timer);
    }
  }, [status, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitContact(form));
  };

  return (
    <section id="contact" ref={ref} className={`mt-16 rounded-[2rem] border border-slate-700/40 bg-slate-950/72 p-8 shadow-panel transition duration-700 ${visible ? 'revealed' : ''}`}>
      <SectionHeading title="Get in touch" subtitle="Send a message or connect directly via email / phone." />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card rounded-[1.75rem] border border-cyan-500/10 p-8 shadow-glow">
          <h3 className="mb-4 text-xl font-semibold text-white">Contact details</h3>
          <p className="mb-5 text-slate-300">Reach out for fullstack collaborations, automation builds, or API-driven portfolio work.</p>
          <div className="space-y-4 text-slate-200">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-cyan-300/80">Phone</p>
              <p className="mt-2 text-lg font-medium">7405721856</p>
            </div>
            <div>
              <p className="mt-6 text-sm uppercase tracking-[0.18em] text-cyan-300/80">Email</p>
              <p className="mt-6 text-lg font-medium">sufillxman@gmail.com</p>
            </div>
            {/* <div className="rounded-3xl border border-slate-700/60 bg-slate-900/80 p-5 text-sm text-slate-300">
              {/* <p className="font-semibold text-white">Note</p> */}
              {/* <p className="mt-2 leading-6">
                Your message will POST to the Django API at <span className="text-cyan-300">/api/contact/</span> and save to the backend contact model. Email notifications are currently disabled.
              </p> */}
            

          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] border border-slate-700/30 bg-slate-900/80 p-8 shadow-glow">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-300">
            <span>Phone</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
            />
          </label>
          <button type="submit" className="btn-primary w-full text-center">
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>

          {message && <p className="rounded-3xl bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">{message}</p>}
          {error && <p className="rounded-3xl bg-rose-500/10 px-4 py-3 text-sm text-rose-300">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
