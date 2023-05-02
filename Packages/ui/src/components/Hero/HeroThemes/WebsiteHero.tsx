// import { GlobeEuropeAfricaIcon, LifebuoyIcon, NewspaperIcon, PhoneIcon, WalletIcon } from '@heroicons/react/20/solid'
// import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'


export const WebsiteHerocomponent=({image, title, description, cards}:any)=> {
  return (
    <div className="relative isolate overflow-hidden bg-lime-900 py-24 sm:py-32">
      <div className="absolute inset-0 z-0">
        <img
          src={image} alt={title}
          className="absolute inset-0 h-full w-full object-cover object-right md:object-center "
        />
        <div className="absolute inset-0 bg-green-700 opacity-50"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card:any) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-orange-800" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WebsiteHerocomponent
