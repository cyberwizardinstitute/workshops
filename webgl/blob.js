var regl = require('regl')()
var camera = require('regl-camera')(regl,
  { distance: 5 })
var icosphere = require('icosphere')
var mesh = icosphere(5)
var glsl = require('glslify')
var anormals = require('angle-normals')

var draw = regl({
  frag: glsl`
    precision highp float;
    #pragma glslify: snoise = require('glsl-noise/simplex/4d')
    #pragma glslify: hsl2rgb = require('glsl-hsl2rgb')
    uniform float time;
    varying vec3 vpos;
    void main () {
      float h = (snoise(vec4(vpos,time))*0.5+0.5)*0.4+0.5;
      float s = 0.5;
      float l = 0.5;
      gl_FragColor = vec4(hsl2rgb(h,s,l),1);
    }
  `,
  vert: glsl`
    precision highp float;
    #pragma glslify: snoise = require('glsl-noise/simplex/4d')
    attribute vec3 position, normal;
    uniform mat4 projection, view;
    uniform float time;
    varying vec3 vpos;
    void main () {
      float n = snoise(vec4(position,time*0.2));
      vpos = position + normal * n * 0.8;
      gl_Position = projection * view * vec4(vpos,1);
    }
  `,
  uniforms: {
    time: regl.context('time')
  },
  attributes: {
    position: mesh.positions,
    normal: anormals(mesh.cells, mesh.positions)
  },
  elements: mesh.cells
})
regl.frame(function () {
  regl.clear({ color: [0,0,0,1], depth: true })
  camera(function () {
    draw()
  })
})
