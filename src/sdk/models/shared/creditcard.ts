/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The credit card's network.
 */
export enum CreditCardNetwork {
    Visa = "visa",
    Mastercard = "mastercard",
    Amex = "amex",
    Discover = "discover",
    Jcb = "jcb",
    Unionpay = "unionpay",
    Alliancedata = "alliancedata",
    Citiplcc = "citiplcc",
}

export class CreditCardOutput extends SpeakeasyBase {
    /**
     * The expiration date, in YYYY-MM format.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiration" })
    expiration: string;

    /**
     * The account number's last four digits.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4: string;

    /**
     * The credit card's network.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "network" })
    network: CreditCardNetwork;
}
