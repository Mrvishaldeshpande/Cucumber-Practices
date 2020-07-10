$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Login.Feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-feature;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user hit \"www.google.com\" and land on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will land on loginhome page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate below details",
  "rows": [
    {
      "cells": [
        "EmployeeName",
        "EmployeeID"
      ],
      "line": 9
    },
    {
      "cells": [
        "Vishal",
        "444184"
      ],
      "line": 10
    },
    {
      "cells": [
        "Shraddha",
        "518649"
      ],
      "line": 11
    },
    {
      "cells": [
        "Animesh",
        "100100"
      ],
      "line": 12
    },
    {
      "cells": [
        "Jagadeesh",
        "200200"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-feature;login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "login-feature;login-test;;1"
    },
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 16,
      "id": "login-feature;login-test;;2"
    },
    {
      "cells": [
        "username2",
        "password2"
      ],
      "line": 17,
      "id": "login-feature;login-test;;3"
    },
    {
      "cells": [
        "username3",
        "password3"
      ],
      "line": 18,
      "id": "login-feature;login-test;;4"
    },
    {
      "cells": [
        "username4",
        "password4"
      ],
      "line": 19,
      "id": "login-feature;login-test;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 568513,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Test",
  "description": "",
  "id": "login-feature;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user hit \"www.google.com\" and land on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"username1\" and \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will land on loginhome page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate below details",
  "rows": [
    {
      "cells": [
        "EmployeeName",
        "EmployeeID"
      ],
      "line": 9
    },
    {
      "cells": [
        "Vishal",
        "444184"
      ],
      "line": 10
    },
    {
      "cells": [
        "Shraddha",
        "518649"
      ],
      "line": 11
    },
    {
      "cells": [
        "Animesh",
        "100100"
      ],
      "line": 12
    },
    {
      "cells": [
        "Jagadeesh",
        "200200"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 10
    }
  ],
  "location": "LoginStepDefinition.user_hit_and_land_on_login_page(String)"
});
formatter.result({
  "duration": 137236962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 12
    },
    {
      "val": "password1",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 391840,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 185182,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_will_land_on_loginhome_page()"
});
formatter.result({
  "duration": 190045,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.validate_below_details(DataTable)"
});
formatter.result({
  "duration": 2846213,
  "status": "passed"
});
formatter.after({
  "duration": 333895,
  "status": "passed"
});
formatter.before({
  "duration": 224488,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login Test",
  "description": "",
  "id": "login-feature;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user hit \"www.google.com\" and land on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"username2\" and \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will land on loginhome page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate below details",
  "rows": [
    {
      "cells": [
        "EmployeeName",
        "EmployeeID"
      ],
      "line": 9
    },
    {
      "cells": [
        "Vishal",
        "444184"
      ],
      "line": 10
    },
    {
      "cells": [
        "Shraddha",
        "518649"
      ],
      "line": 11
    },
    {
      "cells": [
        "Animesh",
        "100100"
      ],
      "line": 12
    },
    {
      "cells": [
        "Jagadeesh",
        "200200"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 10
    }
  ],
  "location": "LoginStepDefinition.user_hit_and_land_on_login_page(String)"
});
formatter.result({
  "duration": 286080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 12
    },
    {
      "val": "password2",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 267035,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 168569,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_will_land_on_loginhome_page()"
});
formatter.result({
  "duration": 142635,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.validate_below_details(DataTable)"
});
formatter.result({
  "duration": 659686,
  "status": "passed"
});
formatter.after({
  "duration": 382520,
  "status": "passed"
});
formatter.before({
  "duration": 255689,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login Test",
  "description": "",
  "id": "login-feature;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user hit \"www.google.com\" and land on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"username3\" and \"password3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will land on loginhome page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate below details",
  "rows": [
    {
      "cells": [
        "EmployeeName",
        "EmployeeID"
      ],
      "line": 9
    },
    {
      "cells": [
        "Vishal",
        "444184"
      ],
      "line": 10
    },
    {
      "cells": [
        "Shraddha",
        "518649"
      ],
      "line": 11
    },
    {
      "cells": [
        "Animesh",
        "100100"
      ],
      "line": 12
    },
    {
      "cells": [
        "Jagadeesh",
        "200200"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 10
    }
  ],
  "location": "LoginStepDefinition.user_hit_and_land_on_login_page(String)"
});
formatter.result({
  "duration": 300668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username3",
      "offset": 12
    },
    {
      "val": "password3",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 301884,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 142635,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_will_land_on_loginhome_page()"
});
formatter.result({
  "duration": 141014,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.validate_below_details(DataTable)"
});
formatter.result({
  "duration": 2685344,
  "status": "passed"
});
formatter.after({
  "duration": 249206,
  "status": "passed"
});
formatter.before({
  "duration": 299857,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login Test",
  "description": "",
  "id": "login-feature;login-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user hit \"www.google.com\" and land on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enter \"username4\" and \"password4\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user will land on loginhome page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate below details",
  "rows": [
    {
      "cells": [
        "EmployeeName",
        "EmployeeID"
      ],
      "line": 9
    },
    {
      "cells": [
        "Vishal",
        "444184"
      ],
      "line": 10
    },
    {
      "cells": [
        "Shraddha",
        "518649"
      ],
      "line": 11
    },
    {
      "cells": [
        "Animesh",
        "100100"
      ],
      "line": 12
    },
    {
      "cells": [
        "Jagadeesh",
        "200200"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 10
    }
  ],
  "location": "LoginStepDefinition.user_hit_and_land_on_login_page(String)"
});
formatter.result({
  "duration": 265819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username4",
      "offset": 12
    },
    {
      "val": "password4",
      "offset": 28
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 197338,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 137367,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_will_land_on_loginhome_page()"
});
formatter.result({
  "duration": 130478,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.validate_below_details(DataTable)"
});
formatter.result({
  "duration": 583911,
  "status": "passed"
});
formatter.after({
  "duration": 249611,
  "status": "passed"
});
});