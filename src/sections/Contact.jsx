import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await emailjs.sendForm('service_y9dfpnp', 'template_53lybun', formRef.current, 'WaL8Nm8bsasDCbLhP')
            setLoading(false)
            alert('Your Message Has Been Sent!')
        }
        catch (err) {
            setLoading(false)
            console.log(err)
            alert('Something went wrong, please try again later')
        }
    }
    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <div className='contact-container'>
                    <h3 className='head-text'>Contact Me</h3>
                    <p className='text-lg text-neutral-400 mt-3'>
                        If you need my help you can contact me...
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3 flex flex-col'>
                            <span className='field-label'>Full Name</span>
                            <input type='text' name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='Your Full Name' />
                        </label>
                        <label className='space-y-3 flex flex-col'>
                            <span className='field-label'>Email</span>
                            <input type='email' name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder='yourmail@gmail.com' />
                        </label>
                        <label className='space-y-3 flex flex-col'>
                            <span className='field-label'>Your message</span>
                            <textarea name='message' value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder='Write your message here...' />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <i className='ml-2 fas fa-paper-plane' aria-label='sendMsg'></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact