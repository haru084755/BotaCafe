import { Image } from "../atoms/Image"
import { Scroll } from "../atoms/Scroll"

export const Fv = () => {
  return (
    <div className="flex flex-col md:flex-row gap-0min-h-[400px] md:min-h-[660px]">
      <div className="relative w-full md:w-3/4 h-[50vh] md:h-[92vh]">
        <Image
          src="/images/fv_img.jpg"
          alt="FVイメージ画像"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-[25%] right-[3%] md:right-auto max-w-[94%] md:max-w-none">
          <div className="bg-white/95 backdrop-blur-sm inline-block shadow-md">
            <p className="font-serif mx-5 my-2 text-4xl">あなたの日常に</p>
          </div>
        </div>

        <div className="absolute bottom-[15%] right-[3%] md:right-auto max-w-[94%] md:max-w-none">
          <div className="bg-white/95 backdrop-blur-sm inline-block shadow-md">
            <p className="font-serif mx-5 my-2 text-4xl">緑のやすらぎと、癒しのカップを</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between h-[50vh] md:h-[92vh] md:w-1/4">
        <div className="flex justify-center items-center h-1/2 md:h-3/4 bg-white p-4">
          <Image
            src="/images/Logo.png"
            alt="ロゴ画像"
            className="w-3/4 object-cover"
          />
        </div>
        <div className="bg-subBg py-16 md:py-40 relative">
          <Scroll />
        </div>
      </div>
    </div>
  )
}