import React from 'react';
import Image from 'next/image';
import TeacherIllustration from '@/public/teacher.png'; // Replace with your actual image path
import DocumentIcon from '@/public/doc.png'; // Replace with your actual image path

const InfoSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-10">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={DocumentIcon}
              alt="Document Icon"
              width={150} // Set width as needed
              height={150} // Set height as needed
              layout="fixed"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Your Privacy is Our Priority</h2>
            <p className="text-gray-600 mt-2">
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security...
              {/* Full privacy text goes here */}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Image
              src={TeacherIllustration}
              alt="Teacher Illustration"
              width={150} // Set width as needed
              height={150} // Set height as needed
              layout="fixed"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Our foundation in the field of education</h2>
            <p className="text-gray-600 mt-2">
              gTahidi was co-founded by an accomplished educator, making it specifically crafted to address...
              {/* Full foundation text goes here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
