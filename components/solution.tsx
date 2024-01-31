// WhyChoose.tsx
import Image, { StaticImageData } from 'next/image';
import Subject from '@/public/subject.svg'
import Experience from '@/public/experience.svg'


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
    <div className="py-12 bg-gtahidiDarkBlue p-4">
    <h2 className="text-3xl font-bold text-center text-white mb-12">Accelerating Edtech with <span className='text-gtahidiPink'>gTahidi AI</span></h2>
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 ">
        
        <FeatureCard 
          title="Instant Help at Your Fingertips"
          description="Stuck on a problem? Simply reach out on WhatsApp, and receive instant, 
          step-by-step assistance whenever you need it. The convenience of on-demand support 
          transforms learning into an interactive and dynamic experience, 
          making sure you're never alone on your educational journey."
          image={Subject}

        />
        <FeatureCard 
          title="Unlock a Universe of Knowledge"
          description="gTahidi AI doesn't just focus on one aspect of STEM – it opens the doors 
          to a comprehensive spectrum. From Algebra to Zoology, and Python to Physics, 
          gTahidi AI covers a diverse range of STEM subjects. This breadth of content 
          ensures that learners have access to a wealth of knowledge, fostering a 
          holistic understanding of science, technology, engineering, and mathematics."
          image={Subject}
        />
      </div>
    </div>
  );
}
