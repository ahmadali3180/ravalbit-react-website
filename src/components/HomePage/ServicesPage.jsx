import React from "react";

export default function ServicesPage() {
  return (
    <div id="servicesPage" className="width-100 background_color_black">
      <div className="res-1440 services_page_main_cnt">
        <h1 className="services_page_main_cnt_h1">
          One Platform,
          <br />
          Diverse facilities.
        </h1>
        <div className="services_page_main_cnt_name_services_cards">
          <div className="services_page_main_cnt_name_services_cards_card">
            <h1 className="services_page_main_cnt_name_services_cards_card_h1">
              Software development
            </h1>
            <p className="services_page_main_cnt_name_services_cards_card_p">
              Our team of experienced developers uses the latest technologies
              and best practices to build high-quality software that meets our
              clients' unique needs.
            </p>
          </div>
          <div className="services_page_main_cnt_name_services_cards_card">
            <h1 className="services_page_main_cnt_name_services_cards_card_h1">
              Crypto trading
            </h1>
            <p className="services_page_main_cnt_name_services_cards_card_p">
              Secure your futures finances with RavalBit’s trading plans which
              provide secure profit ratios on their investments.
            </p>
          </div>
          <div className="services_page_main_cnt_name_services_cards_card">
            <h1 className="services_page_main_cnt_name_services_cards_card_h1">
              Graphics
            </h1>
            <p className="services_page_main_cnt_name_services_cards_card_p">
              Get yourself stunning GFX services with Ravalbit’s extension
              company which provides all kind of assessment Agaaz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
