import React from "react";

function Login() {
<>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1> */}

      <div class="w-full rounded-lg border shadow-sm overflow-hidden bg-transparent border-stone-200 shadow-stone-950/5 max-w-lg mx-auto">
  <div class="h-max rounded p-8 m-0 w-full text-center">
    <h2 class="font-sans antialiased font-bold text-lg md:text-xl lg:text-2xl text-stone-800 dark:text-white mb-2 mt-4">Login Page Using Tailwind CSS</h2>
    <p class="font-sans antialiased text-base text-stone-600 max-w-lg [text-wrap:balance] mx-auto">Designed By Sanket</p>
  </div>
  <div class="w-full h-max rounded p-8 space-y-4">
    <div class="w-full space-y-1.5">
      <label for="email" class="font-sans antialiased text-sm text-stone-800 dark:text-white font-semibold">Your Email</label>
      <div class="relative w-full text-base rounded-lg">
        <input id="email" placeholder="name@mail.com" type="email" class="w-full aria-disabled:cursor-not-allowed outline-none focus:outline-none text-stone-800 dark:text-white placeholder:text-stone-600/60 ring-transparent border border-stone-200 transition-all ease-in disabled:opacity-50 disabled:pointer-events-none select-none text-sm py-2 px-2.5 ring shadow-sm bg-white rounded-lg duration-100 hover:border-stone-300 hover:ring-none focus:border-stone-400 focus:ring-none peer" />
      </div>
    </div>
    <button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased w-full">
      Connect
    </button>
    <button onClick="document.location= 'https://github.com/SanketsMane'" class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm bg-transparent relative text-stone-700 hover:text-stone-700 border-stone-500 hover:bg-transparent duration-150 hover:border-stone-600 rounded-lg hover:opacity-60 hover:shadow-none w-full">
      <img src="https://v3.material-tailwind.com/icon/google.svg" alt="google" class="w-5 h-5 mr-3" /> Sign in with Google
    </button>
    <button class="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm bg-transparent relative text-stone-700 hover:text-stone-700 border-stone-500 hover:bg-transparent duration-150 hover:border-stone-600 rounded-lg hover:opacity-60 hover:shadow-none w-full">
      <svg width="1.5em" stroke-width="1.5" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" class="w-5 h-5 mr-3">
        <path d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z" stroke="currentColor"></path>
        <path d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M18 7V5.60322C18 4.28916 16.7544 3.33217 15.4847 3.67075L4.48467 6.60409C3.60917 6.83756 3 7.63046 3 8.53656V9" stroke="currentColor"></path>
      </svg> Wallet Authentication
    </button>
  </div>
  <div class="w-full rounded px-8 pb-8 pt-0">
    <p class="font-sans antialiased text-sm text-center block mx-auto max-w-xs text-stone-600">Upon signing in, you consent to abide by our <a href="#" class="text-orange-500 dark:text-white">Terms of Service</a> &amp; <a href="#" class="text-orange-500 dark:text-white">Privacy Policy.</a>
    </p>
  </div>
</div>


    </>
}

export default Login