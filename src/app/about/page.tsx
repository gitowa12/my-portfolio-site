const About = () => {
  return (
    <>
      <div className=" flex flex-col items-center mt-[32px] mb-[64px] gap-y-[64px] my-[32px] md:my-[48px] lg:my-[62px] md:gap-y-[80px] lg:gap-y-[100px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px] md:mb-[48px] lg:text-[56px]">
            About
          </h2>
          <div className="flex flex-col justify-center items-center md:flex-row">
            <img
              className="w-[120px] rounded-full bg-slate-200 mb-[16px] md:w-[160px] md:mr-[24px] md:mb-0"
              src="/僕のアイコン画像400x400.jpg"
              alt=""
            />
            <div className="flex flex-col items-center md:items-start">
              <p className="font-bold text-[20px] mb-[16px] md:text-[24px] md:mb-0">towa</p>
              <p className=" text-[18px] md:text-[20px] md:max-w-[480px] ">
                フロントエンドエンジニア。
                <br />
                1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとしてのキャリアをスタート。JavaScriptとUIデザインが好き。
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center ">
          <h3 className="text-[32px] font-bold mb-[16px] sm:text-[36px] md:text-[40px] lg:text-[44px]">
            Skills
          </h3>
          <div className="w-full flex flex-col justify-between md:flex-row ">
            <div className="mb-[28px] md:w-[48%]">
              <p className="text-center font-bold text-[20px] sm:text-[24px]">言語</p>
              <ul className="flex flex-col space-y-[4px] sm:space-y-[6px]">
                <li className="flex justify-between px-[6px]">
                  <p className="text-[14px] font-bold sm:text-[16px]">技術</p>
                  <p className="text-[14px] font-bold sm:text-[16px]">使用期間</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>HTML・CSS</p>
                  <p>1年2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>JavaScript</p>
                  <p>1年2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>React</p>
                  <p>7ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>TailWIndCSS</p>
                  <p>7ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>Git・GitHub</p>
                  <p>3ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>TypeScript</p>
                  <p>2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>Next.js</p>
                  <p>2ヶ月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>Supabase</p>
                  <p>1ヶ月</p>
                </li>
              </ul>
            </div>
            <div className="md:w-[48%]">
              <p className="text-center font-bold text-[20px] sm:text-[24px]">資格</p>
              <ul className="flex flex-col space-y-[4px] sm:space-y-[6px]">
                <li className="flex justify-between px-[6px]">
                  <p className="text-[14px] font-bold sm:text-[16px]">資格</p>
                  <p className="text-[14px] font-bold sm:text-[16px]">取得時期</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>CCNA</p>
                  <p>2022年6月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
                  <p>基本情報技術者</p>
                  <p>2020年3月</p>
                </li>
                <li className="flex justify-between bg-gray-200 rounded-lg p-[6px] font-[600] sm:p-[8px] sm:text-[20px]">
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
