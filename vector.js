/**
 * A 3D and 2D vector class with common vector operations
 */
class Vec {
    /**
     * Create a new vector
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     */
    constructor(x = 0, y = 0, z = 0) {
        this.x = Number(x)
        this.y = Number(y)
        this.z = Number(z)
    }

    // Instance methods - modify this vector and return it
    /**
     * Add another vector or components to this vector
     * @param {Vec|number} v - Vector or x component to add
     * @param {number} [y] - Y component to add
     * @param {number} [z] - Z component to add
     * @returns {Vec} This vector
     */
    add(v) { return this.set(Vec.add(this, ...arguments)) }

    /**
     * Subtract another vector or components from this vector
     * @param {Vec|number} v - Vector or x component to subtract
     * @param {number} [y] - Y component to subtract
     * @param {number} [z] - Z component to subtract
     * @returns {Vec} This vector
     */
    sub(v) { return this.set(Vec.sub(this, ...arguments)) }

    /**
     * Multiply this vector by another vector or scalar
     * @param {Vec|number} v - Vector or scalar to multiply by
     * @returns {Vec} This vector
     */
    mult(v) { return this.set(Vec.mult(this, ...arguments)) }

    /**
     * Divide this vector by another vector or scalar
     * @param {Vec|number} v - Vector or scalar to divide by
     * @returns {Vec} This vector
     */
    div(v) { return this.set(Vec.div(this, ...arguments)) }

    /**
     * Invert this vector's direction
     * @returns {Vec} This vector
     */
    invert() { return this.set(Vec.invert(this)) }

    /**
     * Normalize this vector to a length of 1
     * @returns {Vec} This vector
     */
    norm() { return this.set(Vec.norm(this)) }

    /**
     * Set this vector's magnitude
     * @param {number} mag - Target magnitude
     * @returns {Vec} This vector
     */
    setMag(mag) { return this.set(Vec.setMag(this, mag)) }

    /**
     * Limit this vector's magnitude
     * @param {number} mag - Maximum magnitude
     * @returns {Vec} This vector
     */
    limit(mag) { return this.set(Vec.limit(this, mag)) }

    /**
     * Rotate this vector in the XY plane
     * @param {number} theta - Angle in radians
     * @returns {Vec} This vector
     */
    rotate2D(theta) { return this.set(Vec.rotate2D(this, theta)) }

    /**
     * Linearly interpolate this vector toward another vector
     * @param {Vec} v - Target vector
     * @param {number} amount - Interpolation amount (0-1)
     * @returns {Vec} This vector
     */
    lerp(v, amount) { return this.set(Vec.lerp(this, v, amount)) }

    /**
     * Round this vector's components to nearest integer
     * @returns {Vec} This vector
     */
    round() { return this.set(Vec.round(this)) }

    /**
     * Get this vector's heading (angle relative to positive x-axis)
     * @returns {number} Angle in radians
     */
    heading() { return Vec.heading(this) }

    /**
     * Calculate angle between this vector and another vector
     * @param {Vec} v - Vector to calculate angle with
     * @returns {number} Angle in radians
     */
    angleBetween(v) { return Vec.angleBetween(this, v) }

    /**
     * Project a vector onto another vector
     * @param {Vec} onto - Vector to project onto
     * @returns {Vec} This vector
     */
    project(onto) { return this.set(Vec.project(this, onto)) }

    /**
     * Reflect a vector across a normal
     * @param {Vec} normal - Normal vector
     * @returns {Vec} This vector
     */
    reflect(normal) { return this.set(Vec.reflect(this, normal)) }

    // Instance methods - return scalar values
    /**
     * Calculate dot product with another vector
     * @param {Vec} v - Vector to dot with
     * @returns {number} Dot product
     */
    dot(v) { return Vec.dot(this, v) }

    /**
     * Calculate cross product with another vector
     * @param {Vec} v - Vector to cross with
     * @returns {Vec} Cross product vector
     */
    cross(v) { return Vec.cross(this, v) }

    /**
     * Calculate squared magnitude of this vector
     * @returns {number} Squared magnitude
     */
    magSq() { return Vec.magSq(this) }

    /**
     * Calculate magnitude of this vector
     * @returns {number} Magnitude
     */
    mag() { return Vec.mag(this) }

    /**
     * Calculate the 2D distance between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} 2D Distance
     */
    dist2D(v) { return Vec.dist2D(this, v) }

    /**
     * Calculate the 3D distance between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} 3D Distance
     */
    dist3D(v) { return Vec.dist3D(this, v) }

    /**
     * Calculate the distance between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} Distance
     */
    dist(v) { return Vec.dist(this, v) }

    /**
     * Check if this vector equals another vector
     * @param {Vec} v - Vector to compare with
     * @returns {boolean} True if vectors are equal
     */
    isEqual(v) { return Vec.isEqual(this, v) }

    /**
     * Check if vectors are equal within a given tolerance
     * @param {Vec} v - Vector to compare with
     * @param {number} tolerance - Tolerance value
     * @returns {boolean} True if vectors are equal within tolerance
     */
    isEqualWithTolerance(v, tolerance) { return Vec.isEqualWithTolerance(this, v, tolerance) }

    /**
     * Check if this is a zero vector
     * @returns {boolean} True if vector is zero vector
     */
    isZero() { return Vec.isZero(this) }

    // Instance methods - return new objects
    /**
     * Create a copy of this vector
     * @returns {Vec} New vector with same components
     */
    clone() { return new Vec(this.x, this.y, this.z) }

    /**
     * Set this vector's components
     * @param {Vec|number} x - Vector or x component
     * @param {number} [y] - Y component
     * @param {number} [z] - Z component
     * @returns {Vec} This vector
     */
    set(x, y, z) {
        if (x instanceof Vec) {
            this.x = x.x
            this.y = x.y
            this.z = x.z
        } else {
            this.x = x
            this.y = y
            this.z = z
        }
        return this
    }

    /**
     * Convert vector to array
     * @returns {number[]} Array with vector components
     */
    toArray() { return [this.x, this.y, this.z] }

    // Static vector operations - return new vectors
    /**
     * Add two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec|number} v2 - Second vector or x component
     * @param {number} [y] - Y component
     * @param {number} [z] - Z component
     * @returns {Vec} New sum vector
     */
    static add(v1, v2) {
        if (v2 instanceof Vec) {
            return new Vec(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z)
        }
        return new Vec(
            v1.x + (arguments[1] ?? 0),
            v1.y + (arguments[2] ?? 0),
            v1.z + (arguments[3] ?? 0)
        )
    }

    /**
     * Subtract two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec|number} v2 - Second vector or x component
     * @param {number} [y] - Y component
     * @param {number} [z] - Z component
     * @returns {Vec} New difference vector
     */
    static sub(v1, v2) {
        if (v2 instanceof Vec) {
            return new Vec(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z)
        }
        return new Vec(
            v1.x - (arguments[1] ?? 0),
            v1.y - (arguments[2] ?? 0),
            v1.z - (arguments[3] ?? 0)
        )
    }

    /**
     * Multiply a vector by another vector or scalar
     * @param {Vec} v1 - Vector to multiply
     * @param {Vec|number} v2 - Vector or scalar to multiply by
     * @returns {Vec} New product vector
     */
    static mult(v1, v2) {
        if (v2 instanceof Vec) {
            return new Vec(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z)
        }
        return new Vec(v1.x * v2, v1.y * v2, v1.z * v2)
    }

    /**
     * Divide a vector by another vector or scalar
     * @param {Vec} v1 - Vector to divide
     * @param {Vec|number} v2 - Vector or scalar to divide by
     * @returns {Vec} New quotient vector
     */
    static div(v1, v2) {
        if (v2 instanceof Vec) {
            return new Vec(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z)
        }
        return new Vec(v1.x / v2, v1.y / v2, v1.z / v2)
    }

    /**
     * Calculate dot product of two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} Dot product
     */
    static dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z
    }

    /**
    * Calculate cross product of two vectors
    * @param {Vec} v1 - First vector
    * @param {Vec} v2 - Second vector
    * @returns {Vec} Cross product
    */
   static cross(v1, v2) {
       return new Vec(
           v1.y * v2.z - v1.z * v2.y,
           v1.z * v2.x - v1.x * v2.z,
           v1.x * v2.y - v1.y * v2.x
       );
   }

    /**
     * Calculate squared magnitude of a vector
     * @param {Vec} v - Vector to calculate
     * @returns {number} Squared magnitude
     */
    static magSq(v) {
        return v.x * v.x + v.y * v.y + v.z * v.z
    }

    /**
     * Calculate magnitude of a vector
     * @param {Vec} v - Vector to calculate
     * @returns {number} Magnitude
     */
    static mag(v) {
        return Math.sqrt(Vec.magSq(v))
    }

    /**
     * Calculate the 2D distance between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} 2D Distance
     */
    static dist2D(v1, v2) {
        const dx = v1.x - v2.x;
        const dy = v1.y - v2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * Calculate the 3D distance between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} 3D Distance
     */
    static dist3D(v1, v2) {
        const dx = v1.x - v2.x;
        const dy = v1.y - v2.y;
        const dz = v1.z - v2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    /**
     * Calculate the distance between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} Distance
     */
    static dist(v1, v2) {
        return Vec.dist3D(v1,v2)
    }

    /**
     * Normalize a vector to length 1
     * @param {Vec} v - Vector to normalize
     * @returns {Vec} New normalized vector
     */
    static norm(v) {
        return v.clone().div(v.mag())
    }

    /**
     * Set a vector's magnitude
     * @param {Vec} v - Vector to modify
     * @param {number} mag - Target magnitude
     * @returns {Vec} New vector with specified magnitude
     */
    static setMag(v, mag) {
        return v.clone().norm().mult(mag)
    }

    /**
     * Limit a vector's magnitude
     * @param {Vec} v - Vector to limit
     * @param {number} mag - Maximum magnitude
     * @returns {Vec} New vector with limited magnitude
     */
    static limit(v, mag) {
        return v.mag() > mag ? v.clone().setMag(mag) : v.clone()
    }

    /**
     * Invert a vector's direction
     * @param {Vec} v - Vector to invert
     * @returns {Vec} New inverted vector
     */
    static invert(v) {
        return new Vec(-v.x, -v.y, -v.z)
    }

    /**
     * Round a vector's components to nearest integer
     * @param {Vec} v - Vector to round
     * @returns {Vec} New vector with rounded components
     */
    static round(v) {
        return new Vec(Math.round(v.x), Math.round(v.y), Math.round(v.z))
    }

    /**
     * Check if two vectors are equal
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {boolean} True if vectors are equal
     */
    static isEqual(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z
    }

    /**
     * Check if two vectors are equal within a given tolerance
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @param {number} tolerance - Tolerance value
     * @returns {boolean} True if vectors are equal within tolerance
     */
    static isEqualWithTolerance(v1, v2, tolerance) {
        return (
            Math.abs(v1.x - v2.x) <= tolerance &&
            Math.abs(v1.y - v2.y) <= tolerance &&
            Math.abs(v1.z - v2.z) <= tolerance
        );
    }

    /**
     * Linearly interpolate between two vectors
     * @param {Vec} v1 - Start vector
     * @param {Vec} v2 - End vector
     * @param {number} amount - Interpolation amount (0-1)
     * @returns {Vec} New interpolated vector
     */
    static lerp(v1, v2, amount) {
        const lerp = (a, b, amnt) => a + (b - a) * amnt
        return new Vec(
            lerp(v1.x, v2.x, amount),
            lerp(v1.y, v2.y, amount),
            lerp(v1.z, v2.z, amount)
        )
    }

    /**
     * Rotate a vector around an arbitrary axis by theta radians
     * @param {Vec} v - Vector to rotate
     * @param {Vec} axis - Axis to rotate around
     * @param {number} theta - Angle in radians
     * @returns {Vec} New rotated vector
     */
    static axisRot(v, axis, theta) {
        const cos = Math.cos(theta)
        const sin = Math.sin(theta)
        const t = 1 - cos
        const { x, y, z } = Vec.norm(axis)
        const before = v.clone()

        return new Vec(
            new Vec(cos + x*x*t, x*y*t - z*sin, x*z*t + y*sin).dot(before),
            new Vec(x*y*t + z*sin, cos + y*y*t, y*z*t - x*sin).dot(before),
            new Vec(z*x*t - y*sin, z*y*t + x*sin, cos + z*z*t).dot(before)
        )
    }

    /**
     * Rotate a vector in the XY plane by theta radians
     * @param {Vec} v - Vector to rotate
     * @param {number} theta - Angle in radians
     * @returns {Vec} New rotated vector
     */
    static rotate2D(v, theta) {
        return Vec.axisRot(v, new Vec(0, 0, 1), theta)
    }

    /**
     * Get a vector's heading (angle relative to positive x-axis)
     * @param {Vec} v - Vector to get heading of
     * @returns {number} Angle in radians
     */
    static heading(v) {
        return Math.atan2(v.y, v.x)
    }

    /**
     * Calculate angle between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} Angle in radians
     */
    static angleBetween(v1, v2) {
        return Math.acos(Vec.dot(v1, v2) / (Vec.mag(v1) * Vec.mag(v2)))
    }

    /**
     * Project a vector onto another vector
     * @param {Vec} v - Vector to project
     * @param {Vec} onto - Vector to project onto
     * @returns {Vec} New projected vector
     */
    static project(v, onto) {
        const magSq = Vec.magSq(onto);
        if (magSq === 0) {
            return new Vec(); // Avoid division by zero
        }
        const scale = Vec.dot(v, onto) / magSq;
        return onto.clone().mult(scale);
    }

    /**
     * Reflect a vector across a normal
     * @param {Vec} v - Vector to reflect
     * @param {Vec} normal - Normal vector
     * @returns {Vec} New reflected vector
     */
    static reflect(v, normal) {
        const proj = Vec.project(v, normal);
        return Vec.sub(v, Vec.mult(proj, 2));
    }

    /**
     * Generate a random 2D vector with components between min and max, defaults to unit vector
     * @param {number} [min=-1] - Minimum value for components
     * @param {number} [max=1] - Maximum value for components
     * @returns {Vec} New random 2D vector
     */
    static random2D(min = -1, max = 1) {
        const x = Math.random() * (max - min) + min;
        const y = Math.random() * (max - min) + min;
        return new Vec(x, y);
    }

    /**
     * Generate a random 3D vector with components between min and max, defaults to unit vector
     * @param {number} [min=-1] - Minimum value for components
     * @param {number} [max=1] - Maximum value for components
     * @returns {Vec} New random 3D vector
     */
    static random3D(min = -1, max = 1) {
        const x = Math.random() * (max - min) + min;
        const y = Math.random() * (max - min) + min;
        const z = Math.random() * (max - min) + min;
        return new Vec(x, y, z);
    }

    /**
     * Check if a vector is a zero vector
     * @param {Vec} v - Vector to check
     * @returns {boolean} True if vector is zero vector
     */
    static isZero(v) {
        return v.x === 0 && v.y === 0 && v.z === 0;
    }

    /**
     * Create a vector from an array
     * @param {number[]} arr - Array with vector components
     * @returns {Vec} New vector
     */
    static fromArray(arr) {
        return new Vec(arr[0] ?? 0, arr[1] ?? 0, arr[2] ?? 0);
    }
}