export interface IBoat {
  id: number;
  name: string;
  type: string;
}

export interface IMarketplaceProps {
  id: number;
  currency: string;
  price: number;
  image_url: string;
  title: string;
  city: string;
  state: string;
}

export interface IMarketplaceItemProps {
  id: number;
  price: number;
  images: IImage[];
  title: string;
  contact_details: string;
  contact_name: string;
  description: string;
  city: string;
  state: string;
  created_at: string;
}

export interface IMarketplaceItemCardProps {
  item: {
    id: number;
    currency: string;
    price: number;
    image_url: string;
    title: string;
    city: string;
    state: string;
  };
}

export interface IImage {
  id: number;
  image_url: string;
}

export interface IDataItem {
  title: string;
  [key: string]: any;
}

export interface ISearchBarProps {
  data: IDataItem[];
  onFilter: (filteredData: IDataItem[]) => void;
}

export interface IVesselDetails {
  id: number
  type: string
  title: string
  image: IImage
  cof_date: string
  trailer_license_date: string

}

export interface MarketplaceItemCardProps {
  item: {
    id: number;
    currency: string;
    price: number;
    image_url: string;
    title: string;
    city: string;
    state: string;
  };
}

export interface IImageScrollViewProps {
  images: IImage[];
}

export interface IImage {
  id: number;
  image_url: string;
}

export interface IPageHeader {
  title: string
}

export interface IAccessories {
  id: number
  title: string
  image: IImage
}

export interface IGarageItem {
  id: number
  title: string
  images: IImage[]
  description: string
}