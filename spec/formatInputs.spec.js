// const {sanitizeStr} = require('../lib/utilities');
import sanitizeStr from '../lib/utilities';

describe('Formatted Inputs', () => {
    const strings = [
        '"Pride and Prejudice"',
        "   Pride    and    prejudice   ",
        "-Pride +&% Prejudice_",
      ];
    
      const sanitzedString = 'pride and prejudice';
    
    it('should remove quotes from user input', () => {
        expect(sanitizeStr(strings[0])).toEqual(sanitzedString);
    })
    it('should remove whitespace', () => {
        expect(sanitizeStr(strings[1])).toEqual(sanitzedString);
    })
    it('should remove special characters', () => {
        expect(sanitizeStr(strings[2])).toEqual(sanitzedString);
    })
})