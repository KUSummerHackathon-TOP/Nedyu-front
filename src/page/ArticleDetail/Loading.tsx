import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import eggChicken from "../../assets/egg_chicken.svg";
import eggChicken2 from "../../assets/egg_chicken2.svg";

const Loading = () => {
  const srcRef = useRef<string>(eggChicken);
  const [src, setSrc] = useState(srcRef.current);

  useEffect(() => {
    srcRef.current = src;
  }, [src]);

  useEffect(() => {
    const toogleImg = setInterval(() => {
      if (srcRef.current === eggChicken) {
        srcRef.current = eggChicken2;
      } else srcRef.current = eggChicken;
      setSrc(srcRef.current);
      console.log("toggle");
    }, 500);

    return () => clearInterval(toogleImg);
  }, []);
  return (
    <Wrapper1>
      <Title>Nedyu가 내 생각을 전송하고 있어요!</Title>
      <Character src={src} />
      <Span>Levy takes Whitbread novel prize</Span>
    </Wrapper1>
  );
};

export default Loading;

const Wrapper1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //display: flex;
  //ustify-content: center;
  background: #ffd751;
`;

const Title = styled.div`
  margin-top: 10%;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #00110f;
`;

const Character = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -30%);
`;

const Span = styled.div`
  position: absolute;
  bottom: 5%;
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #303434;
`;
