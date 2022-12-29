import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Paginator';


// тестирование пагинатора с NEXT - PREV
describe("Paginator component tests", () => {
    test("page count is 11 but should be showed only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} positionSize={10} />);
        const root = component.root; //получает объект на базе классовой компоненты
        let spans = root.findAllByType("span"); // находим спан
        expect(spans.length).toBe(10);
    });
    test("if pages count is more then 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} positionSize={10} />);
        const root = component.root; //получает объект на базе классовой компоненты
        let button = root.findAllByType("button"); // находим спан
        expect(button.length).toBe(1);
    });
});