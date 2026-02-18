'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { Calendar, Users, Clock, Mail, Phone } from 'lucide-react'

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'dining',
    specialRequests: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the data to a backend
    console.log('Reservation:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: 'dining',
        specialRequests: ''
      })
      setSubmitted(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Reserve Your Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Secure your table at Lumière and prepare for an unforgettable evening of culinary excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-accent/20 border-2 border-accent text-accent rounded-lg p-8 text-center">
                  <h3 className="font-serif text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-lg mb-2">Your reservation request has been received.</p>
                  <p className="text-muted-foreground">
                    We will confirm your reservation within 2 hours via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-card rounded-lg p-8 border border-border">
                    <h3 className="font-semibold text-foreground mb-6 text-lg">Personal Information</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reservation Details */}
                  <div className="bg-card rounded-lg p-8 border border-border">
                    <h3 className="font-semibold text-foreground mb-6 text-lg">Reservation Details</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Time</label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select a time</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="5:30 PM">5:30 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="6:30 PM">6:30 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="7:30 PM">7:30 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="8:30 PM">8:30 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                            <option value="9:30 PM">9:30 PM</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Number of Guests</label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <option key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Occasion</label>
                          <select
                            name="occasion"
                            value={formData.occasion}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="dining">Casual Dining</option>
                            <option value="celebration">Celebration</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="business">Business</option>
                            <option value="proposal">Special Proposal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="bg-card rounded-lg p-8 border border-border">
                    <h3 className="font-semibold text-foreground mb-6 text-lg">Special Requests</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Additional Notes</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Dietary restrictions, allergies, special occasions, or other requests..."
                        rows={4}
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    Request Reservation
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar - Restaurant Info */}
            <div className="space-y-6">
              {/* Hours */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-6 flex items-center space-x-2">
                  <Clock size={20} />
                  <span>Hours</span>
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Tue - Thu</p>
                    <p>5:00 PM - 11:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Fri - Sat</p>
                    <p>5:00 PM - 12:00 AM</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Sunday</p>
                    <p>5:00 PM - 10:00 PM</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="font-medium text-foreground">Monday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card rounded-lg p-8 border border-border">
                <h3 className="font-semibold text-foreground mb-6">Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+1234567890" className="font-medium text-foreground hover:text-primary">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:reservations@lumiere.com" className="font-medium text-foreground hover:text-primary">
                        reservations@lumiere.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">Reservation Confirmation:</span> You will receive a confirmation email within 2 hours of submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
