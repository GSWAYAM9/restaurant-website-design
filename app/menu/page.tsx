import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Leaf, Flame } from 'lucide-react'

export default function Menu() {
  const courses = {
    appetizers: [
      {
        name: 'Amuse-Bouche',
        description: 'A delicate selection of chef\'s creations',
        price: 'Complimentary'
      },
      {
        name: 'Foie Gras Terrine',
        description: 'Traditional French preparation with brioche and fig compote',
        price: '$28'
      },
      {
        name: 'Oysters Baked with Champagne Butter',
        description: 'Three pristine oysters with Époisses sabayon',
        price: '$24'
      },
      {
        name: 'Sea Urchin on Ice',
        description: 'Fresh uni with yuzu citrus and caviar air',
        price: '$32'
      },
      {
        name: 'Burrata with Heritage Tomatoes',
        description: 'Fresh burrata, micro herbs, aged balsamic reduction',
        price: '$18'
      }
    ],
    mains: [
      {
        name: 'Pan-Seared Diver Scallops',
        description: 'With brown butter, caramelized cauliflower, and black truffle essence',
        price: '$38',
        vegetarian: false
      },
      {
        name: 'Grilled Branzino',
        description: 'Mediterranean sea bass with preserved lemon, Castelvetrano olives, and saffron beurre blanc',
        price: '$42',
        vegetarian: false
      },
      {
        name: 'Prime Beef Tenderloin',
        description: '8oz Japanese A5 Wagyu, sous vide then seared, with bordelaise and bone marrow jus',
        price: '$68',
        vegetarian: false
      },
      {
        name: 'Duck Breast "En Deux Services"',
        description: 'Seared breast with cherry gastrique, followed by a duck consommé with foie gras dumplings',
        price: '$48',
        vegetarian: false
      },
      {
        name: 'Herb-Roasted Chicken Supreme',
        description: 'Free-range chicken with truffle jus, asparagus, and pommes Anna',
        price: '$36',
        vegetarian: false
      },
      {
        name: 'Vegetable Tasting',
        description: 'Seasonal vegetables prepared in multiple techniques with vegetable reductions',
        price: '$34',
        vegetarian: true
      }
    ],
    sides: [
      {
        name: 'Pommes Anna',
        description: 'Thinly sliced potatoes with clarified butter and fresh thyme',
        price: '$8'
      },
      {
        name: 'Charred Broccolini',
        description: 'With lemon and crispy garlic chips',
        price: '$10'
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'Arborio rice, porcini, and Parmigiano-Reggiano',
        price: '$12'
      },
      {
        name: 'Buttered Corn Flan',
        description: 'Sweet corn custard with corn silk and caviar',
        price: '$11'
      }
    ],
    desserts: [
      {
        name: 'Dark Chocolate Sphere',
        description: 'Warm valrhona chocolate shell with vanilla bean ice cream',
        price: '$16'
      },
      {
        name: 'Lemon Posset',
        description: 'Traditional British dessert with shortbread tuile',
        price: '$13'
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean custard with caramelized sugar',
        price: '$12'
      },
      {
        name: 'Passion Fruit Tart',
        description: 'Crispy pâte sucrée, passion fruit curd, tropical fruits',
        price: '$15'
      },
      {
        name: 'Cheese Selection',
        description: 'Curated artisanal cheeses with honeycomb and house-made crackers',
        price: '$18'
      }
    ]
  }

  const MenuSection = ({ title, items }: { title: string; items: typeof courses.appetizers }) => (
    <div className="mb-16">
      <h2 className="font-serif text-3xl font-bold text-foreground mb-12 pb-4 border-b-2 border-accent">
        {title}
      </h2>
      <div className="space-y-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start group">
            <div className="flex-1 pr-4">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {item.name}
                </h3>
                {(item as any).vegetarian && (
                  <Leaf size={18} className="text-accent" />
                )}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="text-primary font-semibold whitespace-nowrap ml-4">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted to-background text-center">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
          Our Culinary Artistry
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Meticulously crafted dishes featuring seasonal ingredients and time-honored techniques
        </p>
        <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold">
          Menu changes seasonally • Prix Fixe: $125pp • Tasting Menu: $185pp
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <MenuSection title="Appetizers" items={courses.appetizers} />
          <MenuSection title="Main Courses" items={courses.mains} />
          <MenuSection title="Sides" items={courses.sides} />
          <MenuSection title="Desserts & Cheese" items={courses.desserts} />

          {/* Additional Info */}
          <div className="mt-20 bg-muted rounded-lg p-8 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Wine Pairings & More</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Wine Selection</h4>
                <p className="text-muted-foreground mb-4">
                  Our sommelier has curated an exceptional selection of wines from around the world. Pairings available: $65pp or $35 for half pours
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Dietary Accommodations</h4>
                <p className="text-muted-foreground mb-4">
                  We accommodate all dietary restrictions. Please inform us when making your reservation so our chef can prepare something special.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to experience our cuisine?
            </p>
            <a
              href="/reservations"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Reserve Your Table
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
