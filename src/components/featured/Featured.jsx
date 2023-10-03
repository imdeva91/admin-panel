import React from "react";
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amaunt">$420</p>
        <p className="description">
          Previous transaction prosessing. Last payment may not be included.
        </p>
        <div className="summery">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResulte negetive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resulteAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResulte positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resulteAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResulte positive">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resulteAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
