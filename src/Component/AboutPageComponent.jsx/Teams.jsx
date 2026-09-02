import React from 'react'

const teamMembers = [
  {
    name: 'Oliver Aguilera',
    role: 'Product Manager',
    imgSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Marta Clermont',
    role: 'Design Team Lead',
    imgSrc:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Anthony Geek',
    role: 'CTO, Lorem Inc.',
    imgSrc:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Alice Melbourne',
    role: 'Human Resources',
    imgSrc:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
  },
//   {
//     name: 'Martin Garix',
//     role: 'Business Growth',
//     imgSrc:
//       'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=400&q=80',
//   },
//   {
//     name: 'Andrew Larkin',
//     role: 'Backend Developer',
//     imgSrc:
//       'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400&q=80',
//   },
//   {
//     name: 'Sophie Denmo',
//     role: 'Designer UI/UX',
//     imgSrc:
//       'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
//   },
//   {
//     name: 'Benedict Caro',
//     role: 'Frontend Developer',
//     imgSrc:
//       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
//   },
]

const Team = () => {
  return (
    <section className="w-full py-16 pb-30 pt-30 px-6 bg-gray-50 dark:bg-gray-950!">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white!">
          Meet Our Team
        </h2>

        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400!">
          Our team is a diverse group of professionals dedicated to delivering the best solutions for our clients.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className="  "
            >
              <img
                className="w-60 h-60 object-cover rounded-full mx-auto mb-5 shadow-md"
                src={member.imgSrc}
                alt={member.name}
              />

              <div className="text-center">
                <p className="text-xl font-bold text-gray-900 dark:text-white!">{member.name}</p>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300!">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team