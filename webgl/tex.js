var regl = require('regl')()
var camera = require('regl-camera')(regl,
  { distance: 5 })
var icosphere = require('icosphere')
var mesh = icosphere(3)
var glsl = require('glslify')
var anormals = require('angle-normals')
var resl = require('resl')

function createBlob () {
  return regl({
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
      uniform float time, iblob;
      uniform vec3 offset;
      varying vec3 vpos;
      void main () {
        vec3 p = position + offset
          + vec3(
            sin(iblob*0.9+time*0.1)*20.0,
            cos(iblob*0.7+time*0.1)*3.0,
            sin(iblob*0.8+time*0.1)*23.0
          );
        float n = snoise(vec4(p,time*0.2));
        vpos = p + normal * n * 0.8;
        gl_Position = projection * view * vec4(vpos,1);
      }
    `,
    uniforms: {
      time: regl.context('time'),
      offset: regl.prop('offset'),
      iblob: regl.prop('iblob')
    },
    attributes: {
      position: mesh.positions,
      normal: anormals(mesh.cells, mesh.positions)
    },
    elements: mesh.cells
  })
}

function createBG (imgdata) {
  return regl({
    frag: glsl`
      precision highp float;
      #pragma glslify: snoise = require('glsl-noise/simplex/3d')
      #pragma glslify: hsl2rgb = require('glsl-hsl2rgb')
      varying vec2 vpos;
      uniform float time;
      uniform sampler2D img;
      void main () {
        float n0 = snoise(vec3(vpos,time))*0.5+0.5;
        float n1 = snoise(vec3(vpos,time+1.0));
        float n2 = snoise(vec3(vpos,time+2.0));
        float h = n0*0.4+0.4
          + (snoise(vec3(vpos*4.0,time*2.0))*0.5+0.5)*0.2+0.2;
        float s = n0*0.2+0.8;
        float l = pow((snoise(vec3(vpos*8.0,time))*0.5+0.5),3.0);
        vec2 uv = vec2(vpos.x,-vpos.y)*0.5+0.5;
        vec3 px = texture2D(img,uv+0.1*vec2(n1,n2)).rgb;
        gl_FragColor = vec4(hsl2rgb(h,s,l)+px,1);
      }
    `,
    vert: glsl`
      precision highp float;
      attribute vec2 position;
      varying vec2 vpos;
      void main () {
        vpos = position;
        gl_Position = vec4(position,0,1);
      }
    `,
    uniforms: {
      time: regl.context('time'),
      img: regl.texture(imgdata)
    },
    attributes: {
      position: [-4,4,-4,-4,4,0]
    },
    elements: [[0,1,2]],
    count: 3,
    depth: {
      enable: false,
      mask: false
    }
  })
}

var blobs = []
for (var i = 0; i < 100; i++) {
  var x = (Math.random()*2-1) * 20
  var y = (Math.random()*2-1) * 5
  var z = (Math.random()*2-1) * 20
  blobs.push({ offset: [x,y,z], iblob: i })
}

var draw = {
  blob: createBlob()
}
resl({
  manifest: {
    cat: {
      type: 'image',
      src: 'cat.jpg'
    }
  },
  onDone: ready
})
function ready (assets) {
  draw.bg = createBG(assets.cat)
}

regl.frame(function () {
  regl.clear({ color: [0,0,0,1], depth: true })
  if (draw.bg) draw.bg()
  camera(function () {
    draw.blob(blobs)
  })
})
