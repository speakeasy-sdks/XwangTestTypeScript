/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Endpoints that allow you to generate and retrieve test data to verify certain
 *
 * @remarks
 * flows in non-production environments.
 *
 */

export class Testing {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create a test account
     *
     * @remarks
     * Create a Bolt shopper account for testing purposes.
     *
     */
    async createAccount(
        req: operations.TestingAccountCreateRequest,
        security: operations.TestingAccountCreateSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.TestingAccountCreateResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.TestingAccountCreateRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/testing/accounts";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
                req,
                "accountTestCreationData",
                "json"
            );
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.TestingAccountCreateSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = {
            ...utils.getHeadersFromRequest(req),
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        if (reqBody == null) throw new Error("request body is required");
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.TestingAccountCreateResponse =
            new operations.TestingAccountCreateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.accountTestCreationData = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.AccountTestCreationDataOutput
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status >= 400 && httpRes?.status < 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    const err = utils.objectToClass(JSON.parse(decodedRes), errors.ErrorT);
                    err.rawResponse = httpRes;
                    throw new errors.ErrorT(err);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status >= 500 && httpRes?.status < 600:
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
            default:
                break;
        }

        return res;
    }

    /**
     * Retrieve a test credit card, including its token
     *
     * @remarks
     * Retrieve test credit card information. This includes its token, which is
     * generated against the `4111 1111 1111 1004` test card.
     *
     */
    async getCreditCard(
        security: operations.TestingCreditCardGetSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.TestingCreditCardGetResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/testing/credit-cards";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.TestingCreditCardGetSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.TestingCreditCardGetResponse =
            new operations.TestingCreditCardGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.creditCard = utils.objectToClass(JSON.parse(decodedRes), shared.CreditCard);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status >= 400 && httpRes?.status < 500:
                if (utils.matchContentType(contentType, `application/json`)) {
                    const err = utils.objectToClass(JSON.parse(decodedRes), errors.ErrorT);
                    err.rawResponse = httpRes;
                    throw new errors.ErrorT(err);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status >= 500 && httpRes?.status < 600:
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
            default:
                break;
        }

        return res;
    }
}
