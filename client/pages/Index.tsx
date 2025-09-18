import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import { FeatureCard, Section } from "@/components/site/Components";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-secondary/10">
      <Header />
      <main>
        <Hero />

        <Section subtitle="Why Choose Us" title="Play. Learn. Grow.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              colorClass="bg-secondary/30"
              title="Caring Teachers"
              description="Experienced educators who create a safe and joyful space for every child."
              icon={<span>👩‍🏫</span>}
            />
            <FeatureCard
              colorClass="bg-accent/20"
              title="Creative Programs"
              description="Hands-on activities, arts, and play-based learning for curious minds."
              icon={<span>🎨</span>}
            />
            <FeatureCard
              colorClass="bg-primary/15"
              title="Healthy Meals"
              description="Nutritious and delicious meals to fuel active little learners."
              icon={<span>🍎</span>}
            />
            <FeatureCard
              colorClass="bg-amber-200/50"
              title="Outdoor Fun"
              description="Safe playgrounds and outdoor adventures to build confidence."
              icon={<span>🏃‍♂️</span>}
            />
          </div>
        </Section>

        <Section id="about" subtitle="About Us" title="A Joyful Start to School Life">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
              alt="Kids playing with blocks"
              className="w-full rounded-2xl border shadow-md"
              loading="lazy"
            />
            <div>
              <h3 className="text-2xl font-bold">Nurturing Curiosity</h3>
              <p className="mt-3 text-foreground/70">
                We believe every child learns best through play, exploration, and meaningful relationships. Our programs are designed to foster social, emotional, and academic growth.
              </p>
              <ul className="mt-6 grid gap-2 text-sm text-foreground/80">
                <li>✓ Small class sizes</li>
                <li>✓ Safe and inclusive environment</li>
                <li>✓ Play-based curriculum</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="#programs" className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow hover:bg-accent/90">Explore Programs</a>
                <a href="#contact" className="rounded-full border px-5 py-2 text-sm font-semibold hover:border-primary hover:text-primary">Book a Tour</a>
              </div>
            </div>
          </div>
        </Section>

        <Section id="programs" subtitle="Our Programs" title="Classes for Every Stage">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Nursery (2-3 yrs)",
                img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop",
              },
              {
                title: "Pre-K (3-4 yrs)",
                img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
              },
              {
                title: "Kindergarten (4-6 yrs)",
                img: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1600&auto=format&fit=crop",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <div className="mt-4 text-lg font-semibold">{item.title}</div>
                <p className="mt-1 text-sm text-foreground/70">Engaging activities, storytelling, music, and movement to inspire learning.</p>
                <a href="#admissions" className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90">Enroll Now</a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="admissions" subtitle="Join Us" title="Admissions Open">
          <div className="grid items-center gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-foreground/70 md:text-lg">We welcome applications year-round. Schedule a tour, meet our teachers, and discover our joyful learning environment.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Schedule a Tour</a>
                <a href="#programs" className="rounded-full border px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary">View Programs</a>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop" alt="Admissions" className="h-56 w-full rounded-2xl object-cover border shadow-sm" loading="lazy" />
          </div>
        </Section>

        <Section id="events" subtitle="Upcoming" title="School Events">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-xs font-bold text-primary">Mar 28 • 10:00 AM</div>
              <div className="mt-1 text-xl font-semibold">Spring Art Fair & Family Day</div>
              <p className="mt-2 text-sm text-foreground/70">Join us for a colorful day of crafts, student showcases, and outdoor fun.</p>
              <a href="#contact" className="mt-4 inline-flex rounded-full border px-4 py-2 text-xs font-semibold hover:border-primary hover:text-primary">Learn More</a>
            </div>
            <img
              src="https://images.pexels.com/photos/5905617/pexels-photo-5905617.jpeg"
              alt="Families visiting a classroom during open house with teacher"
              className="hidden rounded-2xl border object-cover md:block"
              loading="lazy"
            />
          </div>
        </Section>

        <Section id="gallery" subtitle="Gallery" title="Smiles & Memories">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1516627145497-ae6f7e1f10b3?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Gallery ${i + 1}`}
                className="aspect-square w-full rounded-xl object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </Section>

        <Section id="contact" subtitle="Contact" title="Visit Our School">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">We'd love to meet you</div>
              <p className="mt-2 text-sm text-foreground/70">Schedule a campus tour or ask any questions you may have.</p>
              <form className="mt-4 grid gap-3" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" aria-label="Name" />
                <input type="email" className="rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email" aria-label="Email" />
                <textarea className="h-28 rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Message" aria-label="Message" />
                <button className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Send Message</button>
              </form>
            </div>
            <div className="rounded-2xl border bg-secondary/20 p-6 shadow-sm">
              <div className="text-lg font-semibold">School Information</div>
              <ul className="mt-3 grid gap-2 text-sm text-foreground/80">
                <li>📍 123 Preschool Ave, Sunnyvale</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ hello@brightbeginnings.school</li>
                <li>⏰ Mon–Fri: 8:00 AM – 4:00 PM</li>
              </ul>
              <iframe
                title="Map"
                className="mt-4 aspect-video w-full rounded-xl border"
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-122.046%2C37.368%2C-122.030%2C37.380&layer=mapnik"
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
