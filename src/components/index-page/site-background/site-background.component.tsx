import React, { useEffect, useRef } from "react";
import { Application, Sprite, Filter, Point, interaction, Container } from "pixi.js";

import { CanvasHolder } from "./site-background.styles";

const SiteBackground: React.FC = () => {
  const canvasHolder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const application = new Application({
      resizeTo: window,
      transparent: true,
    });

    const uniforms = {
      u_time: 0.0,
      u_resolution: {
        x: window.innerWidth,
        y: window.innerHeight,
      },
    };

    const customFilter = new Filter(
      "",
      `
      uniform float u_time;
      uniform vec2 u_resolution;
      
      float star(vec2 grid) {
        float d = length(grid);
        float c = abs(sin(u_time) * 0.05) / d;
      
        return c;
      }
      
      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
      
        vec3 col = vec3(0.0);
      
        col.bg += star(uv);
      
        gl_FragColor = vec4(col, 1.0);
      }
      
    `,
      uniforms
    );

    const container = new Container();

    container.filterArea = application.screen;
    container.filters = [customFilter];

    application.stage.addChild(container);

    application.ticker.add(() => {
      uniforms.u_time += 0.01;
    });

    canvasHolder.current!.appendChild(application.view);
  }, []);

  return <CanvasHolder ref={canvasHolder} />;
};

export default SiteBackground;
