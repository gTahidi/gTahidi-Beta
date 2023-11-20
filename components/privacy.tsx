// components/PrivacySection.tsx

import Image from 'next/image';
import Cartoon from '@/public/cartoon.svg'; // Replace with your actual image path
import Paddy from '@/public/paddy.svg'; // Replace with your actual image path

const PrivacySection: React.FC = () => {
  return (
    <section className="bg-gtahidiDarkBlue text-white p-12 flex flex-col space-y-16 justify-center items-center">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="floating">
          <Image
            src={Paddy}
            alt="Secure Lock and Key"
            width={400}  // Adjust based on your image aspect ratio
            height={400} // Adjust based on your image aspect ratiok
          />
        </div>
        <div className="flex-1 px-6">
          <h2 className="text-3xl text-gtahidiPink font-bold mb-4">Your Privacy is Our Priority</h2>
          <p>
            At gTahidi, we take your privacy seriously. We adhere to the highest standards of data
            security. Your personal information is never used without your permission. We collect only
            the data necessary to provide our services, and we will never sell your data to any third
            party.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        
        <div className="flex-1 px-6">
          <h2 className="text-3xl font-bold text-gtahidiPink mb-4">Our foundation in the field of education</h2>
          <p>
          gTahidi was co-founded by an accomplished educator, making it specifically 
          crafted to address the complex challenges faced by teachers. Our robust suite 
          of tools elevates the way you deliver education, whether you find yourself in 
          a traditional classroom or a comfortable home setting.
          </p>
        </div>
        <div className="floating">
          <Image
            src={Cartoon}
            alt="Secure Lock and Key"
            width={400}  // Adjust based on your image aspect ratio
            height={400} // Adjust based on your image aspect ratio
          />
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;


