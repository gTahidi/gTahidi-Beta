import React from 'react'
import Image from 'next/image';
import Phone from '@/public/phone.svg';
import Ideabulb from '@/public/ideabulb.svg';
import Girl from '@/public/youngschoolgirlexperiments.svg'

function features_Ieaners() {
  return (
    <div>
      <div className="bg-blue-900 text-white py-12 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Top Features</h2>
        <p className="text-center mb-10">
            Share your services or product offerings here. Present them as simple headers that can lead out to their pages where you can expound on them further. You can also use this space for other purposes where the information is best presented as mere teasers to other individualized pages.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
            {/* Feature 1 */}
            <div className="w-full md:w-1/3 bg-purple-700 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
                <Image
                    src={Phone}
                    alt="About Us"
                    width={640}
                    height={400}
                    layout="responsive"
                    className="rounded"
                />
                <p className="text-xl font-semibold my-2">Personalized Planning</p>
                <p>
                Share your services or product offerings here. Present them as simple headers that you can expound on them further.
                </p>
            </div>
            </div>
            {/* Feature 2 */}
            <div className="w-full md:w-1/3 bg-purple-700 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
                <Image
                    src={Ideabulb}
                    alt="About Us"
                    width={640}
                    height={400}
                    layout="responsive"
                    className="rounded"
                />
                <p className="text-xl font-semibold my-2">Innovative Engagement</p>
                <p>
                Share your services or product offerings here. Present them as simple headers that you can expound on them further.
                </p>
            </div>
            </div>
            {/* Feature 3 */}
            <div className="w-full md:w-1/3 bg-purple-700 p-4 rounded-lg shadow-md">
            <div className="flex flex-col items-center text-center">
                <Image
                    src={Girl}
                    alt="About Us"
                    width={640}
                    height={400}
                    layout="responsive"
                    className="rounded"
                />
                <p className="text-xl font-semibold my-2">STEM Learning</p>
                <p>
                Share your services or product offerings here. Present them as simple headers that you can expound on them further.
                </p>
            </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default features_Ieaners
