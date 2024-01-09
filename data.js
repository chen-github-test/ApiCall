
      window.onload = function () {
        // Begin Swagger UI call region
        const ui = SwaggerUIBundle({
          spec: {
            openapi: "3.0.1",
            info: { title: "Common", description: "", version: "1.0.0" },
            tags: [],
            paths: {
              "/v2/admin/user(1297)": {
                patch: {
                  summary: "修改用户手机号",
                  "x-apifox-folder": "",
                  "x-apifox-status": "released",
                  deprecated: false,
                  description: "",
                  tags: [],
                  parameters: [
                    {
                      name: "Prefer",
                      in: "header",
                      description: "",
                      required: true,
                      example: "return=representation",
                      schema: { type: "string" },
                    },
                    {
                      name: "Authorization",
                      in: "header",
                      description: "",
                      required: true,
                      example:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJmYTlmOWVjMGU3YTgxMWVjYTQ4MTAyNDJhYzExMDAwOCIsImV4cCI6MTcwNDk1NzUyMywianRpIjoiOGRjN2MzODEtZGU5Zi00Y2JlLTlmZjEtYWRkMWY2OWFmNWRiIiwiaWF0IjoxNzA0MzUyNzIzLCJ1aWQiOiIxNjMiLCJzaWQiOiI2ZWYyM2VmMTY4Mjc0ZjBmYWE3MWM1Mjc0YmYyYWY5MSJ9.qVvNCp20FyJZnnjYMao2Sxa0t6DkheVT5n_QU0hMUOM",
                      schema: { type: "string" },
                    },
                    {
                      name: "Content-Type",
                      in: "header",
                      description: "",
                      required: true,
                      example: "application/json",
                      schema: { type: "string" },
                    },
                    {
                      name: "X-Request-Id",
                      in: "header",
                      description: "",
                      required: true,
                      example: "6cee0470d6f0",
                      schema: { type: "string" },
                    },
                  ],
                  requestBody: {
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            name: { type: "string" },
                            phone_number: { type: "string" },
                            description: { type: "string" },
                            phone_code: { type: "string" },
                            is_teacher: { type: "boolean" },
                          },
                          required: [
                            "name",
                            "phone_number",
                            "description",
                            "phone_code",
                            "is_teacher",
                          ],
                          "x-apifox-ignore-properties": [],
                          "x-apifox-orders": [
                            "name",
                            "phone_number",
                            "description",
                            "phone_code",
                            "is_teacher",
                          ],
                        },
                        example: {
                          name: "user1957",
                          phone_number: "15402301081",
                          description: "test test test",
                          phone_code: "86",
                          is_teacher: false,
                        },
                      },
                    },
                  },
                  responses: {
                    200: {
                      description: "成功",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {},
                            "x-apifox-ignore-properties": [],
                            "x-apifox-orders": [],
                          },
                          examples: { 1: { summary: "成功示例", value: "" } },
                        },
                      },
                    },
                  },
                  "x-run-in-apifox":
                    "https://www.apifox.cn/web/project/3877458/apis/api-140076157-run",
                },
              },
              "/v2/user/info/game": {
                patch: {
                  summary: "LOL清空game info",
                  "x-apifox-folder": "",
                  "x-apifox-status": "developing",
                  deprecated: false,
                  description: "",
                  tags: [],
                  parameters: [
                    {
                      name: "authority",
                      in: "header",
                      description: "",
                      required: true,
                      example: "api-test.gengesports.cn",
                      schema: { type: "string" },
                    },
                    {
                      name: "authorization",
                      in: "header",
                      description: "",
                      required: true,
                      example:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIzNmE4NmNjNWE1NGExMWVlOWYxNDAyNDJhYzExMDAwNSIsImV4cCI6MTcwNDc4MDQ3NywianRpIjoiNDhkOTBhMTEtNDQzNi00NDUxLWE3ZTQtN2EwNDg5ODlkYjE4IiwiaWF0IjoxNzA0Nzc5NTc3LCJ1aWQiOiIxMjgyIiwic2lkIjoiYjIxMGYwNjY3MTk0NDFmMDk4MjFiZjU0ZTk2Nzc5ZGMifQ.u220hiMM4Y2I5Z3ABxxvZZIg6Ux1-bj-dLklQifzFfg",
                      schema: { type: "string" },
                    },
                    {
                      name: "content-type",
                      in: "header",
                      description: "",
                      required: true,
                      example: "application/json",
                      schema: { type: "string" },
                    },
                    {
                      name: "x-request-id",
                      in: "header",
                      description: "",
                      required: true,
                      example: "951460bfcf49",
                      schema: { type: "string" },
                    },
                  ],
                  requestBody: {
                    content: {
                      "application/json": {
                        schema: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: { game_info_id: { type: "integer" } },
                            required: ["game_info_id"],
                            "x-apifox-ignore-properties": [],
                            "x-apifox-orders": ["game_info_id"],
                          },
                        },
                        example: [
                          { game_info_id: 1 },
                          { game_info_id: 2 },
                          { game_info_id: 3 },
                          { game_info_id: 4 },
                          { game_info_id: 5 },
                          { game_info_id: 12 },
                          { game_info_id: 13 },
                          { game_info_id: 15 },
                          { game_info_id: 21 },
                          { game_info_id: 39 },
                          { game_info_id: 40 },
                          { game_info_id: 41 },
                          { game_info_id: 42 },
                          { game_info_id: 43 },
                          { game_info_id: 44 },
                          { game_info_id: 45 },
                        ],
                      },
                    },
                  },
                  responses: {
                    200: {
                      description: "成功",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {},
                            "x-apifox-ignore-properties": [],
                            "x-apifox-orders": [],
                          },
                          examples: { 1: { summary: "成功示例", value: "" } },
                        },
                      },
                    },
                  },
                  "x-run-in-apifox":
                    "https://www.apifox.cn/web/project/3877458/apis/api-140105676-run",
                },
              },
              "/v2/admin/UserTokenAction/Adjust": {
                post: {
                  summary: "调整token接口（数量以及过期日期）",
                  "x-apifox-folder": "",
                  "x-apifox-status": "developing",
                  deprecated: false,
                  description: "",
                  tags: [],
                  parameters: [
                    {
                      name: "authority",
                      in: "header",
                      description: "",
                      required: true,
                      example: "api-test.gengesports.cn",
                      schema: { type: "string" },
                    },
                    {
                      name: "authorization",
                      in: "header",
                      description: "",
                      required: true,
                      example:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJmYTlmOWVjMGU3YTgxMWVjYTQ4MTAyNDJhYzExMDAwOCIsImV4cCI6MTcwNDk1NzUyMywianRpIjoiOGRjN2MzODEtZGU5Zi00Y2JlLTlmZjEtYWRkMWY2OWFmNWRiIiwiaWF0IjoxNzA0MzUyNzIzLCJ1aWQiOiIxNjMiLCJzaWQiOiI2ZWYyM2VmMTY4Mjc0ZjBmYWE3MWM1Mjc0YmYyYWY5MSJ9.qVvNCp20FyJZnnjYMao2Sxa0t6DkheVT5n_QU0hMUOM",
                      schema: { type: "string" },
                    },
                    {
                      name: "content-type",
                      in: "header",
                      description: "",
                      required: true,
                      example: "application/json",
                      schema: { type: "string" },
                    },
                    {
                      name: "x-request-id",
                      in: "header",
                      description: "",
                      required: true,
                      example: "2f35b58a3e8f",
                      schema: { type: "string" },
                    },
                  ],
                  requestBody: {
                    content: {
                      "application/json": {
                        schema: {
                          type: "object",
                          properties: {
                            is_refund: { type: "boolean" },
                            expire_date: { type: "string" },
                            user_id: { type: "integer" },
                            amount: { type: "integer" },
                            note: { type: "string" },
                          },
                          required: [
                            "is_refund",
                            "expire_date",
                            "user_id",
                            "amount",
                            "note",
                          ],
                          "x-apifox-ignore-properties": [],
                          "x-apifox-orders": [
                            "is_refund",
                            "expire_date",
                            "user_id",
                            "amount",
                            "note",
                          ],
                        },
                        example: {
                          is_refund: false,
                          expire_date: "2024-01-10T06:20:11.326Z",
                          user_id: 1297,
                          amount: 1,
                          note: "调整token 数量日期",
                        },
                      },
                    },
                  },
                  responses: {
                    200: {
                      description: "成功",
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {},
                            "x-apifox-ignore-properties": [],
                            "x-apifox-orders": [],
                          },
                        },
                      },
                    },
                  },
                  "x-run-in-apifox":
                    "https://www.apifox.cn/web/project/3877458/apis/api-140125903-run",
                },
              },
            },
            components: { schemas: {} },
          },
          dom_id: "#swagger-ui",
          deepLinking: true,
          presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
          plugins: [SwaggerUIBundle.plugins.DownloadUrl],
          layout: "StandaloneLayout",
        });
        // End Swagger UI call region

        window.ui = ui;
      };
