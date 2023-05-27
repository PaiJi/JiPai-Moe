import InvisibleLabel from "@/components/InvisibleLabel"
import { Tab } from "@/components/layout/Tab"
import favJson from "@/content/fav.json"
import { ContainerStyle } from "@/utils/define"
import clsx from "clsx"
import React from "react"
import "swiper/css/bundle"
import { Swiper, SwiperSlide } from "swiper/react"

export default function About() {
  return (
    <>
      <aside>
        <Tab />
      </aside>
      <main
        className={clsx(
          "text-dark-666 text-base tracking-wide leading-6 overflow-hidden mb-8"
        )}
      >
        <section className={clsx("mb-8 p-8", ContainerStyle)}>
          <h2 className="text-2xl font-bold text-primary mb-2">产品特点</h2>
          <p>95后，真实大龄肥宅。</p>
          <p>养鸽协会终身会员，先鸽后肝，不行装死。</p>
          <p>
            重度拖延症患者，收到消息放着放着就会忘记回复，但是我可能会在三年后回复你。
          </p>
          <p>
            喜欢捣鼓电子设备，Android&iOS 双持，Mac&Windows
            双开，小孩子才做选择，大人全都要。
          </p>
          <p>
            积分爱好者，热衷于各种积分，便利店会员积分、信用卡积分、购物积分、甚至是TODO软件的积分！
          </p>
          <p>
            三分钟热度，目前还挂在年度目标上的有：
            <br />
            <span className="dashed">前端精进</span>，
            <span className="dashed">日语N5</span>，
            <span className="dashed">画画入门</span>，
            <span className="dashed">背单词</span>。<br />
            以上目标，统统没有实现。
          </p>
        </section>

        <section className={clsx("mb-8 p-8", ContainerStyle)}>
          <h2 className="text-2xl font-bold text-primary mb-2">储藏要求</h2>

          <SubSection
            emoji="🎮"
            title="玩点啥"
            swiperImage={favJson.games.playing.map(item => item.cover)}
          >
            <p>
              大部分情况下喜欢模拟经营类、沙盒类的游戏，比如：《动物园之星》、《城市天际线》、《RimWorld》、《Terraria》、《星露谷物语》、《StarBound》、《Minecraft》。
            </p>
            <p>
              不过也会玩一些有着优秀背景故事设定的FPS，比如《命运2》、《泰坦陨落2》、《量子破碎》、《孤岛危机》系列、《光环》系列。
            </p>
          </SubSection>

          <SubSection emoji="🎥" title="看点啥">
            <p>
              《神秘博士》《Rick and Morty》《Person of Interest》《West World》
            </p>
          </SubSection>

          <SubSection emoji="🍺" title="喝点啥">
            <p>
              老了，现在只能喝无糖苏打水。不过如果可以放开喝，鸡排非常推荐
              茶百道家的🥥 生椰西瓜，喜茶家的🍇 芝芝葡萄。
            </p>
          </SubSection>

          <SubSection emoji="🍜" title="吃点啥">
            <p>
              爱吃日式拉面，偏好
              <InvisibleLabel showText={"油腻"} defaultText={"有厚重感"} />
              的拉面，比如沾面，二郎系，好吃的都在仙霞路！如果要在连锁拉面店里选一家最喜欢的，鸡排钦定
              博多一辛舍。
            </p>

            <p>
              <del>在卤味食品分类下，鸡排最喜欢的是绝味鸭脖系列的鸭心。</del>
              因为健康问题也很久没吃过了...
            </p>

            <p>
              在炸鸡品牌中，鸡排独爱德克士，汁水四溢、面衣酥脆。反观肯德基：原味鸡表面太咸，里面又没味道。而麦当劳的麦辣系列又贵又辣，点名批评辣椒素滥用，拒当喷射战士！
            </p>

            <p>吃薯条的时候其实不是很在意是否有番茄酱。</p>
          </SubSection>
        </section>
      </main>
    </>
  )
}

function SubSection({
  title,
  emoji,
  swiperImage,
  children,
}: {
  title: string
  emoji: string
  swiperImage?: string[]
  children: React.ReactNode
}) {
  return (
    <div className="my-5">
      <h3 className="text-lg flex items-center font-base text-slate-600">
        <span className="text-3xl inline-block mr-2">{emoji}</span>
        {title}
      </h3>

      {swiperImage?.length && (
        <div className="-ml-10 -mr-10 mt-4 mb-4">
          <Swiper
            className=""
            spaceBetween={0}
            slidesPerView={2}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {swiperImage?.map(image => (
              <SwiperSlide key={image}>
                <img
                  className="w-full object-cover brightness-75"
                  style={{ height: 300 }}
                  src={image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {children}
    </div>
  )
}
