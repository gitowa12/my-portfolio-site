const About = () => {
  return (
    <>
      <div className=" flex flex-col items-center mt-[32px] mb-[64px]">
        <div className="flex flex-col items-center mb-[40px]">
          <h2 className="text-[40px] font-bold mb-[32px]">About</h2>
          <img className="w-[120px] rounded-full bg-slate-200 mb-[16px]" src="/person.svg" alt="" />
          <p className="mb-[16px]">towa</p>
          <p className="max-w-[340px]">
            フロントエンドエンジニア。
            <br />
            1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとしてのキャリアを孤独にスタートしました。
          </p>
        </div>
        <div className="w-full max-w-[340px] flex flex-col items-center">
          <h3 className="text-[32px] font-bold mb-[16px]">Skills</h3>
          <div className="w-full flex flex-col justify-between">
            <div className="mb-[28px]">
              <p className="text-center font-bold text-[18px]">言語</p>
              <ul className="flex flex-col space-y-[4px]">
                <li className="flex justify-between px-[6px]">
                  <p className="text-[12px] font-bold">技術</p>
                  <p className="text-[12px] font-bold">使用期間</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>HTML・CSS</p>
                  <p>1年2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>JavaScript</p>
                  <p>1年2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>React</p>
                  <p>7ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>TailWIndCSS</p>
                  <p>7ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>Git・GitHub</p>
                  <p>3ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>TypeScript</p>
                  <p>2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>Next.js</p>
                  <p>2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>Supabase</p>
                  <p>1ヶ月</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-center font-bold text-[18px]">資格</p>
              <ul className="flex flex-col space-y-[4px]">
                <li className="flex justify-between px-[6px]">
                  <p className="text-[12px] font-bold">資格</p>
                  <p className="text-[12px] font-bold">取得時期</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>CCNA</p>
                  <p>2022年6月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>基本情報技術者</p>
                  <p>2020年3月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600]">
                  <p>ITパスポート</p>
                  <p>2020年1月</p>
                </li>
                {/* <li className="flex justify-between bg-gray-200 rounded-lg p-[6px]">
                  <p>英語検定2級</p>
                  <p>2016年10月</p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
