export default function Services() {
  const items = [
    {
      color: "bg-sky-500",
      icon: "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/service-img-01.png",
      title: "Great Teacher",
      desc:
        "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after.",
    },
    {
      color: "bg-pink-500",
      icon: "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/service-img-02.png",
      title: "Bus Service",
      desc:
        "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after.",
    },
    {
      color: "bg-green-500",
      icon: "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/service-img-03.png",
      title: "Sports Training",
      desc:
        "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after.",
    },
    {
      color: "bg-amber-500",
      icon: "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/themes/creativ-preschool-fse/assets/images/service-img-04.png",
      title: "Language Course",
      desc:
        "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after.",
    },
  ];

  return (
    <section className="bg-[#FFFFFE] py-24">
      <div className="container grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="relative rounded-2xl">
            <div className="mx-auto flex max-w-[1170px] flex-col items-center gap-4 text-center">
              <div className={`flex h-24 w-24 items-center justify-center rounded-full ${it.color} p-5`}>
                <img src={it.icon} alt="" className="w-11 h-auto" loading="lazy" />
              </div>
              <div className="relative">
                <h5 className="mx-auto mb-2 text-center text-[28px] leading-[40.6px] text-[#554E9F]">
                  {it.title}
                </h5>
                <p className="mx-auto max-w-[48ch] text-[16px] leading-6 text-[#6C757D]">
                  {it.desc}
                </p>
                <p className="mx-auto mt-4 text-[16px] text-[#FDA00F]">
                  <a href="#programs" className="underline">Learn More</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
