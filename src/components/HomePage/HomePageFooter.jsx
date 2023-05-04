import React from "react";

export default function HomePageFooter() {
  return (
    <div id="footer" className="res-1440-0 homePage_footer_main_cnt_1">
      <div className="homePage_footer_main_cnt_2">
        <div className="homePage_footer_main_cnt_content_div">
          <CompanyCopyright
            domain="www.agaaz.co"
            logo="./images/agaaz-logo.png"
            cc="Our company offers exceptional graphic design services that cater to the specific needs of our clients. Our team of experienced designers creates visually compelling designs that are not only aesthetically pleasing but also effectively communicate our clients' message to their target audience."
            cres="Copyright Notice All contents 2015-2023 GFX Design Company in Pakistan – All rights reserved."
          />
        </div>
        <div className="homePage_main_cc_seperator">
          <p className="homePage_main_cc_seperator_text">X</p>
        </div>
        <div className="homePage_footer_main_cnt_content_div">
          <CompanyCopyright
            domain="www.ravalbit.com"
            logo="./images/logo-ravalbit.png"
            cc="We are a technology firm that specializes in the development of software and offers cryptocurrency trading services. Our state-of-the-art solutions provide our clients with seamless navigation through the rapidly changing digital landscape, instilling confidence in their operations."
            cres="Copyright Notice All contents 2015-2023 Software & Web development Company in Pakistan – All rights reserved."
          />
        </div>
      </div>
      <div>
        <p className="homePage_footer_cc_main_credits">
          Designed by Agaaz, Developed by RavalBit.
        </p>
      </div>
    </div>
  );
}

const CompanyCopyright = ({ domain, logo, cc, cres }) => {
  return (
    <div className="homePage_footer_cc_main_cnt">
      <img
        src={logo}
        className="homePage_footer_main_cnt_logo_img"
        alt="companyLogo"
      />
      <div className="homePage_footer_credits">
        <p className="homePage_footer_cc_main_domain">{domain}</p>
        <p className="homePage_footer_cc_main_cc">{cc}</p>
        <p className="homePage_footer_cc_main_cres">{cres}</p>
      </div>
    </div>
  );
};
