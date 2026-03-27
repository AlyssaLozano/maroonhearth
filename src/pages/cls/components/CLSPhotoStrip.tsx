const photos = [
  {
    src: "https://readdy.ai/api/search-image?query=Gentle%20professional%20Black%20African%20American%20female%20caregiver%20with%20natural%20hair%20helping%20smiling%20elderly%20Black%20woman%20with%20gray%20locs%20style%20her%20hair%20in%20bright%20clean%20bathroom%20both%20reflected%20in%20mirror%20elderly%20woman%20beaming%20with%20happiness%20dignified%20respectful%20personal%20care%20interaction%20soft%20warm%20lighting%20genuine%20pride%20and%20joy%20photorealistic%20lifestyle%20photography%20authentic%20warm%20moment%20two%20Black%20women%20sharing%20joyful%20connection%20cream%20and%20amber%20tones&width=600&height=520&seq=mhh-strip-personal-bw-002&orientation=landscape",
    alt: "Black caregiver helping elderly Black woman with personal care",
    label: "Personal Care",
    icon: "ri-user-smile-line",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Warm%20cheerful%20Black%20African%20American%20female%20home%20care%20aide%20with%20natural%20curly%20hair%20and%20elderly%20Black%20woman%20with%20silver%20hair%20laughing%20together%20over%20a%20jigsaw%20puzzle%20at%20a%20bright%20table%20fresh%20flowers%20and%20coffee%20mugs%20on%20table%20cheerful%20sunny%20home%20environment%20both%20fully%20engaged%20smiling%20genuine%20joy%20photorealistic%20candid%20moment%20warm%20uplifting%20two%20Black%20women%20sharing%20genuine%20happiness%20cream%20background&width=600&height=520&seq=mhh-strip-companion-bw-002&orientation=landscape",
    alt: "Black caregiver and elderly Black woman laughing over a puzzle",
    label: "Companion Services",
    icon: "ri-heart-2-line",
  },
  {
    src: "https://readdy.ai/api/search-image?query=Professional%20Black%20African%20American%20female%20home%20care%20aide%20with%20natural%20hair%20empowering%20smiling%20adult%20man%20with%20disability%20in%20accessible%20bright%20kitchen%20counter%20both%20engaged%20cheerful%20warm%20natural%20lighting%20respectful%20uplifting%20interaction%20client%20looks%20proud%20and%20happy%20photorealistic%20lifestyle%20photography%20positive%20independence%20scene%20Black%20woman%20caregiver%20supportive%20warm%20home%20environment%20light%20cream%20tones&width=600&height=520&seq=mhh-strip-support-bw-002&orientation=landscape",
    alt: "Black care aide helping client with daily living in kitchen",
    label: "Daily Living Support",
    icon: "ri-walk-line",
  },
];

export default function CLSPhotoStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <div className="text-center mb-10">
          <span className="text-gold-dark font-sans text-xs tracking-widest uppercase font-semibold">Real Care. Real People.</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-maroon mt-3">
            What Care Looks Like in Practice
          </h2>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {photos.map((photo) => (
            <div key={photo.label} className="group rounded-xl overflow-hidden relative">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay + caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-gold rounded-lg flex-shrink-0">
                  <i className={`${photo.icon} text-maroon text-base`} />
                </div>
                <span className="text-white font-serif font-bold text-base">{photo.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Warm statement */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 font-sans text-sm max-w-2xl mx-auto leading-relaxed">
            Every visit is a relationship. Every client is a person with a name, a story, and a right to be seen — not just served. This is what we mean when we say <em className="text-maroon font-medium">client-centered care.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
