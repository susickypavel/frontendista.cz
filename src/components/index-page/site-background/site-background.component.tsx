import React, { useEffect, useRef } from "react"
import { Application, Sprite, Filter, Point, interaction, Container } from "pixi.js"

import { CanvasHolder } from "./site-background.styles"

const SiteBackground: React.FC = () => {
  const canvasHolder = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const application = new Application({
      resizeTo: window,
      transparent: true,
    })

    const uniforms = {
      u_time: 0.0,
      u_resolution: {
        x: window.innerWidth,
        y: window.innerHeight,
      },
    }

    const customFilter = new Filter(
      "",
      `
      #ifdef GL_ES
      precision mediump float;
      #endif
      
      uniform float u_time;
      uniform vec2 u_resolution;
      
      float random(vec2 ab)
      {
        float f = (cos(dot(ab ,vec2(21.9898,78.233))) * 43758.5453);
        return fract(f);
      }
      
      float noise(in vec2 xy)
      {
        vec2 ij = floor(xy);
        vec2 uv = xy-ij;
        uv = uv*uv*(3.0-2.0*uv);
      
      
        float a = random(vec2(ij.x, ij.y ));
        float b = random(vec2(ij.x+1., ij.y));
        float c = random(vec2(ij.x, ij.y+1.));
        float d = random(vec2(ij.x+1., ij.y+1.));
        float k0 = a;
        float k1 = b-a;
        float k2 = c-a;
        float k3 = a-b-c+d;
        return (k0 + k1*uv.x + k2*uv.y + k3*uv.x*uv.y);
      }
      
      void main() {
        vec2 position = (gl_FragCoord.xy+ - 0.5 * u_resolution.xy) / u_resolution.yy;
      
        float color = pow(noise(gl_FragCoord.xy), 40.0) * 20.0;
      
        float r1 = noise(gl_FragCoord.xy*noise(vec2(sin(u_time*0.01))));
        float r2 = noise(gl_FragCoord.xy*noise(vec2(cos(u_time*0.01), sin(u_time*0.01))));
        float r3 = noise(gl_FragCoord.xy*noise(vec2(sin(u_time*0.05), cos(u_time*0.05))));
      
        gl_FragColor = vec4(vec3(color*r1, color*r2, color*r3), 1.0);
      
      }
      
    `,
      uniforms
    )

    const container = new Container()

    container.filterArea = application.screen
    container.filters = [customFilter]

    application.stage.addChild(container)

    application.ticker.add(() => {
      uniforms.u_time += 0.01
    })

    canvasHolder.current!.appendChild(application.view)
  }, [])

  return <CanvasHolder ref={canvasHolder} />
}

export default SiteBackground
