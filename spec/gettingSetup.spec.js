const gettingSetup = require('../bin');

xdescribe("gettingSetup", () => {
    it("returns Hurray you successfully ran the script!", () => {
        expect(gettingSetup()).toBe("Hurray you successfully ran the script!")
    })
})