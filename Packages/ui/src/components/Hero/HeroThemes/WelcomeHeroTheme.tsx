export const WelcomeHeroTheme = ({title, description, cta}:any) => {
    return (
        <div className="bg-lime-100 h-screen">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <a href="/" className="mb-6 sm:mx-auto">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                                <img src="/brand/favicon.ico" className="w-48 " alt=""/>
                            </div>
                        </a>
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-lime-600 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative"></span>
                </span>{' '}
                                {title}
                            </h2>
                            <p className="text-base text-orange-500 md:text-lg">
                                {description}
                            </p>
                        </div>
                        <div>
                            <a
                                href={cta.href}
                                className="inline-flex bg-lime-800 items-center justify-center h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                            >
                                {cta.title}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default  WelcomeHeroTheme;

