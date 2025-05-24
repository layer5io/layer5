
/**
 * Shader utility functions for use in WebGL/Three.js components
 * Separating these from component files prevents conflicts with CSS processing
 * and improves code reusability across the application.
 */

export const shaderUtils = {
  // Round rectangle signed distance function
  roundRectangleSD: `
float roundRectangleSD(vec2 position, vec2 box, vec4 radius) {
  radius.xy = (position.x > 0.0) ? radius.xy : radius.zw;
  radius.x = (position.y > 0.0) ? radius.x : radius.y;
  vec2 q = abs(position) - box + radius.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - radius.x;
}
`,

  // Box signed distance function
  sdBox: `
float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}
`,

  // Enhanced 2D noise function with improved sampling
  noise: `
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  
  // Four corners in 2D of a tile
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  // Smooth interpolation
  vec2 u = f * f * (3.0 - 2.0 * f);

  // Mix 4 corners percentages
  return mix(a, b, u.x) + 
         (c - a)* u.y * (1.0 - u.x) + 
         (d - b) * u.x * u.y;
}
`
};

// Export individual shader functions for direct imports
// This allows components to import only what they need
export const roundRectangleSD = shaderUtils.roundRectangleSD;
export const sdBox = shaderUtils.sdBox;
export const noise = shaderUtils.noise;
