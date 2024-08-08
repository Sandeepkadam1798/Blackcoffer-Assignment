import React from "react";
import ContactLogo from "../Images/ContactLogo.svg";
import GreenContactSVG from "../Images/GreenContactSVG.svg";
import ContactRed from "../Images/Red-Contact.png";
import ContactBlue from "../Images/Blue-Contact.png";
import Frout from "../Images/Frout.svg";
import GreenIcon from "../Images/GreenIcon.svg";
import OrangeIcon from "../Images/OrangeIcon.svg";
import PinkIcon from "../Images/PinkIcon.svg";
import CalenderLogo from "../Images/CalenderLogo.svg";
import arrow from "../Images/arrow.svg";

import LineGraph from "./LineGraph";
import DonutChart from "./DonutChart";
// import BarChart from "./BarGraph"
import BarGraph from "./BarGraph";
// import GreenContactSVG from "../Images/GreenContactSVG.svg";

const Style = {
  boxStyle:
    " w-[230px] h-[80px] bg-white-color rounded-lg border  border-orange-400 border-opacity-20",
  p1Style: " text-grey-color text-[15px] font-medium font-Poppins",
  p2Style: " text-black-color text-2xl font-Poppins font-semibold leading-10",
};

const data = [
  { title: "Total", amount: "$12K", image: ContactLogo },
  { title: "Product", amount: "300", image: GreenContactSVG },
  { title: "Category", amount: "50", image: ContactRed },
  { title: "Active Orders", amount: "50.00", image: ContactBlue },
];

const dataArray = [
  {
    productName: "Product 1",
    userName: "Raj satasiya",
    count: "05",
    image: Frout,
  },
  {
    productName: "Product 1",
    userName: "Raj satasiya",
    count: "05",
    image: Frout,
  },
  {
    productName: "Product 1",
    userName: "Raj satasiya",
    count: "05",
    image: Frout,
  },
  {
    productName: "Product 1",
    userName: "Raj satasiya",
    count: "05",
    image: Frout,
  },
  {
    productName: "Product 1",
    userName: "Raj satasiya",
    count: "05",
    image: Frout,
  },
  {
    productName: "Product 1",
    userName: "Raj satasiya",
    count: "05",
    image: Frout,
  },
];

const Dashboard = () => {
  return (
    <div className="h-full bg-bg-color ">
      <div className="text-black-color text-xl font-semibold font-Poppins p-5 ml-2   ">
        Welcome to Dashboard
      </div>

      <div className="flex flex-wrap justify-evenly">
        {data.map((item, index) => (
          <div key={index} className={Style.boxStyle}>
            <div className="flex items-center justify-between p-3">
              <div>
                <p className={Style.p1Style}>{item.title}</p>
                <p className={Style.p2Style}>{item.amount}</p>
              </div>
              <div>
                <img src={item.image} alt="contactLogo" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* first Box */}

      <div className="flex flex-wrap  gap-1 justify-evenly p-2">
        <div className="w-[745px] h-96  bg-white-color rounded-lg  border-orange-400 border-opacity-20">
          <div className="flex flex-wrap justify-between p-2">
            <div className="flex flex-col">
              <div className="text-black text-xl font-semibold font-Poppins leading-loose ml-4 mt-2">
                Site traffic
              </div>
              <div className="flex flex-row">
                <div className="flex gap-1 pl-4 justify-center items-center">
                  <img src={GreenIcon} />
                  <p className="font-Poppins text-sm">Pageviews </p>{" "}
                  <img src={OrangeIcon} />{" "}
                  <p className="font-Poppins text-sm">Time on site </p>
                  <img src={PinkIcon} />{" "}
                  <p className="font-Poppins text-sm"> Visitors </p>
                </div>{" "} 
              </div>
            </div>
            <div>
              <div
                className="text-right text-green-color text-3xl font-normal mt-2"
                style={{ fontFamily: "'Bebas Neue'" }}
              >
                30.05K
              </div>

              <div className="flex flex-row">
                <div className="flex gap-1 mt-1 pl-4 justify-center items-center">
                  <img src={CalenderLogo} />
                  <p className="font-Poppins text-sm"> November 23 </p>{" "}
                  <img src={arrow} />{" "}
                </div>{" "}
              </div>
            </div>
            <LineGraph />
          </div>
        </div>

        {/* second box */}


        

        <div className="items-center w-[230px] h-96 bg-white bg-white-color rounded-lg border border-orange-400 border-opacity-20">
          <div className="text-black text-m font-semibold font-Poppins items-center p-2 flex flex-wrap justify-evenly gap-9 ">
            <div>
              Active Orders
              <div className=" h-px border w-40 border-neutral-300"></div>
              <div>
                {dataArray.map((data, index) => (
                  <div key={index} className="flex items-center mt-4">
                    <div className="rounded-full overflow-hidden w-10 h-10">
                      <img
                        src={data.image}
                        alt="Profile Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-1">
                      <div className="text-orange-color text-sm font-medium font-Poppins">
                        {data.productName}
                      </div>
                      <div className="text-grey-color text-sm font-normal font-Poppins">
                        {data.userName}
                      </div>
                    </div>
                    <div className="ml-6 text-grey-color text-sm font-semibold font-Poppins">
                      {data.count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Box */}
      <div className="flex flex-wrap justify-center gap-2 p-1 ">
        <div className="w-[490px]  bg-white-color h-[340px]">
          <div className="flex flex-wrap justify-between">
            <div className="text-black text-xl font-semibold font-Poppins leading-loose ml-4 mt-2">
              Rates
            </div>

            <div className="flex flex-row">
              <div className="flex gap-1 mr-4 mt-4 justify-center items-center">
                <img src={GreenIcon} />
                <p className="font-Poppins text-zinc-800 text-sm">High</p>
                <img src={OrangeIcon} />
                <p className="font-Poppins text-zinc-800 text-sm">Low </p>
              </div>
            </div>
          </div>

          <div className="mt-0 p-2">
            <BarGraph />
          </div>
        </div>

        <div className="w-[490px]  bg-white-color h-[340px]">
          <div className="">
            <div className="text-black text-2xl font-semibold font-Poppins ml-4 mt-2 leading-loose">
             purchases
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly items-center ">
         <div>
            <div className="text-zinc-800 text-sm font-normal font-['Poppins'] flex gap-1">
            <img src={GreenIcon}/> First purchases
            </div>{" "}
            <div className="text-zinc-800 text-sm font-normal font-['Poppins'] flex gap-1">
            <img src={OrangeIcon}/>Repeat purchases
            </div>
            </div>
            <div>
             
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
