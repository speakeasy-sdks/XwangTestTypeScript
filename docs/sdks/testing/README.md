# Testing
(*testing*)

## Overview

Endpoints that allow you to generate and retrieve test data to verify certain
flows in non-production environments.


### Available Operations

* [createAccount](#createaccount) - Create a test account
* [createShipmentTracking](#createshipmenttracking) - Simulate a shipment tracking update
* [getCreditCard](#getcreditcard) - Retrieve a test credit card, including its token

## createAccount

Create a Bolt shopper account for testing purposes.


### Example Usage

```typescript
import { TestBolt } from "XwangTestTypeScript";
import { TestingAccountCreateSecurity } from "XwangTestTypeScript/dist/sdk/models/operations";
import { AccountTestCreationDataEmailState, AccountTestCreationDataPhoneState } from "XwangTestTypeScript/dist/sdk/models/shared";

(async() => {
  const sdk = new TestBolt();
const operationSecurity: TestingAccountCreateSecurity = "";

  const res = await sdk.testing.createAccount({
    xPublishableKey: "string",
    accountTestCreationDataInput: {
      emailState: AccountTestCreationDataEmailState.Unverified,
      hasAddress: true,
      isMigrated: true,
      phoneState: AccountTestCreationDataPhoneState.Verified,
    },
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.TestingAccountCreateRequest](../../models/operations/testingaccountcreaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.TestingAccountCreateSecurity](../../models/operations/testingaccountcreatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.TestingAccountCreateResponse](../../models/operations/testingaccountcreateresponse.md)>**


## createShipmentTracking

Simulate a shipment tracking update, such as those that Bolt would ingest from
third-party shipping providers that would allow updating tracking and delivery
information to shipments associated with orders.


### Example Usage

```typescript
import { TestBolt } from "XwangTestTypeScript";
import { TestingShipmentTrackingCreateSecurity } from "XwangTestTypeScript/dist/sdk/models/operations";
import { ShipmentTrackingUpdateStatus, ShipmentTrackingUpdateTrackingDetailsStatus } from "XwangTestTypeScript/dist/sdk/models/shared";

(async() => {
  const sdk = new TestBolt();
const operationSecurity: TestingShipmentTrackingCreateSecurity = "";

  const res = await sdk.testing.createShipmentTracking({
    deliveryDate: new Date("2014-08-23:T06:00:00Z"),
    status: ShipmentTrackingUpdateStatus.InTransit,
    trackingDetails: [
      {
        countryCode: "US",
        eventDate: "2014-08-21:T14:24:00Z",
        locality: "San Francisco",
        message: "Billing information received",
        postalCode: "94105",
        region: "CA",
        status: ShipmentTrackingUpdateTrackingDetailsStatus.PreTransit,
      },
    ],
    trackingNumber: "MockBolt-143292",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [shared.ShipmentTrackingUpdate](../../models/shared/shipmenttrackingupdate.md)                                       | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.TestingShipmentTrackingCreateSecurity](../../models/operations/testingshipmenttrackingcreatesecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.TestingShipmentTrackingCreateResponse](../../models/operations/testingshipmenttrackingcreateresponse.md)>**


## getCreditCard

Retrieve test credit card information. This includes its token, which is
generated against the `4111 1111 1111 1004` test card.


### Example Usage

```typescript
import { TestBolt } from "XwangTestTypeScript";
import { TestingCreditCardGetSecurity } from "XwangTestTypeScript/dist/sdk/models/operations";

(async() => {
  const sdk = new TestBolt();
const operationSecurity: TestingCreditCardGetSecurity = "";

  const res = await sdk.testing.getCreditCard(operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `security`                                                                                         | [operations.TestingCreditCardGetSecurity](../../models/operations/testingcreditcardgetsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.TestingCreditCardGetResponse](../../models/operations/testingcreditcardgetresponse.md)>**

