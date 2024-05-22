import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold mb-[32px] md:text-[48px] md:mb-[48px] lg:text-[56px]">
          About
        </h2>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <img
            className="w-[120px]  rounded-full bg-slate-200 mb-[16px] md:w-[160px] md:mr-[24px] md:mb-0"
            src="/僕のアイコン画像400x400.jpg"
            alt="icon"
          />
          <div className="flex flex-col items-center md:items-start">
            <p className="font-bold text-[20px] mb-[16px] md:text-[28px] md:mb-0">towa</p>
            <p className=" text-[18px] md:text-[20px] md:max-w-[480px] ">
              フロントエンドエンジニア。
              <br />
              1999年生まれ。沖縄県出身、東京都在住。大学時代に上京し、新卒で入社した会社でフロントエンドエンジニアとしてのキャリアをスタート。JavaScriptとUIデザインが好き。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
