export const AuthForms = () => {
    return {
      register: (props: any) => <><RegisterForm {...props} /></>,
      login: (props: any) => <><LoginForm {...props} /></>,
    }
  }
  
  export const RegisterForm = ({ authenticate, handleInputChange }: any) => {
  
  
    return (
      <>
        <form id="custom,registration" className='hidden'
          onSubmit={authenticate}
        >
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                id='lastName'
                name="lastName"
                type="text"
                autoComplete="Last Name"
                onChange={handleInputChange}
                //   value={userData.lastName}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="firstName"
                onChange={handleInputChange}
                //   value={userData.firstName}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleInputChange}
                //   value={userData.email}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                //   value={userData.password}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
  
          </div>
          <div>
            <label htmlFor="confrim-password" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="password"
                type="password"
                autoComplete="current-password"
                onChange={handleInputChange}
                required
                className={`block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 pl-2`}
              />
            </div>
  
          </div>
          <div className="flex items-center justify-between">
  
            <div className="text-sm leading-6">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
  
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-lime-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pl-2"
            >
              SignUp
            </button>
            <div className="text-sm leading-6" >
              <NavLink to="/auth" className="font-semibold leading-4 text-indigo-600 hover:text-indigo-500" >Have an Account? Sign In</NavLink>
            </div>
          </div>
        </form>
      </>
  
  
    )
  }
  
  export const LoginForm = ({ authenticate, handleInputChange }: any) => {
  
    return (
      <div>
        <form id="custom,login" className={"space-y-6"}
          onSubmit={authenticate}
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="loginEmail"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleInputChange}
                //   value={userData.email}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="LoginPassword"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={handleInputChange}
                //   value={userData.password}
                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
              />
            </div>
          </div>
  
          <div className="flex items-center justify-between">
  
            <div className="text-sm leading-6">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-lime-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pl-2"
          >
            Sign in
          </button>
          <NavLink to="/auth/register" className="text-sm leading-6 pointer" >
            <div className="font-semibold leading-4 text-indigo-600 mt-6 hover:text-indigo-500 ">New here? Create Account</div>
          </NavLink>
  
        </form>
      </div>
    )
  }