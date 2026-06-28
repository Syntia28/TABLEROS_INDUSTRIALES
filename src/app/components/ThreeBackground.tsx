'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ current: 0, target: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a glow particle texture
    const createGlowTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(0, 240, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(0, 240, 255, 0.7)');
        gradient.addColorStop(0.5, 'rgba(11, 87, 208, 0.25)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const glowTexture = createGlowTexture();

    // 1. Scene & Renderer Setup with volumetric slate atmosphere
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020512); // Sleek deep space dark blue
    scene.fog = new THREE.FogExp2(0x020512, 0.04);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 3, 14);

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    containerRef.current.appendChild(renderer.domElement);

    // 2. Lighting System (Industrial shadows and electric ambient glow)
    const ambientLight = new THREE.AmbientLight(0x0a1530, 1.2);
    scene.add(ambientLight);

    // Flashlight/Technician Inspection light guided by user mouse
    const inspectLight = new THREE.PointLight(0x00f0ff, 8, 25);
    inspectLight.castShadow = true;
    inspectLight.shadow.bias = -0.002;
    scene.add(inspectLight);

    // Constant electrical background glow
    const panelGlowLight = new THREE.DirectionalLight(0x0b57d0, 1.5);
    panelGlowLight.position.set(5, 5, 8);
    scene.add(panelGlowLight);

    // 3. Constructing the 3D Electrical Cabinet Rack
    const cabinetGroup = new THREE.Group();

    // Metallic backplate grid structure
    const backplateGeo = new THREE.PlaneGeometry(35, 25);
    const backplateMat = new THREE.MeshStandardMaterial({
      color: 0x070c1b,
      roughness: 0.65,
      metalness: 0.8
    });
    const backplate = new THREE.Mesh(backplateGeo, backplateMat);
    backplate.position.z = -3;
    backplate.receiveShadow = true;
    cabinetGroup.add(backplate);

    // Horizontal DIN Rails (where components are mounted)
    const railCount = 4;
    const railYPositions = [6, 2, -2, -6];
    const rails: THREE.Mesh[] = [];

    const railGeo = new THREE.BoxGeometry(32, 0.25, 0.15);
    const railMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.3,
      metalness: 0.9
    });

    railYPositions.forEach(y => {
      const rail = new THREE.Mesh(railGeo, railMat);
      rail.position.set(0, y, -2.85);
      rail.castShadow = true;
      rail.receiveShadow = true;
      cabinetGroup.add(rail);
      rails.push(rail);
    });

    // 4. Populate DIN Rails with 3D Electrical Components
    // Switch box geometries
    const plcGeo = new THREE.BoxGeometry(2.2, 1.6, 0.9);
    const breakerGeo = new THREE.BoxGeometry(0.5, 1.2, 0.7);
    const contactorGeo = new THREE.BoxGeometry(0.8, 1.1, 0.85);
    
    // Component materials
    const plcMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 }); // Slate dark
    const breakerMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 }); // Gray-blue
    const contactorMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.45 });

    const glowingCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
    const glowingBlueMat = new THREE.MeshBasicMaterial({ color: 0x0056b3 });
    const glowingGreenMat = new THREE.MeshBasicMaterial({ color: 0x10b981 });
    const glowingOrangeMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b });

    interface StatusLed {
      mesh: THREE.Mesh;
      phase: number;
      speed: number;
      color: THREE.Color;
    }
    const statusLeds: StatusLed[] = [];

    // Store locations of components to route wires between them
    const componentPorts: THREE.Vector3[] = [];

    // Helper to generate a component block on the rail grid
    const createComponentBlock = (type: 'plc' | 'breaker' | 'contactor', x: number, y: number) => {
      const group = new THREE.Group();
      group.position.set(x, y, -2.4);

      let body: THREE.Mesh;
      if (type === 'plc') {
        body = new THREE.Mesh(plcGeo, plcMat);
        // PLC status screen
        const screenGeo = new THREE.PlaneGeometry(1.6, 0.4);
        const screenMat = new THREE.MeshBasicMaterial({ color: 0x002d40 });
        const screen = new THREE.Mesh(screenGeo, screenMat);
        screen.position.set(0, 0.4, 0.451);
        group.add(screen);

        // Grid of status LEDs
        const ledGeo = new THREE.SphereGeometry(0.045, 6, 6);
        for (let row = 0; row < 2; row++) {
          for (let col = 0; col < 6; col++) {
            const ledCol = Math.random() > 0.4 ? glowingGreenMat : glowingOrangeMat;
            const led = new THREE.Mesh(ledGeo, ledCol);
            led.position.set(-0.7 + col * 0.28, -0.1 - row * 0.25, 0.455);
            group.add(led);
            statusLeds.push({
              mesh: led,
              phase: Math.random() * Math.PI * 2,
              speed: 2.5 + Math.random() * 3,
              color: ledCol.color
            });
          }
        }
        
        // Terminal ports for wire attachment
        componentPorts.push(new THREE.Vector3(x - 0.8, y - 0.8, -2.4));
        componentPorts.push(new THREE.Vector3(x + 0.8, y + 0.8, -2.4));
      } else if (type === 'breaker') {
        body = new THREE.Mesh(breakerGeo, breakerMat);
        // Breaker toggle lever
        const toggleGeo = new THREE.BoxGeometry(0.12, 0.35, 0.25);
        const isUp = Math.random() > 0.2;
        const toggle = new THREE.Mesh(toggleGeo, isUp ? glowingCyanMat : breakerMat);
        toggle.position.set(0, isUp ? 0.25 : -0.25, 0.35);
        toggle.rotation.x = isUp ? 0.2 : -0.2;
        group.add(toggle);

        // Small indicator dot
        const dotGeo = new THREE.SphereGeometry(0.04, 6, 6);
        const dot = new THREE.Mesh(dotGeo, isUp ? glowingCyanMat : glowingBlueMat);
        dot.position.set(0, 0.45, 0.36);
        group.add(dot);
        statusLeds.push({
          mesh: dot,
          phase: Math.random() * Math.PI,
          speed: 1.0,
          color: isUp ? glowingCyanMat.color : glowingBlueMat.color
        });
        
        componentPorts.push(new THREE.Vector3(x, y - 0.6, -2.4));
        componentPorts.push(new THREE.Vector3(x, y + 0.6, -2.4));
      } else {
        body = new THREE.Mesh(contactorGeo, contactorMat);
        // Contactor center plunger details
        const plungerGeo = new THREE.BoxGeometry(0.4, 0.4, 0.15);
        const plunger = new THREE.Mesh(plungerGeo, breakerMat);
        plunger.position.set(0, 0, 0.43);
        group.add(plunger);
        
        // Small active light
        const indicatorGeo = new THREE.SphereGeometry(0.04, 6, 6);
        const active = Math.random() > 0.5;
        const ind = new THREE.Mesh(indicatorGeo, active ? glowingOrangeMat : breakerMat);
        ind.position.set(0.2, 0.35, 0.43);
        group.add(ind);
        
        componentPorts.push(new THREE.Vector3(x - 0.2, y - 0.55, -2.4));
        componentPorts.push(new THREE.Vector3(x + 0.2, y + 0.55, -2.4));
      }

      body.castShadow = true;
      body.receiveShadow = true;
      group.add(body);
      cabinetGroup.add(group);
    };

    // Populate each rail with complex arrangements of blocks
    railYPositions.forEach((y, railIdx) => {
      let xOffset = -12;
      
      while (xOffset < 12) {
        const rand = Math.random();
        if (rand < 0.15 && xOffset < 8) {
          // Place PLC
          createComponentBlock('plc', xOffset + 1.5, y);
          xOffset += 4.5;
        } else if (rand < 0.65) {
          // Place 2-4 breaker units in series (simulating typical power board rows)
          const seriesCount = Math.floor(2 + Math.random() * 3);
          for (let s = 0; s < seriesCount; s++) {
            if (xOffset < 13) {
              createComponentBlock('breaker', xOffset + 0.4, y);
              xOffset += 0.8;
            }
          }
          xOffset += 0.5; // Gap
        } else {
          // Place contactor
          createComponentBlock('contactor', xOffset + 0.6, y);
          xOffset += 1.8;
        }
      }
    });

    scene.add(cabinetGroup);

    // 5. Draw Glowing Multi-Colored Wire Paths (routing between ports)
    interface Electron {
      curve: THREE.CatmullRomCurve3;
      progress: number;
      speed: number;
      mesh: THREE.Mesh;
    }
    const electrons: Electron[] = [];
    const wireGroup = new THREE.Group();

    const wireColors = [
      0x00f0ff, // Neon Cyan (Signal)
      0x0056b3, // Electric Blue (Neutral/Phase)
      0xf59e0b, // Amber (Control)
      0x10b981  // Emerald (Ground)
    ];

    // Build random wiring connections between adjacent ports
    const electronGeo = new THREE.SphereGeometry(0.05, 8, 8);
    for (let i = 0; i < componentPorts.length - 1; i += 2) {
      const start = componentPorts[i];
      const end = componentPorts[i + 1];
      
      // Routing wires with clean orthogonal curves (simulating clean cable wiring ducts)
      const mid1 = new THREE.Vector3(start.x, (start.y + end.y) / 2, start.z - 0.2);
      const mid2 = new THREE.Vector3(end.x, (start.y + end.y) / 2, end.z - 0.2);
      
      const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, end]);
      
      // Wire geometry tube
      const colorHex = wireColors[i % wireColors.length];
      const wireTubeGeo = new THREE.TubeGeometry(curve, 16, 0.025, 4, false);
      const wireTubeMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.65
      });
      const wireTube = new THREE.Mesh(wireTubeGeo, wireTubeMat);
      wireTube.receiveShadow = true;
      wireGroup.add(wireTube);

      // Add dynamic glowing electron charge running along this wire
      if (Math.random() > 0.3) {
        const elMat = new THREE.MeshBasicMaterial({ color: colorHex });
        const elMesh = new THREE.Mesh(electronGeo, elMat);
        scene.add(elMesh);
        
        electrons.push({
          curve,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.006,
          mesh: elMesh
        });
      }
    }
    scene.add(wireGroup);

    // 6. Twinkling atmospheric grid particles
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colorsArr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;

      const col = new THREE.Color(Math.random() > 0.5 ? 0x00f0ff : 0x0b57d0);
      colorsArr[i * 3] = col.r;
      colorsArr[i * 3 + 1] = col.g;
      colorsArr[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colorsArr, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.28,
      map: glowTexture,
      transparent: true,
      opacity: 0.35,
      vertexColors: true,
      depthWrite: false
    });

    const spaceParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(spaceParticles);

    // 6.5. Dynamic Electrical Arcs (Lightning) reacting to mouse/cursor
    const arcCount = 3;
    const arcLines: THREE.Line[] = [];
    const arcGeometries: THREE.BufferGeometry[] = [];
    
    // Create materials for the arcs (highly glowing neon colors)
    const arcMaterial = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    
    for (let i = 0; i < arcCount; i++) {
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(33), 3)); // 11 points (11 * 3 = 33 floats)
      const line = new THREE.Line(geom, arcMaterial.clone());
      scene.add(line);
      arcLines.push(line);
      arcGeometries.push(geom);
    }

    // 6.6. Electrical Spark Particle Pool
    interface Spark {
      mesh: THREE.Mesh;
      velocity: THREE.Vector3;
      life: number;
      maxLife: number;
    }
    
    const sparkCount = 30;
    const sparks: Spark[] = [];
    const sparkGeo = new THREE.SphereGeometry(0.045, 4, 4);
    
    for (let i = 0; i < sparkCount; i++) {
      const mesh = new THREE.Mesh(
        sparkGeo, 
        new THREE.MeshBasicMaterial({
          color: i % 2 === 0 ? 0x00f0ff : 0x0b57d0,
          transparent: true,
          blending: THREE.AdditiveBlending
        })
      );
      mesh.visible = false;
      scene.add(mesh);
      sparks.push({
        mesh,
        velocity: new THREE.Vector3(),
        life: 0,
        maxLife: 0
      });
    }
    
    let activeSparkIdx = 0;
    const spawnSparks = (position: THREE.Vector3, count: number) => {
      for (let i = 0; i < count; i++) {
        const spark = sparks[activeSparkIdx];
        spark.mesh.position.copy(position);
        spark.mesh.visible = true;
        
        spark.velocity.set(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6 + 2, // shoot upward and outward
          (Math.random() - 0.5) * 3
        );
        spark.life = 0;
        spark.maxLife = 15 + Math.random() * 15;
        
        activeSparkIdx = (activeSparkIdx + 1) % sparkCount;
      }
    };

    // Event Handlers
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetPercent = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      scrollRef.current.target = targetPercent;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    // 7. Render Animation Loop: Cinematic drone sweep through the cabinet
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth scroll/mouse interpolation
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.05;
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      // CAMERA MOVEMENT: Slow cinematic drifting video motion
      // Orbit camera on sine wave + translate down as page scrolls
      const loopOffset = Math.sin(elapsedTime * 0.08) * 3;
      const lookOffset = Math.cos(elapsedTime * 0.06) * 1.5;

      camera.position.x = loopOffset + mouseRef.current.x * 2;
      // Scroll moves camera down along the rack cabinet rows
      camera.position.y = 3 - scrollRef.current.current * 12 + mouseRef.current.y * 1.5;
      // Depth orbits slightly
      camera.position.z = 11 + Math.sin(elapsedTime * 0.05) * 1.5;
      
      // Look at the cabinet row matching scroll depth
      camera.lookAt(lookOffset, -scrollRef.current.current * 10 - 0.5, -3.5);

      // Update Technician Inspection Light position based on mouse coordinate
      // Project mouse into 3D space near cabinet front plane
      inspectLight.position.x = mouseRef.current.x * 12;
      inspectLight.position.y = (3 - scrollRef.current.current * 12) + mouseRef.current.y * 8;
      inspectLight.position.z = 1.0; // Floating just in front of components
      
      // Flashlight subtle high-frequency hum/flicker
      inspectLight.intensity = 6.5 + Math.sin(elapsedTime * 18) * 0.4 + Math.cos(elapsedTime * 5) * 0.3;

      // Find the nearest ports to the inspectLight
      const sortedPorts = [...componentPorts].sort((a, b) => {
        return a.distanceToSquared(inspectLight.position) - b.distanceToSquared(inspectLight.position);
      });

      // Update the electrical arcs
      for (let i = 0; i < arcCount; i++) {
        const line = arcLines[i];
        const geom = arcGeometries[i];
        
        // Random crackling effect: only fire if mouse is active (e.g. cursor is close enough or random chance)
        const start = inspectLight.position;
        const end = sortedPorts[i];
        
        const distance = start.distanceTo(end);
        const shouldFire = Math.random() > 0.12 && distance < 7.5; 
        
        if (shouldFire && end) {
          line.visible = true;
          
          // Generate zig-zag path
          const segmentCount = 10;
          const positions = new Float32Array((segmentCount + 1) * 3);
          
          for (let s = 0; s <= segmentCount; s++) {
            const t = s / segmentCount;
            // Interpolate position along the line
            const currentPos = new THREE.Vector3().lerpVectors(start, end, t);
            
            // Add zig-zag noise to the middle points
            if (s > 0 && s < segmentCount) {
              const noiseStrength = 0.35 * Math.sin(t * Math.PI); // stronger noise in middle
              currentPos.x += (Math.random() - 0.5) * noiseStrength;
              currentPos.y += (Math.random() - 0.5) * noiseStrength;
              currentPos.z += (Math.random() - 0.5) * noiseStrength;
            }
            
            positions[s * 3] = currentPos.x;
            positions[s * 3 + 1] = currentPos.y;
            positions[s * 3 + 2] = currentPos.z;
          }
          
          geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          geom.attributes.position.needsUpdate = true;
          
          // Animate opacity to look like electric discharge
          if (line.material instanceof THREE.LineBasicMaterial) {
            line.material.opacity = 0.5 + Math.random() * 0.5;
            line.material.color.setHex(Math.random() > 0.4 ? 0x00f0ff : 0x0088ff);
          }
          
          // Spawn sparks at the port touch point
          if (Math.random() > 0.65) {
            spawnSparks(end, 2);
          }
        } else {
          line.visible = false;
        }
      }

      // Update spark particles
      sparks.forEach(spark => {
        if (!spark.mesh.visible) return;
        
        spark.life++;
        if (spark.life >= spark.maxLife) {
          spark.mesh.visible = false;
        } else {
          // Move spark
          spark.mesh.position.addScaledVector(spark.velocity, 0.016);
          // Apply gravity and drag
          spark.velocity.y -= 0.12; // gravity
          spark.velocity.multiplyScalar(0.95); // drag
          
          // Fade out
          if (spark.mesh.material instanceof THREE.MeshBasicMaterial) {
            spark.mesh.material.opacity = 1.0 - (spark.life / spark.maxLife);
          }
        }
      });

      // Animate Status LEDs (blinking/flashing indicators)
      statusLeds.forEach(led => {
        const pulse = 0.15 + Math.abs(Math.sin(elapsedTime * led.speed + led.phase)) * 0.85;
        if (led.mesh.material instanceof THREE.MeshBasicMaterial) {
          led.mesh.material.opacity = pulse;
        }
      });

      // Animate wire electrons (current pulses)
      electrons.forEach(el => {
        el.progress += el.speed;
        if (el.progress > 1.0) el.progress = 0;
        
        const pos = el.curve.getPointAt(el.progress);
        el.mesh.position.copy(pos);
        
        // Glow breathing
        const scale = 0.75 + Math.sin(elapsedTime * 10 + el.progress * Math.PI) * 0.25;
        el.mesh.scale.set(scale, scale, scale);
      });

      // Rotate atmospheric background dust particles
      spaceParticles.rotation.y = elapsedTime * 0.005;
      spaceParticles.rotation.x = elapsedTime * 0.002;
      particleMat.opacity = 0.3 + Math.sin(elapsedTime * 2.0) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (containerRef.current && renderer.domElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }

      arcLines.forEach(line => {
        scene.remove(line);
        line.geometry.dispose();
        if (line.material instanceof THREE.Material) line.material.dispose();
      });
      sparks.forEach(spark => {
        scene.remove(spark.mesh);
        spark.mesh.geometry.dispose();
        if (spark.mesh.material instanceof THREE.Material) spark.mesh.material.dispose();
      });

      scene.clear();
      renderer.dispose();
      glowTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none select-none z-[-1] opacity-95 transition-opacity duration-1000"
    />
  );
}
