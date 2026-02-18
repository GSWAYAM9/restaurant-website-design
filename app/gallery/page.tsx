import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, MapPin, Sparkles } from 'lucide-react'

export default function Gallery() {
  const events = [
    {
      title: 'Summer Wine Celebration',
      date: 'June 15, 2024',
      time: '6:30 PM',
      description: 'Join us for an exquisite evening celebrating the finest wines from Bordeaux and Burgundy, paired with curated culinary creations from our Chef.',
      category: 'Wine Event'
    },
    {
      title: 'Chef\'s Table Experience',
      date: 'July 20, 2024',
      time: '7:00 PM',
      description: 'An intimate evening with Chef Baptiste Laurent at the chef\'s counter, witnessing culinary artistry in real-time with a personalized 12-course experience.',
      category: 'Chef\'s Table'
    },
    {
      title: 'Autumn Harvest Dinner',
      date: 'September 8, 2024',
      time: '6:00 PM',
      description: 'Celebrate seasonal ingredients at their peak with our special harvest menu featuring local producers and farmers from the region.',
      category: 'Seasonal'
    },
    {
      title: 'Chocolate Lover\'s Night',
      date: 'October 12, 2024',
      time: '7:30 PM',
      description: 'An indulgent evening dedicated to chocolate in all its forms, with a 5-course tasting menu and chocolate wine pairings.',
      category: 'Special Event'
    },
    {
      title: 'New Year\'s Eve Gala',
      date: 'December 31, 2024',
      time: '8:00 PM',
      description: 'Ring in the new year with champagne, dancing, and an exceptional multi-course tasting menu in our elegantly decorated dining room.',
      category: 'Celebration'
    },
    {
      title: 'Valentine\'s Day Romance',
      date: 'February 14, 2025',
      time: '6:30 PM',
      description: 'Express your love with our special Valentine\'s menu featuring oysters, filet mignon, and decadent chocolate creations.',
      category: 'Romantic'
    }
  ]

  const galleryItems = [
    { title: 'Plating Excellence', subtitle: 'Fine dining presentation' },
    { title: 'Chef in Action', subtitle: 'Behind the scenes' },
    { title: 'Dining Ambiance', subtitle: 'Elegant atmosphere' },
    { title: 'Wine Selection', subtitle: 'Curated collections' },
    { title: 'Seasonal Ingredients', subtitle: 'Local sourcing' },
    { title: 'Guest Experiences', subtitle: 'Memorable moments' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
            Gallery & Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore moments from our restaurant and discover our special events throughout the year
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">Visual Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="aspect-square bg-gradient-to-br from-accent/20 to-accent/40 rounded-lg border border-border hover:border-primary transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group"
              >
                <div className="text-center p-6">
                  <Sparkles size={48} className="text-primary/30 mx-auto mb-4 group-hover:text-primary/60 transition-colors" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">Upcoming Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold text-foreground flex-1">{event.title}</h3>
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar size={18} className="text-primary flex-shrink-0" />
                      <span className="font-medium text-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin size={18} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">Seating at {event.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="px-8 py-4 bg-background">
                  <a
                    href="/reservations"
                    className="inline-block w-full text-center px-6 py-2 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    Reserve Spot
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Private Events & Catering</h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Lumière is the perfect venue for your special occasions. From intimate dinners to elaborate celebrations, our team creates bespoke experiences tailored to your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div>
                <div className="font-serif text-3xl font-bold text-primary mb-3">25+</div>
                <p className="font-semibold text-foreground">Private Events Yearly</p>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-primary mb-3">100</div>
                <p className="font-semibold text-foreground">Maximum Capacity</p>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-primary mb-3">100%</div>
                <p className="font-semibold text-foreground">Customization</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-foreground font-semibold">We offer:</p>
              <ul className="text-muted-foreground space-y-2 inline-block text-left">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Custom tasting menus designed by Chef Baptiste</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Expert wine and beverage pairings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Dedicated event coordination team</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Flexible menu options for all dietary needs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>Complete service and setup</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <a
                href="mailto:events@lumiere.com"
                className="inline-block px-12 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Plan Your Event
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">Guest Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'An absolutely transcendent dining experience. Every course was a masterpiece, and the service was impeccable.',
                author: 'The New York Times',
                stars: 5
              },
              {
                quote: 'Chef Laurent\'s vision and passion shines through every plate. Lumière is a must-visit destination.',
                author: 'Michelin Guide',
                stars: 5
              },
              {
                quote: 'This is what fine dining should be: artistic, innovative, yet deeply rooted in culinary excellence.',
                author: 'Food & Wine Magazine',
                stars: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-lg p-8 border border-border">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                <p className="font-semibold text-foreground">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
