// Enum for genders
export enum Genders {
  male = 'male',
  female = 'female',
}

// Interface for the gender table
export interface GenderTable {
  [key: number]: { [key: number]: { id: number; value: string } };
}

interface Flexibility {
  value: string;
  id: number;
}

// Class for patient calculations
export class PatientCalculations {
  // Static tables for men and women
  static men: GenderTable = {
    6: {
      79: { id: 1, value: 'Semi-Flex' },
      80: { id: 2, value: 'Semi-Flex' },
      100: { id: 3, value: 'Semi-Flex' },
      120: { id: 4, value: 'Semi-Flex' },
      140: { id: 5, value: 'Semi-Rigid' },
      160: { id: 6, value: 'Semi-Rigid' },
      180: { id: 7, value: 'Semi-Rigid' },
      200: { id: 8, value: 'Semi-Rigid' },
      220: { id: 9, value: 'Rigid' },
      240: { id: 10, value: 'Rigid' },
      260: { id: 11, value: 'Rigid' },
      280: { id: 12, value: 'Rigid' },
      300: { id: 13, value: 'Rigid' },
      320: { id: 14, value: 'Rigid' },
      340: { id: 15, value: 'Rigid' },
      360: { id: 16, value: 'Ultra-Rigid' },
    },
    7: {
      79: { id: 17, value: 'Semi-Flex' },
      80: { id: 18, value: 'Semi-Flex' },
      100: { id: 19, value: 'Semi-Flex' },
      120: { id: 20, value: 'Semi-Flex' },
      140: { id: 21, value: 'Semi-Rigid' },
      160: { id: 22, value: 'Semi-Rigid' },
      180: { id: 23, value: 'Semi-Rigid' },
      200: { id: 24, value: 'Rigid' },
      220: { id: 25, value: 'Rigid' },
      240: { id: 26, value: 'Rigid' },
      260: { id: 27, value: 'Rigid' },
      280: { id: 28, value: 'Rigid' },
      300: { id: 29, value: 'Rigid' },
      320: { id: 30, value: 'Rigid' },
      340: { id: 31, value: 'Rigid' },
      360: { id: 32, value: 'Ultra-Rigid' },
    },
    8: {
      79: { id: 33, value: 'Semi-Flex' },
      80: { id: 34, value: 'Semi-Flex' },
      100: { id: 35, value: 'Semi-Flex' },
      120: { id: 36, value: 'Semi-Rigid' },
      140: { id: 37, value: 'Semi-Rigid' },
      160: { id: 38, value: 'Semi-Rigid' },
      180: { id: 39, value: 'Semi-Rigid' },
      200: { id: 40, value: 'Rigid' },
      220: { id: 41, value: 'Rigid' },
      240: { id: 42, value: 'Rigid' },
      260: { id: 43, value: 'Rigid' },
      280: { id: 44, value: 'Rigid' },
      300: { id: 45, value: 'Rigid' },
      320: { id: 46, value: 'Rigid' },
      340: { id: 47, value: 'Rigid' },
      360: { id: 48, value: 'Ultra-Rigid' },
    },
    9: {
      79: { id: 49, value: 'Semi-Flex' },
      80: { id: 50, value: 'Semi-Flex' },
      100: { id: 51, value: 'Semi-Flex' },
      120: { id: 52, value: 'Semi-Rigid' },
      140: { id: 53, value: 'Semi-Rigid' },
      160: { id: 54, value: 'Semi-Rigid' },
      180: { id: 55, value: 'Rigid' },
      200: { id: 56, value: 'Rigid' },
      220: { id: 57, value: 'Rigid' },
      240: { id: 58, value: 'Rigid' },
      260: { id: 59, value: 'Rigid' },
      280: { id: 60, value: 'Rigid' },
      300: { id: 61, value: 'Rigid' },
      320: { id: 62, value: 'Rigid' },
      340: { id: 63, value: 'Ultra-Rigid' },
      360: { id: 64, value: 'Ultra-Rigid' },
    },
    10: {
      79: { id: 65, value: 'Semi-Flex' },
      80: { id: 66, value: 'Semi-Flex' },
      100: { id: 67, value: 'Semi-Rigid' },
      120: { id: 68, value: 'Semi-Rigid' },
      140: { id: 69, value: 'Semi-Rigid' },
      160: { id: 70, value: 'Semi-Rigid' },
      180: { id: 71, value: 'Rigid' },
      200: { id: 72, value: 'Rigid' },
      220: { id: 73, value: 'Rigid' },
      240: { id: 74, value: 'Rigid' },
      260: { id: 75, value: 'Rigid' },
      280: { id: 76, value: 'Rigid' },
      300: { id: 77, value: 'Rigid' },
      320: { id: 78, value: 'Rigid' },
      340: { id: 79, value: 'Ultra-Rigid' },
      360: { id: 80, value: 'Ultra-Rigid' },
    },
    11: {
      79: { id: 81, value: 'Semi-Flex' },
      80: { id: 82, value: 'Semi-Flex' },
      100: { id: 83, value: 'Semi-Rigid' },
      120: { id: 84, value: 'Semi-Rigid' },
      140: { id: 85, value: 'Semi-Rigid' },
      160: { id: 86, value: 'Rigid' },
      180: { id: 87, value: 'Rigid' },
      200: { id: 89, value: 'Rigid' },
      220: { id: 90, value: 'Rigid' },
      240: { id: 91, value: 'Rigid' },
      260: { id: 92, value: 'Rigid' },
      280: { id: 93, value: 'Rigid' },
      300: { id: 94, value: 'Rigid' },
      320: { id: 95, value: 'Ultra-Rigid' },
      340: { id: 96, value: 'Ultra-Rigid' },
      360: { id: 97, value: 'Ultra-Rigid' },
    },
    12: {
      79: { id: 98, value: 'Semi-Flex' },
      80: { id: 99, value: 'Semi-Rigid' },
      100: { id: 100, value: 'Semi-Rigid' },
      120: { id: 101, value: 'Semi-Rigid' },
      140: { id: 102, value: 'Semi-Rigid' },
      160: { id: 103, value: 'Rigid' },
      180: { id: 104, value: 'Rigid' },
      200: { id: 105, value: 'Rigid' },
      220: { id: 106, value: 'Rigid' },
      240: { id: 107, value: 'Rigid' },
      260: { id: 108, value: 'Rigid' },
      280: { id: 109, value: 'Rigid' },
      300: { id: 110, value: 'Rigid' },
      320: { id: 111, value: 'Ultra-Rigid' },
      340: { id: 112, value: 'Ultra-Rigid' },
      360: { id: 113, value: 'Ultra-Rigid' },
    },
    13: {
      79: { id: 114, value: 'Semi-Flex' },
      80: { id: 115, value: 'Semi-Rigid' },
      100: { id: 116, value: 'Semi-Rigid' },
      120: { id: 117, value: 'Semi-Rigid' },
      140: { id: 118, value: 'Rigid' },
      160: { id: 119, value: 'Rigid' },
      180: { id: 120, value: 'Rigid' },
      200: { id: 121, value: 'Rigid' },
      220: { id: 122, value: 'Rigid' },
      240: { id: 123, value: 'Rigid' },
      260: { id: 124, value: 'Rigid' },
      280: { id: 125, value: 'Rigid' },
      300: { id: 126, value: 'Ultra-Rigid' },
      320: { id: 127, value: 'Ultra-Rigid' },
      340: { id: 128, value: 'Ultra-Rigid' },
      360: { id: 129, value: 'Ultra-Rigid' },
    },
    14: {
      79: { id: 130, value: 'Semi-Rigid' },
      80: { id: 131, value: 'Semi-Rigid' },
      100: { id: 132, value: 'Semi-Rigid' },
      120: { id: 133, value: 'Semi-Rigid' },
      140: { id: 134, value: 'Rigid' },
      160: { id: 135, value: 'Rigid' },
      180: { id: 136, value: 'Rigid' },
      200: { id: 137, value: 'Rigid' },
      220: { id: 138, value: 'Rigid' },
      240: { id: 139, value: 'Rigid' },
      260: { id: 140, value: 'Rigid' },
      280: { id: 141, value: 'Rigid' },
      300: { id: 142, value: 'Ultra-Rigid' },
      320: { id: 143, value: 'Ultra-Rigid' },
      340: { id: 144, value: 'Ultra-Rigid' },
      360: { id: 145, value: 'Ultra-Rigid' },
    },
    15: {
      79: { id: 146, value: 'Semi-Rigid' },
      80: { id: 147, value: 'Semi-Rigid' },
      100: { id: 148, value: 'Semi-Rigid' },
      120: { id: 149, value: 'Rigid' },
      140: { id: 150, value: 'Rigid' },
      160: { id: 151, value: 'Rigid' },
      180: { id: 152, value: 'Rigid' },
      200: { id: 153, value: 'Rigid' },
      220: { id: 154, value: 'Rigid' },
      240: { id: 155, value: 'Rigid' },
      260: { id: 156, value: 'Rigid' },
      280: { id: 157, value: 'Ultra-Rigid' },
      300: { id: 158, value: 'Ultra-Rigid' },
      320: { id: 159, value: 'Ultra-Rigid' },
      340: { id: 160, value: 'Ultra-Rigid' },
      360: { id: 161, value: 'Ultra-Rigid' },
    },
    16: {
      79: { id: 162, value: 'Semi-Rigid' },
      80: { id: 163, value: 'Semi-Rigid' },
      100: { id: 164, value: 'Semi-Rigid' },
      120: { id: 165, value: 'Rigid' },
      140: { id: 166, value: 'Rigid' },
      160: { id: 167, value: 'Rigid' },
      180: { id: 168, value: 'Rigid' },
      200: { id: 169, value: 'Rigid' },
      220: { id: 170, value: 'Rigid' },
      240: { id: 171, value: 'Rigid' },
      260: { id: 172, value: 'Rigid' },
      280: { id: 173, value: 'Ultra-Rigid' },
      300: { id: 174, value: 'Ultra-Rigid' },
      320: { id: 175, value: 'Ultra-Rigid' },
      340: { id: 176, value: 'Ultra-Rigid' },
      360: { id: 177, value: 'Ultra-Rigid' },
    },
    17: {
      79: { id: 178, value: 'Semi-Rigid' },
      80: { id: 179, value: 'Semi-Rigid' },
      100: { id: 180, value: 'Rigid' },
      120: { id: 181, value: 'Rigid' },
      140: { id: 182, value: 'Rigid' },
      160: { id: 183, value: 'Rigid' },
      180: { id: 184, value: 'Rigid' },
      200: { id: 185, value: 'Rigid' },
      220: { id: 186, value: 'Rigid' },
      240: { id: 187, value: 'Rigid' },
      260: { id: 188, value: 'Ultra-Rigid' },
      280: { id: 189, value: 'Ultra-Rigid' },
      300: { id: 190, value: 'Ultra-Rigid' },
      320: { id: 191, value: 'Ultra-Rigid' },
      340: { id: 192, value: 'Ultra-Rigid' },
      360: { id: 193, value: 'Ultra-Rigid' },
    },
  };

  static woman: GenderTable = {
    5: {
      79: { id: 194, value: 'Semi-Flex' },
      80: { id: 195, value: 'Semi-Flex' },
      100: { id: 196, value: 'Semi-Flex' },
      120: { id: 197, value: 'Semi-Flex' },
      140: { id: 198, value: 'Semi-Flex' },
      160: { id: 199, value: 'Semi-Flex' },
      180: { id: 200, value: 'Semi-Rigid' },
      200: { id: 201, value: 'Semi-Rigid' },
      220: { id: 202, value: 'Semi-Rigid' },
      240: { id: 203, value: 'Rigid' },
      260: { id: 204, value: 'Rigid' },
      280: { id: 205, value: 'Rigid' },
      300: { id: 206, value: 'Rigid' },
      320: { id: 207, value: 'Rigid' },
      340: { id: 208, value: 'Rigid' },
      360: { id: 209, value: 'Rigid' },
    },
    6: {
      79: { id: 210, value: 'Semi-Flex' },
      80: { id: 211, value: 'Semi-Flex' },
      100: { id: 212, value: 'Semi-Flex' },
      120: { id: 213, value: 'Semi-Flex' },
      140: { id: 214, value: 'Semi-Flex' },
      160: { id: 215, value: 'Semi-Rigid' },
      180: { id: 216, value: 'Semi-Rigid' },
      200: { id: 217, value: 'Semi-Rigid' },
      220: { id: 218, value: 'Semi-Rigid' },
      240: { id: 219, value: 'Rigid' },
      260: { id: 220, value: 'Rigid' },
      280: { id: 221, value: 'Rigid' },
      300: { id: 222, value: 'Rigid' },
      320: { id: 223, value: 'Rigid' },
      340: { id: 224, value: 'Rigid' },
      360: { id: 225, value: 'Ultra-Rigid' },
    },
    7: {
      79: { id: 226, value: 'Semi-Flex' },
      80: { id: 227, value: 'Semi-Flex' },
      100: { id: 228, value: 'Semi-Flex' },
      120: { id: 229, value: 'Semi-Flex' },
      140: { id: 230, value: 'Semi-Flex' },
      160: { id: 231, value: 'Semi-Rigid' },
      180: { id: 232, value: 'Semi-Rigid' },
      200: { id: 233, value: 'Semi-Rigid' },
      220: { id: 234, value: 'Rigid' },
      240: { id: 235, value: 'Rigid' },
      260: { id: 236, value: 'Rigid' },
      280: { id: 237, value: 'Rigid' },
      300: { id: 238, value: 'Rigid' },
      320: { id: 239, value: 'Rigid' },
      340: { id: 240, value: 'Rigid' },
      360: { id: 241, value: 'Ultra-Rigid' },
    },
    8: {
      79: { id: 242, value: 'Semi-Flex' },
      80: { id: 243, value: 'Semi-Flex' },
      100: { id: 244, value: 'Semi-Flex' },
      120: { id: 245, value: 'Semi-Flex' },
      140: { id: 246, value: 'Semi-Rigid' },
      160: { id: 247, value: 'Semi-Rigid' },
      180: { id: 248, value: 'Semi-Rigid' },
      200: { id: 249, value: 'Semi-Rigid' },
      220: { id: 250, value: 'Rigid' },
      240: { id: 251, value: 'Rigid' },
      260: { id: 252, value: 'Rigid' },
      280: { id: 253, value: 'Rigid' },
      300: { id: 254, value: 'Rigid' },
      320: { id: 255, value: 'Rigid' },
      340: { id: 256, value: 'Rigid' },
      360: { id: 257, value: 'Ultra-Rigid' },
    },
    9: {
      79: { id: 258, value: 'Semi-Flex' },
      80: { id: 259, value: 'Semi-Flex' },
      100: { id: 260, value: 'Semi-Flex' },
      120: { id: 261, value: 'Semi-Flex' },
      140: { id: 262, value: 'Semi-Rigid' },
      160: { id: 263, value: 'Semi-Rigid' },
      180: { id: 264, value: 'Semi-Rigid' },
      200: { id: 265, value: 'Rigid' },
      220: { id: 266, value: 'Rigid' },
      240: { id: 267, value: 'Rigid' },
      260: { id: 268, value: 'Rigid' },
      280: { id: 269, value: 'Rigid' },
      300: { id: 270, value: 'Rigid' },
      320: { id: 271, value: 'Rigid' },
      340: { id: 272, value: 'Rigid' },
      360: { id: 273, value: 'Ultra-Rigid' },
    },
    10: {
      79: { id: 274, value: 'Semi-Flex' },
      80: { id: 275, value: 'Semi-Flex' },
      100: { id: 276, value: 'Semi-Flex' },
      120: { id: 277, value: 'Semi-Rigid' },
      140: { id: 278, value: 'Semi-Rigid' },
      160: { id: 279, value: 'Semi-Rigid' },
      180: { id: 280, value: 'Semi-Rigid' },
      200: { id: 281, value: 'Rigid' },
      220: { id: 282, value: 'Rigid' },
      240: { id: 283, value: 'Rigid' },
      260: { id: 284, value: 'Rigid' },
      280: { id: 285, value: 'Rigid' },
      300: { id: 286, value: 'Rigid' },
      320: { id: 287, value: 'Rigid' },
      340: { id: 288, value: 'Rigid' },
      360: { id: 289, value: 'Ultra-Rigid' },
    },
    11: {
      79: { id: 290, value: 'Semi-Flex' },
      80: { id: 291, value: 'Semi-Flex' },
      100: { id: 292, value: 'Semi-Flex' },
      120: { id: 293, value: 'Semi-Rigid' },
      140: { id: 294, value: 'Semi-Rigid' },
      160: { id: 295, value: 'Semi-Rigid' },
      180: { id: 296, value: 'Rigid' },
      200: { id: 297, value: 'Rigid' },
      220: { id: 298, value: 'Rigid' },
      240: { id: 299, value: 'Rigid' },
      260: { id: 300, value: 'Rigid' },
      280: { id: 301, value: 'Rigid' },
      300: { id: 302, value: 'Rigid' },
      320: { id: 303, value: 'Rigid' },
      340: { id: 304, value: 'Ultra-Rigid' },
      360: { id: 305, value: 'Ultra-Rigid' },
    },
    12: {
      79: { id: 306, value: 'Semi-Flex' },
      80: { id: 307, value: 'Semi-Flex' },
      100: { id: 308, value: 'Semi-Rigid' },
      120: { id: 309, value: 'Semi-Rigid' },
      140: { id: 310, value: 'Semi-Rigid' },
      160: { id: 311, value: 'Semi-Rigid' },
      180: { id: 312, value: 'Rigid' },
      200: { id: 313, value: 'Rigid' },
      220: { id: 314, value: 'Rigid' },
      240: { id: 315, value: 'Rigid' },
      260: { id: 316, value: 'Rigid' },
      280: { id: 317, value: 'Rigid' },
      300: { id: 318, value: 'Rigid' },
      320: { id: 319, value: 'Rigid' },
      340: { id: 320, value: 'Ultra-Rigid' },
      360: { id: 321, value: 'Ultra-Rigid' },
    },
    13: {
      79: { id: 322, value: 'Semi-Flex' },
      80: { id: 323, value: 'Semi-Flex' },
      100: { id: 324, value: 'Semi-Rigid' },
      120: { id: 325, value: 'Semi-Rigid' },
      140: { id: 326, value: 'Semi-Rigid' },
      160: { id: 327, value: 'Rigid' },
      180: { id: 328, value: 'Rigid' },
      200: { id: 329, value: 'Rigid' },
      220: { id: 330, value: 'Rigid' },
      240: { id: 331, value: 'Rigid' },
      260: { id: 332, value: 'Rigid' },
      280: { id: 333, value: 'Rigid' },
      300: { id: 334, value: 'Rigid' },
      320: { id: 335, value: 'Ultra-Rigid' },
      340: { id: 336, value: 'Ultra-Rigid' },
      360: { id: 337, value: 'Ultra-Rigid' },
    },
    14: {
      79: { id: 338, value: 'Semi-Flex' },
      80: { id: 339, value: 'Semi-Rigid' },
      100: { id: 340, value: 'Semi-Rigid' },
      120: { id: 341, value: 'Semi-Rigid' },
      140: { id: 342, value: 'Semi-Rigid' },
      160: { id: 343, value: 'Rigid' },
      180: { id: 344, value: 'Rigid' },
      200: { id: 345, value: 'Rigid' },
      220: { id: 346, value: 'Rigid' },
      240: { id: 347, value: 'Rigid' },
      260: { id: 348, value: 'Rigid' },
      280: { id: 349, value: 'Rigid' },
      300: { id: 350, value: 'Rigid' },
      320: { id: 351, value: 'Ultra-Rigid' },
      340: { id: 352, value: 'Ultra-Rigid' },
      360: { id: 353, value: 'Ultra-Rigid' },
    },
    15: {
      79: { id: 354, value: 'Semi-Flex' },
      80: { id: 355, value: 'Semi-Rigid' },
      100: { id: 356, value: 'Semi-Rigid' },
      120: { id: 357, value: 'Semi-Rigid' },
      140: { id: 358, value: 'Rigid' },
      160: { id: 359, value: 'Rigid' },
      180: { id: 360, value: 'Rigid' },
      200: { id: 361, value: 'Rigid' },
      220: { id: 362, value: 'Rigid' },
      240: { id: 363, value: 'Rigid' },
      260: { id: 364, value: 'Rigid' },
      280: { id: 365, value: 'Rigid' },
      300: { id: 366, value: 'Ultra-Rigid' },
      320: { id: 367, value: 'Ultra-Rigid' },
      340: { id: 368, value: 'Ultra-Rigid' },
      360: { id: 369, value: 'Ultra-Rigid' },
    },
    16: {
      79: { id: 370, value: 'Semi-Rigid' },
      80: { id: 371, value: 'Semi-Rigid' },
      100: { id: 372, value: 'Semi-Rigid' },
      120: { id: 373, value: 'Semi-Rigid' },
      140: { id: 374, value: 'Rigid' },
      160: { id: 375, value: 'Rigid' },
      180: { id: 376, value: 'Rigid' },
      200: { id: 377, value: 'Rigid' },
      220: { id: 378, value: 'Rigid' },
      240: { id: 379, value: 'Rigid' },
      260: { id: 380, value: 'Rigid' },
      280: { id: 381, value: 'Rigid' },
      300: { id: 382, value: 'Ultra-Rigid' },
      320: { id: 383, value: 'Ultra-Rigid' },
      340: { id: 384, value: 'Ultra-Rigid' },
      360: { id: 385, value: 'Ultra-Rigid' },
    },
  };

  // Method to get patient flexibility based on gender, weight, and shoe size
  static getPatientFlex(
    gender: Genders,
    weight: number,
    shoeSize: string
  ): Flexibility | undefined {
    // Select the gender table based on the gender
    const genderTable = gender === Genders.female ? this.woman : this.men;
    // Round weight to the nearest ten
    const weightKey = this.roundToNearestTen(weight);
    console.log(weightKey);
    //console.log("weightKey:", weightKey);
    // Parse shoe size to integer
    const sizeKey = parseInt(shoeSize);
    // console.log("sizeKey:", sizeKey);
    // Check if the flexibility for the given weight and shoe size exists in the table
    if (genderTable[sizeKey] && genderTable[sizeKey][weightKey]) {
      return genderTable[sizeKey][weightKey];
    } else {
      console.log('Flexibility not found');
      return undefined;
    }
  }

  // Helper method to round weight to the nearest
  private static roundToNearestTen(value: number): number {
    if (value <= 79) {
      return 79;
    } else if (value > 79 && value <= 99) {
      return 80;
    } else if (value > 99 && value <= 119) {
      return 100;
    } else if (value > 119 && value <= 139) {
      return 120;
    } else if (value > 139 && value <= 159) {
      return 140;
    } else if (value > 159 && value <= 179) {
      return 160;
    } else if (value > 179 && value <= 199) {
      return 180;
    } else if (value > 199 && value <= 219) {
      return 200;
    } else if (value > 219 && value <= 239) {
      return 220;
    } else if (value > 239 && value <= 259) {
      return 240;
    } else if (value > 259 && value <= 279) {
      return 260;
    } else if (value > 279 && value <= 299) {
      return 280;
    } else if (value > 299 && value <= 319) {
      return 300;
    } else if (value > 319 && value <= 339) {
      return 320;
    } else if (value > 339 && value <= 359) {
      return 340;
    } else if (value > 359) {
      return 360;
    } else {
      return 0;
    }
  }
}
