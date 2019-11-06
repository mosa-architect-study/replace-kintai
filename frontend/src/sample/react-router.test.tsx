import React from "react";
import { mount } from "enzyme";
import { SampleRoutes } from "./react-router";
import { MemoryRouter } from "react-router-dom";

it("react-router", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/sample2"]}>
      <SampleRoutes />
    </MemoryRouter>
  );
  expect(wrapper.find("Sample2").text()).toBe("sample2");
});
