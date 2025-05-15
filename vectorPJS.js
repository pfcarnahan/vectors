var Vec = (function() {
    // Patch for creating new objects using the form ClassName.new()
    Object.constructor.prototype.new = function() {
        var obj = Object.create(this.prototype);
        this.apply(obj, arguments);
        return obj;
    };


    /**
     * Creates a new 3D vector.
     * @constructor
     * @param {number} [x=0] - The x component.
     * @param {number} [y=0] - The y component.
     * @param {number} [z=0] - The z component.
     */
    function Vec(x, y, z) {
        this.x = Number(x || 0);
        this.y = Number(y || 0);
        this.z = Number(z || 0);
    }

    // Instance methods that modify the vector and return it

    /**
     * Adds another vector or components to this vector.
     * @param {Vec|number} v - The vector or x component to add.
     * @param {number} [y] - The y component to add.
     * @param {number} [z] - The z component to add.
     * @returns {Vec} This vector.
     */
    Vec.prototype.add = function(v, y, z) {
        return this.set(Vec.add(this, v, y, z));
    };

    /**
     * Subtracts another vector or components from this vector.
     * @param {Vec|number} v - The vector or x component to subtract.
     * @param {number} [y] - The y component to subtract.
     * @param {number} [z] - The z component to subtract.
     * @returns {Vec} This vector.
     */
    Vec.prototype.sub = function(v, y, z) {
        return this.set(Vec.sub(this, v, y, z));
    };

    /**
     * Multiplies this vector by another vector or a scalar.
     * @param {Vec|number} v - The vector or scalar to multiply by.
     * @returns {Vec} This vector.
     */
    Vec.prototype.mult = function(v) {
        return this.set(Vec.mult(this, v));
    };

    /**
     * Divides this vector by another vector or a scalar.
     * @param {Vec|number} v - The vector or scalar to divide by.
     * @returns {Vec} This vector.
     */
    Vec.prototype.div = function(v) {
        return this.set(Vec.div(this, v));
    };

    /**
     * Inverts this vector's direction.
     * @returns {Vec} This vector.
     */
    Vec.prototype.invert = function() {
        return this.set(Vec.invert(this));
    };

    /**
     * Normalizes this vector to length 1.
     * @returns {Vec} This vector.
     */
    Vec.prototype.norm = function() {
        return this.set(Vec.norm(this));
    };

    /**
     * Sets this vector's magnitude.
     * @param {number} mag - The target magnitude.
     * @returns {Vec} This vector.
     */
    Vec.prototype.setMag = function(mag) {
        return this.set(Vec.setMag(this, mag));
    };

    /**
     * Limits this vector's magnitude.
     * @param {number} mag - The maximum magnitude.
     * @returns {Vec} This vector.
     */
    Vec.prototype.limit = function(mag) {
        return this.set(Vec.limit(this, mag));
    };

    /**
     * Rotates this vector in the XY plane.
     * @param {number} theta - The angle in radians.
     * @returns {Vec} This vector.
     */
    Vec.prototype.rotate2D = function(theta) {
        return this.set(Vec.rotate2D(this, theta));
    };

    /**
     * Rotate a vector around an arbitrary axis by theta radians
     * @param {Vec} axis - Axis to rotate around
     * @param {number} theta - Angle in radians
     * @returns {Vec} The rotated vector
     */
    Vec.prototype.axisRot = function(axis, theta) {
        return this.set(Vec.axisRot(this, axis, theta));
    };

    /**
     * Linearly interpolates this vector toward another vector.
     * @param {Vec} v - The target vector.
     * @param {number} amount - The interpolation amount (0-1).
     * @returns {Vec} This vector.
     */
    Vec.prototype.lerp = function(v, amount) {
        return this.set(Vec.lerp(this, v, amount));
    };

    /**
     * Rounds this vector's components to the nearest integer.
     * @returns {Vec} This vector.
     */
    Vec.prototype.round = function() {
        return this.set(Vec.round(this));
    };

    /**
     * Projects this vector onto another vector.
     * @param {Vec} onto - The vector to project onto.
     * @returns {Vec} This vector.
     */
    Vec.prototype.project = function(onto) {
        return this.set(Vec.project(this, onto));
    };

    /**
     * Reflects this vector across a normal.
     * @param {Vec} normal - The normal vector.
     * @returns {Vec} This vector.
     */
    Vec.prototype.reflect = function(normal) {
        return this.set(Vec.reflect(this, normal));
    };

    // Instance methods that return scalar values

    /**
     * Gets this vector's heading (angle relative to positive x-axis).
     * @returns {number} The angle in radians.
     */
    Vec.prototype.heading = function() {
        return Vec.heading(this);
    };

    /**
     * Calculates the angle between this vector and another vector.
     * @param {Vec} v - The other vector.
     * @returns {number} The angle in radians.
     */
    Vec.prototype.angleBetween = function(v) {
        return Vec.angleBetween(this, v);
    };

    /**
     * Calculates the dot product with another vector.
     * @param {Vec} v - The other vector.
     * @returns {number} The dot product.
     */
    Vec.prototype.dot = function(v) {
        return Vec.dot(this, v);
    };

    /**
     * Calculates the squared magnitude of this vector.
     * @returns {number} The squared magnitude.
     */
    Vec.prototype.magSq = function() {
        return Vec.magSq(this);
    };

    /**
     * Calculates the magnitude of this vector.
     * @returns {number} The magnitude.
     */
    Vec.prototype.mag = function() {
        return Vec.mag(this);
    };

    /**
     * Checks if this vector equals another vector.
     * @param {Vec} v - The vector to compare with.
     * @returns {boolean} True if the vectors are equal, false otherwise.
     */
    Vec.prototype.isEqual = function(v) {
        return Vec.isEqual(this, v);
    };

    /**
     * Calculates the 2D distance between this vector and another vector.
     * @param {Vec} v - The other vector.
     * @returns {number} The 2D distance.
     */
    Vec.prototype.dist2D = function(v) {
        return Vec.dist2D(this, v);
    };

    /**
     * Calculates the 3D distance between this vector and another vector.
     * @param {Vec} v - The other vector.
     * @returns {number} The 3D distance.
     */
    Vec.prototype.dist3D = function(v) {
        return Vec.dist3D(this, v);
    };

    /**
     * Calculates the distance between this vector and another vector.
     * @param {Vec} v - The other vector.
     * @returns {number} The distance.
     */
    Vec.prototype.dist = function(v) {
        return Vec.dist(this, v);
    };

    /**
     * Calculates the squared distance between this vector and another vector. (Less computationally expensive)
     * @param {Vec} v - The other vector.
     * @returns {number} The squared distance.
    */
    Vec.prototype.distSq = function(v) {
        return Vec.distSq(this, v);
    };

    /**
     * Checks if this vector is a zero vector.
     * @returns {boolean} True if this vector is a zero vector.
     */
    Vec.prototype.isZero = function() {
        return Vec.isZero(this);
    };

    /**
     * Checks if this vector is equal to another vector within a given tolerance.
     * @param {Vec} v - The vector to compare with.
     * @param {number} tolerance - Tolerance value.
     * @returns {boolean} True if vectors are equal within tolerance.
     */
    Vec.prototype.isEqualWithTolerance = function(v, tolerance) {
        return Vec.isEqualWithTolerance(this, v, tolerance);
    };

    // Instance methods that return new vectors

    /**
     * Creates a copy of this vector.
     * @returns {Vec} A new vector with the same components.
     */
    Vec.prototype.clone = function() {
        return Vec.new(this.x, this.y, this.z);
    };

    /**
     * Sets this vector's components.
     * @param {Vec|number} x - The vector or x component.
     * @param {number} [y] - The y component.
     * @param {number} [z] - The z component.
     * @returns {Vec} This vector.
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

    /**
     * Calculates the cross product of this vector and another vector.
     * @param {Vec} v The other vector.
     * @returns {Vec} The cross product.
     */
    Vec.prototype.cross = function(v) {
        return Vec.cross(this, v);
    };

    // Instance methods that convert to a different format

    /**
     * Converts this vector to an array.
     * @returns {number[]} An array containing the vector components [x, y, z].
     */
    Vec.prototype.toArray = function() {
        return [this.x, this.y, this.z];
    };

    /**
    * Create a string representation of a vector.
    * Called automatically when you println() or debug(), etc. a Vec.
    * @returns {string} String representation of the vector
    */
    Vec.prototype.toString = function() {
        return "Vec(x: "+this.x+", y: "+this.y+", z: "+this.z+")";
    };

    // Static vector operations

    /**
     * Adds two vectors or components.
     * @param {Vec} v1 - The first vector.
     * @param {Vec|number} v2 - The second vector or x component.
     * @param {number} [y] - The y component.
     * @param {number} [z] - The z component.
     * @returns {Vec} The sum vector.
     */
    Vec.add = function(v1, v2, y, z) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
        }
        return Vec.new(v1.x + (v2 || 0), v1.y + (y || 0), v1.z + (z || 0));
    };

    /**
     * Subtracts two vectors or components.
     * @param {Vec} v1 - The first vector.
     * @param {Vec|number} v2 - The second vector or x component.
     * @param {number} [y] - The y component.
     * @param {number} [z] - The z component.
     * @returns {Vec} The difference vector.
     */
    Vec.sub = function(v1, v2, y, z) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
        }
        return Vec.new(v1.x - (v2 || 0), v1.y - (y || 0), v1.z - (z || 0));
    };

    /**
     * Multiplies a vector by another vector or a scalar.
     * @param {Vec} v1 - The vector to multiply.
     * @param {Vec|number} v2 - The vector or scalar to multiply by.
     * @returns {Vec} The product vector.
     */
    Vec.mult = function(v1, v2) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
        }
        return Vec.new(v1.x * v2, v1.y * v2, v1.z * v2);
    };

    /**
     * Divides a vector by another vector or a scalar.
     * @param {Vec} v1 - The vector to divide.
     * @param {Vec|number} v2 - The vector or scalar to divide by.
     * @returns {Vec} The quotient vector.
     */
    Vec.div = function(v1, v2) {
        if (v2 instanceof Vec) {
            return Vec.new(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
        }
        return Vec.new(v1.x / v2, v1.y / v2, v1.z / v2);
    };

    /**
     * Calculates the dot product of two vectors.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @returns {number} The dot product.
     */
    Vec.dot = function(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
    };

    /**
     * Calculates the cross product of two vectors.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @returns {Vec} The cross product.
     */
    Vec.cross = function(v1, v2) {
        return Vec.new(
            v1.y * v2.z - v1.z * v2.y,
            v1.z * v2.x - v1.x * v2.z,
            v1.x * v2.y - v1.y * v2.x
        );
    };

    /**
     * Calculates the squared magnitude of a vector.
     * @param {Vec} v - The vector.
     * @returns {number} The squared magnitude.
     */
    Vec.magSq = function(v) {
        return v.x * v.x + v.y * v.y + v.z * v.z;
    };

    /**
     * Calculates the magnitude of a vector.
     * @param {Vec} v - The vector.
     * @returns {number} The magnitude.
     */
    Vec.mag = function(v) {
        return Math.sqrt(Vec.magSq(v));
    };

    /**
     * Normalizes a vector to length 1.
     * @param {Vec} v - The vector to normalize.
     * @returns {Vec} The normalized vector.
     */
    Vec.norm = function(v) {
        return Vec.div(v, v.mag());
    };

    /**
     * Sets a vector's magnitude.
     * @param {Vec} v - The vector.
     * @param {number} mag - The target magnitude.
     * @returns {Vec} The vector with the new magnitude.
     */
    Vec.setMag = function(v, mag) {
        return v.clone().norm().mult(mag);
    };

    /**
     * Limits a vector's magnitude.
     * @param {Vec} v - The vector.
     * @param {number} mag - The maximum magnitude.
     * @returns {Vec} The limited vector.
     */
    Vec.limit = function(v, mag) {
        return v.mag() > mag ? Vec.setMag(v, mag) : v.clone();
    };

    /**
     * Inverts a vector's direction.
     * @param {Vec} v - The vector to invert.
     * @returns {Vec} The inverted vector.
     */
    Vec.invert = function(v) {
        return Vec.new(-v.x, -v.y, -v.z);
    };

    /**
     * Rounds a vector's components to the nearest integer.
     * @param {Vec} v - The vector to round.
     * @returns {Vec} The rounded vector.
     */
    Vec.round = function(v) {
        return Vec.new(Math.round(v.x), Math.round(v.y), Math.round(v.z));
    };

    /**
     * Calculate the 2D distance between two vectors.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @returns {number} The 2D distance.
     */
    Vec.dist2D = function(v1, v2) {
        var dx = v1.x - v2.x;
        var dy = v1.y - v2.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    /**
     * Calculate the 3D distance between two vectors.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @returns {number} The 3D distance.
     */
    Vec.dist3D = function(v1, v2) {
        var dx = v1.x - v2.x;
        var dy = v1.y - v2.y;
        var dz = v1.z - v2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };

    /**
     * Calculate the squared distance between two vectors.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @returns {number} The squared distance.
     */
    Vec.distSq = function(v1, v2) {
        var dx = v1.x - v2.x;
        var dy = v1.y - v2.y;
        var dz = v1.z - v2.z;
        return dx * dx + dy * dy + dz * dz;
    };

    /**
     * Checks if two vectors are equal.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @returns {boolean} True if equal, false otherwise.
     */
    Vec.isEqual = function(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    };

    /**
     * Linearly interpolates between two vectors.
     * @param {Vec} v1 - The start vector.
     * @param {Vec} v2 - The end vector.
     * @param {number} amount - The interpolation amount (0-1).
     * @returns {Vec} The interpolated vector.
     */
    Vec.lerp = function(v1, v2, amount) {
        var lerp = function(a, b, amnt) {
            return a + (b - a) * amnt;
        };
        return Vec.new(lerp(v1.x, v2.x, amount), lerp(v1.y, v2.y, amount), lerp(v1.z, v2.z, amount));
    };

    /**
     * Rotate a vector around an arbitrary axis by theta radians
     * @param {Vec} v - Vector to rotate
     * @param {Vec} axis - Axis to rotate around
     * @param {number} theta - Angle in radians
     * @returns {Vec} New rotated vector
     */
    Vec.axisRot = function(v, axis, theta) {
        var c = cos(theta);
        var s = sin(theta);
        var t = 1 - c;
        var n = Vec.norm(axis);
        var x = n.x;
        var y = n.y;
        var z = n.z;
        var before = v.clone();

        return Vec.new(
            Vec.new(c + x*x*t, x*y*t - z*s, x*z*t + y*s).dot(before),
            Vec.new(x*y*t + z*s, c + y*y*t, y*z*t - x*s).dot(before),
            Vec.new(z*x*t - y*s, z*y*t + x*s, c + z*z*t).dot(before)
        );
    };

    /**
     * Rotates a vector in the XY plane.
     * @param {Vec} v - The vector to rotate.
     * @param {number} theta - The angle in radians.
     * @returns {Vec} The rotated vector.
     */
    Vec.rotate2D = function(v, theta) {
        return Vec.axisRot(v, Vec.new(0, 0, 1), theta);
    };

    /**
     * Gets a vector's heading (angle relative to positive x-axis).
     * @param {Vec} v - The vector.
     * @returns {number} The heading in radians.
     */
    Vec.heading = function(v) {
        return atan2(v.y, v.x);
    };

    /**
     * Calculates the angle between two vectors.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @returns {number} The angle in radians.
     */
    Vec.angleBetween = function(v1, v2) {
        return acos(Vec.dot(v1, v2) / (Vec.mag(v1) * Vec.mag(v2)));
    };

    /**
     * Projects a vector onto another vector.
     * @param {Vec} v - The vector to project.
     * @param {Vec} onto - The vector to project onto.
     * @returns {Vec} The projected vector.
     */
    Vec.project = function(v, onto) {
        var magSq = Vec.magSq(onto);
        if (magSq === 0) {
            return Vec.new();
        }
        var scale = Vec.dot(v, onto) / magSq;
        return Vec.mult(onto, scale);
    };

    /**
     * Reflects a vector across a normal.
     * @param {Vec} v - The vector to reflect.
     * @param {Vec} normal - The normal vector.
     * @returns {Vec} The reflected vector.
     */
    Vec.reflect = function(v, normal) {
        var proj = Vec.project(v, normal);
        return Vec.sub(v, Vec.mult(proj, 2));
    };

    /**
     * Generates a random 2D vector.
     * @param {number} [min=-1] - The minimum value for components.
     * @param {number} [max=1] - The maximum value for components.
     * @returns {Vec} A random 2D vector.
     */
    Vec.random2D = function(min, max) {
        min = min === undefined ? -1 : min;
        max = max === undefined ? 1 : max;
        var x = Math.random() * (max - min) + min;
        var y = Math.random() * (max - min) + min;
        return Vec.new(x, y);
    };

    /**
     * Generates a random 3D vector.
     * @param {number} [min=-1] - The minimum value for components.
     * @param {number} [max=1] - The maximum value for components.
     * @returns {Vec} A random 3D vector.
     */
    Vec.random3D = function(min, max) {
        min = min === undefined ? -1 : min;
        max = max === undefined ? 1 : max;
        var x = Math.random() * (max - min) + min;
        var y = Math.random() * (max - min) + min;
        var z = Math.random() * (max - min) + min;
        return Vec.new(x, y, z);
    };

    /**
     * Create a vector from an angle and magnitude.
     * @param {number} angle The angle in radians.
     * @param {number} magnitude The magnitude.
     * @returns {Vec} The new vector.
     */
    Vec.fromAngle = function(angle, magnitude) {
        var x = magnitude * cos(angle);
        var y = magnitude * sin(angle);
        return Vec.new(x, y, 0);
    };

    /**
     * Creates a vector from spherical coordinates.
     * @param {number} theta - The azimuthal angle in radians.
     * @param {number} phi - The polar angle in radians.
     * @param {number} length - The radial distance or magnitude.
     * @returns {Vec} The new vector.
     */
    Vec.fromAngles = function(theta, phi, length) {
        var x = length * sin(phi) * cos(theta);
        var y = length * sin(phi) * sin(theta);
        var z = length * cos(phi);
        return Vec.new(x, y, z);
    };

    /**
     * Checks if a vector is a zero vector.
     * @param {Vec} v - The vector to check.
     * @returns {boolean} True if the vector is a zero vector.
     */
    Vec.isZero = function(v) {
        return v.x === 0 && v.y === 0 && v.z === 0;
    };

    /**
     * Creates a vector from an array.
     * @param {number[]} arr - The array [x, y, z].
     * @returns {Vec} The new vector.
     */
    Vec.fromArray = function(arr) {
        return Vec.new(arr[0] || 0, arr[1] || 0, arr[2] || 0);
    };

    /**
     * Checks if two vectors are equal within a tolerance.
     * @param {Vec} v1 - The first vector.
     * @param {Vec} v2 - The second vector.
     * @param {number} tolerance - The tolerance value.
     * @returns {boolean} True if equal within tolerance.
     */
    Vec.isEqualWithTolerance = function(v1, v2, tolerance) {
        return (Math.abs(v1.x - v2.x) <= tolerance &&
            Math.abs(v1.y - v2.y) <= tolerance &&
            Math.abs(v1.z - v2.z) <= tolerance);
    };
    
    /**
     * Create a 2D vector from angle and magnitude (polar coordinates)
     * @param {number} angle - Angle in radians
     * @param {number} magnitude - Magnitude of the vector
     * @returns {Vec} New vector
     */
    Vec.fromAngle = function(angle, magnitude) {
        var x = magnitude * cos(angle);
        var y = magnitude * sin(angle);
        return Vec.new(x, y, 0);
    };

    /**
     * Create a 3D vector from two angles (theta, phi) and a length (spherical coordinates)
     * @param {number} theta - Angle in radians in the XY plane
     * @param {number} phi - Angle in radians from the positive Z axis
     * @param {number} length - Length of the vector
     * @returns {Vec} New vector
     */
    Vec.fromAngles = function(theta, phi, length) {
        var x = length * sin(phi) * cos(theta);
        var y = length * sin(phi) * sin(theta);
        var z = length * cos(phi);
        return Vec.new(x, y, z);
    };

    /**
     * Calculate the distance between two vectors
     * @param {Vec} v1 - First vector
     * @param {Vec} v2 - Second vector
     * @returns {number} Distance
     */
    Vec.dist = function(v1, v2) {
        return Vec.dist3D(v1, v2);
    };

    return Vec;
})();