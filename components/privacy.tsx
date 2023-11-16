import React from 'react';
import Image from 'next/image';
import TeacherIllustration from '@/public/teacher.png'; // Replace with your actual image path
import DocumentIcon from '@/public/doc.png'; // Replace with your actual image path

const InfoSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex items-start space-x-6">
          <div className="shrink-0">
            <Image
              src={DocumentIcon}
              alt="Document Icon"
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              layout="fixed"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Your Privacy is Our Priority</h2>
            <p className="text-gray-600">
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security.
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security...
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security...

              {/* Full privacy text goes here */}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-6">
          <div className="shrink-0">
            <Image
              src={TeacherIllustration}
              alt="Teacher Illustration"
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              layout="fixed"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Our foundation in the field of education</h2>
            <p className="text-gray-600">
              gTahidi was co-founded by an accomplished educator, making it specifically crafted to address...
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security...
              At gTahidi, we take your privacy seriously. We adhere to the highest standards of data security...
              {/* Full foundation text goes here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
