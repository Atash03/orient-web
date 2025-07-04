export interface HeaderResponse {
  data: DataModel;
  message: string;
  status_code: number;
}

interface DataModel {
  customData: CustomData;
  menuItems: MenuItem[];
}

export interface MenuItem {
  cmsPage: string | null;
  code: string;
  items?: MenuItem[];
  nesting: null;
  reference: string | null;
  replace: string | null;
  title: string;
  type: string;
  url: string;
  viewBag: {
    cssClass: string;
    isExternal: string;
    isHidden: string;
    locale: ViewBagLocaleItem;
  };
}

interface ViewBagLocaleItem {
  en: {
    title: string;
    url: string;
  };
  tm: {
    title: string;
    url: string;
  };
}

interface CustomData {
  address: string;
  administrationPhone: string;
  data: CustomDataInner;
  updated_at: string;
  created_at: string;
  eMail: string;
  editorialEmail: string;
  editorialPhone: string;
  emailTheAdministration: string;
  id: number;
  officeIsLocated: string;
  theme: string;
  workingHours: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  ok?: string;
  phone: string;
  telegram?: string;
  topCategory: string;
  twitter?: string;
  vk?: string;
  youtube?: string;
}

interface CustomDataInner {
  address: string;
  eMail: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  ok?: string;
  phone: string;
  telegram?: string;
  topCategory: string;
  twitter?: string;
  vk?: string;
  youtube?: string;
}
