import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragraph start */}
         <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cushioning for your Miles
            </div>
         </div>
      </Wrapper>
    </main>
  )
}
