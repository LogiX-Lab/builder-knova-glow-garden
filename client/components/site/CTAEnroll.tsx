export default function CTAEnroll() {
  return (
    <section className="relative bg-[#FFFFFE] py-14 md:py-16">
      <div
        className="absolute inset-0 bg-[#0FBAF4] opacity-80"
        aria-hidden="true"
      />
      <div className="relative container">
        <div className="mx-auto flex max-w-[1170px] flex-wrap items-center gap-6 md:gap-8">
          <div className="basis-full md:basis-7/12">
            <h3 className="text-[28px] leading-[36.4px] text-white md:text-[36px] md:leading-[46.8px]">
              How to Enroll Your Child to Our Preschool?
            </h3>
          </div>
          <div className="basis-full md:basis-5/12">
            <div className="flex flex-wrap items-center justify-end gap-4">
              <a
                href="#contact"
                className="inline-block rounded-[30px] bg-[#FDA00F] px-7 py-4 text-[14px] uppercase text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
