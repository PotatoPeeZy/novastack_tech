"use client";

export default function About() {
  const team = [
    { name: "Sarah Johnson", role: "CEO", img: "/placeholder.png" },
    { name: "David Kim", role: "CTO", img: "/placeholder.png" },
    { name: "Emily Carter", role: "Lead Engineer", img: "/placeholder.png" },
  ];

  return (
    <div className="min-h-screen from-slate-50 to-slate-100">

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering businesses with innovative technology solutions.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            NovaStack Technologies began with a mission: to help businesses
            embrace scalable, secure, and future-ready cloud solutions. Today,
            our team continues to innovate and build services that empower teams
            around the globe.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            To deliver high-performance cloud solutions that allow businesses to
            innovate quickly and sustainably.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700">
            To become a global leader in cloud transformation by prioritizing
            reliability, excellence, and forward-thinking innovations.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries with modern technology",
              },
              {
                title: "Reliability",
                description: "Delivering consistent, quality solutions",
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Meet the Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-10 py-4 text-lg rounded-xl shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
