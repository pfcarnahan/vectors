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
     * Check if this vector equals another vector
     * @param {Vec} v - Vector to compare with
     * @returns {boolean} True if vectors are equal
     */
    isEqual(v) { return Vec.isEqual(this, v) }

    // Instance methods - return new objects
    /**
     * Create a copy of this vector
     * @returns {Vec} New vector with same components
     */
    clone() { return new Vec(this.x, this.y, this.z) }

    /**
     * Convert to p5.js vector
     * @returns {p5.Vector} Equivalent p5.Vector
     */
    asP5() { return Vec.asP5(this) }

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
     * Convert to p5.js vector
     * @param {Vec} v - Vector to convert
     * @returns {p5.Vector} New p5.Vector
     */
    static asP5(v) {
        return new p5.Vector(v.x, v.y, v.z)
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
} 