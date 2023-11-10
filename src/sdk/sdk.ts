/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Account } from "./account";
import { Payments } from "./payments";
import { Testing } from "./testing";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://{environment}.bolt.com/v3"] as const;

export enum ServerEnvironment {
    Api = "api",
    ApiSandbox = "api-sandbox",
}

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "3.0.1";
    sdkVersion = "0.3.1";
    genVersion = "2.187.7";
    userAgent = "speakeasy-sdk/typescript 0.3.1 2.187.7 3.0.1 XwangTestTypeScript";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Bolt API Reference: A comprehensive Bolt API reference for interacting with Transactions, Orders, Product Catalog, Configuration, Testing, and much more.
 */
export class TestBolt {
    /**
     * Account endpoints allow you to view and manage shoppers' accounts. For example,
     *
     * @remarks
     * you can add or remove addresses and payment information.
     *
     */
    public account: Account;
    public payments: Payments;
    /**
     * Endpoints that allow you to generate and retrieve test data to verify certain
     *
     * @remarks
     * flows in non-production environments.
     *
     */
    public testing: Testing;
    /**
     * Transaction endpoints allow you to manage transactions. For example, you can capture
     *
     * @remarks
     * funds, void transactions, or issue refunds. You can also update certain fields for existing
     * transactions.
     *
     */
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        let defaults: any = {};

        const serverDefaults = [
            {
                environment: props?.environment?.toString() ?? "api-sandbox",
            },
        ];
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
            defaults = serverDefaults[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            serverDefaults: defaults,
            retryConfig: props?.retryConfig,
        });

        this.account = new Account(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.testing = new Testing(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
