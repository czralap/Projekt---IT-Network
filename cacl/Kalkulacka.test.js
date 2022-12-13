const {Kalkulacka} = require('./Kalkulacka');
test('secte ruzna cisla a porovna s vystupem', () => {
    const kalkulacka = new Kalkulacka();
    expect(kalkulacka.secti(5, 10)).toBe(15);
    expect(kalkulacka.secti(7, 11)).toBe(18);
    expect(kalkulacka.secti(0, 5)).toBe(5);
});

test('odecte ruzna cisla a porovna s vystupem', () => {
    const kalkulacka = new Kalkulacka();
    expect(kalkulacka.odecti(5, 10)).toBe(-5);
    expect(kalkulacka.odecti(7, 11)).toBe(-4);
    expect(kalkulacka.odecti(0, 5)).toBe(-5);
});

test('secte ruzna cisla a porovna s vystupem', () => {
        const kalkulacka = new Kalkulacka();
        expect(kalkulacka.vynasob(5, 10)).toBe(50);
        expect(kalkulacka.vynasob(5, 11)).toBe(55);
        expect(kalkulacka.vynasob(4, 10)).toBe(40);

});