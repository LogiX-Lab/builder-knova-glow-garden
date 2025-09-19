export default function About() {
  return (
    <section className="bg-[#FFFFFE] py-14 md:py-16">
      <div className="container grid gap-14 md:grid-cols-2">
        <div className="self-center">
          <img
            src="https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/about-img.jpg"
            alt="Children learning together"
            className="max-w-full rounded-[15px]"
            loading="lazy"
          />
        </div>
        <div className="self-center pb-14 md:pb-12">
          <div>
            <h6 className="text-[14px] uppercase text-[#FDA00F]">About us</h6>
          </div>
          <h3 className="mt-4 text-[36px] leading-[43.2px] text-[#554E9F] md:text-[38.4px] md:leading-[46px] lg:text-[48px] lg:leading-[57.6px] tracking-[-0.025em]">
            We Are Making Every Childs World Better
          </h3>
          <p className="mt-4 text-[16px] leading-[25.6px] text-[#565656]">
            Our philosophy is learning through play as we offer a stimulating environment for children.
          </p>
          <p className="mt-4 text-[16px] leading-6 text-[#565656]">
            Our Preschool Program is designed so that the students spend their days participating in a structured, yet fun curriculum.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a href="#about" className="inline-block rounded-[30px] bg-[#FDA00F] px-7 py-4 text-[14px] uppercase text-white">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
