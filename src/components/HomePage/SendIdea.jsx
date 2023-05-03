import React from "react";

export default function SendIdea() {
  return (
    <div className="ask_for_quotation_main_cnt">
      <div className="ask_for_quotation_main_cnt_h3_div">
        <h3 className="ask_for_quotation_main_cnt_h3">
          Send us your desire idea we’ll help you to make it a reality!
        </h3>
      </div>
      <div className="ask_for_quotation_main_cnt_inputView">
        <input
          className="ask_for_quotation_main_cnt_input"
          cplaceholder="Ask for quotation"
        />
        <div className="ask_for_quotation_main_cnt_send_button">
          <p className="ask_for_quotation_main_cnt_send_text">Send</p>
        </div>
      </div>
    </div>
  );
}
