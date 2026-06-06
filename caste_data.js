// Auto-generated caste data from Excel
// Source: Data set for caste wise segregation.xlsx (Caste Data sheet)

const casteCategoryColors = {
    "GEN": "#4CAF50",
    "OBC": "#FF9800",
    "SC": "#2196F3",
    "MIN": "#9C27B0",
    "Others": "#607D8B"
};

const allCastes = [
  "Bahti",
  "Balmiki",
  "Baniya",
  "Bazigar",
  "Bhagat",
  "Bhappe",
  "Bishnoi",
  "Brahmin",
  "Chang",
  "Christian",
  "Ghrit",
  "Gujjar",
  "Hindu Jat",
  "Jain",
  "Jatt Sikh",
  "Kamboj",
  "Khatri",
  "Kumhar",
  "Labana",
  "Mahasha",
  "Mazhabi Sikh",
  "Megh",
  "Muslim",
  "Nai",
  "Others",
  "Rai Sikh",
  "Rajput",
  "Ramgarhia",
  "Ravidassia",
  "Saini",
  "Sikh Khatri",
  "Sikh Rajput",
  "Tarkhan",
  "Unknown"
];

const casteCategories = {
  "Jatt Sikh": "GEN",
  "Brahmin": "GEN",
  "Khatri": "GEN",
  "Baniya": "GEN",
  "Rajput": "GEN",
  "Saini": "OBC",
  "Ramgarhia": "OBC",
  "Sikh Rajput": "OBC",
  "Kamboj": "OBC",
  "Labana": "OBC",
  "Ravidassia": "SC",
  "Balmiki": "SC",
  "Mahasha": "SC",
  "Bazigar": "SC",
  "Bhagat": "SC",
  "Muslim": "MIN",
  "Christian": "MIN",
  "Others": "Others",
  "Unknown": "Others",
  "Mazhabi Sikh": "SC",
  "Ghrit": "OBC",
  "Bahti": "OBC",
  "Chang": "OBC",
  "Bhappe": "GEN",
  "Gujjar": "OBC",
  "Rai Sikh": "SC",
  "Nai": "OBC",
  "Sikh Khatri": "GEN",
  "Hindu Jat": "GEN",
  "Bishnoi": "GEN",
  "Kumhar": "OBC",
  "Tarkhan": "OBC",
  "Megh": "SC",
  "Jain": "GEN"
};

const districtCasteData = {
  "Amritsar": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 26.73
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.45
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 13.64
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.09
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.18
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.45
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.18
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.18
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 2.91
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.64
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.27
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.91
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.82
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 1.64
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.36
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 0.36
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.18
      }
    ],
    "categories": {
      "GEN": 42.91,
      "MIN": 5.0,
      "OBC": 12.18,
      "Others": 2.64,
      "SC": 37.27
    },
    "num_acs": 11
  },
  "Barnala": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 15.67
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.67
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.67
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.33
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.33
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.33
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.5
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 2.33
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.33
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 2.17
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.67
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.67
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.33
      }
    ],
    "categories": {
      "GEN": 40.33,
      "MIN": 3.0,
      "OBC": 16.17,
      "Others": 2.5,
      "SC": 38.0
    },
    "num_acs": 3
  },
  "Bathinda": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 27.08
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.51
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 12.17
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.83
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.33
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.33
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.07
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 2.5
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.17
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.5
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 0.67
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 0.5
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 0.33
      }
    ],
    "categories": {
      "GEN": 53.42,
      "MIN": 2.5,
      "OBC": 7.33,
      "Others": 3.07,
      "SC": 33.68
    },
    "num_acs": 6
  },
  "Faridkot": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 32.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.67
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 12.33
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.67
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.33
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.67
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.67
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.33
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.33
      }
    ],
    "categories": {
      "GEN": 51.0,
      "OBC": 13.67,
      "Others": 4.0,
      "SC": 31.33
    },
    "num_acs": 3
  },
  "Fatehgarh Sahib": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 29.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.59
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.91
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.47
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.61
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.48
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.9
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.65
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.38
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 1.33
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 0.68
      }
    ],
    "categories": {
      "GEN": 56.23,
      "MIN": 0.0,
      "OBC": 3.38,
      "Others": 3.65,
      "SC": 36.74
    },
    "num_acs": 3
  },
  "Fazilka": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 13.25
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 11.75
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.5
      },
      {
        "name": "Kumhar",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.5
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.25
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 6.25
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.5
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.75
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.75
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.5
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 3.5
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Megh",
        "category": "SC",
        "percentage": 2.75
      },
      {
        "name": "Bishnoi",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.75
      },
      {
        "name": "Hindu Jat",
        "category": "GEN",
        "percentage": 1.75
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.25
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.5
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 41.75,
      "MIN": 1.25,
      "OBC": 20.5,
      "Others": 3.5,
      "SC": 33.0
    },
    "num_acs": 4
  },
  "Firozpur": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 28.75
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.17
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 13.5
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 13.42
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.76
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.82
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.8
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.27
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.75
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.75
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 1.75
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 0.75
      },
      {
        "name": "Tarkhan",
        "category": "OBC",
        "percentage": 0.5
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.5
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 0.25
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.25
      }
    ],
    "categories": {
      "GEN": 51.47,
      "MIN": 4.02,
      "OBC": 5.25,
      "Others": 2.82,
      "SC": 36.44
    },
    "num_acs": 4
  },
  "Gurdaspur": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.86
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.14
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 9.07
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.79
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.57
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.57
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.43
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.15
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.79
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 3.43
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.29
      },
      {
        "name": "Mahasha",
        "category": "SC",
        "percentage": 2.86
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.07
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.42
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.29
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 0.29
      }
    ],
    "categories": {
      "GEN": 41.86,
      "MIN": 12.36,
      "OBC": 13.0,
      "Others": 1.42,
      "SC": 31.36
    },
    "num_acs": 7
  },
  "Hoshiarpur": {
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.15
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 14.5
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 9.71
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.43
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.29
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.29
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.29
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 4.14
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 3.31
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.91
      },
      {
        "name": "Ghrit",
        "category": "OBC",
        "percentage": 2.71
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.29
      },
      {
        "name": "Bahti",
        "category": "OBC",
        "percentage": 2.14
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.89
      },
      {
        "name": "Chang",
        "category": "OBC",
        "percentage": 1.71
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 1.71
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.14
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 0.94
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 0.86
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 0.43
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 0.14
      }
    ],
    "categories": {
      "GEN": 43.5,
      "MIN": 3.43,
      "OBC": 20.49,
      "Others": 1.89,
      "SC": 30.69
    },
    "num_acs": 7
  },
  "Jalandhar": {
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 24.53
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 16.33
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 14.67
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.16
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.89
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 6.69
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.67
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.33
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.67
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.56
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.11
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.39
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 0.78
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.22
      }
    ],
    "categories": {
      "GEN": 37.45,
      "MIN": 7.33,
      "OBC": 13.8,
      "Others": 1.39,
      "SC": 40.03
    },
    "num_acs": 9
  },
  "Kapurthala": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 22.76
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.22
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.26
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.75
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 5.76
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.75
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.5
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.25
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.5
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.77
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.25
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.25
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.25
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.75
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.5
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 42.26,
      "MIN": 4.0,
      "OBC": 11.75,
      "Others": 2.77,
      "SC": 39.23
    },
    "num_acs": 4
  },
  "Ludhiana": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 29.86
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.01
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 14.01
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.9
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.07
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.64
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 3.6
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.07
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 2.29
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.29
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.12
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.03
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 0.73
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 0.57
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 0.56
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 0.43
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 0.36
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 0.33
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.14
      }
    ],
    "categories": {
      "GEN": 62.84,
      "MIN": 1.75,
      "OBC": 6.89,
      "Others": 2.12,
      "SC": 26.4
    },
    "num_acs": 14
  },
  "Malerkotla": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 18.5
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.5
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.5
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.5
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.5
      },
      {
        "name": "Jain",
        "category": "GEN",
        "percentage": 2.5
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 1.5
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 1.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 38.0,
      "MIN": 15.0,
      "OBC": 10.0,
      "Others": 3.5,
      "SC": 33.5
    },
    "num_acs": 2
  },
  "Mansa": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 21.3
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 16.17
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.67
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 11.1
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.83
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.33
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.33
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.94
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 0.33
      }
    ],
    "categories": {
      "GEN": 49.56,
      "MIN": 1.33,
      "OBC": 3.33,
      "Others": 2.94,
      "SC": 42.83
    },
    "num_acs": 3
  },
  "Moga": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.75
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.25
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 14.25
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.5
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.25
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 2.75
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.5
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 1.25
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 45.5,
      "OBC": 12.25,
      "Others": 4.5,
      "SC": 37.75
    },
    "num_acs": 4
  },
  "Mukatsar": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 24.75
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 16.24
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 9.24
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.5
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.25
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 4.75
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.75
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 1.5
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 1.5
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.27
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.25
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 0.75
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 0.5
      },
      {
        "name": "Megh",
        "category": "SC",
        "percentage": 0.5
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.25
      }
    ],
    "categories": {
      "GEN": 51.25,
      "MIN": 2.0,
      "OBC": 10.0,
      "Others": 1.27,
      "SC": 35.48
    },
    "num_acs": 4
  },
  "Nawanshahr": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 16.67
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 13.67
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.43
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.33
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.67
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 8.67
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.67
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 4.33
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.34
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.56
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.33
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.33
      }
    ],
    "categories": {
      "GEN": 49.44,
      "MIN": 3.34,
      "OBC": 20.0,
      "Others": 2.56,
      "SC": 24.67
    },
    "num_acs": 3
  },
  "Pathankot": {
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 12.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.33
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.67
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.67
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 5.33
      },
      {
        "name": "Mahasha",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 4.33
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.33
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.83
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.67
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.17
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.83
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.67
      },
      {
        "name": "Others",
        "category": "Others",
        "percentage": 0.17
      }
    ],
    "categories": {
      "GEN": 43.67,
      "MIN": 2.17,
      "OBC": 24.0,
      "Others": 1.0,
      "SC": 29.17
    },
    "num_acs": 3
  },
  "Patiala": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 18.74
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 14.37
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 13.63
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 13.05
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.7
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.05
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.87
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.6
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.16
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 2.9
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.75
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.12
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 0.94
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.13
      }
    ],
    "categories": {
      "GEN": 48.82,
      "MIN": 2.75,
      "OBC": 10.1,
      "Others": 3.16,
      "SC": 35.18
    },
    "num_acs": 8
  },
  "Rup Nagar": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 17.33
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.33
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.73
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 8.33
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.33
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.6
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 3.67
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 3.67
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.67
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 2.67
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 1.67
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 51.33,
      "MIN": 8.33,
      "OBC": 13.0,
      "Others": 2.67,
      "SC": 24.67
    },
    "num_acs": 3
  },
  "S.A.S. Nagar": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 21.71
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 15.33
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.15
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.33
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.57
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.74
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.33
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.29
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.67
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.67
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.2
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.33
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 0.33
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.33
      }
    ],
    "categories": {
      "GEN": 49.28,
      "MIN": 5.33,
      "OBC": 16.28,
      "Others": 3.29,
      "SC": 25.82
    },
    "num_acs": 3
  },
  "Sangrur": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 17.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.52
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 10.6
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.2
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 9.18
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 8.26
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 4.8
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.2
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.04
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.6
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.8
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.8
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 0.6
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.4
      }
    ],
    "categories": {
      "GEN": 42.0,
      "MIN": 4.8,
      "OBC": 10.0,
      "Others": 4.04,
      "SC": 39.16
    },
    "num_acs": 5
  },
  "Tarn Taran": {
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 38.99
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.25
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 8.75
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.25
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.75
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.5
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.63
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.25
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.25
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 0.25
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.13
      }
    ],
    "categories": {
      "GEN": 49.49,
      "MIN": 5.5,
      "OBC": 9.0,
      "Others": 1.25,
      "SC": 34.75
    },
    "num_acs": 4
  }
};

const acCasteData = {
  "1. Sujanpur": {
    "ac_num": 1,
    "district": "Pathankot",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 11.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 0.5
      },
      {
        "name": "Others",
        "category": "Others",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 51.0,
      "OBC": 25.0,
      "SC": 22.0,
      "MIN": 1.5,
      "Others": 0.5
    }
  },
  "2. Bhoa (SC)": {
    "ac_num": 2,
    "district": "Pathankot",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.0
      },
      {
        "name": "Mahasha",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 13.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.5
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.5
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 29.0,
      "OBC": 24.0,
      "SC": 41.5,
      "MIN": 3.0,
      "Others": 2.5
    }
  },
  "3. Pathankot": {
    "ac_num": 3,
    "district": "Pathankot",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 12.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 51.0,
      "OBC": 23.0,
      "SC": 24.0,
      "MIN": 2.0,
      "Others": 0.0
    }
  },
  "4. Gurdaspur": {
    "ac_num": 4,
    "district": "Gurdaspur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 45.0,
      "OBC": 11.0,
      "SC": 38.0,
      "MIN": 6.0,
      "Others": 0.0
    }
  },
  "5. Dina Nagar (SC)": {
    "ac_num": 5,
    "district": "Gurdaspur",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 21.0
      },
      {
        "name": "Mahasha",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 5.5
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 30.0,
      "OBC": 16.0,
      "SC": 52.5,
      "MIN": 1.5,
      "Others": 0.0
    }
  },
  "6. Qadian": {
    "ac_num": 6,
    "district": "Gurdaspur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 39.0,
      "OBC": 16.0,
      "SC": 24.0,
      "MIN": 21.0,
      "Others": 0.0
    }
  },
  "7. Batala": {
    "ac_num": 7,
    "district": "Gurdaspur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 0.5
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 55.0,
      "OBC": 6.0,
      "SC": 23.0,
      "MIN": 16.0,
      "Others": 0.0
    }
  },
  "8. Sri Hargobindpur (SC)": {
    "ac_num": 8,
    "district": "Gurdaspur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 10.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      }
    ],
    "categories": {
      "MIN": 4.0,
      "GEN": 45.0,
      "OBC": 21.0,
      "SC": 28.0,
      "Others": 2.0
    }
  },
  "9. Fatehgarh Churian": {
    "ac_num": 9,
    "district": "Gurdaspur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 20.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.02
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.02
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.95
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 38.05,
      "OBC": 10.0,
      "SC": 27.0,
      "MIN": 21.0,
      "Others": 3.95
    }
  },
  "10. Dera Baba Nanak": {
    "ac_num": 10,
    "district": "Gurdaspur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 15.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.01
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.99
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 1.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 41.0,
      "OBC": 11.0,
      "SC": 27.0,
      "MIN": 17.0,
      "Others": 4.01
    }
  },
  "11. Ajnala": {
    "ac_num": 11,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 35.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 8.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 45.0,
      "OBC": 11.0,
      "SC": 30.0,
      "MIN": 10.0,
      "Others": 4.0
    }
  },
  "12. Raja Sansi": {
    "ac_num": 12,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 7.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 37.0,
      "OBC": 13.0,
      "SC": 36.0,
      "MIN": 12.0,
      "Others": 2.0
    }
  },
  "13. Majitha": {
    "ac_num": 13,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 43.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 57.0,
      "OBC": 11.0,
      "SC": 21.0,
      "MIN": 7.0,
      "Others": 4.0
    }
  },
  "14. Jandiala (SC)": {
    "ac_num": 14,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 16.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      }
    ],
    "categories": {
      "MIN": 0.0,
      "GEN": 38.0,
      "OBC": 15.0,
      "SC": 43.0,
      "Others": 4.0
    }
  },
  "15. Amritsar North": {
    "ac_num": 15,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 27.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 44.0,
      "OBC": 13.0,
      "SC": 37.0,
      "MIN": 5.0,
      "Others": 1.0
    }
  },
  "16. Amritsar West (SC)": {
    "ac_num": 16,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 30.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 34.0,
      "OBC": 8.0,
      "SC": 51.0,
      "MIN": 5.0,
      "Others": 2.0
    }
  },
  "17. Amritsar Central": {
    "ac_num": 17,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 22.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 46.0,
      "OBC": 9.0,
      "SC": 40.0,
      "MIN": 2.0,
      "Others": 3.0
    }
  },
  "18. Amritsar East": {
    "ac_num": 18,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      }
    ],
    "categories": {
      "GEN": 55.0,
      "OBC": 10.0,
      "SC": 32.0,
      "MIN": 0.0,
      "Others": 3.0
    }
  },
  "19. Amritsar South": {
    "ac_num": 19,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 28.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 46.0,
      "OBC": 20.0,
      "SC": 30.0,
      "MIN": 2.0,
      "Others": 2.0
    }
  },
  "20. Attari (SC)": {
    "ac_num": 20,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 30.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 35.0,
      "OBC": 8.0,
      "SC": 47.0,
      "MIN": 8.0,
      "Others": 2.0
    }
  },
  "21. Tarn Taran": {
    "ac_num": 21,
    "district": "Tarn Taran",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 37.98
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.02
      }
    ],
    "categories": {
      "GEN": 45.98,
      "OBC": 15.0,
      "SC": 36.0,
      "MIN": 3.0,
      "Others": 0.02
    }
  },
  "22. Khem Karan": {
    "ac_num": 22,
    "district": "Tarn Taran",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 37.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 50.0,
      "OBC": 6.0,
      "SC": 34.0,
      "MIN": 7.0,
      "Others": 3.0
    }
  },
  "23. Patti": {
    "ac_num": 23,
    "district": "Tarn Taran",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 38.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.01
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 7.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 48.0,
      "OBC": 3.0,
      "SC": 39.01,
      "MIN": 9.0,
      "Others": 1.0
    }
  },
  "24. Khadoor Sahib": {
    "ac_num": 24,
    "district": "Tarn Taran",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 43.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 1.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 0.5
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 0.5
      }
    ],
    "categories": {
      "GEN": 54.0,
      "OBC": 12.0,
      "SC": 30.0,
      "MIN": 3.0,
      "Others": 1.0
    }
  },
  "25. Baba Bakala (SC)": {
    "ac_num": 25,
    "district": "Amritsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 28.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 19.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 35.0,
      "OBC": 16.0,
      "SC": 43.0,
      "MIN": 4.0,
      "Others": 2.0
    }
  },
  "26. Bholath": {
    "ac_num": 26,
    "district": "Kapurthala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "MIN": 3.0,
      "GEN": 43.0,
      "OBC": 10.0,
      "SC": 40.0,
      "Others": 4.0
    }
  },
  "27. Kapurthala": {
    "ac_num": 27,
    "district": "Kapurthala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 32.02
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.03
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.95
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 42.02,
      "OBC": 18.0,
      "SC": 35.03,
      "MIN": 3.0,
      "Others": 1.95
    }
  },
  "28. Sultanpur Lodhi": {
    "ac_num": 28,
    "district": "Kapurthala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 41.0,
      "OBC": 7.0,
      "SC": 42.0,
      "MIN": 6.0,
      "Others": 4.0
    }
  },
  "29. Phagwara (SC)": {
    "ac_num": 29,
    "district": "Kapurthala",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 23.88
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 15.02
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.99
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.11
      }
    ],
    "categories": {
      "MIN": 4.0,
      "GEN": 43.02,
      "OBC": 11.99,
      "SC": 39.88,
      "Others": 1.11
    }
  },
  "30. Phillaur (SC)": {
    "ac_num": 30,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 27.01
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 23.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.99
      }
    ],
    "categories": {
      "GEN": 42.0,
      "OBC": 10.0,
      "SC": 43.01,
      "MIN": 4.0,
      "Others": 0.99
    }
  },
  "31. Nakodar": {
    "ac_num": 31,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 26.01
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 25.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 19.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.99
      }
    ],
    "categories": {
      "GEN": 30.0,
      "OBC": 28.01,
      "SC": 35.0,
      "MIN": 6.0,
      "Others": 0.99
    }
  },
  "32. Shahkot": {
    "ac_num": 32,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 25.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 13.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.99
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.01
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 35.0,
      "OBC": 38.01,
      "SC": 22.0,
      "MIN": 3.99,
      "Others": 1.01
    }
  },
  "33. Kartarpur (SC)": {
    "ac_num": 33,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 27.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 22.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 6.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 34.0,
      "OBC": 6.0,
      "SC": 48.0,
      "MIN": 11.0,
      "Others": 1.0
    }
  },
  "34. Jalandhar West (SC)": {
    "ac_num": 34,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 27.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 13.47
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.52
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 28.0,
      "OBC": 4.0,
      "SC": 58.48,
      "MIN": 7.0,
      "Others": 2.52
    }
  },
  "35. Jalandhar Central": {
    "ac_num": 35,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 21.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 6.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 43.0,
      "OBC": 9.0,
      "SC": 31.0,
      "MIN": 15.0,
      "Others": 2.0
    }
  },
  "36. Jalandhar North": {
    "ac_num": 36,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 33.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 22.02
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.98
      }
    ],
    "categories": {
      "GEN": 43.02,
      "OBC": 8.0,
      "SC": 44.0,
      "MIN": 4.0,
      "Others": 0.98
    }
  },
  "37. Jalandhar Cantt.": {
    "ac_num": 37,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 23.81
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 20.99
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.2
      }
    ],
    "categories": {
      "GEN": 45.99,
      "OBC": 9.0,
      "SC": 37.81,
      "MIN": 7.0,
      "Others": 0.2
    }
  },
  "38. Adampur (SC)": {
    "ac_num": 38,
    "district": "Jalandhar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 25.97
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 22.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 9.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.2
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.83
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 1.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 36.0,
      "OBC": 12.2,
      "SC": 40.97,
      "MIN": 8.0,
      "Others": 2.83
    }
  },
  "39. Mukerian": {
    "ac_num": 39,
    "district": "Hoshiarpur",
    "castes": [
      {
        "name": "Ghrit",
        "category": "OBC",
        "percentage": 19.0
      },
      {
        "name": "Bahti",
        "category": "OBC",
        "percentage": 15.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Chang",
        "category": "OBC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "MIN": 4.0,
      "GEN": 36.0,
      "OBC": 46.0,
      "SC": 14.0,
      "Others": 0.0
    }
  },
  "40. Dasuya": {
    "ac_num": 40,
    "district": "Hoshiarpur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 21.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.02
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.9
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.07
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "MIN": 2.0,
      "GEN": 51.0,
      "OBC": 11.9,
      "SC": 33.02,
      "Others": 2.07
    }
  },
  "41. Urmar": {
    "ac_num": 41,
    "district": "Hoshiarpur",
    "castes": [
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 23.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 19.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.8
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.2
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "MIN": 2.0,
      "GEN": 43.0,
      "OBC": 33.0,
      "SC": 21.0,
      "Others": 1.0
    }
  },
  "42. Sham Chaurasi (SC)": {
    "ac_num": 42,
    "district": "Hoshiarpur",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 28.01
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 15.5
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.9
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.2
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 1.4
      }
    ],
    "categories": {
      "MIN": 4.0,
      "GEN": 42.5,
      "OBC": 10.9,
      "SC": 40.41,
      "Others": 2.2
    }
  },
  "43. Hoshiarpur": {
    "ac_num": 43,
    "district": "Hoshiarpur",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 17.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "MIN": 3.0,
      "GEN": 50.0,
      "OBC": 10.0,
      "SC": 35.0,
      "Others": 2.0
    }
  },
  "44. Chabbewal (SC)": {
    "ac_num": 44,
    "district": "Hoshiarpur",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 28.03
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.57
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.4
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "MIN": 2.0,
      "GEN": 34.0,
      "OBC": 13.0,
      "SC": 46.43,
      "Others": 4.57
    }
  },
  "45. Garhshankar": {
    "ac_num": 45,
    "district": "Hoshiarpur",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 7.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.6
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.4
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 48.0,
      "OBC": 18.6,
      "SC": 25.0,
      "MIN": 7.0,
      "Others": 1.4
    }
  },
  "46. Banga (SC)": {
    "ac_num": 46,
    "district": "Nawanshahr",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 14.01
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 12.3
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 11.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 6.01
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.68
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 42.31,
      "OBC": 17.0,
      "SC": 32.0,
      "MIN": 6.01,
      "Others": 2.68
    }
  },
  "47. Nawan Shahr": {
    "ac_num": 47,
    "district": "Nawanshahr",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 19.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 57.0,
      "OBC": 8.0,
      "SC": 27.0,
      "MIN": 4.0,
      "Others": 4.0
    }
  },
  "48. Balachaur": {
    "ac_num": 48,
    "district": "Nawanshahr",
    "castes": [
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 23.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 12.99
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 11.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.01
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 48.99,
      "OBC": 35.0,
      "SC": 15.0,
      "MIN": 0.0,
      "Others": 1.01
    }
  },
  "49. Anandpur Sahib": {
    "ac_num": 49,
    "district": "Rup Nagar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 52.0,
      "OBC": 17.0,
      "SC": 20.0,
      "MIN": 9.0,
      "Others": 2.0
    }
  },
  "50. Rupnagar": {
    "ac_num": 50,
    "district": "Rup Nagar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.01
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.99
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.99
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.01
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 54.0,
      "OBC": 11.99,
      "SC": 24.0,
      "MIN": 9.0,
      "Others": 1.01
    }
  },
  "51. Chamkaur Sahib (SC)": {
    "ac_num": 51,
    "district": "Rup Nagar",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 17.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.2
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 7.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.8
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 48.0,
      "OBC": 10.0,
      "SC": 30.0,
      "MIN": 7.0,
      "Others": 5.0
    }
  },
  "52. Kharar": {
    "ac_num": 52,
    "district": "S.A.S. Nagar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 24.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 1.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 48.0,
      "OBC": 16.0,
      "SC": 25.0,
      "MIN": 7.0,
      "Others": 4.0
    }
  },
  "53. S.A.S. Nagar": {
    "ac_num": 53,
    "district": "S.A.S. Nagar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 28.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 16.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 7.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 49.0,
      "OBC": 19.0,
      "SC": 24.0,
      "MIN": 7.0,
      "Others": 1.0
    }
  },
  "54. Bassi Pathana (SC)": {
    "ac_num": 54,
    "district": "Fatehgarh Sahib",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 18.06
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.06
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.04
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.82
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.71
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.88
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.41
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.01
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 49.27,
      "OBC": 3.01,
      "SC": 42.84,
      "MIN": 0.0,
      "Others": 4.88
    }
  },
  "55. Fatehgarh Sahib": {
    "ac_num": 55,
    "district": "Fatehgarh Sahib",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 17.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      }
    ],
    "categories": {
      "GEN": 60.0,
      "OBC": 4.0,
      "SC": 31.0,
      "MIN": 0.0,
      "Others": 5.0
    }
  },
  "56. Amloh": {
    "ac_num": 56,
    "district": "Fatehgarh Sahib",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 32.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 18.71
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.68
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.4
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.12
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.06
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 1.04
      }
    ],
    "categories": {
      "GEN": 59.44,
      "OBC": 3.12,
      "SC": 36.38,
      "MIN": 0.0,
      "Others": 1.06
    }
  },
  "57. Khanna": {
    "ac_num": 57,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 33.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.01
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.99
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 62.0,
      "OBC": 3.0,
      "SC": 33.01,
      "MIN": 0.0,
      "Others": 1.99
    }
  },
  "58. Samrala": {
    "ac_num": 58,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 32.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 54.0,
      "OBC": 7.0,
      "SC": 36.0,
      "MIN": 0.0,
      "Others": 3.0
    }
  },
  "59. Sahnewal": {
    "ac_num": 59,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 35.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.02
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.98
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 69.0,
      "OBC": 2.0,
      "SC": 25.02,
      "MIN": 1.0,
      "Others": 2.98
    }
  },
  "60. Ludhiana East": {
    "ac_num": 60,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 24.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 21.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.05
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 0.95
      }
    ],
    "categories": {
      "MIN": 4.95,
      "GEN": 58.0,
      "OBC": 21.0,
      "SC": 13.0,
      "Others": 3.05
    }
  },
  "61. Ludhiana South": {
    "ac_num": 61,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 27.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 20.97
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.46
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.36
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.21
      }
    ],
    "categories": {
      "MIN": 2.57,
      "GEN": 84.97,
      "OBC": 0.0,
      "SC": 11.0,
      "Others": 1.46
    }
  },
  "62. Atam Nagar": {
    "ac_num": 62,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "MIN": 1.0,
      "GEN": 73.0,
      "OBC": 11.0,
      "SC": 14.0,
      "Others": 1.0
    }
  },
  "63. Ludhiana Central": {
    "ac_num": 63,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 27.01
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 26.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 22.01
      },
      {
        "name": "Bhappe",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.99
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "MIN": 4.0,
      "GEN": 91.01,
      "OBC": 0.0,
      "SC": 3.0,
      "Others": 1.99
    }
  },
  "64. Ludhiana West": {
    "ac_num": 64,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "MIN": 5.0,
      "GEN": 78.0,
      "OBC": 0.0,
      "SC": 15.0,
      "Others": 2.0
    }
  },
  "65. Ludhiana North": {
    "ac_num": 65,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 36.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 21.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "MIN": 2.0,
      "GEN": 69.0,
      "OBC": 1.0,
      "SC": 27.0,
      "Others": 1.0
    }
  },
  "66. Gill (SC)": {
    "ac_num": 66,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 28.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 2.59
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.41
      }
    ],
    "categories": {
      "MIN": 2.0,
      "GEN": 42.0,
      "OBC": 9.0,
      "SC": 46.59,
      "Others": 0.41
    }
  },
  "67. Payal (SC)": {
    "ac_num": 67,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 29.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 20.17
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 13.45
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.21
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 8.97
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 7.84
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.6
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.76
      }
    ],
    "categories": {
      "GEN": 45.81,
      "OBC": 13.45,
      "SC": 36.97,
      "MIN": 0.0,
      "Others": 3.76
    }
  },
  "68. Dakha": {
    "ac_num": 68,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 24.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.99
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.01
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "MIN": 2.0,
      "GEN": 47.0,
      "OBC": 14.0,
      "SC": 34.99,
      "Others": 2.01
    }
  },
  "69. Raikot (SC)": {
    "ac_num": 69,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 22.01
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.99
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 48.0,
      "OBC": 8.0,
      "SC": 41.01,
      "MIN": 0.0,
      "Others": 2.99
    }
  },
  "70. Jagraon (SC)": {
    "ac_num": 70,
    "district": "Ludhiana",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 34.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 14.01
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.99
      }
    ],
    "categories": {
      "MIN": 0.0,
      "GEN": 58.0,
      "OBC": 7.0,
      "SC": 33.01,
      "Others": 1.99
    }
  },
  "71. Nihal Singhwala (SC)": {
    "ac_num": 71,
    "district": "Moga",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 35.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 50.0,
      "OBC": 12.0,
      "SC": 33.0,
      "Others": 5.0
    }
  },
  "72. Bhagha Purana": {
    "ac_num": 72,
    "district": "Moga",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 29.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.01
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 17.02
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.98
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 41.0,
      "OBC": 15.0,
      "SC": 41.02,
      "Others": 2.98
    }
  },
  "73. Moga": {
    "ac_num": 73,
    "district": "Moga",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 33.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 23.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 2.99
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 46.0,
      "OBC": 9.0,
      "SC": 39.99,
      "Others": 5.0
    }
  },
  "74. Dharamkot": {
    "ac_num": 74,
    "district": "Moga",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 26.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 9.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 45.0,
      "OBC": 13.0,
      "SC": 37.0,
      "Others": 5.0
    }
  },
  "75. Zira": {
    "ac_num": 75,
    "district": "Firozpur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 38.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 13.99
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 6.99
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.02
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 56.99,
      "OBC": 5.0,
      "SC": 29.99,
      "MIN": 3.0,
      "Others": 5.02
    }
  },
  "76. Firozpur City": {
    "ac_num": 76,
    "district": "Firozpur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.2
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.8
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 56.2,
      "OBC": 3.0,
      "SC": 31.0,
      "MIN": 5.0,
      "Others": 4.8
    }
  },
  "77. Firozpur Rural (SC)": {
    "ac_num": 77,
    "district": "Firozpur",
    "castes": [
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 27.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 20.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Tarkhan",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 43.0,
      "OBC": 5.0,
      "SC": 50.0,
      "MIN": 2.0,
      "Others": 0.0
    }
  },
  "78. Guru Har Sahai": {
    "ac_num": 78,
    "district": "Firozpur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 27.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.71
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.71
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 6.06
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.06
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.46
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 49.71,
      "OBC": 8.0,
      "SC": 34.77,
      "MIN": 6.06,
      "Others": 1.46
    }
  },
  "79. Jalalabad": {
    "ac_num": 79,
    "district": "Fazilka",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 17.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 12.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      }
    ],
    "categories": {
      "GEN": 35.0,
      "OBC": 25.0,
      "SC": 36.0,
      "MIN": 0.0,
      "Others": 4.0
    }
  },
  "80. Fazilka": {
    "ac_num": 80,
    "district": "Fazilka",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Hindu Jat",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 54.0,
      "OBC": 5.0,
      "SC": 35.0,
      "MIN": 5.0,
      "Others": 1.0
    }
  },
  "81. Abohar": {
    "ac_num": 81,
    "district": "Fazilka",
    "castes": [
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Kumhar",
        "category": "OBC",
        "percentage": 11.0
      },
      {
        "name": "Megh",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Bishnoi",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 50.0,
      "OBC": 24.0,
      "SC": 22.0,
      "MIN": 0.0,
      "Others": 4.0
    }
  },
  "82. Balluana (SC)": {
    "ac_num": 82,
    "district": "Fazilka",
    "castes": [
      {
        "name": "Kumhar",
        "category": "OBC",
        "percentage": 17.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Bishnoi",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 4.0
      }
    ],
    "categories": {
      "GEN": 28.0,
      "OBC": 28.0,
      "SC": 39.0,
      "MIN": 0.0,
      "Others": 5.0
    }
  },
  "83. Lambi": {
    "ac_num": 83,
    "district": "Mukatsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 29.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 15.95
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.05
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "MIN": 3.0,
      "GEN": 58.0,
      "OBC": 5.0,
      "SC": 31.95,
      "Others": 2.05
    }
  },
  "84. Gidderbaha": {
    "ac_num": 84,
    "district": "Mukatsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 21.97
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.03
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 49.0,
      "OBC": 12.0,
      "SC": 37.97,
      "Others": 1.03
    }
  },
  "85. Malout (SC)": {
    "ac_num": 85,
    "district": "Mukatsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 9.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Megh",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 51.0,
      "OBC": 15.0,
      "SC": 32.0,
      "MIN": 0.0,
      "Others": 2.0
    }
  },
  "86. Muktsar": {
    "ac_num": 86,
    "district": "Mukatsar",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 47.0,
      "OBC": 8.0,
      "SC": 40.0,
      "MIN": 5.0,
      "Others": 0.0
    }
  },
  "87. Faridkot": {
    "ac_num": 87,
    "district": "Faridkot",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 32.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 50.0,
      "OBC": 5.0,
      "SC": 41.0,
      "Others": 4.0
    }
  },
  "88. Kotkapura": {
    "ac_num": 88,
    "district": "Faridkot",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 31.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.0
      }
    ],
    "categories": {
      "GEN": 48.0,
      "OBC": 22.0,
      "SC": 27.0,
      "Others": 3.0
    }
  },
  "89. Jaitu (SC)": {
    "ac_num": 89,
    "district": "Faridkot",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 33.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 1.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 55.0,
      "OBC": 14.0,
      "SC": 26.0,
      "Others": 5.0
    }
  },
  "90. Rampura Phul": {
    "ac_num": 90,
    "district": "Bathinda",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 18.03
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 14.01
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Rai Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.96
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Nai",
        "category": "OBC",
        "percentage": 2.99
      }
    ],
    "categories": {
      "GEN": 43.0,
      "OBC": 16.99,
      "SC": 36.05,
      "Others": 3.96
    }
  },
  "91. Bhucho Mandi (SC)": {
    "ac_num": 91,
    "district": "Bathinda",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 35.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 16.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 59.0,
      "OBC": 6.0,
      "SC": 32.0,
      "MIN": 3.0,
      "Others": 0.0
    }
  },
  "92. Bathinda Urban": {
    "ac_num": 92,
    "district": "Bathinda",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 3.0
      }
    ],
    "categories": {
      "GEN": 57.0,
      "OBC": 7.0,
      "SC": 27.0,
      "MIN": 4.0,
      "Others": 5.0
    }
  },
  "93. Bathinda Rural (SC)": {
    "ac_num": 93,
    "district": "Bathinda",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 22.5
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 12.5
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 4.0
      }
    ],
    "categories": {
      "GEN": 49.0,
      "OBC": 5.0,
      "SC": 38.0,
      "MIN": 4.0,
      "Others": 4.0
    }
  },
  "94. Talwandi Sabo": {
    "ac_num": 94,
    "district": "Bathinda",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 22.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 18.01
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 16.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.5
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.49
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 49.5,
      "OBC": 7.0,
      "SC": 36.01,
      "MIN": 3.0,
      "Others": 4.49
    }
  },
  "95. Maur": {
    "ac_num": 95,
    "district": "Bathinda",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 35.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.01
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Sikh Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 0.99
      }
    ],
    "categories": {
      "GEN": 63.0,
      "OBC": 2.0,
      "SC": 33.01,
      "MIN": 1.0,
      "Others": 0.99
    }
  },
  "96. Mansa": {
    "ac_num": 96,
    "district": "Mansa",
    "castes": [
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 18.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 49.0,
      "OBC": 6.0,
      "SC": 42.0,
      "MIN": 2.0,
      "Others": 1.0
    }
  },
  "97. Sardulgarh": {
    "ac_num": 97,
    "district": "Mansa",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 31.89
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 16.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.5
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.8
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.81
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 50.19,
      "OBC": 4.0,
      "SC": 43.0,
      "MIN": 0.0,
      "Others": 2.81
    }
  },
  "98. Budhlada (SC)": {
    "ac_num": 98,
    "district": "Mansa",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 16.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 15.5
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 13.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 8.5
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 49.5,
      "OBC": 0.0,
      "SC": 43.5,
      "MIN": 2.0,
      "Others": 5.0
    }
  },
  "99. Lehra": {
    "ac_num": 99,
    "district": "Sangrur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 49.0,
      "OBC": 3.0,
      "SC": 38.0,
      "MIN": 5.0,
      "Others": 5.0
    }
  },
  "100. Dirba (SC)": {
    "ac_num": 100,
    "district": "Sangrur",
    "castes": [
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 18.9
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.58
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 9.62
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.9
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 37.0,
      "OBC": 2.0,
      "SC": 54.1,
      "MIN": 4.0,
      "Others": 2.9
    }
  },
  "101. Sunam": {
    "ac_num": 101,
    "district": "Sangrur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 17.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 11.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 37.0,
      "OBC": 21.0,
      "SC": 33.0,
      "MIN": 4.0,
      "Others": 5.0
    }
  },
  "102. Bhadaur": {
    "ac_num": 102,
    "district": "Barnala",
    "castes": [
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 16.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 14.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 33.0,
      "OBC": 9.0,
      "SC": 50.0,
      "MIN": 4.0,
      "Others": 4.0
    }
  },
  "103. Barnala": {
    "ac_num": 103,
    "district": "Barnala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 23.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 55.0,
      "OBC": 19.0,
      "SC": 22.0,
      "MIN": 2.0,
      "Others": 2.0
    }
  },
  "104. Mehal Kalan": {
    "ac_num": 104,
    "district": "Barnala",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 16.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 8.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 2.5
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.5
      }
    ],
    "categories": {
      "GEN": 33.0,
      "OBC": 20.5,
      "SC": 42.0,
      "MIN": 3.0,
      "Others": 1.5
    }
  },
  "105. Malerkotla": {
    "ac_num": 105,
    "district": "Malerkotla",
    "castes": [
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 28.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 8.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Jain",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 1.0
      },
      {
        "name": "Gujjar",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 20.0,
      "OBC": 16.0,
      "SC": 34.0,
      "MIN": 28.0,
      "Others": 2.0
    }
  },
  "106. Amargarh (SC)": {
    "ac_num": 106,
    "district": "Malerkotla",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 30.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      }
    ],
    "categories": {
      "GEN": 56.0,
      "OBC": 4.0,
      "SC": 33.0,
      "MIN": 2.0,
      "Others": 5.0
    }
  },
  "107. Dhuri": {
    "ac_num": 107,
    "district": "Sangrur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 16.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 14.01
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 11.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 7.69
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 7.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 5.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.3
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 40.0,
      "OBC": 13.0,
      "SC": 39.7,
      "MIN": 5.0,
      "Others": 2.3
    }
  },
  "108. Sangrur": {
    "ac_num": 108,
    "district": "Sangrur",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 19.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 12.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 10.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 5.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Rajput",
        "category": "GEN",
        "percentage": 2.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 47.0,
      "OBC": 11.0,
      "SC": 31.0,
      "MIN": 6.0,
      "Others": 5.0
    }
  },
  "109. Nabha (SC)": {
    "ac_num": 109,
    "district": "Patiala",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 24.22
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 19.37
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.78
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.72
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.91
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 42.16,
      "OBC": 6.91,
      "SC": 43.22,
      "MIN": 3.0,
      "Others": 4.72
    }
  },
  "110. Patiala Rural": {
    "ac_num": 110,
    "district": "Patiala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 24.77
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 17.83
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 10.9
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 3.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 2.97
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.57
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 1.98
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 1.98
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 47.67,
      "OBC": 6.93,
      "SC": 39.83,
      "MIN": 3.0,
      "Others": 2.57
    }
  },
  "111. Rajpura": {
    "ac_num": 111,
    "district": "Patiala",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 15.99
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 14.5
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 13.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 11.51
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 45.99,
      "OBC": 17.51,
      "SC": 30.5,
      "MIN": 2.0,
      "Others": 4.0
    }
  },
  "112. Dera Bassi": {
    "ac_num": 112,
    "district": "S.A.S. Nagar",
    "castes": [
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 25.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 13.12
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 10.45
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 8.71
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 5.22
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.88
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 2.61
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 50.83,
      "OBC": 13.83,
      "SC": 28.45,
      "MIN": 2.0,
      "Others": 4.88
    }
  },
  "113. Ghanaur": {
    "ac_num": 113,
    "district": "Patiala",
    "castes": [
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 21.86
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 18.01
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 14.9
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.95
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.97
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.31
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 46.87,
      "OBC": 8.97,
      "SC": 37.86,
      "MIN": 4.0,
      "Others": 2.31
    }
  },
  "114. Sanour": {
    "ac_num": 114,
    "district": "Patiala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.86
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 6.0
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 6.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 4.14
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 3.0
      },
      {
        "name": "Labana",
        "category": "OBC",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 45.86,
      "OBC": 15.0,
      "SC": 33.0,
      "MIN": 2.0,
      "Others": 4.14
    }
  },
  "115. Patiala": {
    "ac_num": 115,
    "district": "Patiala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 15.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 11.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 9.0
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 5.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 4.0
      },
      {
        "name": "Sikh Rajput",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Bazigar",
        "category": "SC",
        "percentage": 3.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 2.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 54.0,
      "OBC": 6.0,
      "SC": 36.0,
      "MIN": 2.0,
      "Others": 2.0
    }
  },
  "116. Samana": {
    "ac_num": 116,
    "district": "Patiala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 20.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 17.99
      },
      {
        "name": "Ravidassia",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 12.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 8.2
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 7.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 5.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 4.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 4.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 1.81
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 48.99,
      "OBC": 9.0,
      "SC": 38.2,
      "MIN": 2.0,
      "Others": 1.81
    }
  },
  "117. Shutrana (SC)": {
    "ac_num": 117,
    "district": "Patiala",
    "castes": [
      {
        "name": "Jatt Sikh",
        "category": "GEN",
        "percentage": 22.0
      },
      {
        "name": "Brahmin",
        "category": "GEN",
        "percentage": 18.0
      },
      {
        "name": "Balmiki",
        "category": "SC",
        "percentage": 15.0
      },
      {
        "name": "Baniya",
        "category": "GEN",
        "percentage": 10.0
      },
      {
        "name": "Khatri",
        "category": "GEN",
        "percentage": 9.0
      },
      {
        "name": "Ramgarhia",
        "category": "OBC",
        "percentage": 7.0
      },
      {
        "name": "Mazhabi Sikh",
        "category": "SC",
        "percentage": 6.0
      },
      {
        "name": "Unknown",
        "category": "Others",
        "percentage": 3.7
      },
      {
        "name": "Muslim",
        "category": "MIN",
        "percentage": 3.0
      },
      {
        "name": "Kamboj",
        "category": "OBC",
        "percentage": 2.0
      },
      {
        "name": "Bhagat",
        "category": "SC",
        "percentage": 1.8
      },
      {
        "name": "Saini",
        "category": "OBC",
        "percentage": 1.5
      },
      {
        "name": "Christian",
        "category": "MIN",
        "percentage": 1.0
      }
    ],
    "categories": {
      "GEN": 59.0,
      "OBC": 10.5,
      "SC": 22.8,
      "MIN": 4.0,
      "Others": 3.7
    }
  }
};

