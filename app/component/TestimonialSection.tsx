import TestimonialCards from "./TestimonialCards";

export default function TestimonialSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ">
      {/* Left: heading */}
      <div className="order-2 lg:order-1">
        <p className="text-sm font-semibold text-[#5E6282] uppercase tracking-wider">
          TESTIMONIALS
        </p>
        <h2 className="mt-4 text-5xl font-bold font-[volkhov] text-[#14183E] leading-tight">
          What People Say About Us.
        </h2>
        <div className="mt-[80px] flex items-center gap-3 ">
          <span className="w-3 h-3 rounded-full bg-indigo-800/70" />
          <span className="w-3 h-3 rounded-full bg-gray-200" />
          <span className="w-3 h-3 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Right: stacked cards */}
      <div className="relative order-1 lg:order-2 flex items-start justify-center ">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 w-[110%] h-[110%] mx-auto rounded-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(20,24,62,0.06), transparent 40%), rgba(255,255,255,0)",
            filter: "blur(20px)",
          }}
        />

        {/* Three layered cards (stack effect): render from bottom to top */}
        <div className="relative w-full flex items-center justify-start overflow-visible">
          <TestimonialCards
            text='"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."'
            name="Mike Taylor"
            location="Lahore, Pakistan"
          />

          <div className="z-[-1] absolute left-[60px] top-[60px] pr-5 pb-5">
            <TestimonialCards
              text="On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
              name="Chris Thomas"
              location="CEO of Red Button"
            />
          </div>

          {/* Top card actual content */}
        </div>

        {/* right-side vertical arrows (optional) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-end gap-6">
          <button className="w-8 h-8 rounded-full bg-white shadow-sm grid place-items-center">
            ↑
          </button>
          <button className="w-8 h-8 rounded-full bg-white shadow-sm grid place-items-center">
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}
