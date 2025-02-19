# JavaScript Libraries

A collection of JavaScript utilities.

## Table of Contents
- [Vector Library](#vector-library)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Vector Operations](#vector-operations)
  - [Examples](#examples)

## Vector Library

A lightweight and efficient 2D/3D vector library with common vector operations. The library provides both instance methods that modify vectors in place and static methods that return new vectors.

### Installation

```javascript
// Include the vector.js file in your project
import { Vec } from './vector.js';
```
```html
<!-- Include the vector.js file from the CDN -->
<script src="https://cdn.jsdelivr.net/gh/pfcarnahan/js-libs@1.0.1/vector.js"></script>
```

For Khan Academy's Processing.js environment, copy the contents of vectorPJS.js into your program:
1. Open [vectorPJS.js](https://cdn.jsdelivr.net/gh/pfcarnahan/js-libs@1.0.1/vectorPJS.js)
2. Copy the entire file contents
3. Paste at the top of your Khan Academy program

When using the copied vectorPJS.js version, use `Vec.new(x, y, z)` to create vectors instead of `new Vec(x, y, z)`. This syntax is required for Khan Academy's Processing.js environment.

### Usage

```javascript
// Create vectors
const v1 = new Vec(1, 2, 3);    // 3D vector
const v2 = new Vec(4, 5);       // 2D vector (z defaults to 0)
const v3 = new Vec();           // Zero vector

// Chain operations
v1.add(v2)
  .mult(2)
  .normalize();

// Use static methods for new vectors
const v4 = Vec.add(v1, v2);
```

### Vector Operations

#### Instance Methods (modify in place)
- `add(v)` - Add another vector or components
- `sub(v)` - Subtract another vector or components
- `mult(n)` - Multiply by scalar or vector
- `div(n)` - Divide by scalar or vector
- `invert()` - Invert direction
- `norm()` - Normalize to length 1
- `setMag(m)` - Set magnitude
- `limit(m)` - Limit magnitude
- `rotate2D(θ)` - Rotate in XY plane
- `lerp(v, amt)` - Linear interpolation
- `round()` - Round components to integers
- `project(onto)` - Project onto another vector
- `reflect(normal)` - Reflect across normal

#### Instance Methods (return values)
- `dot(v)` - Dot product
- `cross(v)` - Cross product
- `magSq()` - Squared magnitude
- `mag()` - Magnitude
- `dist2D(v)` - 2D distance to vector
- `dist3D(v)` - 3D distance to vector
- `dist(v)` - Distance to vector
- `heading()` - 2D angle from x-axis
- `angleBetween(v)` - Angle to another vector
- `isEqual(v)` - Vector equality check
- `clone()` - Create copy
- `isEqualWithTolerance(v, t)` - Equality within tolerance
- `isZero()` - Check if zero vector
- `toArray()` - Convert to array

#### Static Methods
- `Vec.add(v1, v2)` - Add two vectors or add components to v1
- `Vec.sub(v1, v2)` - Subtract vectors or subtract components from v1
- `Vec.mult(v, n)` - Multiply vector by scalar or another vector
- `Vec.div(v, n)` - Divide vector by scalar or another vector
- `Vec.dot(v1, v2)` - Calculate dot product
- `Vec.cross(v1, v2)` - Calculate cross product
- `Vec.norm(v)` - Get normalized (unit) vector
- `Vec.setMag(v, m)` - Get vector with specified magnitude
- `Vec.limit(v, m)` - Limit vector's magnitude
- `Vec.lerp(v1, v2, amt)` - Linear interpolation between vectors
- `Vec.heading(v)` - Get angle from x-axis in radians
- `Vec.angleBetween(v1, v2)` - Get angle between vectors in radians
- `Vec.rotate2D(v, θ)` - Rotate vector in XY plane
- `Vec.axisRot(v, axis, θ)` - Rotate vector around arbitrary axis
- `Vec.project(v, onto)` - Project vector onto another vector
- `Vec.reflect(v, normal)` - Reflect vector across normal
- `Vec.random2D([min, max])` - Generate random 2D vector
- `Vec.random3D([min, max])` - Generate random 3D vector
- `Vec.isZero(v)` - Check if vector is zero vector
- `Vec.fromArray(arr)` - Create vector from array
- `Vec.isEqualWithTolerance(v1, v2, t)` - Check equality within tolerance

### Examples

```javascript
// Basic vector math
const pos = new Vec(100, 100);
const vel = new Vec(5, 3);
pos.add(vel);  // Update position

// Normalize and scale
const dir = new Vec(2, 3).norm();
const scaled = dir.clone().mult(5);

// Vector angles
const v1 = new Vec(1, 0);
const v2 = new Vec(1, 1);
const angle = v1.angleBetween(v2);  // ~0.785 radians (45°)
const heading = v2.heading();        // ~0.785 radians (45°)

// Rotations
const rotated = new Vec(1, 0).rotate2D(Math.PI/2);  // (0, 1)

// Advanced operations
const projected = new Vec(3, 4).project(new Vec(1, 0));  // (3, 0)
const reflected = new Vec(1, 1).reflect(new Vec(0, 1));  // (1, -1)
const random = Vec.random2D();  // Random unit vector
```

## License

MIT License - feel free to use this code in your projects.