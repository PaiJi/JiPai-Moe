import React from "react"
import InvisibleLabel from "../components/InvisibleLabel"

export default function About() {
  return (
    <main className="page-about text-dark-666 rounded-lg text-base tracking-wide my-5 bg-white leading-6 p-5">
      <section className="mb-8">
        <h2 className="text-xl font-bold text-primary mb-2">产品特点</h2>
        <p>95后，真实大龄肥宅。</p>
        <p>养鸽协会终身会员，先鸽后肝，不行装死。</p>
        <p>
          三分钟热度，目前还挂在年度目标上的有：
          <br />
          <span className="dashed">前端精进</span>，
          <span className="dashed">日语N5</span>，
          <span className="dashed">画画入门</span>。<br />
          以上目标，统统没有实现。
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold text-primary mb-2">适宜环境</h2>
        <p>
          喜欢经营类、种菜类或者包含种菜元素的游戏，如星露谷物语，Starbound，Minecraft，但是在此类游戏中，鸡排的房子都是很丑陋的火柴盒或者正方形设计，可以说毫无创意了。
        </p>
        <p>
          比起奶茶，其实更喜欢葡萄芒果西瓜这种果汁饮品！实在不行的话柠檬水也可以凑合。
        </p>
        <p>在卤味食品分类下，鸡排最喜欢的是绝味鸭脖系列的鸭心。</p>
        <p>
          在炸鸡品牌中，鸡排独爱德克士，鲜嫩多汁大鸡腿！反观肯德基太咸，麦当劳太贵太辣，点名批评辣椒素滥用！
        </p>
        <p>吃薯条的时候其实不是很在意是否有番茄酱。</p>
        <p>爱吃日式拉面，偏好<InvisibleLabel showText={'油腻'} defaultText={'有厚重感'} />的拉面，最喜欢的是博多一辛舍的拉面。</p>
        <p>移动设备多持用户，不做选择，iOS和Android都要！</p>
        <p>
          积分爱好者，热衷于各种积分，便利店会员积分、信用卡积分、购物积分、甚至是TODO软件的积分！
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-xl font-bold text-primary mb-2">零售门店</h2>
        <h5>你也可以在这里找到我</h5>
        <a
          className="mr-2 hover:text-primary"
          href="https://twitter.com/jipairamen"
        >
          Twitter
        </a>
        <a className="mr-2 hover:text-primary" href="http://bgm.tv/user/338144">
          Bangumi
        </a>
        <a
          className="mr-2 hover:text-primary"
          href="https://www.instagram.com/jipai16/"
        >
          Instagram
        </a>
      </section>
    </main>
  )
}
