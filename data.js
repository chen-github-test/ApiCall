
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
