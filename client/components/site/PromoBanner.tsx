export default function PromoBanner() {
  return (
    <section className="relative isolate overflow-clip">
      <div
        className="relative flex min-h-[600px] items-center justify-center px-4 md:px-6"
        style={{ backgroundColor: "rgb(255,255,254)" }}
      >
        <img
          src="https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/hero-banner-img.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="relative w-full">
          <div className="mx-auto flex max-w-[1170px] flex-wrap gap-4 md:gap-4">
            <div className="basis-full sm:basis-[18%]" />
            <div className="basis-full sm:basis-[64%]">
              <div className="relative rounded-2xl bg-[rgba(85,78,159,0.6)] p-8 md:p-9 text-white">
                <h2 className="mx-auto max-w-[1170px] text-center text-4xl md:text-[38.4px] md:leading-[50px] lg:text-[48px] lg:leading-[62.4px] tracking-[-0.025em]">
                  Best Kindergarten For Your Kids
                </h2>
                <p className="mx-auto mt-7 max-w-[1170px] text-center leading-[32.4px] md:mt-6 md:leading-[28.8px]">
                  We believe in open communication and collaboration with parents, making you an integral part of your child’s educational journey.
                </p>
                <div className="mx-auto mt-14 flex max-w-[1170px] flex-wrap items-center justify-center gap-4 md:mt-12">
                  <a
                    href="#admissions"
                    className="inline-block rounded-[30px] bg-[#FDA00F] px-9 py-4 text-[14px] font-semibold uppercase text-white shadow-sm hover:brightness-95"
                  >
                    Enroll Now
                  </a>
                  <a
                    href="#about"
                    className="inline-block rounded-[30px] border-2 border-white px-9 py-4 text-[14px] font-semibold uppercase text-white hover:bg-white/10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="basis-full sm:basis-[18%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
