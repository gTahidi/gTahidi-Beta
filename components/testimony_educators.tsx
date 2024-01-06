import React from "react";
import Image from "next/image";
import Prof from "@/public/prof.png"

function testimony_educators() {
  return (
    <div>
      <section className=" bg-gtahidiDarkBlue ">
        <div className="container px-4 py-8 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl">
            What our <span className="text-gtahidiPink ">clients</span> say
          </h1>

          {/* <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
                    alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p> */}

          <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-5xl">
            <div className="p-6 bg-gray-100 rounded-lg  md:p-8">
              <p className="leading-loose text-gray-500 ">
                Being a Kenyan CBC teacher involves a lot of paperwork and
                planning. GTahidi AI has lightened workload considerably and
                freed up more time for teachers to focus more on actual
                teaching.{" "}
              </p>

              <div className="flex items-center mt-6">
                <Image
                  className="object-cover rounded-full w-14 h-14"
                  src={Prof}
                  alt=""
                  width={14}
                  height={14}
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-gtahidiPink">
                    Emily Mwanzia
                  </h1>
                  <span className="text-sm text-gray-500">Senior teacher</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg ">
              <p className="leading-loose text-gray-500 ">
                The CBC curriculum emphasizes interactive learning and gTahidi
                AI helps me generate diverse learning activities quickly.{" "}
              </p>

              <div className="flex items-center mt-6">
                <Image
                  className="object-cover rounded-full w-14 h-14"
                  src={Prof}                  alt=""
                  width={14}
                  height={14}
                />

                <div className="mx-4">
                  <h1 className="font-semibold text-gtahidiPink">
                    Brian Okechi
                  </h1>
                  <span className="text-sm text-gray-500">Senior teacher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default testimony_educators;
