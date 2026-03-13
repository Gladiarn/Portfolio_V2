"use client"
const LandingPage = () => {
      const toggleTheme = () => {
    // This manually adds/removes the .dark class from the <html> tag
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className=''>
            <button 
      onClick={toggleTheme}
    >
      Flip Theme
    </button>
    </div>
  )
}

export default LandingPage
