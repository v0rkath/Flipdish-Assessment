export type Menu = {
  MenuId: number;
  MenuVersionNumber: number;
  VersionGuid: number;
  MenuSections: MenuSection[];
  MenuSectionBehaviour: number;
  DisplaySectionLinks: boolean;
  ConcessionStores: string[];
};

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
  ConcessionStoreId: string | null;
  MenuSectionMetadata: string[];
};

type MenuItem = {
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
  MenuItemOptionSets: MenuItemOptionSet[];
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
  DailySpecialHours: string[];
  PriceCanIncrease: boolean;
  MenuItemMetadata: string[];
};

type MenuSectionAvailability = {
  MenuSectionId: number;
  Availabletimes: string | null;
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
  MenuItemOptionSetItems: MenuItemOptionSetItem[];
  ImageName: string | null;
  ImageUrl: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  MinPrice: number;
  MenuItemId: number;
  MenuItemOptionSetMetaData: string[];
};

type MenuItemOptionSetItem = {
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
  NextMenuItemOptionSetId: number | null;
  PublicId: string;
  ImageName: string | null;
  ImageUrl: string | null;
  CellAspectRatio: number;
  CellLayoutType: number;
  OptionSetItemMetadata: string[];
};
