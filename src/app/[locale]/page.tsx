"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Code, Lightbulb } from 'lucide-react'; // Assuming lucide-react is installed and these icons exist

const HomePage = () => {
  return (
    <div className="min-h-screen bg-aiux-black text-aiux-cream font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-start px-4 sm:px-6 lg:px-20 2xl:px-40 py-10 text-left">
        <div className="absolute inset-0 z-0">
          {/* Background elements if any, or just the black color */}
        </div>
        <div className="relative z-10 flex flex-row items-center w-full">
          <div className="max-w-xl 2xl:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-aiux-gold uppercase tracking-wider leading-tight">
              LUXURY AND <br />
              MODERNITY OF <br />
              A SOFTWARE <br />
              DEVELOPMENT AND <br />
              ARTIFICIAL <br />
              INTELLIGENCE <br />
              COMPANY
            </h1>
            <div className="mt-10">
              <Link href="/about" legacyBehavior>
                <a className="inline-block bg-aiux-gold text-aiux-black hover:bg-aiux-cream hover:text-aiux-black transition-colors duration-300 text-lg font-semibold py-3 px-8 rounded-sm shadow-lg uppercase">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
          <div className="flex-grow flex justify-end items-center ml-10 hidden lg:flex">
            {/* Geometric Head Image */}
            <Image 
              src="/geometric_head_generated.png" 
              alt="AIUX Studio Geometric Head" 
              width={500} 
              height={500} 
              className="object-contain max-h-[70vh]" 
              priority
            />
          </div>
        </div>
      </section>

      {/* About Us Section (Simplified from reference) */}
      <section className="py-16 md:py-24 bg-aiux-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-aiux-gold mb-6 uppercase">ABOUT US</h2>
              <p className="text-lg text-aiux-light-cream leading-relaxed">
                Providing cutting-edge digital solutions, we provide an expertise, innovation, user-centered design. Producing has fitted highest quality standards, Served out refferns tailored solutions for businesses.
              </p>
            </div>
            <div className="text-center md:text-left">
              {/* Placeholder for potential image or graphic if needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-aiux-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-aiux-gold mb-12 uppercase text-left">SERVICES</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-transparent p-6 rounded-lg">
              <Brain className="h-12 w-12 text-aiux-gold mb-4" />
              <h3 className="text-2xl font-semibold text-aiux-gold mb-3 uppercase">AI SOLUTIONS</h3>
              <p className="text-aiux-light-cream text-sm">Strategic delivery - e th ift:reming strategies in technology.</p>
            </div>
            <div className="bg-transparent p-6 rounded-lg">
              <Code className="h-12 w-12 text-aiux-gold mb-4" />
              <h3 className="text-2xl font-semibold text-aiux-gold mb-3 uppercase">SOFTWARE DEVELOPMENT</h3>
              <p className="text-aiux-light-cream text-sm">Integrate design specificlin team.</p>
            </div>
            <div className="bg-transparent p-6 rounded-lg">
              <Lightbulb className="h-12 w-12 text-aiux-gold mb-4" />
              <h3 className="text-2xl font-semibold text-aiux-gold mb-3 uppercase">UX DESIGN</h3>
              <p className="text-aiux-light-cream text-sm">Deliver inilnnovation- a design optimuzzlation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section (Combined from reference's GET FINOC and GET IN TOUCH) */}
      <section className="py-16 md:py-24 bg-aiux-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-aiux-gold mb-6 uppercase">GET IN TOUCH</h2>
                 {/* Intentionally left blank as per image, or add contact info here */}
            </div>
            <div className="text-left md:text-right">
                <Link href="/contact" legacyBehavior>
                    <a className="inline-block bg-gray-800 text-aiux-gold hover:bg-gray-700 transition-colors duration-300 text-lg font-semibold py-3 px-8 rounded-sm shadow-lg uppercase">
                    CONTACT US
                    </a>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;

