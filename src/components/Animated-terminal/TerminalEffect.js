import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
// Import the shaderUtils object using named import
import { shaderUtils } from "../../utils/shaderUtils";

/**
 * A reusable component that adds Three.js shader effects to a terminal
 * This can be used in any terminal-like component that needs visual effects
 * 
 * @param {Object} props - Component props
 * @param {HTMLDivElement} props.containerRef - Ref to the container element
 * @param {number} props.progress - Current progress value (0-1)
 * @param {Object} [props.options] - Optional configuration
 * @param {number} [props.options.cursorSpeed=0.5] - Speed of cursor animation
 * @param {number} [props.options.glowIntensity=0.03] - Intensity of the glow effect
 * @param {Array} [props.options.color=[0.0, 0.7, 0.8]] - RGB color values for effects
 */
const TerminalEffects = ({ 
  containerRef, 
  progress, 
  options = {} 
}) => {
  const {
    cursorSpeed = 0.5,
    glowIntensity = 0.03,
    color = [0.0, 0.7, 0.8]
  } = options;
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const { clientWidth: width, clientHeight: height } = container;
    
    // Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;
    
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create shader material using the shaderUtils object
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(width, height) },
        u_progress: { value: progress },
        u_cursorSpeed: { value: cursorSpeed },
        u_glowIntensity: { value: glowIntensity },
        u_color: { value: new THREE.Vector3(...color) }
      },
      vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform float u_progress;
        uniform float u_cursorSpeed;
        uniform float u_glowIntensity;
        uniform vec3 u_color;
        
        // Import shader utility functions from shaderUtils.js
        ${shaderUtils.roundRectangleSD}
        ${shaderUtils.noise}
        
        void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 p = (uv * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
          
          // Create terminal cursor
          float cursor = roundRectangleSD(
            p - vec2(0.7 * sin(u_time * u_cursorSpeed) * 0.2, -0.3), 
            vec2(0.02, 0.04), 
            vec4(0.001, 0.001, 0.001, 0.001)
          );
          float cursorAlpha = smoothstep(0.0, 0.01, cursor) * (sin(u_time * 2.0) * 0.5 + 0.5);
          
          // Create subtle glow effect
          float glow = noise(p * 3.0 + u_time * 0.1) * u_glowIntensity;
          
          // Progress indicator
          float progressBar = roundRectangleSD(
            vec2(p.x - 0.8 + u_progress * 0.8, p.y + 0.8), 
            vec2(u_progress * 0.8, 0.03), 
            vec4(0.01, 0.01, 0.01, 0.01)
          );
          float progressAlpha = smoothstep(0.0, 0.01, progressBar) * 0.3;
          
          // Combine effects
          vec3 color = u_color;
          float alpha = cursorAlpha + glow + progressAlpha;
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true
    });
    
    // Create a simple plane for the shader
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(mesh);
    
    // Animation loop
    let animationId;
    const animate = (time) => {
      shaderMaterial.uniforms.u_time.value = time * 0.001;
      shaderMaterial.uniforms.u_progress.value = progress;
      
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    
    animate(0);
    
    // Handle window resize
    const handleResize = () => {
      const { clientWidth: width, clientHeight: height } = container;
      renderer.setSize(width, height);
      shaderMaterial.uniforms.u_resolution.value.set(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      shaderMaterial.dispose();
    };
  }, [containerRef, progress, cursorSpeed, glowIntensity, color]);
  
  // This component doesn't render anything directly,
  // it just adds effects to the container
  return null;
};

export default TerminalEffects;