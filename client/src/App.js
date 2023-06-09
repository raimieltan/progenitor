
import ParallaxSection from './components/ParallaxSection';
function App() {
  return (
    <div>

      
      <div>
        <ParallaxSection />
      </div>

    <div>
    <div className='w-full flex flex-col justify-center items-center text-center text-white mt-10'>
      <h1 className='text-6xl bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent'>WE'RE A TEAM OF MARKETERS WHO LOVE STORYTELLING</h1>
      

      <p className='w-1/3 text-2xl font-sans font-medium mt-20 text-[#877562]'>
      We promote your brand through strategically
organized content with technical precision
and creative skill.
      </p>
      </div>
    

        <div className='bg-gray-950 h-20 border border-black'>
          <div className='m-3'>
            <h1 className='text-white'>PROMETHEUS FOOTER</h1>
          </div>

        </div>
    </div>
 

    </div>

  );
}

export default App;
