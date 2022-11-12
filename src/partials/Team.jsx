import React from 'react';

import TeamImage01 from '../images/team-member-01.jpg';
import TeamImage02 from '../images/team-member-02.jpg';
import TeamImage03 from '../images/team-member-03.jpg';
import TeamImage04 from '../images/team-member-04.jpg';
import TeamImage05 from '../images/team-member-05.jpg';
import TeamImage06 from '../images/team-member-06.jpg';
import TeamImage07 from '../images/team-member-07.jpg';
import TeamImage08 from '../images/team-member-08.jpg';

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our passionate team</h2>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.</p>
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage01} width="120" height="120" alt="Team member 01" />
                <h4 className="text-xl font-medium mb-1">Lara Lamprecht</h4>
                <div className="text-gray-500 mb-1">CEO & Co-founder</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@laraamprecht</a>
              </div>
            </div>

            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage02} width="120" height="120" alt="Team member 02" />
                <h4 className="text-xl font-medium mb-1">Marie Koniuszek</h4>
                <div className="text-gray-500 mb-1">CEO & Co-founder</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@marie_moon</a>
              </div>
            </div>

            {/* 3rd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage03} width="120" height="120" alt="Team member 03" />
                <h4 className="text-xl font-medium mb-1">Greg Sebastian</h4>
                <div className="text-gray-500 mb-1">Head of Design</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@mr_sebastian</a>
              </div>
            </div>

            {/* 4th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage04} width="120" height="120" alt="Team member 04" />
                <h4 className="text-xl font-medium mb-1">Timothy Chandran</h4>
                <div className="text-gray-500 mb-1">Product Executive</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@timothychandran</a>
              </div>
            </div>

            {/* 5th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage05} width="120" height="120" alt="Team member 05" />
                <h4 className="text-xl font-medium mb-1">Dominik Prasad</h4>
                <div className="text-gray-500 mb-1">Backend Lead</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@dominikprasad</a>
              </div>
            </div>

            {/* 6th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage06} width="120" height="120" alt="Team member 06" />
                <h4 className="text-xl font-medium mb-1">Darya Semenova</h4>
                <div className="text-gray-500 mb-1">Backend Developer</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@daryamagic</a>
              </div>
            </div>

            {/* 7th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage07} width="120" height="120" alt="Team member 07" />
                <h4 className="text-xl font-medium mb-1">Quentin Renvoye</h4>
                <div className="text-gray-500 mb-1">Product Designer</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@quentinrenvoye</a>
              </div>
            </div>

            {/* 8th member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="700" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={TeamImage08} width="120" height="120" alt="Team member 08" />
                <h4 className="text-xl font-medium mb-1">Alyssa Chuzeville</h4>
                <div className="text-gray-500 mb-1">Community Lead</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@hello_chuzeville</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;