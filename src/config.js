const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-serverless-api",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://nuox55f06e.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HC5v7x4nG",
    APP_CLIENT_ID: "6squcvflma55ug87nqgnntcads",
    IDENTITY_POOL_ID: "us-east-1:810b13ea-ff9e-4114-8cde-05da011af8eb",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;
