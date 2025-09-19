export default function Classes() {
  const cards = [
    {
      bg: "#E86126",
      image:
        "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/class-img-01.jpg",
      lessons: "2 LESSONS",
      students: "25 Students",
      title: "Color Matching Class",
      desc: "The perfect class for your child with the best staff and best teachers.",
    },
    {
      bg: "#43CD66",
      image:
        "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/class-img-02.jpg",
      lessons: "5 LESSONS",
      students: "20 Students",
      title: "Alphabet Matching Class",
      desc:
        "We provided 4 classes with 9 to 12 children earch aged 12 months to 5 years of age.",
    },
    {
      bg: "#F9B001",
      image:
        "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/class-img-03.jpg",
      lessons: "3 LESSONS",
      students: "35 Students",
      title: "Letter Match Class",
      desc: "Our preschool program has four dedicated classes.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0FBAF4" }}>
      <div className="container">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="md:basis-1/2">
            <h6 className="inline-block rounded-[30px] text-[14px] uppercase text-white">Popular Classes</h6>
            <h3 className="mt-7 text-[36px] leading-[39.6px] text-white md:mt-6 md:text-[38.4px] md:leading-[50px] lg:text-[48px] lg:leading-[62.4px]">
              Devoted to the Early Education.
            </h3>
          </div>
          <p className="md:basis-1/2 text-white/95">Voluptatem per magnam ut assumenda magnis culpa orci, consectetuer, eaque, congue. Repudiandae ab ligula ante occaecat habitasse. Voluptas hic, aute.</p>
        </div>

        <div className="mx-auto grid max-w-[1170px] grid-cols-[repeat(auto-fill,minmax(min(288px,100%),1fr))] gap-9">
          {cards.map((c) => (
            <article key={c.title} className="rounded-[25px] p-4 md:p-4" style={{ backgroundColor: c.bg }}>
              <figure>
                <img
                  src={c.image}
                  alt=""
                  className="inline max-w-full rounded-[25px] border-[10px] border-white"
                  loading="lazy"
                />
              </figure>
              <div className="mx-auto -mt-5 flex max-w-[1170px] items-center gap-4 rounded-[30px] bg-white px-7 pb-3 shadow-md">
                <div className="flex items-end gap-2 text-[14px]">
                  <img src="https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/course-img4.png" alt="" className="w-3" />
                  <p className="leading-[14px] md:text-[12px] md:leading-[12px]">{c.lessons}</p>
                </div>
                <div className="flex items-end gap-2 text-[14px]">
                  <img src="https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/course-img5.png" alt="" className="w-4" />
                  <p className="leading-[14px] md:text-[12px] md:leading-[12px]">{c.students}</p>
                </div>
              </div>
              <div className="mx-auto max-w-[1170px] px-2 pt-7 pb-4 text-white">
                <h5 className="text-[28px] leading-[36.4px]">{c.title}</h5>
                <p className="mt-4 text-[16px] leading-[25.6px] md:mb-6 md:mt-4">{c.desc}</p>
                <a href="#admissions" className="text-[14px] underline">GET STARTED</a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-[1170px] flex-wrap items-center justify-center gap-4 md:mt-12">
          <a href="#admissions" className="inline-block rounded-[30px] bg-[#FDA00F] px-7 py-4 text-[14px] font-semibold uppercase text-white hover:brightness-95">Enroll Now</a>
          <a href="#programs" className="inline-block rounded-[30px] bg-[#554E9F] px-7 py-4 text-[14px] font-semibold uppercase text-white">More Classes</a>
        </div>
      </div>
    </section>
  );
}
