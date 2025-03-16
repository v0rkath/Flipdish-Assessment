import { http, HttpResponse } from "msw";

import { MenuFixture } from "../tests/fixture";

export const handlers = [
  http.get(
    "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json",
    () => {
      return HttpResponse.json(MenuFixture);
    },
  ),
];
