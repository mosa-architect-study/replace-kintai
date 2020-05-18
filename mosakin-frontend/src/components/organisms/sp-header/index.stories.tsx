import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SpHeader } from "./index";
import { User } from "@/models/models/User";

const user1: User = { name: "ユーザ名1", photoURL: "", role: "COMMON" };
const user2: User = { name: "ユーザ名2", photoURL: "", role: "ADMIN" };

storiesOf("organisms/Header", module).add("SpHeader", () => (
  <>
    <Router>
      <SpHeader
        user={user1}
        adminFlg={user1.role}
        onClick={action("clicked: logout")}
      />
      <p>spモードにしたらでてくる</p>
    </Router>
  </>
));

storiesOf("organisms/Header", module).add("SpHeader(admin)", () => (
  <>
    <Router>
      <SpHeader
        user={user2}
        adminFlg={user2.role}
        onClick={action("clicked: logout")}
      />
      <p>spモードにしたらでてくる</p>
    </Router>
  </>
));
