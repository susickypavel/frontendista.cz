import React, { useEffect, useRef } from "react";
import { useSpring, motion } from "framer-motion";

import throttle from "lodash.throttle";

import { css } from "@emotion/core";

const LogoV2: React.FC = () => {
  const rotation = useSpring(0, {
    damping: 20,
    stiffness: 150,
  });
  const svgRef = useRef<any>();
  const svgCoords = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });
  const lastcapture = useRef([0, -8]);

  const calculateRotation = (_x: number, _y: number) => {
    if (!svgCoords.current) return;

    const { x, y } = svgCoords.current;

    const vec1 = [_x - x, _y - y];
    const vec2 = lastcapture.current;

    const delta =
      (Math.atan2(
        vec1[0] * vec2[1] - vec1[1] * vec2[0],
        vec1[0] * vec2[0] + vec1[1] * vec2[1]
      ) *
        180) /
      Math.PI;

    lastcapture.current = vec1;

    rotation.set(rotation.get() - delta);
  };

  const handleMouseMove = throttle((e: MouseEvent) => {
    calculateRotation(e.pageX, e.pageY);
  }, 125);

  const handleTouchMove = throttle((e: TouchEvent) => {
    calculateRotation(e.touches[0].pageX, e.touches[0].pageY);
  }, 125);

  const handleResize = throttle(() => {
    const { top, left, width, height } = svgRef.current!.getBoundingClientRect();

    const sx = left + width / 2;
    const sy = top + height / 2;

    svgCoords.current = {
      x: sx,
      y: sy + window.scrollY,
    };
  }, 1000);

  useEffect(() => {
    handleResize();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div css={svgHolder}>
      <svg
        css={svg}
        ref={svgRef}
        width="550"
        height="550"
        viewBox="0 0 550 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          fill="#aaaaaa"
          rotate={rotation}
          style={{ transformOrigin: "center center", rotateZ: `${rotation.get()}deg` }}
        >
          <path d="M267.12 532.949L266.523 545.354L260.482 545.064C258.468 544.967 257.51 543.912 257.607 541.898L257.723 539.489C257.819 537.475 258.875 536.517 260.888 536.614L264.34 536.78L264.531 532.824L267.12 532.949ZM264.228 539.117L260.884 538.956C260.524 538.939 260.336 539.11 260.319 539.469L260.189 542.166C260.172 542.526 260.343 542.714 260.702 542.732L264.046 542.893L264.228 539.117Z" />
          <path d="M251.296 532.489L246.276 543.927L242.341 543.478L240.03 531.202L240.407 530.756L242.553 531.001L243.018 533.59L247.847 534.142L248.884 531.724L251.03 531.969L251.296 532.489ZM246.884 536.387L243.45 535.995L244.431 541.361L244.717 541.394L246.884 536.387Z" />
          <path d="M232.404 541.642L231.998 542.062L229.767 541.657L228.767 531.232L228.484 531.18L223.887 540.591L221.655 540.186L221.423 539.65L227.024 528.537L231.062 529.27L232.404 541.642Z" />
          <path d="M216.774 526.405L213.784 538.46L205.538 536.413L206.101 534.142L211.831 535.564L212.438 533.118L207.232 531.826L207.795 529.555L213.002 530.847L213.695 528.052L207.965 526.63L208.528 524.359L216.774 526.405Z" />
          <path d="M201.353 522.319L197.646 534.173L195.172 533.399L198.18 523.779L193.061 522.177L193.759 519.944L201.353 522.319Z" />
          <path d="M177.977 515.142L177.428 516.434L172.292 514.252C171.961 514.111 171.725 514.207 171.584 514.538L171.07 515.747C170.939 516.057 170.999 516.298 171.252 516.47L174.208 518.489C175.421 519.317 175.706 520.487 175.064 522.001L174.67 522.928C173.881 524.784 172.56 525.318 170.704 524.529L166.91 522.918L166.166 521.585L166.715 520.292L171.519 522.333C171.851 522.474 172.087 522.379 172.228 522.048L172.685 520.971C172.816 520.661 172.756 520.42 172.503 520.248L169.547 518.229C168.334 517.401 168.049 516.231 168.692 514.717L169.142 513.657C169.93 511.802 171.252 511.268 173.107 512.056L177.232 513.809L177.977 515.142Z" />
          <path d="M161.991 510.374L157.758 518.762L155.444 517.595L159.742 509.077C159.904 508.756 159.824 508.514 159.503 508.352L156.353 506.762C156.032 506.6 155.79 506.68 155.628 507.001L151.33 515.518L149.016 514.35L153.249 505.962C154.157 504.162 155.511 503.716 157.311 504.624L160.653 506.311C162.453 507.22 162.899 508.574 161.991 510.374Z" />
          <path d="M147.356 500.359L146.643 501.569L141.837 498.733C141.527 498.55 141.281 498.613 141.098 498.923L140.43 500.055C140.259 500.344 140.288 500.591 140.516 500.795L143.182 503.184C144.276 504.164 144.405 505.362 143.57 506.778L143.058 507.646C142.033 509.382 140.653 509.738 138.917 508.714L135.367 506.619L134.804 505.2L135.517 503.99L140.013 506.643C140.323 506.826 140.569 506.763 140.752 506.453L141.347 505.445C141.517 505.155 141.489 504.909 141.261 504.705L138.595 502.316C137.501 501.336 137.372 500.138 138.207 498.722L138.792 497.73C139.817 495.994 141.197 495.638 142.933 496.662L146.793 498.94L147.356 500.359Z" />
          <path d="M133.763 490.935L126.903 501.289L124.742 499.857L131.602 489.504L133.763 490.935Z" />
          <path d="M123.044 487.306L119.243 492.42C118.04 494.038 116.63 494.246 115.012 493.043L111.155 490.175L110.746 488.704L111.584 487.577L116.321 491.1C116.61 491.315 116.862 491.278 117.077 490.989L121.05 485.644C121.265 485.355 121.228 485.103 120.939 484.889L116.201 481.366L117.039 480.239L118.565 480.207L122.422 483.075C124.039 484.278 124.247 485.688 123.044 487.306Z" />
          <path d="M111.257 474.46L103.19 483.904L101.22 482.22L104.411 478.484L97.8803 479.367L96.0328 477.789L96.1802 477.228L102.295 476.416L103.226 468.286L103.757 468.053L105.564 469.596L104.784 476.08L106.656 475.856L109.286 472.776L111.257 474.46Z" />
          <path d="M90.2743 471.923L89.7158 472.057L88.1335 470.508L89.8924 464.85L84.2743 466.731L82.6921 465.182L82.8133 464.621L90.8922 461.975L93.9639 458.836L95.8163 460.649L92.7446 463.788L90.2743 471.923Z" />
          <path d="M79.2471 443.079L69.7761 451.114L68.0996 449.137L77.5706 441.102L79.2471 443.079Z" />
          <path d="M71.8522 435.628L70.7357 436.479L67.3533 432.041C67.1351 431.755 66.8828 431.721 66.5965 431.939L65.5515 432.735C65.2843 432.939 65.2178 433.178 65.3519 433.453L66.9213 436.671C67.5651 437.991 67.2333 439.149 65.9259 440.146L65.1243 440.757C63.5211 441.979 62.1084 441.788 60.8864 440.185L58.3878 436.907L58.4012 435.38L59.5177 434.529L62.6819 438.68C62.9001 438.967 63.1523 439.001 63.4386 438.783L64.3691 438.073C64.6363 437.869 64.7028 437.63 64.5687 437.355L62.9993 434.138C62.3555 432.818 62.6873 431.66 63.9947 430.663L64.9108 429.965C66.5141 428.742 67.9267 428.933 69.1487 430.536L71.8655 434.101L71.8522 435.628Z" />
          <path d="M57.4616 414.73L45.356 417.809L43.2902 414.431L51.5457 405.055L52.1294 405.078L53.2562 406.921L51.5008 408.881L54.0362 413.027L56.5804 412.357L57.7072 414.2L57.4616 414.73ZM51.6738 413.649L49.8709 410.701L46.2442 414.776L46.3944 415.022L51.6738 413.649Z" />
          <path d="M33.7623 396.235L33.192 396.167L32.24 394.169L35.8403 389.463L29.918 389.293L28.966 387.294L29.2732 386.809L37.7693 387.108L41.7343 385.219L42.8488 387.559L38.8838 389.448L33.7623 396.235Z" />
          <path d="M34.2326 375.935L28.308 378.281C26.4336 379.023 25.1254 378.456 24.3835 376.582L22.8732 372.766C22.1313 370.891 22.6975 369.583 24.572 368.841L30.4966 366.496C32.3711 365.753 33.6792 366.32 34.4211 368.194L35.9314 372.01C36.6733 373.885 36.1071 375.193 34.2326 375.935ZM33.4126 373.472C33.7473 373.339 33.8485 373.106 33.716 372.771L32.2852 369.156C32.1527 368.821 31.9191 368.72 31.5844 368.853L25.392 371.304C25.0573 371.437 24.9561 371.67 25.0886 372.005L26.5194 375.62C26.6519 375.955 26.8855 376.056 27.2202 375.924L33.4126 373.472Z" />
          <path d="M27.7821 358.886L18.8265 361.729L18.0424 359.259L27.1352 356.372C27.4784 356.263 27.5955 356.037 27.4866 355.694L26.4194 352.331C26.3105 351.988 26.0845 351.871 25.7413 351.98L16.6485 354.867L15.8644 352.396L24.82 349.553C26.7415 348.943 28.0072 349.599 28.617 351.52L29.7496 355.089C30.3594 357.011 29.7036 358.276 27.7821 358.886Z" />
          <path d="M25.4558 340.685L13.3798 343.588L12.7237 340.858L19.4995 334.157L11.5714 336.062L10.9657 333.542L23.0418 330.639L23.6979 333.37L16.922 340.071L24.8502 338.165L25.4558 340.685Z" />
          <path d="M18.3666 322.869L12.0805 323.912C10.0916 324.242 8.93233 323.412 8.6025 321.423L7.75143 316.291L8.47751 314.949L9.86258 314.719L10.8933 320.934C10.9522 321.289 11.1592 321.437 11.5144 321.378L18.0846 320.288C18.4397 320.229 18.5878 320.022 18.5289 319.667L17.8634 315.654L15.0222 316.125L15.4109 318.469L13.1025 318.852L12.2897 313.951L19.7478 312.714L20.8551 319.391C21.1849 321.38 20.3554 322.539 18.3666 322.869Z" />
          <path d="M17.7265 294.517L5.32892 295.262L4.81933 286.782L7.15512 286.641L7.50924 292.535L10.5637 292.351L10.242 286.997L12.5778 286.856L12.8995 292.211L17.5711 291.93L17.7265 294.517Z" />
          <path d="M17.0054 278.582L4.58549 278.536L4.6081 272.488C4.61564 270.472 5.6274 269.468 7.64339 269.475L9.69538 269.483C11.1954 269.488 12.1353 270.05 12.5151 271.167L16.5007 269.148L17.0395 269.456L17.0312 271.688L12.703 273.868L12.6951 275.974L17.0151 275.99L17.0054 278.582ZM10.3551 275.965L10.3677 272.617C10.369 272.257 10.1897 272.077 9.82968 272.075L7.4897 272.067C7.1297 272.065 6.94903 272.245 6.94768 272.605L6.93516 275.953L10.3551 275.965Z" />
          <path d="M14.2906 261.601L7.93485 261.146C5.92399 261.002 4.99042 259.925 5.13416 257.914L5.42677 253.821C5.5705 251.81 6.6478 250.876 8.65867 251.02L15.0144 251.474C17.0253 251.618 17.9589 252.695 17.8151 254.706L17.5225 258.8C17.3788 260.811 16.3015 261.744 14.2906 261.601ZM14.6191 259.025C14.9781 259.051 15.1705 258.884 15.1962 258.525L15.4734 254.647C15.4991 254.288 15.3324 254.096 14.9733 254.07L8.33023 253.595C7.97115 253.569 7.77877 253.736 7.75311 254.095L7.4759 257.973C7.45023 258.332 7.61694 258.525 7.97602 258.55L14.6191 259.025Z" />
          <path d="M18.8611 243.757L6.56766 241.989L6.9674 239.209L15.7404 235.489L7.66951 234.328L8.0385 231.762L20.3319 233.53L19.9322 236.31L11.1592 240.031L19.2301 241.192L18.8611 243.757Z" />
          <path d="M11.791 223.945L9.50364 223.452L11.6437 213.528L13.9311 214.021L13.1343 217.716L22.9876 219.842L22.4412 222.376L12.5879 220.25L11.791 223.945Z" />
          <path d="M25.6994 208.539L13.7502 205.151L16.0667 196.977L18.318 197.615L16.7082 203.296L19.1327 203.983L20.5952 198.822L22.8465 199.46L21.384 204.621L24.1548 205.407L25.7646 199.726L28.0159 200.364L25.6994 208.539Z" />
          <path d="M30.2562 193.255L18.5633 189.068L19.5097 186.424L28.8486 184.529L21.172 181.78L22.0456 179.34L33.7385 183.527L32.7921 186.171L23.4531 188.065L31.1298 190.814L30.2562 193.255Z" />
          <path d="M36.9214 175.521L25.5575 170.509L27.4601 166.194C28.8252 163.098 31.056 162.232 34.1522 163.598L36.2274 164.513C39.3236 165.879 40.1892 168.11 38.824 171.206L36.9214 175.521ZM35.8261 172.205L36.7411 170.13C37.3704 168.703 36.9714 167.674 35.544 167.045L32.7442 165.81C31.3169 165.18 30.2885 165.579 29.6592 167.007L28.7442 169.082L35.8261 172.205Z" />
          <path d="M49.0681 150.392L38.3 144.203L41.3131 138.959C42.3174 137.211 43.6936 136.839 45.4414 137.844L47.2205 138.867C48.521 139.614 49.0597 140.567 48.8367 141.726L53.299 141.945L53.6147 142.479L52.5027 144.415L47.6632 144.166L46.614 145.992L50.3594 148.145L49.0681 150.392ZM44.5852 144.826L46.2532 141.923C46.4325 141.611 46.3662 141.365 46.054 141.186L44.0253 140.02C43.7131 139.84 43.4674 139.907 43.288 140.219L41.6201 143.122L44.5852 144.826Z" />
          <path d="M57.7424 135.83L47.3906 128.968L52.084 121.886L54.0344 123.179L50.7728 128.1L52.8732 129.492L55.8365 125.021L57.7868 126.314L54.8236 130.785L57.224 132.377L60.4856 127.455L62.4359 128.748L57.7424 135.83Z" />
          <path d="M65.667 123.29L58.3909 113.136L60.7844 109.981L72.5211 114.256L72.7124 114.808L71.4069 116.529L68.9426 115.608L66.005 119.479L67.5555 121.605L66.2499 123.326L65.667 123.29ZM64.5654 117.506L66.6542 114.752L61.5387 112.858L61.3646 113.088L64.5654 117.506Z" />
          <path d="M74.7982 107.476L69.9863 103.299C68.4639 101.977 68.3633 100.555 69.6846 99.0324L72.8346 95.4025L74.3319 95.1053L75.3921 96.0256L71.5225 100.485C71.2866 100.757 71.3045 101.011 71.5764 101.247L76.6058 105.612C76.8777 105.848 77.1316 105.83 77.3676 105.558L81.2372 101.099L82.2974 102.02L82.2138 103.544L79.0639 107.174C77.7426 108.697 76.3207 108.797 74.7982 107.476Z" />
          <path d="M80.6074 90.3413L78.9448 88.6947L86.0876 81.4806L87.7502 83.1272L85.0906 85.8133L92.2526 92.9065L90.4289 94.7484L83.2669 87.6552L80.6074 90.3413Z" />
          <path d="M108.081 78.2302L100.233 68.6037L103.888 65.6233C106.511 63.4848 108.891 63.7269 111.029 66.3498L112.462 68.1077C114.6 70.7306 114.358 73.1113 111.736 75.2499L108.081 78.2302ZM108.611 74.7785L110.369 73.3452C111.578 72.3593 111.689 71.2618 110.704 70.0527L108.77 67.6809C107.784 66.4718 106.687 66.3602 105.478 67.346L103.72 68.7793L108.611 74.7785Z" />
          <path d="M122.173 67.1155L114.974 56.9945L121.897 52.0692L123.253 53.976L118.443 57.3987L119.903 59.4523L124.274 56.3426L125.63 58.2495L121.26 61.3591L122.929 63.706L127.74 60.2833L129.096 62.1902L122.173 67.1155Z" />
          <path d="M128.04 48.5229L128.06 47.9391L129.988 46.7447L137.713 53.8167L137.958 53.6651L135.068 43.5977L136.996 42.4033L137.528 42.6458L140.812 54.6497L137.323 56.8109L128.04 48.5229Z" />
          <path d="M149.85 49.3648L143.997 38.4106L151.49 34.4057L152.593 36.4696L147.386 39.2526L148.574 41.4752L153.304 38.9467L154.407 41.0106L149.676 43.5391L151.034 46.0792L156.241 43.2962L157.343 45.36L149.85 49.3648Z" />
          <path d="M164.037 42.0681L158.85 30.7831L161.205 29.7004L165.414 38.8592L170.288 36.6185L171.265 38.7447L164.037 42.0681Z" />
          <path d="M176.45 33.2511L174.163 27.3036C173.44 25.4219 174.019 24.1192 175.9 23.3955L179.731 21.9222C181.612 21.1985 182.915 21.7775 183.639 23.6592L185.925 29.6067C186.649 31.4884 186.07 32.7911 184.188 33.5148L180.358 34.9881C178.476 35.7118 177.174 35.1328 176.45 33.2511ZM178.921 32.455C179.05 32.791 179.283 32.8944 179.619 32.7652L183.248 31.3695C183.584 31.2402 183.687 31.0076 183.558 30.6716L181.168 24.4553C181.038 24.1193 180.806 24.0159 180.47 24.1451L176.841 25.5408C176.505 25.6701 176.402 25.9027 176.531 26.2387L178.921 32.455Z" />
          <path d="M194.554 29.8324L190.89 17.9651L196.669 16.1805C198.595 15.5856 199.856 16.2513 200.45 18.1776L201.162 20.4822C201.757 22.4085 201.091 23.6691 199.165 24.264L195.863 25.2838L197.031 29.0675L194.554 29.8324ZM195.172 23.0479L198.371 22.06C198.715 21.9537 198.834 21.7286 198.728 21.3847L197.931 18.8048C197.825 18.4608 197.6 18.342 197.256 18.4482L194.057 19.4361L195.172 23.0479Z" />
          <path d="M210.825 25.0874L207.925 13.0108L216.186 11.0262L216.732 13.3015L210.991 14.6806L211.58 17.131L216.795 15.878L217.342 18.1533L212.126 19.4063L212.799 22.2066L218.54 20.8275L219.086 23.1028L210.825 25.0874Z" />
          <path d="M226.387 21.5908L224.261 9.35401L230.22 8.31905C232.206 7.97407 233.372 8.7947 233.717 10.781L234.068 12.8027C234.325 14.2806 233.936 15.3042 232.903 15.8735L235.587 19.4447L235.378 20.0291L233.179 20.4111L230.276 16.5306L228.201 16.891L228.941 21.1473L226.387 21.5908ZM227.801 14.5855L231.099 14.0126C231.454 13.951 231.601 13.7428 231.539 13.3881L231.139 11.0826C231.077 10.728 230.869 10.5814 230.514 10.643L227.216 11.2159L227.801 14.5855Z" />
          <path d="M253.043 17.9067L252.204 5.51504L258.059 5.1185C260.07 4.98226 261.144 5.91984 261.28 7.93123L261.353 9.00876C261.381 9.41583 261.284 9.77115 261.064 10.0747L260.487 10.8716L261.284 11.449C261.701 11.7455 261.931 12.211 261.974 12.8456L262.07 14.2643C262.206 16.2757 261.268 17.3495 259.257 17.4858L253.043 17.9067ZM255.471 15.3968L258.991 15.1584C259.35 15.1341 259.518 14.9423 259.493 14.5832L259.372 12.7873C259.348 12.4281 259.156 12.2607 258.797 12.285L255.277 12.5234L255.471 15.3968ZM255.119 10.1888L258.279 9.97469C258.638 9.95036 258.806 9.75861 258.782 9.39943L258.684 7.96272C258.66 7.60355 258.468 7.43612 258.109 7.46045L254.948 7.67453L255.119 10.1888Z" />
          <path d="M268.813 16.5365L272.48 4.59543L276.44 4.58778L280.153 16.5146L279.83 17.0013L277.67 17.0054L276.909 14.4869L272.049 14.4963L271.298 17.0177L269.138 17.0219L268.813 16.5365ZM272.746 12.1549L276.202 12.1482L274.608 6.93132L274.32 6.93188L272.746 12.1549Z" />
          <path d="M286.434 16.2877L286.521 14.8864L292.09 15.2312C292.449 15.2534 292.64 15.0849 292.662 14.7256L292.743 13.4141C292.764 13.0787 292.627 12.8718 292.331 12.7934L288.871 11.8758C287.452 11.4994 286.793 10.4908 286.894 8.84991L286.957 7.84384C287.081 5.83169 288.149 4.8879 290.162 5.01248L294.276 5.26719L295.422 6.27592L295.335 7.67724L290.125 7.35468C289.765 7.33244 289.575 7.50097 289.552 7.86028L289.48 9.02805C289.459 9.3634 289.597 9.57029 289.893 9.64872L293.353 10.5663C294.772 10.9427 295.431 11.9513 295.329 13.5922L295.258 14.742C295.134 16.7541 294.065 17.6979 292.053 17.5734L287.58 17.2964L286.434 16.2877Z" />
          <path d="M302.817 18.4845L304.349 6.15934L312.78 7.20731L312.491 9.52944L306.633 8.80119L306.322 11.3019L311.645 11.9636L311.356 14.2857L306.033 13.6241L305.678 16.4821L311.537 17.2103L311.248 19.5325L302.817 18.4845Z" />
          <path d="M318.611 20.6762L320.949 8.47823L325.581 9.36593C328.904 10.0029 330.247 11.9831 329.61 15.3067L329.183 17.5341C328.546 20.8576 326.566 22.2009 323.243 21.5639L318.611 20.6762ZM321.597 18.8659L323.825 19.2929C325.357 19.5865 326.27 18.9673 326.563 17.4351L327.139 14.4298C327.433 12.8977 326.814 11.9848 325.282 11.6912L323.054 11.2643L321.597 18.8659Z" />
          <path d="M345.821 26.922L349.301 14.9995L351.79 15.726L348.31 27.6485L345.821 26.922Z" />
          <path d="M356.303 30.1007L360.468 18.3998L363.113 19.3417L365.025 28.6778L367.76 20.996L370.201 21.8654L366.036 33.5662L363.391 32.6244L361.479 23.2882L358.745 30.9701L356.303 30.1007Z" />
          <path d="M383.176 40.7513L388.58 29.5686L394.025 32.2007C395.84 33.0781 396.309 34.4244 395.432 36.2395L394.383 38.4112C393.506 40.2264 392.159 40.6953 390.344 39.8179L387.233 38.3138L385.51 41.8793L383.176 40.7513ZM388.251 36.2069L391.265 37.664C391.589 37.8207 391.83 37.737 391.986 37.4128L393.161 34.9818C393.318 34.6577 393.234 34.4173 392.91 34.2606L389.896 32.8035L388.251 36.2069Z" />
          <path d="M398.318 48.3599L404.445 37.5561L409.705 40.54C411.459 41.5347 411.838 42.9088 410.844 44.6625L409.832 46.4475C409.092 47.7523 408.142 48.2964 406.982 48.0798L406.789 52.5437L406.256 52.8625L404.315 51.7613L404.535 46.9199L402.704 45.8809L400.573 49.6387L398.318 48.3599ZM403.858 43.8454L406.77 45.4972C407.083 45.6748 407.328 45.6071 407.506 45.2939L408.66 43.2584C408.838 42.9453 408.77 42.6999 408.457 42.5222L405.545 40.8704L403.858 43.8454Z" />
          <path d="M412.235 55.9074L421.873 47.9625L425.182 50.1382L421.71 62.1379L421.172 62.366L419.367 61.1792L420.12 58.6581L416.059 55.9879L414.043 57.6783L412.238 56.4915L412.235 55.9074ZM417.931 54.4182L420.819 56.317L422.362 51.0848L422.122 50.9266L417.931 54.4182Z" />
          <path d="M428.636 63.9478L432.488 58.8719C433.707 57.266 435.119 57.0725 436.725 58.2914L440.868 61.4368L441.263 62.9115L440.414 64.03L435.396 60.2208C435.11 60.0031 434.857 60.0376 434.64 60.3244L430.614 65.6297C430.396 65.9165 430.431 66.1687 430.717 66.3863L433.958 68.846L435.699 66.5518L433.806 65.1152L435.221 63.2512L439.178 66.255L434.607 72.2772L429.217 68.1851C427.611 66.9661 427.417 65.5537 428.636 63.9478Z" />
          <path d="M442.987 75.1863L449.174 68.1145L451.125 69.8214L444.843 77.0016C444.606 77.2726 444.623 77.5266 444.894 77.7637L447.549 80.087C447.82 80.3241 448.074 80.3071 448.311 80.0362L454.592 72.8559L456.543 74.5629L450.356 81.6347C449.029 83.152 447.607 83.2469 446.09 81.9193L443.272 79.4537C441.755 78.1261 441.66 76.7037 442.987 75.1863Z" />
          <path d="M454.391 89.5714L463.165 80.7806L469.177 86.7832L467.524 88.4394L463.346 84.2682L461.566 86.0518L465.362 89.8416L463.709 91.4978L459.913 87.708L457.878 89.7465L462.057 93.9178L460.404 95.574L454.391 89.5714Z" />
          <path d="M463.111 101.731L467.392 99.2739L469.007 101.065L468.896 101.505L463.994 103.408L463.111 101.731Z" />
          <path d="M478.978 117.038L488.9 109.568L490.459 111.639L482.406 117.701L485.632 121.987L483.762 123.395L478.978 117.038Z" />
          <path d="M490.232 127.293L495.557 123.793C497.242 122.686 498.637 122.974 499.745 124.659L501.999 128.089C503.106 129.773 502.817 131.169 501.133 132.277L495.808 135.777C494.123 136.885 492.728 136.596 491.62 134.911L489.366 131.482C488.259 129.797 488.548 128.401 490.232 127.293ZM491.536 129.538C491.235 129.736 491.183 129.986 491.381 130.286L493.516 133.536C493.714 133.836 493.963 133.888 494.264 133.69L499.829 130.032C500.13 129.834 500.182 129.585 499.984 129.284L497.849 126.035C497.651 125.734 497.402 125.682 497.101 125.88L491.536 129.538Z" />
          <path d="M507.25 137.388L507.832 137.431L508.947 139.406L501.567 146.838L501.708 147.089L511.884 144.61L512.999 146.586L512.735 147.107L500.608 149.901L498.591 146.327L507.25 137.388Z" />
          <path d="M505.517 159.149L516.7 153.745L520.396 161.395L518.289 162.413L515.721 157.097L513.452 158.194L515.785 163.024L513.678 164.042L511.345 159.212L508.752 160.465L511.32 165.781L509.213 166.799L505.517 159.149Z" />
          <path d="M512.898 172.763L514.198 172.232L516.31 177.397C516.446 177.73 516.681 177.828 517.014 177.692L518.23 177.194C518.541 177.067 518.668 176.853 518.61 176.553L517.931 173.038C517.652 171.596 518.274 170.564 519.796 169.942L520.729 169.56C522.594 168.797 523.909 169.348 524.672 171.214L526.232 175.029L525.823 176.5L524.523 177.032L522.547 172.2C522.411 171.867 522.176 171.768 521.843 171.905L520.76 172.348C520.449 172.475 520.323 172.689 520.381 172.989L521.06 176.504C521.338 177.946 520.717 178.978 519.195 179.6L518.129 180.036C516.263 180.8 514.948 180.248 514.185 178.382L512.489 174.234L512.898 172.763Z" />
          <path d="M524.066 196.9L530.179 195.104C532.114 194.535 533.365 195.218 533.933 197.152L535.288 201.763L534.73 203.184L533.383 203.58L531.719 197.916C531.617 197.57 531.394 197.448 531.048 197.55L524.659 199.428C524.313 199.529 524.191 199.753 524.293 200.098L525.957 205.763L524.61 206.159L523.372 205.266L522.017 200.655C521.449 198.72 522.132 197.469 524.066 196.9Z" />
          <path d="M525.969 213.029L538.421 214.023L539.285 217.888L528.445 224.095L527.9 223.885L527.429 221.777L529.723 220.489L528.661 215.746L526.037 215.559L525.566 213.451L525.969 213.029ZM531.098 215.92L531.853 219.293L536.601 216.607L536.538 216.326L531.098 215.92Z" />
          <path d="M529.178 230.86L541.442 228.902L541.851 231.462L531.897 233.051L532.743 238.348L530.432 238.717L529.178 230.86Z" />
          <path d="M531.292 245.672L543.639 244.332L543.919 246.909L531.571 248.249L531.292 245.672Z" />
          <path d="M533.238 255.99L534.64 255.912L534.952 261.483C534.972 261.842 535.161 262.012 535.521 261.992L536.833 261.919C537.168 261.9 537.358 261.739 537.401 261.436L537.906 257.892C538.113 256.439 539.037 255.666 540.678 255.574L541.685 255.517C543.698 255.405 544.76 256.355 544.873 258.368L545.103 262.483L544.236 263.74L542.834 263.818L542.543 258.606C542.523 258.247 542.333 258.077 541.973 258.097L540.805 258.163C540.47 258.181 540.28 258.342 540.237 258.645L539.733 262.189C539.525 263.643 538.601 264.416 536.96 264.508L535.81 264.572C533.797 264.685 532.734 263.735 532.621 261.722L532.371 257.247L533.238 255.99Z" />
          <path d="M543.077 271.555L545.417 271.573L545.337 281.725L542.997 281.706L543.027 277.926L532.947 277.847L532.967 275.255L543.047 275.334L543.077 271.555Z" />
          <path d="M532.605 289.464L544.99 290.4L544.794 292.985L539.948 292.618L539.601 297.213L544.447 297.58L544.251 300.164L531.867 299.228L532.062 296.643L537.267 297.037L537.615 292.442L532.41 292.048L532.605 289.464Z" />
          <path d="M530.962 307.337L543.258 309.085L542.063 317.497L539.746 317.168L540.577 311.322L538.082 310.968L537.327 316.278L535.01 315.949L535.765 310.638L532.914 310.233L532.083 316.078L529.766 315.749L530.962 307.337Z" />
          <path d="M528.503 323.096L540.653 325.671L540.071 328.418L531.072 331.552L539.049 333.242L538.512 335.778L526.361 333.203L526.943 330.456L535.942 327.322L527.966 325.631L528.503 323.096Z" />
          <path d="M524.238 341.565L536.218 344.839L535.535 347.34L523.555 344.065L524.238 341.565Z" />
          <path d="M524.149 352.883L530.196 354.893C532.109 355.529 532.748 356.803 532.112 358.716L530.596 363.277L529.328 364.126L527.995 363.683L529.857 358.081C529.971 357.739 529.857 357.511 529.515 357.398L523.195 355.297C522.853 355.183 522.626 355.297 522.512 355.639L520.65 361.242L519.318 360.799L518.81 359.359L520.326 354.798C520.962 352.885 522.236 352.247 524.149 352.883Z" />
          <path d="M516.692 367.95L517.994 368.477L515.9 373.649C515.765 373.983 515.865 374.217 516.198 374.352L517.416 374.845C517.728 374.971 517.967 374.907 518.136 374.651L520.103 371.661C520.91 370.434 522.076 370.129 523.6 370.746L524.534 371.124C526.403 371.881 526.959 373.194 526.203 375.062L524.656 378.883L523.336 379.65L522.035 379.123L523.993 374.284C524.128 373.951 524.029 373.716 523.695 373.581L522.611 373.142C522.299 373.016 522.059 373.081 521.891 373.336L519.924 376.326C519.116 377.553 517.951 377.858 516.427 377.241L515.359 376.809C513.491 376.052 512.934 374.74 513.691 372.871L515.372 368.716L516.692 367.95Z" />
          <path d="M507.819 380.866L511.748 383.853L510.728 386.038L510.279 386.107L506.618 382.331L507.819 380.866Z" />
          <path d="M499.905 401.444L510.636 407.698L506.359 415.039L504.337 413.861L507.309 408.759L504.666 407.219L501.965 411.853L499.943 410.675L502.644 406.04L498.6 403.684L499.905 401.444Z" />
          <path d="M491.638 415.095L502.028 421.9L500.608 424.068L490.218 417.263L491.638 415.095Z" />
          <path d="M494.265 429.318L496.15 430.704L490.137 438.885L488.252 437.498L490.491 434.453L482.37 428.482L483.905 426.393L492.026 432.364L494.265 429.318Z" />
          <path d="M475.297 437.7L484.768 445.735L482.951 447.877L473.543 446.363L479.761 451.638L478.085 453.615L468.614 445.58L470.43 443.439L479.838 444.952L473.62 439.677L475.297 437.7Z" />
          <path d="M462.802 451.943L471.709 460.599L465.788 466.693L464.11 465.062L468.224 460.827L466.417 459.071L462.679 462.918L461.001 461.287L464.739 457.44L462.674 455.433L458.56 459.667L456.882 458.036L462.802 451.943Z" />
          <path d="M452.539 463.541L453.483 464.58L449.355 468.334C449.089 468.576 449.077 468.831 449.319 469.097L450.203 470.069C450.429 470.318 450.673 470.363 450.935 470.206L454.004 468.364C455.263 467.608 456.446 467.839 457.552 469.055L458.23 469.801C459.586 471.293 459.518 472.717 458.026 474.073L454.977 476.846L453.455 476.965L452.511 475.926L456.373 472.414C456.639 472.172 456.651 471.918 456.409 471.651L455.622 470.786C455.396 470.537 455.152 470.492 454.889 470.649L451.82 472.491C450.561 473.247 449.379 473.016 448.273 471.8L447.498 470.947C446.142 469.456 446.21 468.032 447.701 466.675L451.017 463.66L452.539 463.541Z" />
          <path d="M440.553 474.154L441.432 475.249L437.079 478.741C436.799 478.966 436.771 479.219 436.996 479.5L437.818 480.525C438.028 480.787 438.269 480.848 438.541 480.707L441.718 479.058C443.021 478.382 444.187 478.685 445.216 479.967L445.846 480.753C447.108 482.326 446.952 483.743 445.38 485.005L442.164 487.584L440.638 487.609L439.76 486.513L443.831 483.247C444.112 483.022 444.14 482.769 443.915 482.488L443.183 481.575C442.972 481.313 442.732 481.252 442.46 481.393L439.283 483.042C437.98 483.719 436.814 483.416 435.785 482.133L435.064 481.234C433.803 479.662 433.959 478.245 435.531 476.983L439.027 474.178L440.553 474.154Z" />
          <path d="M420.023 489.057L423.399 501.084L420.073 503.233L410.498 495.212L410.507 494.628L412.321 493.455L414.323 495.162L418.405 492.524L417.673 489.997L419.487 488.825L420.023 489.057ZM419.085 494.87L416.183 496.746L420.346 500.271L420.587 500.115L419.085 494.87Z" />
          <path d="M404.429 498.269L410.427 509.145L407.969 510.501L399.712 505.743L403.65 512.883L401.381 514.135L395.383 503.26L397.841 501.903L406.098 506.661L402.16 499.521L404.429 498.269Z" />
          <path d="M387.698 507.156L392.904 518.432L388.623 520.409C385.551 521.828 383.305 521.001 381.887 517.929L380.936 515.87C379.518 512.797 380.345 510.552 383.417 509.133L387.698 507.156ZM386.326 510.367L384.267 511.318C382.851 511.972 382.469 513.007 383.123 514.424L384.406 517.202C385.06 518.618 386.095 518.999 387.511 518.345L389.57 517.394L386.326 510.367Z" />
          <path d="M363.109 520.781L365.139 526.821C365.782 528.732 365.148 530.008 363.237 530.651L358.306 532.309L356.865 531.806L356.417 530.476L362.389 528.467C362.73 528.353 362.843 528.125 362.729 527.783L360.606 521.471C360.491 521.129 360.264 521.016 359.922 521.131L356.066 522.428L356.984 525.157L359.236 524.4L359.982 526.618L355.273 528.202L352.864 521.036L359.279 518.879C361.19 518.236 362.466 518.87 363.109 520.781Z" />
          <path d="M346.113 523.6L345.574 536.08L341.744 537.086L335.145 526.48L335.335 525.928L337.424 525.379L338.795 527.625L343.496 526.39L343.587 523.761L345.676 523.212L346.113 523.6ZM343.411 528.832L340.068 529.71L342.925 534.356L343.204 534.283L343.411 528.832Z" />
          <path d="M328.439 527.529L330.679 539.745L327.634 540.303L322.828 533.554L320.729 541.57L317.684 542.129L315.444 529.912L317.993 529.445L319.409 537.164L321.154 530.512L323.314 530.116L327.305 535.716L325.89 527.996L328.439 527.529Z" />
          <path d="M306.789 531.093L308.127 543.441L299.681 544.356L299.428 542.03L305.298 541.394L305.027 538.888L299.694 539.467L299.442 537.14L304.774 536.562L304.464 533.699L298.595 534.335L298.343 532.009L306.789 531.093Z" />
          <path d="M291.49 533.479L291.555 534.882L285.981 535.139C285.621 535.156 285.45 535.344 285.467 535.703L285.527 537.016C285.543 537.351 285.702 537.542 286.004 537.588L289.543 538.128C290.994 538.349 291.758 539.281 291.834 540.923L291.88 541.93C291.973 543.944 291.013 544.997 288.999 545.09L284.881 545.28L283.634 544.401L283.569 542.999L288.783 542.758C289.143 542.741 289.314 542.553 289.298 542.193L289.244 541.025C289.228 540.689 289.069 540.498 288.767 540.452L285.228 539.913C283.777 539.691 283.013 538.76 282.937 537.117L282.884 535.967C282.791 533.953 283.751 532.899 285.765 532.806L290.243 532.6L291.49 533.479Z" />
        </motion.g>
        <circle cx="275" cy="275" r="240" stroke="white" strokeWidth="20" />
      </svg>
    </div>
  );
};

const svgHolder = css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: "32px 16px",
});

const svg = css({
  width: "100%",
  maxWidth: "550px",
  height: "auto",
});

export default LogoV2;
