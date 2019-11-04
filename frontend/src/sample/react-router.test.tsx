import React from "react";
import { mount } from "enzyme";
import { SampleRouter } from "./react-router";
import { MemoryRouter } from "react-router-dom";

it("react-router", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/sample2"]}>
      <SampleRouter />
    </MemoryRouter>
  );
  expect(wrapper.find("Sample2").text()).toBe("sample2");
});
