type Post = {
  title: string;
  href: string;
  img: string;
  alt: string;
  date: string;
  excerpt: string;
};

const posts: Post[] = [
  {
    title: "Concentration is important to learn everything",
    href: "https://creativthemes.com/theme-demo/creativ-preschool-fse/2025/07/13/concentration-is-important-to-learn-everything/",
    img: "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/uploads/sites/290/2025/07/creativ-fse-preschool-post-01.jpg",
    alt: "Concentration is important to learn everything",
    date: "July 13, 2025",
    excerpt:
      "We believe in open communication and collaboration with parents, making you an integral part of…",
  },
  {
    title: "Painting teaches children to be happy",
    href: "https://creativthemes.com/theme-demo/creativ-preschool-fse/2025/07/13/painting-teaches-children-to-be-happy/",
    img: "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/uploads/sites/290/2025/07/creativ-fse-preschool-post-02.jpg",
    alt: "Painting teaches children to be happy",
    date: "July 13, 2025",
    excerpt:
      "We believe in open communication and collaboration with parents, making you an integral part of…",
  },
  {
    title: "The importance of play therapy in children",
    href: "https://creativthemes.com/theme-demo/creativ-preschool-fse/2025/07/13/the-importance-of-play-therapy-in-children/",
    img: "https://creativthemes.com/theme-demo/creativ-preschool-fse/wp-content/uploads/sites/290/2025/07/creativ-fse-preschool-post-03.jpg",
    alt: "The importance of play therapy in children",
    date: "July 13, 2025",
    excerpt:
      "We believe in open communication and collaboration with parents, making you an integral part of…",
  },
];

export default function Blog() {
  return (
    <div className="relative bg-[#FFFFFE] px-4 py-18 md:px-4 md:py-16">
      <div className="mx-auto max-w-[1170px]">
        <div className="mx-auto flex max-w-[1170px] items-center justify-center">
          <h6 className="text-[14px] uppercase text-[#FDA00F] md:text-[12px] md:leading-[17.4px]">Our Blog</h6>
        </div>
        <h3 className="mx-auto mt-4 text-center text-[36px] leading-[39.6px] text-[#554E9F] md:text-[38.4px] md:leading-[42px] lg:text-[48px] lg:leading-[52.8px] tracking-[-1px]">
          Latest News & Articles
        </h3>
      </div>

      <div className="mx-auto mt-14 max-w-[1170px] md:mt-12">
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(min(288px,100%),1fr))] gap-9">
          {posts.map((p) => (
            <li key={p.title} className="list-item text-left">
              <article className="overflow-hidden rounded-[15px] border border-gray-200">
                <a href={p.href} target="_self" rel="noreferrer">
                  <img
                    src={p.img}
                    alt={p.alt}
                    width={510}
                    height={345}
                    className="aspect-[510/345] h-full w-full object-cover"
                    loading="lazy"
                  />
                </a>
                <div className="bg-[#E86126] p-7 text-white md:p-6">
                  <h5 className="my-2 text-[20px] leading-7">
                    <a href={p.href} className="inline-block text-white">
                      {p.title}
                    </a>
                  </h5>
                  <div className="mt-4 flex items-center gap-2 text-[14px]">
                    <span>admin</span>
                    <span className="font-extralight">|</span>
                    <time>{p.date}</time>
                  </div>
                  <p className="mt-4 text-[16px] leading-[25.6px]">{p.excerpt}</p>
                  <p className="mt-4">
                    <a
                      href={p.href}
                      className="inline-block text-[16px] underline"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
