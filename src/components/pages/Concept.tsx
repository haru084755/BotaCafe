import { Image } from "../atoms/Image"
import { SectionName } from "../atoms/SectionName"

export const Concept = () => {
  return (
    <div className="bg-subBg pt-12 md:pt-24 lg:pt-60 flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-2/4 px-6 md:px-12 lg:pl-52">
        <SectionName name="CONCEPT" />

        <p className="my-6 md:my-8 lg:my-12 font-light text-xl md:text-2xl lg:text-3xl leading-normal md:leading-relaxed lg:leading-loose tracking-wide">
          森の中で深呼吸するような時間を、<br />
          街の真ん中で。
        </p>

        <p className="text-sm md:text-base leading-7 md:leading-9 lg:leading-[40px] font-light tracking-wide">
          少しだけ、深呼吸したくなる場所。<br />
          街の中で、そっと森の気配を感じられる空間をつくりました。<br />
          木のぬくもりややさしい光、季節の香りに包まれながら、<br />
          少しだけ心が軽くなるような時間を過ごしてほしい。<br />
          そんな思いから生まれた、小さなカフェです。
        </p>
      </div>

      <div className="relative w-full md:w-2/4 h-[50vh] md:h-[70vh] lg:h-[92vh] mt-8 md:mt-0">
        <Image
          src="/public/images/CONCEPT_img1.png"
          alt="CONCEPTイメージ画像1"
          className="absolute w-2/3 md:w-1/2 z-10"
        />
        <Image
          src="/public/images/CONCEPT_img2.png"
          alt="CONCEPTイメージ画像2"
          className="absolute w-3/4 md:w-2/3 bottom-0 right-0"
        />
      </div>
    </div>
  )
}