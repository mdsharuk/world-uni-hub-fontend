import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about World University Hub — our story, mission and the team behind independent university discovery and ranking comparison.",
};

const sections = [
  {
    title: "Our Story",
    body: "World University Hub began with a vision to make global education accessible to everyone. Founded in [Year], we've grown from a small team of education enthusiasts into a leading platform for university discovery and ranking comparison. Our story is one of relentless dedication to helping students find the right path.",
  },
  {
    title: "Our Mission",
    body: "Our mission is to empower students with transparent, reliable information that drives confident study-abroad decisions. We're committed to delivering comprehensive university data and rankings that help learners succeed in a rapidly evolving global landscape. With a focus on accuracy, clarity and student success, we're here to make a difference.",
  },
  {
    title: "Expert Team",
    body: "Behind every recommendation is a team of experts passionate about education and data. Our diverse team brings together skilled professionals in research, data analytics and student counselling. We're united by our enthusiasm for connecting students with opportunities worldwide and exceeding expectations.",
  },
  {
    title: "Client-Centric Approach",
    body: "At the heart of our philosophy is a student-centric approach. We believe in understanding your unique goals and tailoring our guidance to meet them. Our commitment to open communication and collaboration ensures that every student journey is a success.",
  },
  {
    title: "Innovation Culture",
    body: "Innovation is in our DNA. We thrive on staying ahead of education trends and embracing emerging technologies. Our culture fosters creativity and continuous learning, allowing us to deliver insights that push the boundaries of what's possible — from data-driven rankings to personalised matches.",
  },
  {
    title: "Quality and Excellence",
    body: "Quality is at the core of everything we do. We adhere to the highest standards and best practices to ensure our data is accurate, reliable and up to date. Our commitment to excellence has earned us the trust of students across the world.",
  },
  {
    title: "Community Engagement",
    body: "We believe in giving back to the global student community. Through various initiatives, we contribute to educational programs, scholarships and awareness campaigns. Our aim is to inspire the next generation of global learners and create a positive impact on society.",
  },
  {
    title: "Join Our Journey",
    body: "Whether you're a student seeking the right university or a partner looking to make a difference in global education, we invite you to join our journey. Together, we'll shape the future of learning and help students reach their goals worldwide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 py-20 text-center sm:py-24">
        <div className="container">
          <h1 className="text-4xl font-semibold text-[#22343C] sm:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="container py-14 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold text-[#22343C]">
                {section.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
