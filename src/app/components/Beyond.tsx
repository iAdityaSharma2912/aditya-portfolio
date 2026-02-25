"use client";

// --- DATA CONSTANTS ---
const stories = [
  {
    title: "The 7 of You (The First Bloom)",
    excerpt: "If you start seeing love around you,You end up being loved",
    date: "2025",
    // Link directly to your local file inside public/assests/write/
    link: "/assests/write/the 7 of you (the first bloom).pdf", 
  },
  {
    title: "Do Saheliyaan",
    excerpt: "In “Do Saheliyan”, two brave friends cleverly outsmart a cruel landlord to save their family’s land and restore justice",
    date: "2024",
    link: "/assests/write/Do saheli.pdf",
  },

];

// Update these with the exact names of your pictures inside public/assests/clicks/
const photos = [
  "/assests/clicks/1.jpg", 
  "/assests/clicks/2.jpg",
  "/assests/clicks/3.jpg",
  "/assests/clicks/4.jpg",
  "/assests/clicks/5.jpg",
  "/assests/clicks/6.jpg",
  "/assests/clicks/7.jpg",
  "/assests/clicks/8.jpg",
  "/assests/clicks/9.jpg",
  "/assests/clicks/10.jpg", 
  "/assests/clicks/11.jpg",
  "/assests/clicks/12.jpg",
  "/assests/clicks/13.jpg",
  "/assests/clicks/14.jpg",
  "/assests/clicks/15.jpg",
  "/assests/clicks/16.jpg",
  "/assests/clicks/17.jpg",
  "/assests/clicks/18.jpg", 
  "/assests/clicks/19.jpg",
  "/assests/clicks/20.jpg",
  "/assests/clicks/21.jpg",
  "/assests/clicks/22.jpg",
  "/assests/clicks/23.jpg",
  "/assests/clicks/24.jpg",
  "/assests/clicks/25.jpg",
  "/assests/clicks/26.jpg",
  "/assests/clicks/27.jpg",
  "/assests/clicks/28.jpg",
  "/assests/clicks/29.jpg",
  

];

export default function Beyond() {
  return (
    <section id="writing" className="w-full text-foreground py-24 px-6 md:px-12 border-t border-muted overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-24">
        
        {/* Section Header */}
        <div>
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mb-4">
            Beyond the Code
          </h2>
          <p className="font-mono text-gray-500 uppercase tracking-widest text-sm">
            Storytelling // Photography
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* =========================================
              LEFT COLUMN: THE WRITER (Editorial)
          ========================================= */}
          <div className="flex flex-col">
            <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest border-b border-muted pb-4 mb-8">
              Selected Writings
            </h3>
            
            <div className="flex flex-col border-t border-muted">
              {stories.map((story, index) => (
                <a 
                  key={index}
                  href={story.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group py-8 border-b border-muted flex flex-col gap-3 hover:pl-4 transition-all duration-300"
                >
                  <div className="flex justify-between items-baseline gap-4">
                    <h4 className="font-serif text-3xl md:text-4xl text-gray-200 group-hover:text-white transition-colors">
                      {story.title}
                    </h4>
                    <span className="font-mono text-xs text-gray-600">
                      {story.date}
                    </span>
                  </div>
                  <p className="font-sans text-gray-500 group-hover:text-gray-400 transition-colors">
                    {story.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: THE PHOTOGRAPHER (Marquee)
          ========================================= */}
          <div className="flex flex-col min-w-0">
            <h3 className="font-mono text-sm text-gray-500 uppercase tracking-widest border-b border-muted pb-4 mb-8">
              Lens Work
            </h3>
            
            {/* The infinite scroll track */}
            <div className="relative w-full overflow-hidden flex cursor-ew-resize">
              
              {/* We render the array twice to create a seamless infinite loop */}
              <div className="flex gap-4 w-max animate-marquee">
              
                {[...photos, ...photos].map((src, index) => (
                  <div 
                    key={index}
                    // We removed the fixed width and aspect ratio, and added a fixed height (h-64 / md:h-80)
                    className="h-64 md:h-80 relative shrink-0 overflow-hidden bg-muted group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={src} 
                      alt={`Photography ${index + 1}`} 
                      // Changed w-full to w-auto, and h-full ensures it matches the container height
                      className="w-auto h-full object-cover  transition-all duration-500 ease-in-out"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}