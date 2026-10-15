import { describe, it, expect } from 'vitest';
import * as THREE from 'three';

describe('Three.js availability', () => {
  it('THREE should be importable', () => {
    expect(THREE).toBeDefined();
    expect(THREE.Scene).toBeDefined();
    expect(THREE.Mesh).toBeDefined();
    expect(THREE.Points).toBeDefined();
  });

  it('scene creation works', () => {
    const scene = new THREE.Scene();
    expect(scene).toBeInstanceOf(THREE.Scene);
    expect(scene.children.length).toBe(0);
  });

  it('geometry types are available', () => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    expect(geometry).toBeInstanceOf(THREE.SphereGeometry);
    expect(geometry.parameters.radius).toBe(1);
  });
});
