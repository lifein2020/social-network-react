import { create } from 'react-test-renderer';

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="It's my social network"/>); // фейково рендерит компоненту
        const instance = component.getInstance(); //получает объект на базе классовой компоненты
        expect(instance.state.status).toBe("It's my social network");
    })
// в режиме нередактирования должен быть span, не input
test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="It's my social network"/>); // фейково рендерит компоненту
    const root = component.root; //получает объект на базе классовой компоненты
    let span = root.findByType("span"); // находим спан
    expect(span).toBeNull();
});
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="It's my social network"/>); // фейково рендерит компоненту
        const root = component.root; //получает объект на базе классовой компоненты
        // ожидаем что не найдем инпут и будет ошибка
        expect( () => { 
            let input = root.findByType("input"); // поиск input в callback
        }).toThrow(); // ошибка
    });
    test("after creation <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="It's my social network"/>);
        const root = component.root; //получает объект на базе классовой компоненты
        let span = root.findByType("span"); // находим спан
        expect(span.children[0]).toBe("It's my social network");
    });
    // переход в режим редактирования - программно делаем даблклик по спану
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="It's my social network"/>);
        const root = component.root; //получает объект на базе классовой компоненты
        let span = root.findByType("span"); // нашли span
        span.props.onDoubleClick(); //програмно вызываем onDoubleClick, который есть в пропсах у спана. Т.е. кликнули по спану
        let input = root.findByType("input"); // span исчез и мы нашли input
        expect(input.props.value).toBe("It's my social network"); // а в этом input "It's my social network"
    });
    // При деактивации режима редактирования callback будет вызван
    // https://jestjs.io/docs/mock-functions
    test("callback should be called", () => {
        const mockCallBack = jest.fn(); // шпионская функция за которой тестовый фреймворк jest может следить
        const component = create(<ProfileStatus status="It's my social network" updateStatus={mockCallBack} />); // передаем callback когда будет деактивация режима редактирования
        const instance = component.getInstance();
        instance.deactivateEditMode(); 
        // если метод deactivateEditMode() вызвался то из пропсов вызовется callback
        expect(mockCallBack.mock.calls.length).toBe(1); //callback должен вызваться 1 раз. У mockCallBack есть свойство calls, которое считает сколько раз ее вызывают
    });
});
