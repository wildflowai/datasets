interface Dataset {
  // Name of the dataset. E.g., "ARGO"
  name: string;

  // URL where the dataset can be accessed. E.g., "https://argo.ucsd.edu/"
  url: string;

  // Description of the dataset. E.g., "Global array of profiling floats
  // measuring temperature, salinity, and currents."
  desc: string;

  // Categories or tags associated with the dataset. E.g.: "ocean",
  // "temperature", "salinity", "currents"
  categories: string[];

  // Indicates whether the dataset includes biodiversity data. E.g., false
  biodiversity: boolean;

  // Approximate size of the dataset. E.g., "10TB"
  size: string;

  // License under which the dataset is distributed. E.g., "CC BY 4.0"
  license: string;

  // Organization or owner of the dataset. E.g., "UCSD"
  owner: string;

  // Spatial and temporal detail of the dataset. E.g., "1km, 1 month"
  detail: string;

  // Geographic and temporal coverage of the dataset. E.g., "global,
  // 2000-present"
  coverage: string;

  // File formats of the dataset. E.g., "NetCDF"
  formats: string[];

  // Digital Object Identifier (DOI) for the dataset. E.g.,
  // "https://doi.org/10.13155/29825"
  doi: string;

  // Accessibility of the dataset (public or private). E.g., "public"
  access: "public" | "private";
}

export default Dataset;
