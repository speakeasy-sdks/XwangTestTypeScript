# LoggedIn
(*payments.loggedIn*)

### Available Operations

* [initialize](#initialize) - Initialize a Bolt payment for logged in shoppers
* [performAction](#performaction) - Perform an irreversible action (e.g. finalize) on a pending payment
* [update](#update) - Update an existing payment

## initialize

Initialize a Bolt payment token that will be used to reference this payment to
Bolt when it is updated or finalized for logged in shoppers.


### Example Usage

```typescript
import { TestBolt } from "XwangTestTypeScript";
import { Currency } from "XwangTestTypeScript/dist/sdk/models/shared";

async function run() {
  const sdk = new TestBolt({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.payments.loggedIn.initialize({
    xPublishableKey: "<value>",
    paymentInitializeRequest: {
      cart: {
        discounts: [
          {
            amount: {
              currency: Currency.Usd,
              units: 900,
            },
            code: "SUMMER10DISCOUNT",
            detailsUrl: "https://www.example.com/SUMMER-SALE",
          },
        ],
        displayId: "215614191",
        items: [
          {
            description: "Large tote with Bolt logo.",
            imageUrl: "https://www.example.com/products/123456/images/1.png",
            name: "Bolt Swag Bag",
            quantity: 1,
            reference: "item_100",
            totalAmount: {
              currency: Currency.Usd,
              units: 900,
            },
            unitPrice: 1000,
          },
        ],
        orderDescription: "Order #1234567890",
        orderReference: "order_100",
        shipments: [
          {
            address: "<value>",
            carrier: "FedEx",
            cost: {
              currency: Currency.Usd,
              units: 900,
            },
          },
        ],
        tax: {
          currency: Currency.Usd,
          units: 900,
        },
        total: {
          currency: Currency.Usd,
          units: 900,
        },
      },
      paymentMethod: "<value>",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PaymentsInitializeRequest](../../sdk/models/operations/paymentsinitializerequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PaymentsInitializeResponse](../../sdk/models/operations/paymentsinitializeresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## performAction

Perform an irreversible action on a pending payment, such as finalizing it.


### Example Usage

```typescript
import { TestBolt } from "XwangTestTypeScript";
import { DotTag } from "XwangTestTypeScript/dist/sdk/models/shared";

async function run() {
  const sdk = new TestBolt({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.payments.loggedIn.performAction({
    xPublishableKey: "<value>",
    id: "iKv7t5bgt1gg",
    paymentActionRequest: {
      dotTag: DotTag.Finalize,
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PaymentsActionRequest](../../sdk/models/operations/paymentsactionrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PaymentsActionResponse](../../sdk/models/operations/paymentsactionresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |

## update

Update a pending payment


### Example Usage

```typescript
import { TestBolt } from "XwangTestTypeScript";
import { Currency } from "XwangTestTypeScript/dist/sdk/models/shared";

async function run() {
  const sdk = new TestBolt({
    security: {
      apiKey: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.payments.loggedIn.update({
    xPublishableKey: "<value>",
    id: "iKv7t5bgt1gg",
    paymentUpdateRequest: {
      cart: {
        discounts: [
          {
            amount: {
              currency: Currency.Usd,
              units: 900,
            },
            code: "SUMMER10DISCOUNT",
            detailsUrl: "https://www.example.com/SUMMER-SALE",
          },
        ],
        displayId: "215614191",
        items: [
          {
            description: "Large tote with Bolt logo.",
            imageUrl: "https://www.example.com/products/123456/images/1.png",
            name: "Bolt Swag Bag",
            quantity: 1,
            reference: "item_100",
            totalAmount: {
              currency: Currency.Usd,
              units: 900,
            },
            unitPrice: 1000,
          },
        ],
        orderDescription: "Order #1234567890",
        orderReference: "order_100",
        shipments: [
          {
            address: "<value>",
            carrier: "FedEx",
            cost: {
              currency: Currency.Usd,
              units: 900,
            },
          },
        ],
        tax: {
          currency: Currency.Usd,
          units: 900,
        },
        total: {
          currency: Currency.Usd,
          units: 900,
        },
      },
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PaymentsUpdateRequest](../../sdk/models/operations/paymentsupdaterequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PaymentsUpdateResponse](../../sdk/models/operations/paymentsupdateresponse.md)>**
### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 4XX              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
