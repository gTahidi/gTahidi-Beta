/* eslint-disable react/no-unescaped-entities */



import Image, { StaticImageData } from 'next/image';

// Import the images
import journeyImage from '@/public/journey.jpg'; // Adjust the path as necessary
import helpImage from '@/public/help.svg';       // Adjust the path as necessary
import universeImage from '@/public/university.svg'; // Adjust the path as necessary

interface FeatureCardProps {
  title: string;
  description: string;
  image: StaticImageData; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center bg-gtahidiDarkBlue text-white p-6 rounded-xl shadow-lg max-w-sm mx-auto">
      <div className="mb-4 w-28 h-28 relative">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default function WhyChoose() {
  return (
    <div className="py-12 bg-gray-100 p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 p-4">Why Choose <span className=' text-gtahidiPink'>gTahidi AI?</span></h2>
      <div className="flex flex-wrap justify-center gap-4">
        <FeatureCard 
          title="Your Personalized Educational Journey"
          description="gTahidi AI stands out by offering tailor-made learning paths. 
          No two learners are alike, and gTahidi AI understands that. 
          The platform adapts to your unique learning style, ensuring 
          that each step you take is in sync with your individual pace and preferences"
          image={journeyImage}
        />
        <FeatureCard 
          title="Instant Help at Your Fingertips"
          description="Stuck on a problem? Simply reach out on WhatsApp, and receive instant, 
          step-by-step assistance whenever you need it. The convenience of on-demand support 
          transforms learning into an interactive and dynamic experience, 
          making sure you're never alone on your educational journey."
          image={helpImage}
        />
        <FeatureCard 
          title="Unlock a Universe of Knowledge"
          description="gTahidi AI goes beyond just a single field—it opens 
          the door to a vast universe of academic disciplines. From literature
           and history to advanced sciences and mathematics, gTahidi AI offers 
           resources across all subjects. This extensive range ensures that 
           learners gain a well-rounded education, fostering a deep and holistic 
           understanding across varied areas of study. Embrace the diversity of 
           knowledge that gTahidi AI brings to your learning journey, making every
            study session rich and comprehensive. "
          image={universeImage}
        />
      </div>
    </div>
  );
}
