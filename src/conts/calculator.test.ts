
import sum from "./calculator";

describe('Сумма', () => {
    // Применяется только к тестам в этом describe блоке
    test('сумма в разных системах счисления', () => {
        expect(sum("11","2",3)).toBe("20");
        expect(sum("11","11",2)).toBe("110");
        expect(sum("f","f",16)).toBe("1e");
    });
    test('сумма c минусом в системах счисления', () => {
        expect(sum("11","-11",3)).toBe("0");
        expect(sum("11","-1",2)).toBe("10");
        expect(sum("f","-f",16)).toBe("0");
    });
    test('другая система счисления', () => {
        expect(sum("3","3",3)).toBe("NaN");
        expect(sum("21","1",2)).toBe("NaN");
    });
    test('некорректный ввод', () => {
        expect(sum(" ","0",3)).toBe("NaN");
        expect(sum("+","1",2)).toBe("NaN");
    });
    // ПРИМЕР ТЕСТОВ, КОТОРЫЕ ДОЛЖНЫ ДЕЛАТЬСЯ ПЕРЕД РЕАЛИЗАЦИЕЙ.
    // Есть готовые методы для работы с int, float же переводит все в 10 систему
    // test('сумма c плавающей точкой', () => {
    //     expect(sum("11.1","2.1",3)).toBe("21.2");
    // });
});