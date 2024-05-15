export default function Theme() {
  return (
     <>
       <div className="flex justify-center items-center">
         <h1 className="text-3xl sm:text-4xl md:text-6xl mt-3 mb-3 font-bold">AXIS`24 Theme Video</h1>
       </div>
       <div className="flex justify-center items-center mt-10">
         <div className="w-full aspect-[16/9]">
           <iframe
             className="w-full h-full"
             src="https://www.youtube.com/embed/IXnmWNu6_4o?autoplay=1&mute=1&loop=1&playlist=IXnmWNu6_4o"
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
           ></iframe>
         </div>
       </div>
     </>
  );
 }
 
