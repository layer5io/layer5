import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as THREE from "three";
// Import shader utilities correctly
import { shaderUtils } from "../../utils/shaderUtils";

const RippleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const ErrorContainer = styled.div`
  display: none; /* Hidden by default, shown only for debugging */
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: red;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 4px;
`;

const RippleEffectAnimation = ({ color = "#00b39f", intensity = 0.5 }) => {
  const containerRef = useRef(null);
  const errorRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const { clientWidth: width, clientHeight: height } = container;
    
    // Check if WebGL is available
    if (!THREE.WEBGL?.isWebGLAvailable?.()) {
      console.error("WebGL is not available. Cannot render ripple effect.");
      if (errorRef.current) {
        errorRef.current.style.display = "block";
        errorRef.current.textContent = "WebGL not available";
      }
      return;
    }
    
    try {
      // Setup Three.js
      const scene = new THREE.Scene();
      sceneRef.current = scene;
      
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      camera.position.z = 1;
      
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
      rendererRef.current = renderer;
      
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);
    
      // Create shader material
      const shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(width, height) },
          u_color: { value: new THREE.Color(color) },
          u_intensity: { value: intensity }
        },
        vertexShader: `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float u_time;
          uniform vec2 u_resolution;
          uniform vec3 u_color;
          uniform float u_intensity;
          
          // Import shader utility functions from shaderUtils.js
          ${shaderUtils.roundRectangleSD}
          ${shaderUtils.noise}
          
          void main() {
            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
            vec2 p = (uv * 2.0 - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
            
            // Use imported roundRectangleSD function
            float d = roundRectangleSD(p * 0.5, vec2(0.8, 0.5), vec4(0.1, 0.1, 0.1, 0.1));
            
            // Create ripple effect
            float ripple = sin((d * 10.0 - u_time) * 3.0) * 0.5 + 0.5;
            ripple *= smoothstep(0.5, 0.0, abs(d));
            
            // Add noise for more organic feel
            float n = noise(p * 5.0 + u_time * 0.2) * 0.1;
            
            // Combine effects
            float alpha = ripple * u_intensity + n;
            alpha *= smoothstep(1.0, 0.5, length(p)); // Fade at edges
            
            gl_FragColor = vec4(u_color, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        depthTest: false
      });
    
      // Create a simple plane for the shader
      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, shaderMaterial);
      scene.add(mesh);
      
      // Animation loop
      let animationId;
      let lastTime = 0;
      const animate = (time) => {
        // Convert to seconds and limit maximum delta
        const currentTime = time * 0.001;
        const delta = Math.min(currentTime - lastTime, 0.1);
        lastTime = currentTime;
        
        shaderMaterial.uniforms.u_time.value += delta;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };
      
      animate(0);
      
      // Handle window resize
      const handleResize = () => {
        if (!container) return;
        
        const { clientWidth: newWidth, clientHeight: newHeight } = container;
        renderer.setSize(newWidth, newHeight);
        shaderMaterial.uniforms.u_resolution.value.set(newWidth, newHeight);
      };
      
      window.addEventListener('resize', handleResize);
    
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        
        // Clean up Three.js resources
        if (mesh) {
          scene.remove(mesh);
          mesh.geometry.dispose();
          mesh.material.dispose();
        }
        
        geometry.dispose();
        shaderMaterial.dispose();
        
        // Remove renderer from DOM
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        
        // Dispose renderer
        renderer.dispose();
        
        // Clear refs
        rendererRef.current = null;
        sceneRef.current = null;
      };
    } catch (error) {
      console.error("Error initializing WebGL ripple effect:", error);
      if (errorRef.current) {
        errorRef.current.style.display = "block";
        errorRef.current.textContent = "Rendering error: " + error.message;
      }
    }
  }, [color, intensity]);
  
  return (
    <>
      <RippleContainer ref={containerRef} />
      <ErrorContainer ref={errorRef} />
    </>
  );
};

export default RippleEffectAnimation;