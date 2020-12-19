import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => {
  return shallow(<App />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
test("render without error", () => {
  const wrapper = setUp();
  const appComponent = findByTestAttr(wrapper, "app-test");
  expect(appComponent.length).toBe(1);
});
test("render a button", () => {
  const wrapper = setUp();
  const buttonComponent = findByTestAttr(wrapper, "button-increase-test");
  expect(buttonComponent.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setUp();
  const counterDisplayComponent = findByTestAttr(
    wrapper,
    "counter-display-test"
  );
  expect(counterDisplayComponent.length).toBe(1);
});

test("counter start at 0", () => {
  const wrapper = setUp();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});
test("clicking on counter increase the count", () => {
  const wrapper = setUp();
  const button = findByTestAttr(wrapper, "button-increase-test");
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});
test("render decreament button", () => {
  const wrapper = setUp();
  const decreament = findByTestAttr(wrapper, "button-decerease-test");
  expect(decreament.length).toBe(1);
});

test("clicking on decrement button decrease the count", () => {
  const wrapper = setUp();

  // click the increment button so that the counter is greater than 0
  const incButton = findByTestAttr(wrapper, "button-increase-test");
  incButton.simulate("click");

  // find decrement button and click
  const decButton = findByTestAttr(wrapper, "button-decerease-test");
  decButton.simulate("click");

  // find display and test value
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});
test("throw error if decrement button is click on count ==0", () => {
  const wrapper = setUp();
  const decButton = findByTestAttr(wrapper, "button-decerease-test");
  decButton.simulate("click");
  const count = findByTestAttr(wrapper, "test-warning").text();
  expect(count).toBe("Count can not be below zero");
});
