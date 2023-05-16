import React, { useState } from 'react';
import LoginComponent from './LoginComponent';

export interface SignupFormProps {
  onSignup: (email: string, password: string) => void;
}

export const SignUpComponent: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [showSignIn,setShowSignIn]=useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup(email, password);
    setEmail('');
    setPassword('');
  };

  const handleSwitch = () => {
    setShowSignIn(!showSignIn);
  };

  if (showSignIn) {
    return <LoginComponent onSignup={handleSwitch} />;
  }

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.pexels.com/photos/3804878/pexels-photo-3804878.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="absolute inset-0 bg-lime-900 opacity-60" />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#dcdc1f] to-[#776fff] opacity-90"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-6 bg-white bg-opacity-10 p-6 rounded-xl ring-1 ring-inset ring-white/10 z-10 max-w-lg w-full">
          <h2 className="text-white bg-lime-900 border-b-4 border-yellow-600 opacity-80 rounded-t-lg text-xl mb-4 flex justify-center p-1 items-center">
            Sign Up for GreenSync
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg">
            <div>
              <input
                placeholder="Enter your Email"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full border-b-2 border-lime-600 px-3 py-2 text-gray-800 bg-lightBlue-200 hover:bg-lime-300 focus:outline-none"
              />
            </div>
            <div>
              <input
                placeholder="Enter a password"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full border-b-2 border-lime-600 px-3 py-2 text-gray-800 bg-lightBlue-200 hover:bg-lime-300 focus:outline-none"
                />
                </div>
                <div>
              <input
                placeholder="Confirm password"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full border-b-2 border-lime-600 px-3 py-2 text-gray-800 bg-lightBlue-200 hover:bg-lime-300 focus:outline-none"
                />
                </div>
                <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">
                Sign Up
                </button>
                </form>
                <div className="border-t-4 border-yellow-600 p-2 flex justify-between">
        <button
          className="flex items-center w-32 justify-center gap-3 bg-lime-900 rounded-md px-4 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
        >
          <svg
            className="text-white"
            fill="white"
            height="28px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 56.6934 56.6934"
            width="28px"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Google SVG path */}
            <path d="M51.981,24.4812c-7.7173-0.0038-15.4346-0.0019-23.1518-0.001c0.001,3.2009-0.0038,6.4018,0.0019,9.6017  c4.4693-0.001,8.9386-0.0019,13.407,0c-0.5179,3.0673-2.3408,5.8723-4.9258,7.5991c-1.625,1.0926-3.492,1.8018-5.4168,2.139  c-1.9372,0.3306-3.9389,0.3729-5.8713-0.0183c-1.9651-0.3921-3.8409-1.2108-5.4773-2.3649  c-2.6166-1.8383-4.6135-4.5279-5.6388-7.5549c-1.0484-3.0788-1.0561-6.5046,0.0048-9.5805  c0.7361-2.1679,1.9613-4.1705,3.5708-5.8002c1.9853-2.0324,4.5664-3.4853,7.3473-4.0811c2.3812-0.5083,4.8921-0.4113,7.2234,0.294  c1.9815,0.6016,3.8082,1.6874,5.3044,3.1163c1.5125-1.5039,3.0173-3.0164,4.527-4.5231c0.7918-0.811,1.624-1.5865,2.3908-2.4196  c-2.2928-2.1218-4.9805-3.8274-7.9172-4.9056C32.0723,4.0363,26.1097,3.995,20.7871,5.8372 C14.7889,7.8907,9.6815,12.3763,6.8497,18.0459c-0.9859,1.9536-1.7057,4.0388-2.1381,6.1836 C3.6238,29.5732,4.382,35.2707,6.8468,40.1378c1.6019,3.1768,3.8985,6.001,6.6843,8.215c2.6282,2.0958,5.6916,3.6439,8.9396,4.5078 c4.0984,1.0993,8.461,1.0743,12.5864,0.1355c3.7284-0.8581,7.256-2.6397,10.0725-5.24c2.977-2.7358,5.1006-6.3403,6.2249-10.2138 C52.5807,33.3171,52.7498,28.8064,51.981,24.4812z"/>
</svg>
<span className="text-sm font-semibold leading-6">Google</span>
</button>
<button
          className="flex items-center w-32 justify-center gap-3 bg-yellow-600 rounded-md px-4 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F] ml-auto"
        >
          <svg
            height="32px"
            fill="white"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 56.693 56.693"
            width="32px"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Facebook SVG path */}
            <path d="M28.347,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.625-11.023,24.625-24.623  C52.972,16.184,41.946,5.157,28.347,5.157z M34.864,29.679h-4.264c0,6.814,0,15.207,0,15.207h-6.32c0,0,0-8.307,0-15.207h-3.006  V24.31h3.006v-3.479c0-2.49,1.182-6.377,6.379-6.377l4.68,0.018v5.215c0,0-2.846,0-3.398,0c-0.555,0-1.34,0.277-1.34,1.461v3.163  h4.818L34.864,29.679z"/>
          </svg>
          <span className="text-sm font-semibold leading-6">Facebook</span>
        </button>

      </div>

      <p className="text-white bg-white/10 text-center text-sm cursor-pointer" onClick={handleSwitch}>
Already have an account?{' '}
<a href="#" className="text-wh-600 underline">
Log in here
</a>
</p>
</div>
</div>
</div>
);
};

export default SignUpComponent;

