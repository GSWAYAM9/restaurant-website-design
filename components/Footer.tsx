import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Lumière</h3>
            <p className="text-sm opacity-90">
              Experience the pinnacle of fine dining excellence where culinary artistry meets refined hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:opacity-80 transition">Home</Link></li>
              <li><Link href="/menu" className="hover:opacity-80 transition">Menu</Link></li>
              <li><Link href="/reservations" className="hover:opacity-80 transition">Reservations</Link></li>
              <li><Link href="/about" className="hover:opacity-80 transition">About Us</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Tuesday - Thursday: 5:00 PM - 11:00 PM</li>
              <li>Friday - Saturday: 5:00 PM - 12:00 AM</li>
              <li>Sunday: 5:00 PM - 10:00 PM</li>
              <li>Monday: Closed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="tel:+1234567890" className="hover:opacity-80 transition">+1 (555) 123-4567</a></li>
              <li><a href="mailto:info@lumiere.com" className="hover:opacity-80 transition">info@lumiere.com</a></li>
              <li>123 Culinary Lane<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            © 2024 Lumière Fine Dining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
