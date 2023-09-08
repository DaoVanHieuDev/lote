import React from "react";
import { useTranslation } from "react-i18next";
import { locales } from "../i18n/i18n";
import "./Header";
import "./HeaderStyle.scss";

import SliderShow from "../Action/SliderShow";
function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    if (lng === "en" || lng === "vi") {
      i18n.changeLanguage(lng);
    } else {
      console.error("Unsupported language:", lng);
    }
  };

  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="flexNavbar1">
            <img
              className="logoLoteriaHeader"
              width={"85px"}
              src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg"
              alt=""
            />
            <ul className="ulFlex">
              <li> {t("all categories")} </li>
              <li>ĐẶT HÀNG </li>
              <li> KHUYẾN MÃI</li>
              <li>CỬA HÀNG </li>
            </ul>
          </div>
          <div
            className="flexNavbar2"
            style={{
              paddingLeft: "100px",
            }}
          >
            <div className="classLangDown" style={{ paddingLeft: "20%" }}>
              <select
                style={{
                  border: "1px solid  #fff",
                  borderRadius: "5px",
                  fontSize: "15px",
                  height: "25px",
                }}
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option style={{ border: "1px solid  #fff" }}>Language </option>
                <option
                  style={{ border: "1px solid  #fff" }}
                  className="optionsMenu"
                  value="vi"
                  onClick={() => changeLanguage("vi")}
                >
                  Tiếng Việt
                </option>
                <option
                  style={{ border: "1px solid  #fff" }}
                  className="optionsMenu"
                  value="en"
                  onClick={() => changeLanguage("en")}
                >
                  Tiếng Anh
                </option>
              </select>
              <div
                style={{
                  backgroundColor: "rgb(214, 108, 108)",
                  padding: "5px 5px",
                  color: "#fff",
                  borderRadius: "10px",
                  fontSize: "12px",
                  height: "30px",
                }}
              >
                <img
                  width={"20px"}
                  src="https://www.lotteria.vn/grs-static/images/lotteria_logo.svg"
                  alt=""
                />
                Download App
              </div>
            </div>
            <br />
            <div>
              <ul className="ulFlex2">
                <li>
                  <i
                    class="fa-solid fa-location-dot"
                    style={{ color: "#000000" }}
                  ></i>
                </li>
                <li>
                  <i class="fa-regular fa-user"></i>
                </li>
                <li>
                  <i class="fa-regular fa-bell"></i>
                </li>
                <li>
                  <i class="fa-solid fa-bag-shopping"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <SliderShow />
      </div>
    </>
  );
}

export default Header;
