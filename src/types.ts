export type Menu = {
  MenuId: number;
  MenuVersionNumber: number;
  VersionGuid: number;
  MenuSections: MenuSection[];
  MenuSectionBehaviour: 1;
  DisplaySectionLinks: boolean;
  ConcessionStores: string[] // unsure
}

export type MenuSection = {
  MenuSectionId: number;
  Name: string;
  Description: string | null;
  DisplayOrder: number;
  MenuItems: MenuItem[];
  PublicId: string;
  IsDeleted: boolean;
  IsAvailable: boolean;
  IsHiddenFromUsers: boolean;
  ImageName: string;
  ImageUrl: string;
  CellAspectRatio: number;
  CellLayoutType: number;
  MenuSectionAvailability: MenuSectionAvailability;
  ConcessionStoreId: string | null; // <- this might be wrong
  MenuSectionMetadata: string[]; // this might be wrong
};

export type MenuItem = {
  MenuItemId: number;
  Name: string;
  Description: string;
  SpicinessRating: number;
  Price: number;
  DisplayOrder: number;
  IsDeleted: boolean;
  Alchohol: boolean;
  Tags: string[];
  PublicId: string;
  IsAvailable: boolean;
  MenuItemOptionSets: MenuItemOptionSet[]; // change this
  TaxRate: number | null;
  TaxRateId: number | null;
  TaxValue: number;
  MenuSectionId: number;
  ImageName: string;
  ImageUrl: string;
  CellAspectRatio: number;
  CellLayoutType: number;
  ActualPrice: number;
  DisableVouchers: boolean;
  ExcludeFromVoucherDiscounting: string;
  DailySpecialHours: string[]; //might be wrong
  PriceCanIncrease: boolean;
  MenuItemMetadata: string[]; // could be wrong
};

type MenuSectionAvailability = {
  MenuSectionId: number;
  Availabletimes: string | null; // could be wrong
  AvailabilityMode: number;
};

export type MenuItemOptionSet = {
  Name: string | null;
  MenuItemOptionSetId: number;
  IsMasterOptionSet: boolean;
  DisplayOrder: number;
  MinSelectCount: number;
  MaxSelectCount: number;
  IsDeleted: boolean;
  PublicId: string;
  MenuItemOptionSetItems: MenuItemOptionSetItem[]; // <- change
  ImageName: string | null;
  ImageUrl: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  MinPrice: number;
  MenuItemId: number;
  MenuItemOptionSetMetaData: string[] // who knows
}

export type MenuItemOptionSetItem = {
  MenuItemOptionSetItemId: number;
  Name: string;
  Price: number;
  TaxRateId: number | null;
  TaxRate: number | null;
  TaxValue: number;
  IsAvailable: boolean;
  DisplayOrder: number;
  IsDeleted: boolean;
  Tags: string[];
  NextMenuItemOptionSetId: number | null; // could be wrong
  PublicId: string;
  ImageName: string | null;
  ImageUrl: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  OptionSetItemMetadata: string[];
}