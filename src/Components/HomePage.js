import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { motion } from "framer-motion";
import ActualHomePage from "./ActualHomePage";
import Navbar2 from "./NavbarComp/Navbar2";
import Footer from "./FooterComp/Footer";
import OurMilestones from "../ScreenRoutes/OurMilestonesComp/OurMilestones";
import Diseaseportfolio from "../ScreenRoutes/DiseasePortfolioComp/Diseaseportfolio";
import Team from "../ScreenRoutes/TeamComp/Team";
import LoginPageVer2 from "../ScreenRoutes/LoginPageComp/LoginPageVer2";

const pathContainer = {
  hidden : {
    opacity : 0,
    pathLength : 0,
    scale: 0.6,
  },
  visible : {
    opacity : 1,
    pathLength : 1,
    scale: 1,
    transition : {
      type : "tween",
      duration : 2,
      delay : 0.5,
      ease : "easeOut",
    }
  }
}
const homeContainer = {
  hidden : {
    opacity : 0,
  },
  visible : {
    opacity : 1,
    transition : {
      type : "tween",
      delay : 0.2,
      duration : 1,
      ease : "easeOut",
    }
  }
}

let strokeWidth = 70;

function HomePage() {
  const [loader, setLoader] = useState(true);

  setTimeout(()=>{
    setLoader(false);
  }, 4000);

  if (loader) {
    return (
      <div className="loader-page">
        <motion.svg
          version="1.0"
          className="NIRVESH-ENTERPRISES"
          width="790.000000pt"
          height="503.000000pt"
          viewBox="0 0 790.000000 503.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g transform="translate(0.000000,503.000000) scale(0.100000,-0.100000)">
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M4265 4934 c-84 -102 -103 -138 -115 -210 -15 -89 -1 -93 39 -12 39
80 82 117 102 88 18 -27 1 -109 -36 -177 l-36 -65 31 7 c50 11 167 -13 200
-42 58 -49 27 -70 -89 -60 l-66 5 40 -18 c94 -44 245 -49 253 -9 9 49 -135
136 -244 146 -35 3 -64 9 -64 13 0 5 16 28 36 52 51 59 67 103 67 173 0 56
-28 181 -42 190 -4 2 -38 -35 -76 -81z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M4091 4945 c-38 -145 -38 -210 1 -292 l22 -48 6 95 c4 61 12 107 23
127 25 48 22 87 -12 125 l-29 33 -11 -40z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M3960 4694 c0 -26 97 -126 164 -169 29 -19 73 -56 96 -82 40 -46 42
-47 36 -18 -4 19 -25 46 -58 75 -81 70 -166 158 -171 177 -2 10 -3 3 -1 -15 4
-42 -15 -39 -38 7 -21 43 -28 49 -28 25z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M3885 4588 c-12 -30 -16 -65 -14 -119 3 -71 1 -78 -25 -109 -38 -46
-31 -91 22 -140 31 -28 42 -48 52 -91 24 -109 -25 -268 -110 -356 -62 -65
-112 -87 -195 -87 -95 0 -157 30 -263 127 -134 123 -255 185 -400 205 -136 19
-256 -13 -371 -100 -92 -70 -108 -72 -279 -42 -343 60 -584 37 -672 -62 -37
-42 -46 -90 -27 -135 45 -105 246 -255 572 -426 93 -48 128 -71 105 -67 -225
39 -464 152 -610 290 -70 65 -86 73 -163 81 -165 15 -478 -93 -708 -246 -87
-58 -177 -136 -168 -146 4 -3 61 14 128 39 146 55 206 71 336 90 164 24 273
29 405 16 398 -36 759 -183 952 -389 60 -63 138 -191 138 -225 0 -24 26 -30
73 -17 71 21 142 75 205 158 69 91 134 154 189 181 21 11 124 47 230 82 175
56 239 87 220 106 -3 4 -39 9 -79 11 -40 2 -85 9 -101 15 -41 16 -89 75 -85
106 5 43 44 40 156 -12 175 -82 268 -83 427 -6 143 68 243 194 290 365 26 91
31 359 11 516 -25 196 -35 222 -121 304 -41 39 -76 82 -80 98 -10 38 -20 34
-40 -15z m-841 -870 c22 -31 20 -60 -5 -92 -26 -33 -62 -34 -94 -1 -48 47 -22
115 45 115 29 0 43 -6 54 -22z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M1175 3154 c-390 -55 -668 -153 -842 -295 -113 -91 -214 -249 -266
-414 -71 -228 -87 -578 -34 -791 l12 -49 76 -7 c145 -13 212 -38 448 -162 117
-62 229 -94 273 -77 68 26 78 101 48 336 -30 231 -37 457 -17 552 31 144 108
248 221 300 53 24 73 28 156 28 249 -1 420 -150 499 -435 30 -109 39 -191 61
-600 35 -643 42 -719 82 -848 74 -244 268 -451 526 -562 182 -78 344 -110 607
-117 156 -5 206 -3 275 11 134 28 199 69 237 153 22 48 25 65 21 137 -3 67 -9
92 -32 130 -59 101 -180 147 -436 165 -179 13 -233 28 -294 82 -55 49 -91 108
-118 192 -38 121 -48 241 -58 652 -15 638 -43 829 -159 1070 -133 277 -349
436 -711 522 -92 22 -132 25 -325 28 -121 2 -233 1 -250 -1z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M6409 2407 c-69 -20 -136 -64 -166 -109 -21 -32 -28 -56 -31 -108 -9
-146 70 -214 328 -285 99 -26 150 -62 150 -104 0 -30 -38 -70 -80 -82 -78 -24
-146 10 -176 86 l-17 45 -56 0 c-31 0 -86 -3 -122 -6 l-66 -7 7 -36 c25 -132
104 -211 238 -240 120 -25 310 -7 380 36 86 53 142 146 142 236 0 148 -86 223
-325 282 -141 35 -165 47 -165 84 0 42 33 66 89 66 58 0 98 -24 118 -72 l14
-36 76 7 c42 3 96 6 121 6 l44 0 -7 37 c-16 84 -66 147 -150 184 -42 19 -71
23 -175 26 -81 2 -141 -2 -171 -10z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M3080 1985 l0 -425 130 0 130 0 0 425 0 425 -130 0 -130 0 0 -425z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M3530 1986 l0 -426 130 0 130 0 0 169 c0 100 4 172 10 176 5 3 27 1
49 -5 44 -12 59 -32 165 -232 l58 -108 144 0 c79 0 144 3 144 6 0 16 -137 268
-163 299 -16 20 -45 44 -65 54 l-36 18 36 12 c59 19 114 65 138 116 46 96 22
233 -51 287 -65 48 -86 51 -396 56 l-293 4 0 -426z m481 228 c26 -27 28 -87 4
-114 -21 -23 -107 -42 -172 -38 l-48 3 -3 88 -3 89 100 -4 c86 -3 103 -6 122
-24z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M4362 2396 c2 -7 73 -198 158 -424 l155 -412 143 0 c78 0 142 2 142
3 0 2 70 192 155 421 85 230 155 420 155 422 0 2 -58 4 -130 4 l-129 0 -40
-127 c-22 -71 -64 -206 -93 -300 -29 -95 -55 -173 -58 -173 -3 0 -48 135 -100
300 l-94 300 -134 0 c-107 0 -133 -3 -130 -14z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M5360 1985 l0 -425 355 0 355 0 0 95 0 95 -225 0 -225 0 0 85 0 85
205 0 205 0 0 85 0 85 -205 0 -205 0 0 70 0 70 220 0 220 0 0 90 0 90 -350 0
-350 0 0 -425z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M7080 1985 l0 -425 130 0 130 0 0 175 0 175 145 0 145 0 0 -175 0
-175 130 0 130 0 0 425 0 425 -130 0 -130 0 0 -150 0 -150 -145 0 -145 0 0
150 0 150 -130 0 -130 0 0 -425z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M5260 1220 c-21 -40 12 -80 53 -64 40 15 26 84 -18 84 -14 0 -29 -8
-35 -20z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M3070 1220 c0 -5 9 -10 20 -10 10 0 24 -9 30 -19 11 -21 14 -258 4
-285 -3 -9 -17 -16 -30 -16 -15 0 -24 -6 -24 -15 0 -13 26 -15 175 -15 l175 0
0 54 c0 30 3 61 6 70 4 10 1 16 -8 16 -8 0 -22 -18 -32 -40 -22 -51 -61 -72
-124 -68 l-47 3 -3 73 c-2 61 0 72 13 72 27 0 55 -20 65 -46 19 -48 30 -25 30
61 0 87 -11 109 -31 58 -12 -32 -26 -43 -56 -43 -21 0 -23 4 -23 59 0 70 14
86 66 78 50 -8 83 -32 100 -73 22 -52 34 -41 34 31 l0 65 -170 0 c-107 0 -170
-4 -170 -10z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M3900 1187 c0 -30 -26 -66 -56 -77 -29 -11 -32 -30 -4 -30 19 0 20
-7 20 -93 0 -113 10 -132 69 -132 48 0 77 24 87 73 5 25 3 32 -10 32 -10 0
-16 -8 -16 -24 0 -26 -24 -51 -40 -41 -6 3 -10 44 -10 96 l0 89 35 0 c19 0 35
5 35 10 0 6 -16 10 -35 10 l-35 0 0 55 c0 48 -2 55 -20 55 -14 0 -20 -7 -20
-23z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M3477 1103 c-13 -12 -7 -23 13 -23 19 0 20 -7 20 -94 0 -86 -2 -95
-20 -101 -43 -14 -16 -25 60 -25 76 0 103 11 60 25 -17 5 -20 15 -20 63 0 78
8 102 39 113 40 16 61 -17 61 -97 0 -53 -3 -65 -20 -74 -38 -21 -20 -30 60
-30 82 0 99 8 55 28 -24 11 -25 16 -25 96 0 75 -3 88 -22 106 -28 25 -74 26
-115 0 -33 -20 -33 -20 -33 0 0 17 -7 20 -53 20 -30 0 -57 -3 -60 -7z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M4114 1090 c-41 -26 -58 -68 -51 -126 6 -55 36 -90 88 -104 49 -13
118 2 142 31 19 23 23 49 7 49 -5 0 -10 -4 -10 -10 0 -15 -48 -42 -75 -42 -34
0 -62 26 -67 63 l-5 29 89 0 c72 0 88 3 88 15 0 29 -28 82 -51 99 -33 23 -116
21 -155 -4z m116 -19 c5 -11 10 -29 10 -40 0 -18 -6 -21 -45 -21 -40 0 -45 3
-45 22 0 48 59 77 80 39z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M4347 1103 c-13 -12 -7 -23 13 -23 19 0 20 -7 20 -94 0 -86 -2 -95
-20 -101 -44 -14 -15 -25 65 -25 83 0 111 11 59 24 -26 7 -27 8 -22 78 5 60 9
74 33 97 15 14 25 19 23 11 -8 -24 11 -50 36 -50 38 0 51 61 17 80 -34 17 -62
11 -92 -21 l-29 -31 0 31 c0 30 -1 31 -48 31 -27 0 -52 -3 -55 -7z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M4607 1103 c-13 -12 -7 -22 16 -25 21 -3 22 -6 25 -146 2 -137 2
-144 -18 -149 -11 -3 -20 -12 -20 -19 0 -11 19 -14 80 -14 64 0 80 3 80 15 0
8 -9 15 -20 15 -17 0 -20 7 -20 49 l0 50 28 -15 c38 -20 64 -18 103 9 64 43
76 144 24 204 -20 24 -31 28 -73 28 -35 0 -56 -6 -71 -19 -21 -19 -21 -19 -21
2 0 20 -5 22 -53 22 -30 0 -57 -3 -60 -7z m213 -54 c13 -24 13 -115 0 -140
-15 -26 -66 -26 -80 1 -13 23 -16 97 -5 129 7 24 41 42 63 34 7 -3 17 -14 22
-24z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M4957 1103 c-13 -12 -7 -23 13 -23 19 0 20 -7 20 -94 0 -86 -2 -95
-20 -101 -44 -14 -15 -25 65 -25 83 0 111 11 59 24 -26 7 -27 8 -22 78 5 60 9
74 33 97 15 14 25 19 23 11 -8 -24 11 -50 36 -50 38 0 51 61 17 80 -34 17 -62
11 -92 -21 l-29 -31 0 31 c0 30 -1 31 -48 31 -27 0 -52 -3 -55 -7z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M5217 1103 c-13 -12 -7 -22 16 -25 21 -3 22 -8 25 -95 3 -84 1 -92
-18 -98 -43 -14 -16 -25 60 -25 76 0 103 11 60 25 -18 6 -20 15 -20 116 l0
109 -58 0 c-32 0 -62 -3 -65 -7z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M5452 1104 c-21 -9 -43 -62 -36 -88 8 -35 31 -51 97 -70 56 -16 68
-31 45 -54 -24 -24 -69 -14 -104 23 -18 19 -35 35 -38 35 -3 0 -6 -21 -6 -46
0 -43 2 -46 22 -41 12 3 40 1 62 -5 70 -18 136 24 136 87 0 28 -45 66 -94 78
-55 14 -81 41 -56 57 28 18 61 10 92 -20 16 -16 34 -30 39 -30 11 0 12 51 1
65 -7 11 -138 18 -160 9z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M5714 1090 c-41 -26 -58 -68 -51 -126 6 -55 36 -90 88 -104 49 -13
118 2 142 31 19 23 23 49 7 49 -5 0 -10 -4 -10 -10 0 -15 -48 -42 -75 -42 -34
0 -62 26 -67 63 l-5 29 89 0 c72 0 88 3 88 15 0 29 -28 82 -51 99 -33 23 -116
21 -155 -4z m116 -19 c5 -11 10 -29 10 -40 0 -18 -6 -21 -45 -21 -40 0 -45 3
-45 22 0 48 59 77 80 39z"
            />
            <motion.path
              fill="none"
              stroke-width={strokeWidth}
              stroke="#fff"
              variants={pathContainer}
              initial="hidden"
              animate="visible"
              d="M6002 1104 c-21 -9 -43 -62 -36 -88 8 -35 31 -51 97 -70 56 -16 68
-31 45 -54 -24 -24 -69 -14 -104 23 -18 19 -35 35 -38 35 -3 0 -6 -21 -6 -46
0 -43 2 -46 22 -41 12 3 40 1 62 -5 70 -18 136 24 136 87 0 28 -45 66 -94 78
-55 14 -81 41 -56 57 28 18 61 10 92 -20 16 -16 34 -30 39 -30 11 0 12 51 1
65 -7 11 -138 18 -160 9z"
            />
          </g>
        </motion.svg>
      </div>
    );
  } else {
    return (
      <motion.div
      variants={homeContainer}
      initial="hidden"
      animate="visible">
        <Router>
          <Navbar2 />
          <Outlet />
          <Routes>
            <Route exact path="/" element={<ActualHomePage />} />
            <Route path="milestones" element={<OurMilestones />} />
            <Route path="portfolio" element={<Diseaseportfolio />} />
            <Route path="team" element={<Team />} />
            <Route path="login" element={<LoginPageVer2 />} />
          </Routes>
        </Router>

        <Footer />
      </motion.div>
    );
  }
}

export default HomePage;
