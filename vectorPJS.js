var Vec = (function() {
    //Version 1.1.0
    
    Object.constructor.prototype.new = (function() {
        var obj = Object.create(this.prototype);
        this.apply(obj, arguments);
        return obj;
    }); // 'new' leak patch. Calling '{CONSTRUCTOR NAME}.new({ARGUMENTS})' Will function the same as 'new {CONSTRUCTOR NAME}({ARGUMENTS})'


    /**
     * Create a new vector
     * @constructor
     * @param {number} [x=0] - X component
     * @param {number} [y=0] - Y component
     * @param {number} [z=0] - Z component
     * @returns {Vec} New Vec instance
     */
    function Vec(x, y, z) {
        this.x = Number(x || 0);
        this.y = Number(y || 0);
        this.z = Number(z || 0);
    }

    //------------------------------------------------------------------------------
    // Instance methods that modify this vector and return it
    //------------------------------------------------------------------------------

    /**
     * Add another vector or components to this vector
     * @param {Vec|number} v - Vector or x component to add
     * @param {number} [y] - Y component to add
     * @param {number} [z] - Z component to add
     * @returns {Vec} This vector
     */
    Vec.prototype.add = function(v, y, z) {
        return this.set(Vec.add(this, v, y, z));
    };

    /**
     * Subtract another vector or components from this vector
     * @param {Vec|number} v - Vector or x component to subtract
     * @param {number} [y] - Y component to subtract
     * @param {number} [z] - Z component to subtract
     * @returns {Vec} This vector
     */
    Vec.prototype.sub = function(v, y, z) {
        return this.set(Vec.sub(this, v, y, z));
    };

    /**
     * Multiply this vector by another vector or scalar
     * @param {Vec|number} v - Vector or scalar to multiply by
     * @returns {Vec} This vector
     */
    Vec.prototype.mult = function(v) {
        return this.set(Vec.mult(this, v));
    };

    /**
     * Divide this vector by another vector or scalar
     * @param {Vec|number} v - Vector or scalar to divide by
     * @returns {Vec} This vector
     */
    Vec.prototype.div = function(v) {
        return this.set(Vec.div(this, v));
    };

    /**
     * Invert this vector's direction
     * @returns {Vec} This vector
     */
    Vec.prototype.invert = function() {
        return this.set(Vec.invert(this));
    };

    /**
     * Normalize this vector to length 1
     * @returns {Vec} This vector
     */
    Vec.prototype.norm = function() {
        return this.set(Vec.norm(this));
    };

    /**
     * Set this vector's magnitude
     * @param {number} mag - Target magnitude
     * @returns {Vec} This vector
     */
    Vec.prototype.setMag = function(mag) {
        return this.set(Vec.setMag(this, mag));
    };

    /**
     * Limit this vector's magnitude
     * @param {number} mag - Maximum magnitude
     * @returns {Vec} This vector
     */
    Vec.prototype.limit = function(mag) {
        return this.set(Vec.limit(this, mag));
    };

    /**
     * Rotate this vector in the XY plane
     * @param {number} theta - Angle in radians
     * @returns {Vec} This vector
     */
    Vec.prototype.rotate2D = function(theta) {
        return this.set(Vec.rotate2D(this, theta));
    };

    /**
     * Linearly interpolate this vector toward another vector
     * @param {Vec} v - Target vector
     * @param {number} amount - Interpolation amount (0-1)
     * @returns {Vec} This vector
     */
    Vec.prototype.lerp = function(v, amount) {
        return this.set(Vec.lerp(this, v, amount));
    };

    /**
     * Round this vector's components to nearest integer
     * @returns {Vec} This vector
     */
    Vec.prototype.round = function() {
        return this.set(Vec.round(this));
    };

    //------------------------------------------------------------------------------
    // Instance methods that return scalar values
    //------------------------------------------------------------------------------

    /**
     * Get this vector's heading (angle relative to positive x-axis)
     * @returns {number} Angle in radians
     */
    Vec.prototype.heading = function() {
        return Vec.heading(this);
    };

    /**
     * Calculate angle between this vector and another vector
     * @param {Vec} v - Vector to calculate angle with
     * @returns {number} Angle in radians
     */
    Vec.prototype.angleBetween = function(v) {
        return Vec.angleBetween(this, v);
    };

    /**
     * Calculate dot product with another vector
     * @param {Vec} v - Vector to dot with
     * @returns {number} Dot product
     */
    Vec.prototype.dot = function(v) {
        return Vec.dot(this, v);
    };

    /**
     * Calculate cross product with another vector
     * @param {Vec} v - Vector to cross with
     * @returns {Vec} Cross product vector
     */
    Vec.prototype.cross = function(v) {
        return Vec.cross(this, v);
    };

    /**
     * Calculate squared magnitude of this vector
     * @returns {number} Squared magnitude
     */
    Vec.prototype.magSq = function() {
        return Vec.magSq(this);
    };

    /**
     * Calculate magnitude of this vector
     * @returns {number} Magnitude
     */
    Vec.prototype.mag = function() {
        return Vec.mag(this);
    };

    /**
     * Check if this vector equals another vector
     * @param {Vec} v - Vector to compare with
     * @returns {boolean} True if vectors are equal
     */
    Vec.prototype.isEqual = function(v) {
        return Vec.isEqual(this, v);
    };

    //------------------------------------------------------------------------------
    // Instance methods that return new objects
    //------------------------------------------------------------------------------

    /**
     * Create a copy of this vector
     * @returns {Vec} New vector with same components
     */
    Vec.prototype.clone = function() {
        return Vec.new(this.x, this.y, this.z);
    };

    /**
     * Set this vector's components
     * @param {Vec|number} x - Vector or x component
     * @param {number} [y] - Y component
     * @param {number} [z] - Z component
     * @returns {Vec} This vector
     */
    Vec.prototype.set = function(x, y, z) {
        if (x instanceof Vec) {
            this.x = x.x;
            this.y = x.y;
            this.z = x.z;
        } else {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        return this;
    };

    //------------------------------------------------------------------------------
    // Static vector operations - return new vectors
    //------------------------------------------------------------------------------

    /**
     * Add two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec|number} v2 - Second vector or x component
     * @param {number} [y] - Y component
     * @param {number} [z] - Z component
     * @returns {Vec} New sum vector
     */
    Vec.add = function(v1, v2) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
        }
        return Vec.new(
            v1.x + (arguments[1] || 0),
            v1.y + (arguments[2] || 0),
            v1.z + (arguments[3] || 0)
        );
    };

    /**
     * Subtract two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec|number} v2 - Second vector or x component
     * @param {number} [y] - Y component
     * @param {number} [z] - Z component
     * @returns {Vec} New difference vector
     */
    Vec.sub = function(v1, v2) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
        }
        return Vec.new(
            v1.x - (arguments[1] || 0),
            v1.y - (arguments[2] || 0),
            v1.z - (arguments[3] || 0)
        );
    };

    /**
     * Multiply a vector by another vector or scalar
     * @param {Vec} v1 - Vector to multiply
     * @param {Vec|number} v2 - Vector or scalar to multiply by
     * @returns {Vec} New product vector
     */
    Vec.mult = function(v1, v2) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
        }
        return Vec.new(v1.x * v2, v1.y * v2, v1.z * v2);
    };

    /**
     * Divide a vector by another vector or scalar
     * @param {Vec} v1 - Vector to divide
     * @param {Vec|number} v2 - Vector or scalar to divide by
     * @returns {Vec} New quotient vector
     */
    Vec.div = function(v1, v2) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
        }
        return Vec.new(v1.x / v2, v1.y / v2, v1.z / v2);
    };

    /**
     * Calculate dot product of two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} Dot product
     */
    Vec.dot = function(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    };

    /**
     * Calculate squared magnitude of a vector
     * @param {Vec} v - Vector to calculate
     * @returns {number} Squared magnitude
     */
    Vec.magSq = function(v) {
        return v.x * v.x + v.y * v.y + v.z * v.z;
    };

    /**
     * Calculate magnitude of a vector
     * @param {Vec} v - Vector to calculate
     * @returns {number} Magnitude
     */
    Vec.mag = function(v) {
        return Math.sqrt(Vec.magSq(v));
    };

    /**
     * Normalize a vector to length 1
     * @param {Vec} v - Vector to normalize
     * @returns {Vec} New normalized vector
     */
    Vec.norm = function(v) {
        return v.clone().div(v.mag());
    };

    /**
     * Set a vector's magnitude
     * @param {Vec} v - Vector to modify
     * @param {number} mag - Target magnitude
     * @returns {Vec} New vector with specified magnitude
     */
    Vec.setMag = function(v, mag) {
        return v.clone().norm().mult(mag);
    };

    /**
     * Limit a vector's magnitude
     * @param {Vec} v - Vector to limit
     * @param {number} mag - Maximum magnitude
     * @returns {Vec} New vector with limited magnitude
     */
    Vec.limit = function(v, mag) {
        return v.mag() > mag ? v.clone().setMag(mag) : v.clone();
    };

    /**
     * Invert a vector's direction
     * @param {Vec} v - Vector to invert
     * @returns {Vec} New inverted vector
     */
    Vec.invert = function(v) {
        return Vec.new(-v.x, -v.y, -v.z);
    };

    /**
     * Round a vector's components to nearest integer
     * @param {Vec} v - Vector to round
     * @returns {Vec} New vector with rounded components
     */
    Vec.round = function(v) {
        return Vec.new(Math.round(v.x), Math.round(v.y), Math.round(v.z));
    };

    /**
     * Check if two vectors are equal
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {boolean} True if vectors are equal
     */
    Vec.isEqual = function(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    };

    /**
     * Linearly interpolate between two vectors
     * @param {Vec} v1 - Start vector
     * @param {Vec} v2 - End vector
     * @param {number} amount - Interpolation amount (0-1)
     * @returns {Vec} New interpolated vector
     */
    Vec.lerp = function(v1, v2, amount) {
        var lerp = function(a, b, amnt) {
            return a + (b - a) * amnt;
        };
        return Vec.new(
            lerp(v1.x, v2.x, amount),
            lerp(v1.y, v2.y, amount),
            lerp(v1.z, v2.z, amount)
        );
    };

    /**
     * Rotate a vector around an arbitrary axis by theta radians
     * @param {Vec} v - Vector to rotate
     * @param {Vec} axis - Axis to rotate around
     * @param {number} theta - Angle in radians
     * @returns {Vec} New rotated vector
     */
    Vec.axisRot = function(v, axis, theta) {
        var cos = Math.cos(theta);
        var sin = Math.sin(theta);
        var t = 1 - cos;
        var normAxis = Vec.norm(axis);
        var x = normAxis.x;
        var y = normAxis.y;
        var z = normAxis.z;
        var before = v.clone();

        return Vec.new(
            Vec.new(cos + x*x*t, x*y*t - z*sin, x*z*t + y*sin).dot(before),
            Vec.new(x*y*t + z*sin, cos + y*y*t, y*z*t - x*sin).dot(before),
            Vec.new(z*x*t - y*sin, z*y*t + x*sin, cos + z*z*t).dot(before)
        );
    };

    /**
     * Rotate a vector in the XY plane by theta radians
     * @param {Vec} v - Vector to rotate
     * @param {number} theta - Angle in radians
     * @returns {Vec} New rotated vector
     */
    Vec.rotate2D = function(v, theta) {
        return Vec.axisRot(v, Vec.new(0, 0, 1), theta);
    };

    /**
     * Get a vector's heading (angle relative to positive x-axis)
     * @param {Vec} v - Vector to get heading of
     * @returns {number} Angle in radians
     */
    Vec.heading = function(v) {
        return Math.atan2(v.y, v.x);
    };

    /**
     * Calculate angle between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} Angle in radians
     */
    Vec.angleBetween = function(v1, v2) {
        return Math.acos(Vec.dot(v1, v2) / (Vec.mag(v1) * Vec.mag(v2)));
    };

    return Vec;
})();
