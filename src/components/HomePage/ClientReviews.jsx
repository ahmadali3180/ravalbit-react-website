import React from "react";

export default function ClientsReviews() {
  return (
    <div className="res-1440 client_review_main_cnt">
      <h1 className="client_review_main_cnt_h1">Client Reviews</h1>
      <div className="client_review_main_cnt_service_main_div">
        <ReviewBox
          fullName={"David Mavrick"}
          Review={
            "I've been using this crypto trading platform for a few months now and I am blown away by its simplicity and efficiency. It's incredibly user-friendly, and I've had no issues with trades or withdrawals. Definitely recommend!"
          }
        />
        <ReviewBox
          fullName={"Alex"}
          Review={
            "The software that I'm using for project management has made my life so much easier. It's intuitive and customizable, which has allowed me to tailor it to my specific needs. I've seen a marked increase in productivity since I started using it."
          }
        />
        <ReviewBox
          fullName={"Murphy"}
          Review={
            "I've been using this crypto wallet for a while now and it's easily the best one I've ever used. The security features are top-notch, and the customer support team is always available and extremely helpful. Highly recommend!"
          }
        />
        <ReviewBox
          fullName={"John"}
          Review={
            "Recently started using this software for accounting and it's been a game-changer. It's taken a lot of the stress out of managing my finances, and the automation features have saved me so much time. I would definitely recommend this software to any small business owner."
          }
        />
      </div>
    </div>
  );
}

const ReviewBox = (props) => {
  const { fullName, Review } = props;
  return (
    <div className="client_review_box-main-cnt">
      <div className="client_review_box_sideBar"></div>
      <div className="client_review_box_content">
        <p className="client_review_box_name_text">{fullName}</p>
        <p className="client_review_box_review_text">{Review}</p>
      </div>
    </div>
  );
};
