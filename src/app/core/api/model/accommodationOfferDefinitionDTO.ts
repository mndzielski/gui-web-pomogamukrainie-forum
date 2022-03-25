/**
 * Documentation for ads portal
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Location } from './location';

export interface AccommodationOfferDefinitionDTO {
  title: string;
  description: string;
  location: Location;
  guests: number;
  lengthOfStay: AccommodationOfferDefinitionDTO.LengthOfStayEnum;
  hostLanguage: Array<AccommodationOfferDefinitionDTO.HostLanguageEnum>;
  phoneNumber?: string;
}
export namespace AccommodationOfferDefinitionDTO {
  export type LengthOfStayEnum = 'WEEK_1' | 'WEEK_2' | 'MONTH_1' | 'MONTH_2' | 'MONTH_3' | 'LONGER';
  export const LengthOfStayEnum = {
    Week1: 'WEEK_1' as LengthOfStayEnum,
    Week2: 'WEEK_2' as LengthOfStayEnum,
    Month1: 'MONTH_1' as LengthOfStayEnum,
    Month2: 'MONTH_2' as LengthOfStayEnum,
    Month3: 'MONTH_3' as LengthOfStayEnum,
    Longer: 'LONGER' as LengthOfStayEnum,
  };
  export type HostLanguageEnum = 'UA' | 'PL' | 'EN' | 'RU';
  export const HostLanguageEnum = {
    Ua: 'UA' as HostLanguageEnum,
    Pl: 'PL' as HostLanguageEnum,
    En: 'EN' as HostLanguageEnum,
    Ru: 'RU' as HostLanguageEnum,
  };
}
