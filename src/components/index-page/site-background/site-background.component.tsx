import React, { useEffect, useRef } from "react"
import { Application, Sprite, Filter, Point, interaction } from "pixi.js"

import { CanvasHolder } from "./site-background.styles"

const SiteBackground: React.FC = () => {
  const canvasHolder = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const application = new Application({
      resizeTo: window,
      backgroundColor: 0x000000,
    })

    const uniforms = {
      coords: { x: 1000, y: 0 },
    }

    const star = Sprite.from("./star.png")

    const customFilter = new Filter(
      `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
      `,
      `
precision mediump float;

uniform vec2 coords;

void main() {
  gl_FragColor = vec4(coords.x / 2000.0, 0.0, 0.0, 1.0);
}
    `,
      uniforms
    )

    star.filters = [customFilter]

    star.position = new Point(700, 500)

    application.stage.addChild(star)

    application.stage.interactive = true

    application.stage.on("mousemove", (e: interaction.InteractionEvent) => {
      const { x, y } = e.data.global
      uniforms.coords = { x, y }
    })

    canvasHolder.current!.appendChild(application.view)
  }, [])

  return <CanvasHolder ref={canvasHolder} />
}

export default SiteBackground
