import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Award, Heart, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            The Lumière Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey of passion, excellence, and culinary innovation that spans nearly two decades
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Beginning</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Lumière was founded in 2006 by Chef Baptiste Laurent, a visionary who dreamed of creating a restaurant that transcended traditional fine dining. What started as a small establishment with just 40 seats has evolved into one of the most celebrated restaurants in the world.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The name "Lumière," meaning light in French, represents our philosophy: to illuminate the beauty of culinary craft and bring clarity to the art of fine dining. Every dish, every service, every moment is designed to inspire and delight.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, with over 100 dedicated team members and numerous accolades, we remain committed to our founding principles of excellence, innovation, and genuine hospitality.
              </p>
            </div>

            {/* Story Image Placeholder */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg h-96 flex items-center justify-center border border-border">
              <div className="text-center">
                <Heart size={64} className="text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">The Lumière Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Chef Image Placeholder */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg h-96 flex items-center justify-center border border-border order-2 lg:order-1">
              <div className="text-center">
                <Users size={64} className="text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Chef Portrait</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Chef Baptiste Laurent</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A culinary virtuoso trained in the most prestigious kitchens of Lyon, Paris, and Tokyo, Chef Baptiste brings a unique perspective to modern fine dining. His philosophy blends classical French techniques with contemporary innovation and global influences.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Chef Baptiste has received numerous accolades throughout his career, including two Michelin stars, multiple James Beard nominations, and recognition as one of the world's most influential culinary artists. Yet he remains humble, focused on his true passion: creating unforgettable experiences through exceptional food.
              </p>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-3">Chef's Philosophy</h4>
                <p className="text-muted-foreground italic">
                  "Cooking is not just about technique or ingredients—it's about telling a story, creating an emotion, and honoring the journey of every element that reaches the plate. Excellence is not a destination; it's a continuous pursuit."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We pursue perfection in every detail, from sourcing the finest ingredients to executing flawless service. Our standard is not "good enough"—it's exceptional.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Integrity</h3>
              <p className="text-muted-foreground">
                Honest ingredients, transparent practices, and genuine care define who we are. We believe in sustainable sourcing and ethical responsibility in all we do.
              </p>
            </div>

            {/* Community */}
            <div className="bg-card rounded-lg p-8 border border-border hover:border-primary transition-colors duration-300">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Community</h3>
              <p className="text-muted-foreground">
                We are more than a restaurant—we're a gathering place. We celebrate diversity, foster connections, and create memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">Awards & Recognition</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-primary mb-2">2</div>
              <p className="font-semibold text-foreground mb-2">Michelin Stars</p>
              <p className="text-sm text-muted-foreground">Consecutively since 2014</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-primary mb-2">50+</div>
              <p className="font-semibold text-foreground mb-2">International Awards</p>
              <p className="text-sm text-muted-foreground">Over 18 years</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-primary mb-2">5</div>
              <p className="font-semibold text-foreground mb-2">James Beard Nominations</p>
              <p className="text-sm text-muted-foreground">Best Chef in the West</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-5xl font-bold text-primary mb-2">#1</div>
              <p className="font-semibold text-foreground mb-2">Critics' Choice</p>
              <p className="text-sm text-muted-foreground">Consistently ranked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Behind every exceptional meal is an extraordinary team. From our passionate chefs to our gracious servers, each team member is dedicated to creating your perfect evening.
          </p>
          
          <div className="bg-card rounded-lg p-12 border border-border">
            <h3 className="font-semibold text-foreground mb-4 text-xl">Join Our Culinary Family</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals who share our commitment to excellence. Whether you're a culinary artist or hospitality professional, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@lumiere.com"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
