import { useEffect, useRef, useState } from "react";
import VideoJS from "./components/VideoJS";
import Box from "./components/Box";
import CameraPicker from "./components/CameraPicker/CameraPicker";
import Highlights from "./components/Highlights";
import ChosenHighlight from "./components/ChosenHighlight";
import VideoCard from "./components/VideoCard";

import { Typography } from "@mui/material";

import { data } from "./data.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, InputGroup, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import "./styles.css";

export default function App() {
  const [team, setTeam] = useState();
  const [search, setSearch] = useState("");

  const playerRef = useRef(null);
  const [vidtype, setVidtype] = useState("Vod");

  function handleLive() {
    setVidtype("Live");
    console.log(vidtype);
  }
  function handleVod() {
    setVidtype("Vod");
    console.log(vidtype);
  }
  useEffect(() => {
    console.log(team);
  }, [team]);

  const [currentCamera, setCurrentCamera] = useState({});

  const options2 = {
    autoplay: "play",
    controls: true,
    responseive: true,
    fluid: true,
    preload: "auto",
    livemodeui: true,
    poster:
      "https://thumbs.dreamstime.com/z/live-stream-icon-streaming-video-news-symbol-white-background-social-media-template-broadcasting-online-logo-play-button-178366926.jpg",
    sources: [
      {
        src:
          "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
        type: "application/x-mpegURL"
      }
    ]
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on("waiting", () => {});

    player.on("dispose", () => {});
  };

  var imaOptions = {
    forceNonLinearFullSlot: true,
    adTagUrl:
      "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sample_ar%3Dpreonly&ciu_szs=300x250%2C728x90&gdfp_req=1&ad_rule=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator="
  };

  return (
    <>
      {vidtype === "Vod" && (
        <>
          <Highlights />
        </>
      )}
    </>
  );
}
