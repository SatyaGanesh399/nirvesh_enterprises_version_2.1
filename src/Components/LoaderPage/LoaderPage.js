import React from "react";
import { motion } from "framer-motion";
import "./LoaderPage.css";

const pathContainer = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 2,
      delay: 0.5,
      ease: "easeOut",
    },
  },
};
let strokeWidth = 5;

function LoaderPage() {
  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="150"
          viewBox="0 0 1361 800"
          className="svg-fill"
        >
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
          
            className="cls-1"
            d="M1058,607.9c4.58,1.05,9.16,2.1,14.98,3.889-1.04-2.707,1.67.208,3.75-2.5,0.83,0.416,3.54-1.041,2.61,2.5-0.77,4.579.74,9.159-1.36,13.738-0.83-.416-3.54,1.041-4.11-1.561-1.06-6.015-12.57-15.1-22.12-7.182a18.423,18.423,0,0,1-.55,4.862c11.43,5.806,27.52,4.923,30.53,16.371,0,2.914,0,5.829-.34,10.335-2.7,6.409-6.1,9.129-17.16,10.627-7.65,2.761-16.71-6.164-24.16-.538-1.94-4.305-.13-12.356,1.33-18.651,7.64,4.489,8.22,17.886,26.59,13.215-1.46-2.706,2.7.208,2.5-3.747-0.42-1.249,1.04-2.5-.99-5.144-8.78-3.305-25.88-4.845-28.79-13.059C1038.76,615.543,1044.19,609.584,1058,607.9Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M1009.56,608.686c-11.483.626-19.873,4.694-23.261,10.506-9.132,11.483-2.648,33.628,6.919,36.081,13.8,8.394,35.342,2.69,38.552-7.269v-5c-2.71,1.457.21-2.706-3.6-1.143-3.37,5.814-6.33,10.116-18,10.352-7.59.592-11.33-9.271-9.63-17.952h29.98c0.83-.416,3.54,1.041,2.77-2.188C1030.59,614.809,1025.69,610.672,1009.56,608.686Zm-2.77,5.6c1.25,0,2.5,0,5.07-.076,2.34,0.578,2.51,3.32,5,5.071-0.95,2.915,1.52,5.829-.08,9.992h-14.99c-0.83-.416-3.536,1.041-2.7-2.387C1000.53,620.37,1002.7,615.112,1006.79,614.282Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M951.833,607.9c4.58,1.05,9.16,2.1,14.988,3.889-1.041-2.707,1.665.208,3.747-2.5,0.833,0.416,3.539-1.041,2.422,2.5,0.81,2.914-1.317,5.828,1.325,9.991,1.457,1.249-2.706,2.5-2.5,3.747-0.833-.416-3.539,1.041-3.818-1.89-1.519-5.281-12.827-15.283-23.223-6.484,3.136,12.481,29.776,7.223,30.788,20.864,0,2.914,0,5.829-.334,10.386-2.706,6-6.106,9.747-17.167,10.688-7.645,2.054-16.709-6.05-24.017-1.09-2.229-4.58-.213-9.159-0.947-14.988,0.416-.833-1.041-3.539,2.5-2.5,0.832,0.416,3.538-1.041,3.431,1.492,3.321,6.834,6.767,11.249,18.956,12.1,4.128-2.1,4.04-.854,6.339-6.094-0.416-.833,1.041-3.539-0.985-3.879-8.78-3.289-25.884-5.175-28.351-13.157C932.173,615.877,938.436,609.519,951.833,607.9Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M908.119,609.286h9.992c0.832,0.416,3.539-1.041,2.5,2.5,0,12.906,0,25.812.075,39.721,2.105,2.6,7.146.214,7.419,3.993,1.457,2.706-2.706-.208-2.608,2.608-8.914-.662-19.931.779-28.617-1.359A4.588,4.588,0,0,1,898.127,653a28.18,28.18,0,0,0,5.693-.552c1.351-9.889.051-22.431,0.552-34.42,1.457-2.706-2.706.209-2.5-2.5h-5v-4.9C900.625,609.785,904.372,611.886,908.119,609.286Zm-0.1-24.883c9.051-1.14,13.563,2.258,12.512,12.317-2.336.578-2.508,3.32-6.245,5.091-2.105.254-7.146-.882-8.216-2.406C900.757,594.971,904.914,585.657,908.021,584.4Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M865.653,619.277v-9.8c-6.244-1.266-12.489,1.122-19.983,1.059-0.833.416-3.539-1.041-2.5,2.5-1.457,2.706,2.706-.209,2.5,2.5a44.255,44.255,0,0,0,5.279-.283c2.217,9.024.225,22.257,0.966,34.006-0.417.833,1.04,3.539-2.5,3.747h-5c-1.874,1.249-1.874,2.5,0,5H874.4c0.833-.416,3.539,1.041,2.46-2.46,1.388-4.3-3.914-1.915-7.456-3.785-2.706,1.041.209-1.665-2.516-3.986-0.192-9.593,1.073-25.224,7.512-30.986,1.249,1.874,2.5-3.746,3.6,1.325-2.764,2.1.5,7.146,1.041,8.085,12.789,6.869,16.909-9.349,10.006-14.7-10.112-5.581-19.281,2.077-20.936,7.217Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M789.465,609.286c2.915,0,5.829,0,10.049-.057,3.319-.405-0.935,6.763,3.5,6.091,2.91-5.212,17.056-8.883,25.545-2.3,9.356,1.637,13.57,24.786,5.488,35.393-0.349,8.957-21.308,15.831-32.087,7.087v14.988c0.417,0.832-1.041,3.539,2.5,2.5h5c-1.457,2.706,2.706-.208,1.946,4.443-9.889,1.352-22.431.052-33.17-.7,0.416-.833-1.041-3.539,2.5-3.747h5c0-17.9,0-35.8.038-54.993-0.289-2.626-3.117-2.712-7.531-3.709-1.874-1.249-1.874-2.5,1.249-3.659C782.8,609.787,786.135,611.913,789.465,609.286Zm18.895,7.773c15.635-4,15.37,17.983,11.994,31.5-14.037,12.662-23.346-7.658-18.55-23.048C804.038,620.6,804.988,618.642,808.36,617.059Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M749.5,619.277v-9.8c-6.245-1.266-12.49,1.122-19.984,1.059-0.832-1.041-3.539,1.665-2.327,3.576,1.121,1.793,4.3,1.532,8.02,1.972,1.352,9.889.051,22.43,0.685,34.457-0.405,2.625-5.446,2.711-7.627,3.709A4.588,4.588,0,0,0,729.514,658H759.49c2.29,1.041.832-1.665,1.381-3.8-0.4-3.319-5.446.935-8.672-2.665-0.71-11.3-1.472-28.777,7.953-35.337,2.511,2.735.3,11.64,9.321,12.013,5.4-2.293,5.644-3.283,7.176-10.146-3.224-15.194-24.966-6.846-24.032,1.042Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M696.783,609.5c-21-.991-31.581,17.59-21.215,38.424,4.172,15.1,43.39,14.732,45.2-1.166a4.588,4.588,0,0,0-1.249-3.747c1.041-2.29-1.665-.833-3.344-0.549-0.7,11.618-29.6,16.661-27.88-5.7-1.457-2.706,2.706.208,2.5-2.5,9.575,0,19.151,0,30.479.562,2.535-5.98-2.624-17.29-5.756-20.482C711.731,611.94,705.316,608.281,696.783,609.5Zm-0.991,4.785c1.249,0,2.5,0,5.071-.076,2.336,0.578,2.509,3.32,5,5.071-0.948,2.915,1.526,5.829-.075,9.992H690.8c-0.833-.416-3.539,1.041-2.7-2.387C689.533,620.37,691.7,615.112,695.792,614.282Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M582.134,615.53c0-1.248,0-2.5.086-4.867-5.369-3.953-15.421,1.006-23.817-.128a4.906,4.906,0,0,0,1.193,3.8c-0.4,3.319,6.763-.934,7.55,3.69V648c-0.416,1.249,1.041,2.5-2.5,3.747-1.249,2.29-2.5.833-5,1.249-1.873,1.249-1.873,2.5,0,5,9.576,0,19.152,0,28.727-1.249,2.29,1.041.833-1.665,1.249-3.747a9.441,9.441,0,0,1-5-1.249c-0.833,1.041-3.539-1.665-2.477-4,0.2-9.464-2.082-25.605,8.846-29.94,14.457,0.423,8.291,20.689,8.676,32.649,0.4,3.435-6.764,1.394-6.3,5.034-1.457,2.706,2.706-.208,2.5,2.5h24.98c0.832-.416,3.538,1.041,3.879-2.384-0.4-5.112-5.446-.6-8.65-3.961-1.407-11.5,1.934-24.808-2.879-36.021-1.966-8.856-24.967-7.69-28.164.433Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M644.583,590.551h5a130.251,130.251,0,0,0,.947,19.037c2.352,2.228,8.947.212,12.792,2.2a5,5,0,0,1-1.249,3.879c-2.914,2.509-5.828.383-9.992,1.116-0.832.417-3.539-1.04-2.607,2.5,0.661,9.576-.78,19.152,1.358,29.976-1.041,2.29,1.666.833,3.747,1.249,0.833-.416,3.539,1.041,3.653-1.249,0.115-2.914,2.328-5.829,1.343-9.992a13.128,13.128,0,0,0,4.933-.823c7.31,18.329-19.327,28.077-29.913,13.313,0-11.241,0-22.482-1.249-34.972h-5c-2.29-1.249-.833-2.5-2.147-5.564C639.158,609.456,640.567,602.364,644.583,590.551Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-1"
            d="M483.464,585.024c21.233,0,42.466,0,64.111.7,2.6,6.209-1.152,15.728.837,24.277,1.04,2.29-1.666.833-3.786,1.882-4.615-15.353-9.307-20.846-28.688-21.866-1.249-1.457-2.5,2.706-4.294,1.952-1.7,6.209-.092,15.728-1.7,24.884,10.837,2.187,15.5-4.47,18.481-13.1,0.833,0.416,3.539-1.041,2.5,2.5v29.976c-1.249,0-2.5,0-4.684.083-1.663-9.4-4.252-11.663-14.681-14.452-1.508,8.067-.067,19.084.63,28.108-1.041,2.706,1.665-.209,3.747,2.356,4.58,0.952,9.159-.623,15.059-1.676,9.6-3.474,12.263-9.2,16.166-20.664a7.142,7.142,0,0,1,4.475,1.249c-1.029,7.91-.736,15.82-0.065,25.643-21.487,1.411-45.733.063-68.109-.664a4.369,4.369,0,0,1,1.325-3.728c2.105,0.255,7.146-.882,8.667-3.765,0-17.9,0-35.8-.173-55.016C491.6,587.589,480.138,593.5,483.464,585.024Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M1212.87,391.432c14.57,0,29.14,0,45.75-.864,1.39,16.952-.46,35.782,1.71,54.57,16.24,0,32.48,0,50.83.864,0.95-16.952.02-35.781,1.63-54.57,14.57,0,29.14,0,45.93-.963,0.71,24.687.01,50.78,0.28,77.151v77.437h-44.96c-0.83,1.041-3.54-1.665-2.5-3.747,0-19.567,0-39.135-1.25-58.7h-50.55c-1.58,19.567-.08,39.135-0.66,59.951-0.41.833,1.04,3.539-2.49,2.5h-45C1211.77,493.849,1211.4,442.64,1212.87,391.432Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M1114.48,387.582c14.57,0.851,34.67,2.373,46.87,10.686,9.62,5.524,16.2,15.132,20.3,35.993-14.58.938-29.15,2.412-44.93,2.245-3.24-11.133-5.77-15.08-15.12-18.713-8.58-.494-21.92-1.187-24.61,7.564-4,15.452,17.99,14.424,31.35,19.131,31.17,7.6,46.8,15.362,55.24,34.523,8.77,17.695-2.21,42.465-11,49.841-8.72,16.12-48.15,22.136-75.16,18.415-36.03-8.569-42.02-17.21-50.66-50.92-1.46-2.707,2.7.208,2.49-2.169,12.91-1.343,25.82-1.127,40.28-3.185,4.7,1.105,3.26,13.177,7.51,14.8,3.96,18.23,56.1,15.779,40.01-12.136-7.19-10.387-33.32-10.986-51.13-19.03-20.42-8.113-37.96-19.027-30.6-55.461C1062.4,398.5,1081.81,389.432,1114.48,387.582Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M900.146,391.6c41.234,0,82.468,0,125.644-.7,1.36,9.893.06,22.44-.69,33.184-26.242,0-52.482,0-78.722,1.25v19.992c0.417,0.833-1.041,3.54,2.5,3.749h69.973c0.83-1.042,3.54,1.666,2.5,3.748v24.99c-2.71.833,0.21,3.541-3.75,2.5-22.907,0-45.815,0-70.6-.63-1.509,8.071-.067,19.092-1.546,30.3,26.939,0.967,56.129-.322,83.4,1.572,0,11.246,0,22.491-1.25,33.737-42.9,0-85.8,0-128.7-1.25,0-25.406,0-50.813-.063-77.532C899.171,441.435,898.473,415.33,900.146,391.6Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M799.173,498.967C788.027,463.192,776.363,426,763.95,391.6H718.968c-0.833.417-3.541-1.041-2.372,2.5,18.711,49.564,37.295,99.128,55.558,150.484,16.226,1.684,35.72.1,53.714,0.707,18.759-51.23,38.067-102.46,55.536-153.69-14.578,0-29.155,0-45.673-.732-3.843,4.682-5.838,17.075-9.054,25.722-8.362,27.49-16.932,54.979-25.32,82.468A16.438,16.438,0,0,1,799.173,498.967Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M672.368,476.84c12.16-3.219,16.424-7.1,22.461-12.452,7.977-5.677,14.622-23.8,9.563-43.683-3.455-21.664-24.784-30.224-55.4-29.109H570.276c-0.833.417-3.54-1.041-2.5,2.5,0,49.564,0,99.128-.833,150.774,15.217,1.027,32.461.027,48.314-.833,0-19.575,0-39.151-.132-60.109,0.4-2.51,5.448-.382,10.209-1.425,19.5,13.967,24.888,40.927,38.111,62.077,16.227,1.684,35.72.1,55.66,1.062-5.2-11.257-12.468-24.141-18.637-36.677-6.968-12.672-11.829-24.589-27.193-30.136C673.276,478.828,672.736,476.563,672.368,476.84ZM616.8,422.646c15.423,1.825,42.031-5.782,41.856,15.407,0.491,17.878-26.6,15.765-42.938,15.346C614.951,444.577,614.951,431.08,616.8,422.646Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M486.559,391.6c14.578,0,29.155,0,45.945-.963,0.71,24.7.012,50.8,0.287,77.183v77.47H487.808c-1.249-.417-2.5,1.041-3.748-2.5v-76.22c0-12.5,0-24.99-.245-38.833C485.246,415.805,482.122,402.1,486.559,391.6Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M500.3,797.7c-21.242-.332-42.484,1.418-65.215-3.546C416.9,791.6,394.2,784.384,377.847,776.45c-24.788-12.7-46.114-28.857-60.695-52.734-14.05-16.4-24.832-60.327-23.69-90.965-6.457-57.893-3.1-115.787-14.859-174.444-7.779-25.52-14.465-33.863-25.66-47.212-8.792-7.921-20.3-16.772-42.479-21.042-41.058-.865-57.719,14.782-68.017,41.528-7.637,24.573-4.644,49.147-3.227,74.97a558.1,558.1,0,0,1,5.84,55.782c0.159,16.346-6.542,27.324-23.979,21.711-26.035-6.672-34.879-15.278-49.743-22.409C56.236,552.1,29.91,544.97,8.774,546.249c-9.409-24.7-6.659-50.8-7.238-77.183,0.6-23.741,5.3-47.482,15.316-73.618,14.91-33.523,35.173-53.974,68.816-70.595,78.775-30.647,159.659-40.771,238.53-7.054,19.7,9.867,37.335,21.808,50.987,39.338,10.51,14.267,19.679,28.8,29.084,60.7,12.863,45.4,11.543,90.8,13.559,137.446,0.038,34.153-1,68.306,8.185,104.225,10.077,24.623,15.408,34.168,43.052,41.646,18.742,2.263,37.485,2.366,57.018,5.514,17.208,4.94,25.36,9.782,31.9,17.655,12.584,11.2,12.454,46.045-.5,56.251-5.55,10.44-34.957,19.809-54.426,16.775C503.061,797.348,500.3,797.687,500.3,797.7Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-3"
            d="M676.5,44.5c0.667,0.333,2.833-.833,2.032,2.013,0.572,8.6-4.854,19.794-8.077,23.941-1.778.556-2.548,2.119-5.7,1.282C665.49,59.337,671.493,48.317,676.5,44.5Zm-1.764,34.158c8.808-.905,22.97.106,28.764,5.842,0.833,0.667-1.333,2.833-3.173,1.838C691.042,87.021,675.853,87.439,674.736,78.658Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-4"
            d="M640.6,64.691c-4.812-5.354-5.33-5.064-6.9-9.128A35.081,35.081,0,0,1,633.5,51.5s-3-.917-3.016-0.672c0.953,15.412,13.992,17.314,20.583,27.044C661.81,82.8,668.4,90.843,676.28,99.012l0.22,1.488,2.43-1.822C670.847,75.16,646.8,78.4,641.2,51.8c-2.532-1.133-1.366,1.033-1.7,1.7,0.6,3.333.673,5.667,1.8,8"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-2"
            d="M365.02,293.974c-21.929-3.136-52.2-15.213-66.885-23.531-17.27-8.021-28.394-20.638-41.078-31.694-16.235-7.021-32.062-4.806-47.889-1.282-20.195,4.477-47.412,16.54-57.521,22.485-19.125,10.432-37.1,20.362-50.173,35.2-0.6,1.069-2.055,3.776.236,2.735,74.138-32.75,147.026-32.208,219.914-5.722,23.393,9.513,35.215,16.273,50.4,26.878,19.611,15.638,33.21,27.872,42.711,57.909,36.272-7.478,39.419-29.415,57.45-46.494,12.414-15.232,58.074-22.972,84.317-34.313-1.424-3.464,2.741-.549,1.283-3.256,0-2.082-1.25-4.79-2.5-3.748-22.714.817-39.672-4.463-39.449-23.231,20.806-.714,24.1,7.267,39.166,11.849,16.943,6.74,32.354,3.8,47.764-2.06,26.534-12.71,37.916-23.215,49.734-52.018,0.247-.764.614-2.177,0.614-2.177,7.668-22.667,6.557-45.333,6.289-68-3.06-20.844-2.791-50.109-14.737-64.014-8.11-7.821-16.73-10.817-21.19-24.583-3.14-1.57-.806,1.764-2.973.6-3.674,6.606-5.094,15.945-5.046,22.884,1.257,9.19,4.1,17.337-4.2,18.113-1.651,2.027-.859,3.451-2.664,5.988-1.75,19.414,12.892,13.284,14.651,28,4.706,13.683.794,26.349-2.92,39.016-10.737,19.768-18.2,34.734-50.722,35.561-20.306-4.63-26.172-12.252-34.89-20.791-14.262-11.888-21.792-19.889-44.872-28.521a5.888,5.888,0,0,1-.78-0.425c-20.825-6.771-41.65-7.505-62.66,2.426-11.7,3.715-17.372,13.449-29.8,18.955-23.324,1.348-46.648-8.193-71.724-8.1-20.443-2.353-53.175,1.659-63.41,13.12-13.009,8.733-5.735,33.947,4.481,38.075,27.491,26.158,62.267,44.006,98.27,62.016Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-5"
            d="M472.557,205.655c12.667-2.565,17.688,7.757,11.795,18.119-6.946,7.581-19.668,1.854-18.856-9.622C468.24,209.241,466.83,207.283,472.557,205.655Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-6"
            d="M655.147,67.99c-12.367-13.673-9.991-40.6-1.983-60.639,4.941,3.242,13.939,12.42,7.39,26.149-7.4,11.333-3.836,22.667-3.937,34C656.617,67.5,654.5,67.5,655.147,67.99Z"
          />
          <motion.path
          variants={pathContainer}
          initial="hidden"
          animate="visible"
            className="cls-6"
            d="M689.5,1.5c0.667,0.333,2.833-.833,2.6,2,4.846,12.333,7.565,24.667,6.128,37.944C694.7,55.551,688.588,58.039,682.5,66.5c0-.167,0,4.167,1.2,4.179,9.729-1.275,23.791,1.527,31.71,6.9,5.612,5.561,16.156,5.158,14.778,19.323-13.573,6.173-28.649-.2-43.692-4.4,1.167-2.5-2.167,1,.083-3.124,8.516,1.281,18.557,2.322,25.946-2.587-3.009-10.906-25-13.426-40.214-12.194,2.606-7.5,13.878-18.821,11.185-36.094-2.167-.667.167-2.833-3.574-2.654-10.14,4.163-13.023,14.187-19.761,31.2-3.062-12.925,2.255-33.192,9.09-39.787C675.854,18.52,683.383,10.716,689.5,1.5Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default LoaderPage;
