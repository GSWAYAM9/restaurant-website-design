import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ChefHat, Clock, MapPin, Star } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Culinary Excellence Redefined
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Discover an extraordinary journey through contemporary fine dining where passion meets precision, and every dish tells a story of artistry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors duration-200"
            >
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">The Lumière Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-6">
                <ChefHat size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Chef's Craft</h3>
              <p className="text-muted-foreground">
                Each dish is a masterpiece crafted by our award-winning culinary team, combining traditional techniques with innovative flair.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Prime Location</h3>
              <p className="text-muted-foreground">
                Situated in the heart of the city with breathtaking views, our restaurant offers an ambiance of unparalleled elegance and refinement.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Timeless Service</h3>
              <p className="text-muted-foreground">
                Our dedicated staff anticipates your every need, delivering impeccable service that sets the standard for fine dining hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">Signature Collections</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">The Gastronomic Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Embark on a carefully curated 7-course tasting menu that showcases the very best of our culinary vision, paired with exceptional wines selected by our sommelier.
                </p>
                <div className="flex items-center space-x-2 text-primary">
                  <Star size={20} className="fill-primary" />
                  <span className="font-semibold">Chef's Recommendation</span>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">À la Carte Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Choose from our refined à la carte menu, where each course is a celebration of seasonal ingredients and culinary mastery.
                </p>
                <Link href="/menu" className="inline-block text-primary font-semibold hover:underline">
                  View Full Menu →
                </Link>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <ChefHat size={64} className="text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Culinary Experience Gallery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-4xl font-bold mb-2">18</div>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-bold mb-2">2</div>
              <p className="text-sm opacity-90">Michelin Stars</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-bold mb-2">50+</div>
              <p className="text-sm opacity-90">Awards Won</p>
            </div>
            <div>
              <div className="font-serif text-4xl font-bold mb-2">100%</div>
              <p className="text-sm opacity-90">Guest Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Ready for an Unforgettable Evening?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Secure your reservation today and experience the pinnacle of fine dining
          </p>
          <Link
            href="/reservations"
            className="inline-block px-12 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Make a Reservation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
