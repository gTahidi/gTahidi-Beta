import Image from 'next/image';
import Cartoon from '@/public/cartoon.svg'; // Replace with your actual image path
import Paddy from '@/public/paddy.svg'; // Replace with your actual image path

const PrivacySection: React.FC = () => {
  return (
    <section className="bg-gtahidiDarkBlue text-white p-4 md:p-12">
      <div className="max-w-xl mx-auto md:max-w-4xl">
        {/* First Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-4 md:mb-0">
            <Image
              src={Paddy}
              alt="Secure Lock and Key"
              width={300} // Adjust for smaller screens
              height={300} // Adjust for smaller screens
              layout="responsive"
            />
          </div>
          <div className="text-center md:text-left px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl text-gtahidiPink font-bold mb-4">Your Privacy is Our Priority</h2>
            <p>
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security
              <br/>Your personal information is never used without your permission
              <br/>We collect only the data necessary to provide our services, 
              <br/>and we will never sell your data to any third party.
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left px-4 md:px-6 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl text-gtahidiPink font-bold mb-4">Our foundation in the field of education</h2>
            <p>
              gTahidi was co-founded by an accomplished educator, making it specifically
              <br/> crafted to address the complex challenges faced by teachers. 
              <br/>Our robust suite of tools elevates the way you deliver education,
              <br/>whether you find yourself in a traditional classroom or a comfortable home setting.
            </p>
          </div>
          <div>
            <Image
              src={Cartoon}
              alt="Educational Illustration"
              width={300} // Adjust for smaller screens
              height={300} // Adjust for smaller screens
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
