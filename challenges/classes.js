// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.




// function CuboidMaker(length, width, height) {
//     this.length = length,
//     this.width = width,
//     this.height = height
//   }
  

class CuboidMaker {
    constructor(length, width, height) {
    this.length = length,
    this.width = width,
    this.height = height
    }
};

class CubeMaker extends CuboidMaker {
    constructor(l, w, h) {
        super(l, w,  h);    }
    volcube () {
        const cube = parseInt(`${this.length}`);
        return cube * cube * cube;
    } 
}


  CuboidMaker.prototype.volume = function() {
    const length = parseInt(`${this.length}`); // created variable from string to integer...why string?
    const width =  parseInt(`${this.width}`);
    const height = parseInt(`${this.height}`);
    return length * width * height;
  }
    
  CuboidMaker.prototype.surfaceArea = function() {
    const length = parseInt(`${this.length}`); // created variable from string integer
    const width =  parseInt(`${this.width}`);
    const height = parseInt(`${this.height}`);
    return 2 * (length * width + length * height + width * height)
  }
  
  
  const cuboid = new CuboidMaker(5, 4, 5)
  const cubed = new CubeMaker(5, 4, 5)
  
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  
//   console.log(cuboid.volume()); // 100
//   console.log(cuboid.surfaceArea()); // 130
// console.log(cuboid.volcube());
  
  console.log(cubed.volcube())