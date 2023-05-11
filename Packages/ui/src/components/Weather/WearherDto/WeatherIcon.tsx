import { TWeatherTypes } from "./WeatherDto"


export const WeatherIcon = (icon: TWeatherTypes) => {
    return (
        <>
        { icon === "rainy" ?
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64"
                height="64"
                viewBox="0 0 64 64">
                <defs>
                    <filter id="blur" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="0" dy="4" result="offsetblur"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.05"/>
                        </feComponentTransfer>
                        <feMerge> 
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/> 
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#blur)" id="rainy-7">
                    <g transform="translate(20,10)">
                        <g>
                            <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
                        </g>
                    </g>
                    <g transform="translate(31,46), rotate(10)">
                        <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
                        <line className="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
                        <line className="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
                    </g>
                </g>
        </svg> : icon === "cloudy" ?     
        <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="64"
        height="64"
        viewBox="0 0 64 64">
        <defs>
            <filter id="blur" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                <feOffset dx="0" dy="4" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.05"/>
                </feComponentTransfer>
                <feMerge> 
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/> 
                </feMerge>
            </filter>
        </defs>
        <g filter="url(#blur)" id="cloudy-day-1">
            <g transform="translate(20,10)">
                <g transform="translate(0,16)">
                    <g className="am-weather-sun">
                        <g>
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                        <g transform="rotate(45)">
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                        <g transform="rotate(90)">
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                        <g transform="rotate(135)">
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                        <g transform="rotate(180)">
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                        <g transform="rotate(225)">
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                        <g transform="rotate(270)">
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                        <g transform="rotate(315)">
                            <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                        </g>
                    </g>
                    <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
                </g>
                <g className="am-weather-cloud-2">
                    <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
                </g>
            </g>
        </g>
    </svg> : icon === "sunny" ? 
    <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewBox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="day">
        <g transform="translate(32,32)">
            <g className="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                <g>
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(45)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(90)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(135)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(180)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(225)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(270)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(315)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
            </g>
            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
        </g>
    </g>
    </svg> : icon === "snow" ? 
    <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewBox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="snowy-6">
        <g transform="translate(20,10)">
            <g className="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g className="am-weather-snow-1">
                <g transform="translate(3,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g className="am-weather-snow-2">
                <g transform="translate(11,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g className="am-weather-snow-3">
                <g transform="translate(20,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg> : icon === "storm" ? 
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="64"
            height="64"
            viewBox="0 0 64 64">
            <defs>
                <filter id="blur" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                    <feOffset dx="0" dy="4" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.05"/>
                    </feComponentTransfer>
                    <feMerge> 
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                </filter>
            </defs>
            <g filter="url(#blur)" id="thunder">
                <g transform="translate(20,10)">
                    <g className="am-weather-cloud-1">
                        <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-6), scale(0.6)" />
                    </g>
                    <g>
                        <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="#FFFFFF" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" />
                    </g>
                    <g transform="translate(-9,28), scale(1.2)">
                        <polygon className="am-weather-stroke" fill="orange" stroke="white" stroke-width="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
                    </g>
                </g>
            </g>
        </svg> :  icon === "wind" ? 
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 74.78"
        width="20"
        height="20"
        xmlSpace="preserve"><g>
            <path d="M28.69,53.38c-1.61,0-2.91-1.3-2.91-2.91c0-1.61,1.3-2.91,2.91-2.91h51.37c0.21,0,0.42,0.02,0.62,0.07 c1.84,0.28,3.56,0.8,5.1,1.63c1.7,0.92,3.15,2.19,4.27,3.89c3.85,5.83,3.28,11.24,0.56,15.24c-1.77,2.61-4.47,4.55-7.45,5.57 c-3,1.03-6.32,1.13-9.32,0.03c-4.54-1.66-8.22-5.89-8.76-13.55c-0.11-1.6,1.1-2.98,2.7-3.09c1.6-0.11,2.98,1.1,3.09,2.7 c0.35,4.94,2.41,7.56,4.94,8.48c1.71,0.62,3.67,0.54,5.48-0.08c1.84-0.63,3.48-1.79,4.52-3.32c1.49-2.19,1.71-5.28-0.61-8.79 c-0.57-0.86-1.31-1.51-2.18-1.98c-0.91-0.49-1.97-0.81-3.13-0.99H28.69L28.69,53.38z M15.41,27.21c-1.61,0-2.91-1.3-2.91-2.91 c0-1.61,1.3-2.91,2.91-2.91h51.21c1.17-0.18,2.23-0.5,3.14-0.99c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79 c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7 c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57 c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H15.41 L15.41,27.21z M2.91,40.3C1.3,40.3,0,38.99,0,37.39c0-1.61,1.3-2.91,2.91-2.91h107.07c1.17-0.18,2.23-0.5,3.13-0.99 c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08 c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55 c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89 c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H2.91L2.91,40.3z"/></g>
            </svg> : icon === "drop" ? 
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 81.96 122.88" 
            width="20"
            height="20"
            xmlSpace="preserve">
                <style type="text/css"></style>
            <g><path className="st0" d="M40.95,0c2.64,11.28,5.67,20.29,9.04,26.98c3.37,6.69,8.53,13.94,15.45,21.76l2.98,3.32 c9.04,10.06,13.55,20.15,13.55,30.21c0,11.14-4.02,20.69-12.07,28.65c-8.08,7.96-17.71,11.96-28.93,11.96 c-11.19,0-20.8-4-28.88-11.96C4.03,102.96,0,93.41,0,82.27c0-10.06,4.51-20.15,13.55-30.21l2.98-3.32 c6.91-7.82,12.07-15.07,15.45-21.76C35.34,20.29,38.35,11.28,40.95,0L40.95,0z M13.81,76.29c-0.21-2.28,1.48-4.3,3.76-4.51 c2.29-0.21,4.31,1.48,4.51,3.76c0.52,5.52,1.73,10.61,4.04,15c2.23,4.24,5.55,7.89,10.35,10.7c1.98,1.16,2.64,3.71,1.48,5.68 c-1.16,1.98-3.71,2.64-5.68,1.48c-6.25-3.66-10.58-8.42-13.51-13.99C15.91,88.99,14.43,82.86,13.81,76.29L13.81,76.29L13.81,76.29z"/></g>
            </svg> :  icon === "index" ?
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 112.45 122.88"
            width="20"
            height="20"
             xmlSpace="preserve"><g>
                <polygon points="61.32,0 61.32,15.53 71.86,5.52 79.03,13.05 61.32,29.87 61.32,52.37 80.99,41.01 86.65,17.45 96.76,19.89 93.41,33.84 106.74,26.14 111.95,35.17 98.51,42.94 112.45,47.06 109.51,57.04 86.09,50.11 66.66,61.32 86.28,72.65 109.51,65.78 112.45,75.75 98.7,79.82 112.03,87.52 106.82,96.55 93.37,88.79 96.76,102.93 86.65,105.37 80.94,81.62 61.32,70.29 61.32,92.89 79.03,109.71 71.86,117.24 61.32,107.23 61.32,122.88 50.89,122.88 50.89,107.37 40.49,117.25 33.32,109.71 50.89,93.03 50.89,70.43 31.51,81.62 25.8,105.37 15.69,102.93 19.08,88.79 5.54,96.61 0.32,87.58 13.75,79.83 0,75.76 2.94,65.78 26.17,72.66 45.79,61.33 26.36,50.11 2.94,57.04 0,47.06 13.94,42.94 0.39,35.11 5.61,26.08 19.04,33.84 15.69,19.89 25.8,17.45 31.46,41.01 50.89,52.22 50.89,29.73 33.32,13.05 40.49,5.52 50.89,15.39 50.89,0 61.32,0"/></g>
            </svg> :  icon === "realFeel" ? 
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 65.75 122.88" 
                width="20"
                height="20"
                xmlSpace="preserve"><style type="text/css"></style>
                <g><path className="st0" d="M16.91,47.63h19.88v-32.6c0-2.73-1.12-5.22-2.92-7.02c-1.8-1.8-4.29-2.92-7.02-2.92s-5.22,1.12-7.02,2.92 c-1.8,1.8-2.92,4.29-2.92,7.02V47.63L16.91,47.63z M49.06,13.93c-1.41,0-2.55-1.14-2.55-2.55c0-1.41,1.14-2.55,2.55-2.55H63.2 c1.41,0,2.55,1.14,2.55,2.55c0,1.41-1.14,2.55-2.55,2.55H49.06L49.06,13.93z M49.06,28.3c-1.41,0-2.55-1.14-2.55-2.55 s1.14-2.55,2.55-2.55H63.2c1.41,0,2.55,1.14,2.55,2.55s-1.14,2.55-2.55,2.55H49.06L49.06,28.3z M49.06,42.67 c-1.41,0-2.55-1.14-2.55-2.55c0-1.41,1.14-2.55,2.55-2.55H63.2c1.41,0,2.55,1.14,2.55,2.55c0,1.41-1.14,2.55-2.55,2.55H49.06 L49.06,42.67z M49.06,57.04c-1.41,0-2.55-1.14-2.55-2.55c0-1.41,1.14-2.55,2.55-2.55H63.2c1.41,0,2.55,1.14,2.55,2.55 c0,1.41-1.14,2.55-2.55,2.55H49.06L49.06,57.04z M49.06,71.41c-1.41,0-2.55-1.14-2.55-2.55c0-1.41,1.14-2.55,2.55-2.55H63.2 c1.41,0,2.55,1.14,2.55,2.55c0,1.41-1.14,2.55-2.55,2.55H49.06L49.06,71.41z M41.88,74.45c6.87,4.81,11.36,12.79,11.36,21.81 c0,14.7-11.92,26.62-26.62,26.62C11.92,122.88,0,110.96,0,96.26c0-9.22,4.69-17.35,11.82-22.12V15.03c0-4.14,1.69-7.89,4.41-10.62 C18.95,1.69,22.71,0,26.85,0c4.14,0,7.89,1.69,10.62,4.41c2.72,2.72,4.41,6.48,4.41,10.62V74.45L41.88,74.45z"/></g>
                </svg> : ''
}
        </>
    )
}